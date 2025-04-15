import express from 'express';
import { handleChat } from '../controllers/tafferController.js';
const router = express.Router();
router.post('/taffer', handleChat);
export default router;
