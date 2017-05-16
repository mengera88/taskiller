# 简单基于vue框架的todolist功能

## 使用到的技术： 
  前端：`vue + vuex + vue-router + webpack + es6 `

  后端：`node + express + mysql`

## 使用方法

1. 进入到项目所在目录，然后执行 `npm install`

2. 服务器端服务开启，运行`npm run start`

3. 前端运行：`npm run dev`

4. 准备好mysql数据库，并创建数据库`taskiller`,在里面新建两张数据表`menu`, `todo_list`,其中`menu`表包含`id,name,selected`三个字段，并且`selected`只能有一行的初值为1，其他都为0，`todo_list`包含`id,text,done,menu_id`字段，其中`done`字段为`TINYINT`类型，值为0或1

## 详细教程

参见我的[博客](https://mengera88.github.io/2017/04/27/%E5%BA%94%E7%94%A8vue2-vuex-vue-router-webpack2-es6-express-mysql%E6%8A%80%E6%9C%AF%E7%BC%96%E5%86%99%E7%AE%80%E5%8D%95%E7%9A%84todolist/)




