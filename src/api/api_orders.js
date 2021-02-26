import * as API from './'

export default {

  //查询获取book列表(通过page分页)
  findOrderList: params => {
    return API.GET('/api/v1/list_order', params)
  },
}