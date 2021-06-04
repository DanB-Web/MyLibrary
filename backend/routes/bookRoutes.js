import express from 'express';
const router = express.Router();

import { sessionCheck } from '../middleware/auth.js';

import { getBooks, addToReadingList, removeFromReadingList } from '../controllers/bookControllers.js';

//ADD SESSION CHECKS AFTER TESTING CONTROLLERS
router.get('/getbooks', sessionCheck, getBooks);

router.post('/readinglist', sessionCheck, addToReadingList);
router.put('/readinglist', sessionCheck, removeFromReadingList);

export default router;