const Mock = require('mockjs');

const Order = [];
for (let i = 0; i < 100; i++) {
  Order.push(Mock.mock({
    
    user_name: Mock.Random.ctitle(2, 12),
    status: Mock.Random.cname(),
    create_time: Mock.Random.date()
  }))
}

module.exports = Order;
