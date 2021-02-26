const Mock = require('mockjs');

const Us = [];
for (let i = 0; i < 100; i++) {
  Us.push(Mock.mock({
    
    good_name: Mock.Random.ctitle(2, 12),
    status: Mock.Random.cname(),
    create_time: Mock.Random.date()
  }))
}

module.exports = Us;
