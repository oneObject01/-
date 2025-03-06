const Record = require('../models/recordModel');

// 创建记录
const createRecord = async (req, res) => {
    try {
        const record = new Record({
            ...req.body,
            userId: req.user._id
        });
        console.log(req.body);
        console.log(req.user._id);
        await record.save();
        res.status(201).send(record);
    } catch (error) {
        res.status(400).send(error);
    }
};

// 获取用户的所有记录
const getRecords = async (req, res) => {
    try {
        const records = await Record.find({ userId: req.user._id });
        res.send(records);
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = {
    createRecord,
    getRecords
};