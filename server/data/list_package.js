const Mock = require('mockjs');

const Pack = [];
for (let i = 0; i < 100; i++) {
  Pack.push(Mock.mock({
    
    schedule: Mock.Random.ctitle(2, 12),
    counts:Mock.Random.cname(),
    order_sum: Mock.Random.cname(),
    create_time: Mock.Random.date()
  }))
}

module.exports = Pack;
