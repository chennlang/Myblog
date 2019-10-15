# 小程序云开发 quickstart

这是云开发的快速启动指引，其中演示了如何上手使用云开发的三大基础能力：

- 数据库：一个既可在小程序前端操作，也能在云函数中读写的 JSON 文档型数据库
- 文件存储：在小程序前端直接上传/下载云端文件，在云开发控制台可视化管理
- 云函数：在云端运行的代码，微信私有协议天然鉴权，开发者只需编写业务逻辑代码

## 参考文档

- [云开发文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html)

![avatar](/miniprogram/image/Runner.png)
------
## 目录结构
- --cloudfunctions 云函数目录  
>-----change 用户修改数据（修改用户名、用户头像、地址、其他...）
-----getuserInfor 获取用户信息  
-----login用户授权后，会将相应的信息存入数据库  
-----test 测试阶段，实现后台动态换数据  
- --miniprogram 本地代码目录  
>-----image 图片  
-----page 页面  
-----iview
-----app.js   
-----app.json  
-----app.wxss  
-----common.js  
------
## 版本日志
目前很少看到小程序云开发详细的 demo ，想着自己写一个贡献下，供参考：
- 1.0.0
  + 用户授权
  + 用户注册
  + 用户修改个人信息
  + 上传头像
  + 用户权限
  + 文章上传功能
- 2.0.0
  + 添加文章内容支持 markdown 格式
  + 添加文章详情展示页
## 部分截图
- 待补充


