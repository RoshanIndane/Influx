const express= require("express");

const router= express.Router();

const Prod= require("../models/product.model")



router.post("", async(req, res) =>{
    try {
        const post = await Prod.create(req.body);
        return res.status(201).send(post);
    } catch (err) {
        return res.status(500).send(err.message);
    }
});

router.get("", async(req, res) =>{
    try {
        const post = await Prod.find().lean();
        return res.send(post);
    } catch (err) {
        return res.status(500).send(err.message);
    }
});

module.exports = router;