/**
 * @description 发送群消息
 */

// 发送群消息
const https = require('https');
const { URL } = require('url');

let req_url = 'https://oapi.dingtalk.com/robot/send?access_token=';
let u;
// 初始化token
const resp = (tk) => {
    u = new URL(req_url + tk);
}

// 自定义回复
const send = (data, cb) => {
    // console.log(data,u);
    const req = https.request(u, {
        'method': 'POST',
        'headers': {
            'Content-Type': 'application/json'
        }
    }, (res) => {
        // console.log(res);
        // 执行回掉清空内存
        cb(res);
    });
    req.write(JSON.stringify(data));
    req.end();
}

module.exports = {
    resp: resp,
    send: send
}