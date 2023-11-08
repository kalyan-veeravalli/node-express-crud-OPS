const express = require('express')

const router = express.Router()

const db = require('../db');

router.post("/createMember", (req, res) => {
    try {
        const inputs = req.body;
        let members = db.members || [];
        members = [inputs, ...members];
        db.members = members;
        return res.status(200).json({ message: `member created successfully` });
    } catch (error) {
        return res.status(500).json({ message: `error while creating member` });
    }
});

router.get('/getMembers', (req, res) => {
    try {
        const members = db.members || [];
        if (members.length < 1) {
            throw new Error("no-members-found");
        }
        return res.status(200).json(members);
    } catch (error) {
        if (error.toString().match("no-members-found")) {
            return res.status(404).json({ message: "no members found" })
        }
        return res.status(500).json({
            message: `error while getting members`
        });
    }
})



module.exports = router