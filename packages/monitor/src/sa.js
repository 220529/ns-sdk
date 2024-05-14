"use strict";
import qs from "qs";

const config = {};
let sendUrl = "";

class Sa {
  constructor() {
    this.init();
    this.beforeUpload = null;
    this.afterUpload = null;
  }
  init() {
    this.initPlatForm();
  }
  initPlatForm() {
    const ua = navigator.userAgent;
    const browser = {
      trident: ua.indexOf("Trident") > -1, //IE内核
      presto: ua.indexOf("Presto") > -1, //opera内核
      webKit: ua.indexOf("AppleWebKit") > -1, //苹果、谷歌内核
      gecko: ua.indexOf("Gecko") > -1 && ua.indexOf("KHTML") == -1, //火狐内核
      opera: ua.indexOf("Opera") > -1,
      chrome: ua.indexOf("Chrome") > -1,
      firefox: ua.indexOf("Firefox") > -1,
      safari: ua.indexOf("Safari") > -1 && ua.indexOf("Chrome") == -1, //Safari
      ie:
        ua.indexOf("compatible") > -1 &&
        ua.indexOf("MSIE") > -1 &&
        ua.indexOf("Gecko") == -1,
      mobile: ua.search(/AppleWebKit.*Mobile/) > -1, //是否为移动终端
      ios: ua.search(/\(i[^;]+;( U;)? CPU.+Mac OS X/) > -1, //ios终端
      android: ua.indexOf("Android") > -1 || ua.indexOf("Adr") > -1, //android终端
      winPhone: ua.search(/Windows Phone/) > -1, //windows phone终端
      iPhone: ua.indexOf("iPhone") > -1, //是否为iPhon
      iPad: ua.indexOf("iPad") > -1, //是否iPad
      webApp: ua.indexOf("Safari") == -1, //是否Safari web应该程序，没有头部与底部
      weibo: ua.search(/WeiBo/i) > -1, //是否微博
      weixin: ua.search(/MicroMessenger/i) > -1, //是否微信
      qq: ua.search(/\sQQ/i) > -1 && ua.search(/QQBrowser/i) == -1, //是否QQ
      mQQBrowser: ua.search(/MQQBrowser/) > -1, //是否QQ手机浏览器
      qqBrowser: ua.search(/QQBrowser/i) > -1 && ua.search(/MQQBrowser/) == -1, //是否QQ浏览器
      uc: ua.search(/UCBrowser/) > -1, //是否UC浏览器
    };
    if (browser.ios) {
      config.platform = "ios";
    } else if (browser.android) {
      config.platform = "android";
    }
  }
  register(params) {
    Object.assign(config, params);
  }
  platTrack(event, params) {
    if (typeof this.beforeUpload === "function") {
      this.beforeUpload();
    }
    const realParams = {
      ...config,
      timestamp: new Date().getTime(),
      props: params,
    };
    this.send(event, qs.stringify(realParams));
    if (typeof this.afterUpload === "function") {
      this.afterUpload();
    }
  }
  send(event, params) {
    console.log("send", event, params);
  }
}

export default new Sa();
