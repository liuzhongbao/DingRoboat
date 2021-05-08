/**
 * outGoing
 * token : fbfcb6a6-ddb1-418f-941a-604b4b8a4ee4
 */
var express = require('express');
var ding = require('./dingPush');
var app = express();
// 拿到的数据json化一下
var bodyParser = require('body-parser');
const COMMONDATA = require('./common');
const { ACCESSTOKEN = {}, SENDDATAOFTEXT = {} } = COMMONDATA || {};

app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send('hello,World');
});

// token和链接是配套的
// 注册access_token
app.post('/ding', function (req, res) {
    // res.send('hello,World');
    // console.log(req.body);
    // token防伪验证
    // const token = req.get('token');
    // 所有body信息
    const req_info = req.body;
    // 获取@接受到的文本信息
    const { content = '' } = req_info.text || {};
    let temp = null;
    // 注册token
    ding.resp(ACCESSTOKEN.comPrivate);
    // 算法模糊匹配找最接近的关键字
    for (let key in SENDDATAOFTEXT) {
        if (content.indexOf(key) !== -1) {
            temp = SENDDATAOFTEXT[key];
            break;
        }
    }

    if (!temp) {
        // 兜底取所有目录
        temp = SENDDATAOFTEXT['刘中保'];
    }
    // 向钉钉客户端推送消息
    ding.send({
        ...temp, "at": {
            "atUserIds": [
                req_info.senderId
            ],
            "isAtAll": false
        }
    }, (res) => {
        // 监控上报此操作
        temp = null;
    });
});

app.listen(8080);