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
    // antd文档
    'antd': {
        "msgtype": "link",
        "link": {
            "text": "企业级产品设计体系，创造高效愉悦的工作体验",
            "title": "antd-design4.x",
            "picUrl": "",
            "messageUrl": "https://www.yuque.com/upr4iw/mmgw93/pbcd2b"
        }
    },
    'element': {
        "msgtype": "link",
        "link": {
            "text": "Element，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库",
            "title": "基于vuex3.0",
            "picUrl": "",
            "messageUrl": "https://www.yuque.com/docs/share/6c2acf9f-175c-4361-9505-62dedf54d3a5?# 《Element》"
        }
    },
    '前端': {
        "msgtype": "link",
        "link": {
            "text": "致力于打造高质量前端进阶之路",
            "title": "基于群主",
            "picUrl": "",
            "messageUrl": "https://www.yuque.com/docs/share/7904a3a2-7ea6-4194-ab29-afdafbb036cd?%23%20%E3%80%8A%E3%80%8A%E5%89%8D%E7%AB%AF%E7%B3%BB%E5%88%86%E6%A8%A1%E7%89%88%E4%B9%A6%E5%86%99%E3%80%8B%E3%80%8B"
        }
    },
    'uni': {
        "msgtype": "link",
        "link": {
            "text": "给你一套完美的跨端体验",
            "title": "uni",
            "picUrl": "",
            "messageUrl": "https://www.yuque.com/docs/share/53a9e5e8-7f97-4253-9bbd-da2dfac2324b?# 《uni》"
        }
    },
    '生日': {
        "msgtype": "link",
        "link": {
            "text": "happy brithday",
            "title": "记录下你的生日吧！",
            "picUrl": "",
            "messageUrl": "https://www.yuque.com/docs/share/0d488106-2910-4d13-9460-36f6b65fff0c?# 《birthday》"
        }
    },
    'vue': {
        "msgtype": "link",
        "link": {
            "text": "渐进式JavaScript 框架",
            "title": "基于vuex3.0",
            "picUrl": "",
            "messageUrl": "https://www.yuque.com/docs/share/8afe275d-136b-420b-b255-864fdc51ad9d?# 《vue》"
        }
    },
    'iView': {
        "msgtype": "link",
        "link": {
            "text": "一套高质量的微信小程序 UI 组件库",
            "title": "基于vue",
            "picUrl": "",
            "messageUrl": "https://www.yuque.com/docs/share/fe24c762-0590-443f-807b-1a47af11a980?# 《iview》"
        }
    },
    'react': {
        "msgtype": "link",
        "link": {
            "text": "用于构建用户界面的 JavaScript 库",
            "title": "react",
            "picUrl": "",
            "messageUrl": "https://www.yuque.com/docs/share/e52bf3f4-5274-4b63-b5e0-9a3e95b71dee?# 《react》"
        }
    },
    'hooks': {
        "msgtype": "link",
        "link": {
            "text": "为 React Hooks 而生",
            "title": "react",
            "picUrl": "",
            "messageUrl": "https://www.yuque.com/docs/share/b9927291-3f30-45fb-b99a-224140706710?# 《hooks》"
        }
    },
    '刘中保': {
        "actionCard": {
            "title": "点击下方,阅读全文", 
            "text": "![screenshot](https://iknow-pic.cdn.bcebos.com/91ef76c6a7efce1bbcd0a364a151f3deb58f65a0?x-bce-process%3Dimage%2Fresize%2Cm_lfit%2Cw_600%2Ch_800%2Climit_1%2Fquality%2Cq_85%2Fformat%2Cf_jpg)群主闭关中,有问题不妨先看这里", 
            "btnOrientation": "0", 
            "singleTitle" : "阅读全文",
            "singleURL" : "https://www.yuque.com/books/share/4c5a3112-224e-4c50-832a-ebcdea107440?# 《robot》"
        }, 
        "msgtype": "actionCard"
    }
}

module.exports = {
    ACCESSTOKEN,
    SENDDATAOFTEXT
}