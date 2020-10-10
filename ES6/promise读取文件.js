
// 通过在js文件所在文件夹下使用控制台命令 node 文件名.js运行代码

// 1.引入 fs 模块
const fs = require('fs');


// 2.调用方法读取文件
// fs.readFile('../resources/论语.md', (err, data) => {
//     // 如果失败，则抛出错误
//     if (err) throw err;
//     // 如果成功，则输出内容
//     console.log(data.toString());
// });


// 使用promise进行封装

const p = new Promise(function (resolve, reject) {
    fs.readFile('../resources/论语.md', (err, data) => {
        // 如果读取失败
        if (err) reject(err);
        // 如果成功
        resolve(data);

    })
});

p.then(function (value) {
    console.log(value.toString());
}, function (reason) {
    console.log("读取文件失败，请仔细检查");
});

