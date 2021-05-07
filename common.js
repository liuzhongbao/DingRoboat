// 可能有多个ACCESSTOKEN常量来支持能力
const ACCESSTOKEN = {
    /**
     * @des 老公媳妇爱情群
     */
    myLove: '84dc2c4691918a0934af9e2061189a34e19b5f54b6f2c3b783f577bd22988dbe',
    /**
     * @des 企业内部群
     */
    comPrivate: 'c9e4da23c1f8e3106ad1484ff59a76d6a1506f7d02c3802b552c984655332e82'
}

// 发送内容的push
// 发送给客户端的内容为text文本
const SENDDATAOFTEXT = {
    // 调侃鹏辉的内容
    SUNPENGHUI: {
        "msgtype": "text", // 消息类型
        "text": {
            "content": "鹏辉你闭嘴吧!"// 消息体
        },
        "at": { // @的人员
            "atMobiles": [

            ],
            "isAtAll": false
        }
    },
    // antd文档
    ANTD: {
        "msgtype": "link",
        "link": {
            "text": "企业级产品设计体系，创造高效愉悦的工作体验",
            "title": "antd-design4.x",
            "picUrl": "",
            "messageUrl": "https://ant.design/index-cn"
        }
    },
    '刘中保': {
        "msgtype": "text", // 消息类型
        "text": {
            "content": "请不要打扰帅气的人!"// 消息体
        },
        "at": { // @的人员
            "atMobiles": [

            ],
            "isAtAll": false
        }
    }
}

module.exports = {
    ACCESSTOKEN,
    SENDDATAOFTEXT
}