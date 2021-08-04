# serverless-webpack-express-starter
serverless-webpack-express-starter 模板是基于express-starter基础webpack打包功能的例子，
主要解决腾讯云serverless需要上传node_modules，但是占用空间过大的问题。

## 预览
[点击](https://service-ijd4slqi-1253419200.gz.apigw.tencentcs.com/release/test
)

## 效果
**70 M => 1.3 M**


## 我的情况
在不打包的情况下，需要上传近70M，时间需要几分钟，经过打包之后，只占用1.3M，10秒钟就传上去了

## 快速开始

### 1. 安装
前提
```bash
# 安装 Serverless Framework
npm install -g serverless
```

项目内
```bash
# 安装 依赖
yarn
```

### 2. 开发

```bash
npm run start
```

### 3. 构建并部署
`serverless.yml`将`src`指向`dist`

```bash
npm run deploy
```

## 开发时遇到的坑
[serverless+webpack解决node_modules空间大的问题](https://xlzy520.cn/pages/ebc11a/)
