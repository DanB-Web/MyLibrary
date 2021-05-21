import express from 'express';
const router = express.Router();

import { sessionCheck } from '../middleware/auth.js';

import { getBooks } from '../controllers/bookControllers.js';

//ADD SESSION CHECKS AFTER TESTING CONTROLLERS
router.get('/getbooks', getBooks);

export default router;