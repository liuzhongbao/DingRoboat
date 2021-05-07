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
    const token = req.get('token');
    // 所有body信息
    const req_info = req.body;
    // 注册token
    ding.resp(ACCESSTOKEN.comPrivate);
    // 向钉钉客户端推送消息
    ding.send(SENDDATAOFTEXT.ANTD);
});

app.listen(8080);