import express, {Router} from 'express';

const router = express.Router();

router.post('/add', () => {
    console.log("router.post on the /post ");
})

export default router;