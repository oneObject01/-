const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recordSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    amount: {
        type: String,
        default: ''
    },
    remark: {
        type: String,
        default: ''
    },
    time: {
        type: Date,
        default: ''
    },
    type: {
        type: String,
        enum: ['收入', '支出'],
        required: true
    }
});

const Record = mongoose.model('Record', recordSchema);
module.exports = Record;