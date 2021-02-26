const Mock = require('mockjs');

const Service = [];
for (let i = 0; i < 100; i++) {
    Service.push(Mock.mock({
    
    order_num: Mock.Random.ctitle(2, 12),
    type: Mock.Random.cname(),
    create_time: Mock.Random.date()
  }))
}

module.exports = Service;
