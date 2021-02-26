var express = require('express');
var router = express.Router();
var indexRouter = {};

var ServiceController = require('../../../controllers/list_service');

//返回list_user的集合
router.get('/', ServiceController.find);


indexRouter.router = router;

module.exports = indexRouter;
