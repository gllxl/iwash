import qs from 'qs';
import axios from '../boot/axios'

const device = {
  /**
   * 启动设备
   * @return 1
   * @param token
   * @param washing_machine_identification
   * @param state
   */
  washBegin(token, washing_machine_identification,state) {
    return axios.post('/washBegin', qs.stringify({
      token,
      washing_machine_identification,
      state
    }));
  },
};
export default device;
