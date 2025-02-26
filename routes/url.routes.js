import express from "express"
import * as url from "../controllers/url.controller.js"


const router=express.Router()

router.post("/",url.createShortUrl);
router.post("/analytics/:shortId",url.getAnalytics);


export default router;

