'use strict'
var Koa = require('koa');
var router = require('koa-router')();
var app = new Koa();

var Promise = require('bluebird');
var request = require('request');
var rp = require('request-promise');
var config = {
    wechat: {
        "appid": "wx65df732dc2a90227",
        "appsecret": "56051c96e5d938f3cfb37ee2d74d0d58"
    }
}
var wechatApi = {
    'jscode2session': 'https://api.weixin.qq.com/sns/jscode2session'
}
//https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code=JSCODE&grant_type=authorization_code

function onLoginRequest(code){
   return  new Promise(function (resovle, reject) {
        var url = wechatApi.jscode2session + "?appid=" + config.wechat.appid + "&secret=" + config.wechat.appsecret + "&js_code=" + code + "&grant_type=authorization_code";
        console.log("jscode2session:" + url);
        rp({ "url": url, json: true, simple: false }).then(function (response) {  
            resovle(response);
        }).catch(function (err) {
            console.log("err" + err);
            reject(err);
        });
    })
   
}

export default {
    login:async (ctx,next) => {
        var code = ctx.query.code;
        try {
            var response = await onLoginRequest(code);
            ctx.response.body = response;
        } catch (err) {
            console.log(err);
        }
    }
}