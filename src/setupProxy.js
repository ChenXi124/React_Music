const {createProxyMiddleware}  = require("http-proxy-middleware")

module.exports = function (app){
    //访问网易云音乐https://netease-cloud-music-api-chenxi124.vercel.app/

    app.use("/api",createProxyMiddleware({
        target:"https://netease-cloud-music-api-chenxi124.vercel.app",//访问域名--跨域
        changeOrigin:true,//允许跨域
        pathRewrite:{//路径重定向 开头是/api的替换地址
            '^/api':''
        }
    }))
}