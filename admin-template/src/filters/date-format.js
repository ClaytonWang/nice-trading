import dayjs from 'dayjs';
import { isSafari } from '@/utils';

/**
 * 日期格式化
 * @param {string} val 原始日期
 * @param {string} fmt 日期格式
 * @returns {string} 格式化后的日期
 */
export default (val, fmt) => {
  if (val) {
    if (isSafari()) {
      const dateStr = val.replace(/\+(\d{2})(\d{2})/, '+$1:$2');
      return dayjs(dateStr).format(fmt.replace(/-/g, '/'));
    } else {
      return dayjs(val).format(fmt);
    }
  }

  return '-';
};
