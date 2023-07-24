
# UmiJS-React
Using UmiJS to create a base React Project...
# umi project

## Getting Started

Install dependencies,

```bash
$ yarn
```

Start the dev server,

```bash
$ yarn start

UmiJs创建的react基本项目架子;
cross-env库是用来区分环境的，如.umirc.dev.ts和.prod.ts；//有问题，会报错，所以去掉了，可能是因为configs模式的配置和umirc不能同时一起使用；
public文件夹放置不需要打包的资源；
assets放置图片、svg、icon以及文字等资源；
layouts放置布局组件；
src/components放置公共复用的组件；
pages放置页面组件；
pages/*/components放置*页面自己需要使用的组件；
service下放置所有的接口请求方法；
utils下放置工具方法，如request拦截器；


