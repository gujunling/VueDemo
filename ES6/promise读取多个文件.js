
// 通过在js文件所在文件夹下使用控制台命令 node 文件名.js运行代码

// 引入fs 模块

const fs = require('fs');
const { resolve } = require('path');


// 调用方法读取文件
// fs.readFile('../resources/静夜思.md', (err, data1) => {
//     fs.readFile('../resources/论语.md', (err, data2) => {
//         fs.readFile('../resources/滕王阁诗.md', (err, data3) => {
//             let result = data1 + data2 + data3;
//             console.log(result.toString());

//         });
//     });
// });

// 使用promise实现
const p = new Promise((resolve, reject) => {
    fs.readFile('../resources/静夜思.md', (err, data) => {
        resolve(data);
    });
});

p.then(value => {
    // console.log(value.toString());
    return new Promise((resolve, reject) => {
        fs.readFile('../resources/论语.md', (err, data) => {
            // 通过数组存放两个文件的内容，value为第一个文件的内容，data为第二个文件的内容
            resolve([value + data]);

        });
    });
}).then(value => {
    return new Promise((resolve, reject) => {
        fs.readFile('../resources/滕王阁诗.md', (err, data) => {
            // 压入操作 把此时的第三个文件内容(data)添加到前面两个文件内容所在的数组（value）中
            // 把data添加到value所在的数组中去
            value.push(data);
            resolve(value);
        });
    });
}).then(value => {
    console.log(value.join('\r\n'));
});