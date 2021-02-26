const Service = require('../data/list_service');
let ServiceController = {};
let _Service = Service;
var mysql  = require('mysql');  
 

/**
 * 通过书名查询，获取图书列表
 * @param req
 * @param res
 */
ServiceController.find = function (req, res) {
    let page = parseInt(req.query.page || 1); //页码（默认第1页）
    let limit = parseInt(req.query.limit || 10); //每页显示条数（默认10条）
    let name = req.query.name || ''; //图书名称
    let total = 0;
    let rltServices = [];

 var connection = mysql.createConnection({     
  host     : 'localhost',       
  user     : 'root',              
  password : 'root',       
  port: '3306',                   
  database: 'cloud_c_s' ,
  multipleStatements:true
}); 
 
connection.connect();

connection.query('select count(*) as num2 from list_service; select b.service_id,b.create_time,b.service_name,a.counts from (SELECT service_id,COUNT(kefu_id) as counts from list_kefu GROUP BY service_id) a INNER JOIN list_service b ON a.service_id = b.service_id;',
function (error,results,fields){
	if (error) throw error;
  console.log('--------------------------SELECT----------------------------');
  console.log(results[0])
  total = JSON.stringify(results[0]);
  total = JSON.parse(total);
  total = total[0].num2
	data = JSON.stringify(results[1]);
	rltServices = JSON.parse(data);
  
  res.json({
    total: total,
    limit: limit,
    services: rltServices
  })
});

connection.end();

  };

  module.exports = ServiceController;