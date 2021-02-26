var express = require('express');
var router = express.Router();
var indexRouter = {};

var OrderController = require('../../../controllers/list_order');

//返回list_user的集合
router.get('/', OrderController.find);


indexRouter.router = router;

module.exports = indexRouter;
