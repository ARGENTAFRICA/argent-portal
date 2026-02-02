-- Argent Africa Database Schema for Supabase
-- Run this in your Supabase SQL Editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Users table
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT UNIQUE,
  phone_number TEXT NOT NULL,
  name TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Subscription Services table
CREATE TABLE IF NOT EXISTS subscription_services (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  description TEXT,
  price DECIMAL(10, 2) NOT NULL,
  currency TEXT DEFAULT 'GHS',
  billing_cycle TEXT DEFAULT 'monthly',
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Payment Methods table
CREATE TABLE IF NOT EXISTS payment_methods (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  code TEXT NOT NULL UNIQUE,
  country TEXT DEFAULT 'GH',
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- User Subscriptions table
CREATE TABLE IF NOT EXISTS user_subscriptions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  service_id UUID NOT NULL REFERENCES subscription_services(id) ON DELETE CASCADE,
  payment_method_id UUID NOT NULL REFERENCES payment_methods(id) ON DELETE CASCADE,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'active', 'cancelled', 'expired')),
  next_billing_date TIMESTAMP WITH TIME ZONE,
  cancelled_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Payments table
CREATE TABLE IF NOT EXISTS payments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  subscription_id UUID REFERENCES user_subscriptions(id) ON DELETE SET NULL,
  amount DECIMAL(10, 2) NOT NULL,
  payment_method_id UUID NOT NULL REFERENCES payment_methods(id) ON DELETE CASCADE,
  phone_number TEXT NOT NULL,
  payment_reference TEXT NOT NULL UNIQUE,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'completed', 'failed', 'cancelled')),
  completed_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_user_subscriptions_user_id ON user_subscriptions(user_id);
CREATE INDEX IF NOT EXISTS idx_user_subscriptions_status ON user_subscriptions(status);
CREATE INDEX IF NOT EXISTS idx_payments_user_id ON payments(user_id);
CREATE INDEX IF NOT EXISTS idx_payments_status ON payments(status);
CREATE INDEX IF NOT EXISTS idx_payments_reference ON payments(payment_reference);
CREATE INDEX IF NOT EXISTS idx_users_phone ON users(phone_number);

-- Insert sample subscription services
INSERT INTO subscription_services (name, description, price, currency, billing_cycle) VALUES
  ('Netflix', 'Netflix Premium Subscription', 120.00, 'GHS', 'monthly'),
  ('YouTube Premium', 'YouTube Premium Subscription', 25.00, 'GHS', 'monthly'),
  ('ChatGPT Plus', 'ChatGPT Plus Subscription', 30.00, 'GHS', 'monthly'),
  ('Spotify', 'Spotify Premium Subscription', 20.00, 'GHS', 'monthly'),
  ('iCloud', 'iCloud Storage (50GB)', 5.00, 'GHS', 'monthly'),
  ('Coursera', 'Coursera Plus Subscription', 50.00, 'GHS', 'monthly')
ON CONFLICT DO NOTHING;

-- Insert sample payment methods
INSERT INTO payment_methods (name, code, country, is_active) VALUES
  ('MTN MoMo', 'mtn_momo', 'GH', true),
  ('Telecel Cash', 'telecel_cash', 'GH', true),
  ('AirtelTigo Money', 'airteltigo_money', 'GH', true)
ON CONFLICT (code) DO NOTHING;

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers to auto-update updated_at
CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_user_subscriptions_updated_at BEFORE UPDATE ON user_subscriptions
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Row Level Security (RLS) policies
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscription_services ENABLE ROW LEVEL SECURITY;
ALTER TABLE payment_methods ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE payments ENABLE ROW LEVEL SECURITY;

-- Policy: Users can read their own data
CREATE POLICY "Users can read own data" ON users
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own data" ON users
  FOR UPDATE USING (auth.uid() = id);

-- Policy: Anyone can read subscription services and payment methods
CREATE POLICY "Anyone can read subscription services" ON subscription_services
  FOR SELECT USING (is_active = true);

CREATE POLICY "Anyone can read payment methods" ON payment_methods
  FOR SELECT USING (is_active = true);

-- Policy: Users can read their own subscriptions
CREATE POLICY "Users can read own subscriptions" ON user_subscriptions
  FOR SELECT USING (auth.uid() = user_id);

-- Policy: Users can read their own payments
CREATE POLICY "Users can read own payments" ON payments
  FOR SELECT USING (auth.uid() = user_id);

-- Note: For service role operations (admin), use the service role key
-- which bypasses RLS policies
