import qs from 'qs';
import axios from '../boot/axios'

const user = {

  /**
   * 获取用户信息
   * @return 1
   * @param code
   * @param device_id
   */

  getCode(code, device_id) {
    return axios.post('/getCode', qs.stringify({
      code,
      device_id
    }));
  },

  /**
   * 获取订单信息
   * @return 1
   * @param access_token
   */

  findOrderByToken(access_token) {
    return axios.post('/findOrderByToken', qs.stringify({
      access_token,
    }));
  },
};

export default user;
