import express from 'express';
const router = express.Router();

import { sessionCheck } from '../middleware/auth.js';

import { login, protectedRoute } from '../controllers/userControllers.js';

router.get('/test', (req, res) => res.send('userRoutes get'));
router.post('/login', login);
router.get('/protected', sessionCheck, protectedRoute)

export default router;