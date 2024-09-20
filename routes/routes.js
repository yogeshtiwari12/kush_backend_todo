import express from 'express';
const app = express();
const router = express.Router();
import { fetchalltodo, savetodoitems,deletetodo } from '../methods/method.js'

router.post('/savetodoitems', savetodoitems);
router.post('/fetchalltodo', fetchalltodo);
router.post('/fetchalltodo', fetchalltodo);
router.delete('/delete/:id', deletetodo);


export default router;