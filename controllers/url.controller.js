import shortid from 'shortid';
import Url from '../models/url.models.js';

export const createShortUrl=async(req,res)=>{
    const {url}=req.body;
    // console.log(body);
    if(!url){
        return res.status(400).json({error:"Url is required"})
    }
    const shortId=shortid(8);
    await Url.create({
        shortId:shortId,
        redirectUrl:url,
        visitedHistory:[]
    })
    return res.json({id:shortId});
}

export const getAnalytics=async(req,res)=>{
    const shortId=req.params.shortId;
    const result =await Url.findOne({shortId});
    const clicks=result.visitedHistory.length
    return res.status(200).json({totalClicks:clicks,analytics:result.visitedHistory})
}