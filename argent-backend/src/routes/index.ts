import express from 'express';
import authRouter from './auth';

const router = express.Router();

// API version info
router.get('/', (req, res) => {
  res.json({
    message: 'Argent Africa API',
    version: '1.0.0',
    endpoints: {
      auth: '/api/auth'
    }
  });
});

// Route handlers
router.use('/auth', authRouter);

export default router;
