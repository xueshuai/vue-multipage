import Mock from 'mockjs';
import CONF from '@/views/index/conf';
import {initMock} from '@/utils/confUtils';

const mData = {
  mainModule: {
    API: {
      GET: {
        code: 200,
        msg: "成功",
        data: 'This is the main module.'
      }
    }
  }
}
/**
 * 接受参数，动态创建
 */
export default initMock(Mock, CONF, mData)
