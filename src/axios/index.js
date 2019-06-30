import axios from 'axios';
import { get } from './tools'; // post, postExport
import * as config from './config';

axios.defaults.withCredentials = true;
/*
    common
*/

export const getIndexList = () => get({url:config.INDEX_LIST});   //首页大盘 豆腐块
export const getTodoList = () => get({url:config.TODO_LIST});   //首页大盘 豆腐块

// export const deldteEventStatus = (data) => post({url: config.DELDTE_EVENT_STATUS,data});//删除反馈列表

// export const exportOrderQueryList = (data) => postExport({
//     url: config.ORDER_LIST_EXPORT,
//     data
// }); //订单查询查询导出
//
// export const exportOrderQueryInterval = (data) => postExport({
//     url: config.ORDER_INTERVAL_EXPORT,
//     data
// }); //订单查询查询导出 添加注释 进行插件测试
