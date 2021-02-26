const Us = require('../data/list_user');
let UsController = {};
let _Us = Us;
var mysql  = require('mysql');  
 

/**
 * 通过书名查询，获取图书列表
 * @param req
 * @param res
 */
UsController.find = function (req, res) {
    let page = parseInt(req.query.page || 1); //页码（默认第1页）
    let limit = parseInt(req.query.limit || 10); //每页显示条数（默认10条）
    let name = req.query.name || ''; //图书名称
    let total = 0;
    let rltUss = [];

 var connection = mysql.createConnection({     
  host     : 'localhost',       
  user     : 'root',              
  password : 'root',       
  port: '3306',                   
  database: 'cloud_c_s' ,
  multipleStatements:true
}); 

connection.connect();

connection.query('select count(*) as num from list_user; select * from list_user limit 0,10',
function (error,results,fields){
  if (error) 
  throw error;
  console.log('--------------------------SELECT----------------------------');
  console.log(results[0])
  total = JSON.stringify(results[0]);
  total = JSON.parse(total);
  total = total[0].num
	data = JSON.stringify(results[1]);
	rltUss = JSON.parse(data);
  
  res.json({
    total: total,
    limit: limit,
    uss: rltUss
  })
});

connection.end();

  };

  module.exports = UsController;