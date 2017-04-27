const path = require('path')
const express = require('express')
const mysql = require('mysql');
const dbConfig = require('../db/dbConfig');
const bodyParser = require('body-parser')

const insertMenu = 'INSERT INTO menu SET ?'
const getMenu = 'SELECT * FROM menu WHERE id = ?'
const getAllMenu = 'SELECT * FROM menu'
const getTodolist = 'SELECT * FROM todo_list WHERE menu_id = ?'
const insertTodolist = 'INSERT INTO todo_list SET ?'
const deleteTodo = 'DELETE from todo_list WHERE id = ?'
const updateTodolist = 'UPDATE todo_list SET done = ? WHERE id = ?'
//TODO:初始化选择的menu数据库逻辑设定
// const setSelectedMenu = 'UPDATE menu SET selected = 0 WHERE id = ?' 

let menus;  //所有menu列表缓存

const app = express();
app.use(bodyParser());

//连接数据库 
let connection = mysql.createConnection(dbConfig);

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

//添加目录
app.post('/menu/add', function (req, res, next) {
  let reqParam = req.body;
  connection.query(insertMenu, reqParam, function(error, results, fields) {
      if(error) throw error;
      console.log(results, fields)
  })
  res.sendStatus(200);
  next()
});

//得到所有目录
app.get('/menu/get', function(req, res, next) {
    connection.query(getAllMenu, function(error, results, fields) {
        if(error) throw error;
        menus = results;
        res.json(results);
        next()
    })
})


//得到指定id的目录
app.get('/menu/get/:id', function(req, res, next) {
    console.log('ID:', req.params.id);
   
    connection.query(getMenu, req.params.id, function(error, results, fields) {
        if(error) throw error;
        res.json(results);
    })
})

//根据目录获取todolist
app.get('/todolist/get/:id', function(req, res, next) {
    // connection.query(setSelectedMenu, req.params.id, function(error, results, fields) {
    //     if(error) throw error;
    //     console.log(results)
    // })
    connection.query(getTodolist, req.params.id, function(error, results, fields) {
        if(error) return error;
        res.json(results);
    })
})

//添加todolist到数据库中
app.post('/todolist/add', function(req, res, next) {
    //text,done, menu_id 
    let reqParam = {
        "text": req.body.data.text,
        "done": false,
        "menu_id": req.body.data.curMenu
    };
    var insertId;

    connection.query(insertTodolist, reqParam, function(error, results, fields) {
      if(error) throw error;

      insertId = results.insertId;
      reqParam.id = insertId;
      res.json(reqParam)
    })
    
})

//删除todolist
app.post('/todolist/delete', function(req, res, next) {
    let reqParam = req.body.id

    connection.query(deleteTodo, reqParam, function(error, results, fields) {
      if(error) throw error;
      console.log(results, fields)
    })
    res.sendStatus(200);
})

//改变todolist状态
app.post('/todolist/toggle', function(req, res, next) {
    let reqParam = req.body;
    console.log(reqParam)

    connection.query(updateTodolist, [!reqParam.done, reqParam.id], function(error, results, fields) {
        if(error) throw error;

        console.log(results)
        res.sendStatus(200);
    })
})

app.listen(3001, function() {
    console.log('listening on port 3001')
})






connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});