var express = require('express');
var router = express.Router();
var indexRouter = {};

var PackController = require('../../../controllers/list_package');

//返回list_package的集合
router.get('/', PackController.find);

indexRouter.router = router;

module.exports = indexRouter;
