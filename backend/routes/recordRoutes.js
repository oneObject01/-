const express = require('express');
const router = express.Router();
const recordController = require('../controllers/recordController.js');
const {authenticate} = require('../middlewares/authenticate.js');

router.post('/create',authenticate,recordController.createRecord);
router.post('/list',authenticate,recordController.getRecords);

module.exports = router;