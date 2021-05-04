import express from 'express';
const router = express.Router();

router.get('/test', (req, res) => res.send('userRoutes get'));

export default router;