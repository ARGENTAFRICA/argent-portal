import express from 'express';
import { supabase } from '../index';

const router = express.Router();

// Get current user (verify token)
router.get('/user', async (req, res) => {
  try {
    const token = req.headers.authorization?.replace('Bearer ', '');

    if (!token) {
      return res.status(401).json({ error: 'No token provided' });
    }

    const { data: { user }, error } = await supabase.auth.getUser(token);

    if (error || !user) {
      return res.status(401).json({ error: 'Invalid token' });
    }

    res.json({ user });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
