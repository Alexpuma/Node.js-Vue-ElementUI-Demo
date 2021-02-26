import * as API from './'

export default {

  //查询获取book列表(通过page分页)
  findUsList: params => {
    return API.GET('/api/v1/list_user', params)
  },
}