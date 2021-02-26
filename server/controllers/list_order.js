const Order = require('../data/list_order');
let OrderController = {};
let _Order = Order;
var mysql  = require('mysql');  
 

/**
 * 通过书名查询，获取图书列表
 * @param req
 * @param res
 */
OrderController.find = function (req, res) {
    let page = parseInt(req.query.page || 1); //页码（默认第1页）
    let limit = parseInt(req.query.limit || 10); //每页显示条数（默认10条）
    let name = req.query.name || ''; //图书名称
    let total = 0;
    let rltOrders = [];

 var connection = mysql.createConnection({     
  host     : 'localhost',       
  user     : 'root',              
  password : 'root',       
  port: '3306',                   
  database: 'cloud_c_s' ,
  multipleStatements:true
}); 
 
connection.connect();

connection.query('select count(*) as num from list_order; select * from list_order limit 0,10',
function (error,results,fields){
	if (error) throw error;
  console.log('--------------------------SELECT----------------------------');
  console.log(results[0])
  total = JSON.stringify(results[0]);
  total = JSON.parse(total);
  total = total[0].num
	data = JSON.stringify(results[1]);
	rltOrders = JSON.parse(data);
  
  res.json({
    total: total,
    limit: limit,
    orders: rltOrders
  })
});

connection.end();

  };

  module.exports = OrderController;