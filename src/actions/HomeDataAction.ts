/*
 * @Author: your name
 * @Date: 2021-12-30 21:04:53
 * @LastEditTime: 2021-12-30 21:04:54
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /react-mobile/src/actions/HomeDataAction.ts
 */

import { SET_HOME_STATUS } from '../constants/ActionTypes';

export const setHomeStatus = (status: number) => {
  return {
    type: SET_HOME_STATUS,
    data: status,
  };
};
