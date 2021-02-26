var express = require('express');
var router = express.Router();
var indexRouter = {};

var UsController = require('../../../controllers/list_user');

//返回list_user的集合
router.get('/', UsController.find);


indexRouter.router = router;

module.exports = indexRouter;
