// 在node中如果想要进行文件操作，就必须引入fs这个核心模块
// 在fs这个核心模块中，就提供了所有的文件操作相关的API

// 1. 使用require 方法加载fs核心模块-文件核心模块

var  fs = require('fs');

// 2. 读取文件
//      第一个参数就是要读取的文件路径
//      第二个参数是一个回调函数
//          error 
//               如果读取失败，error就是错误对象
//               如果读取成功，error就是null
//          data
//               如果读取成功，data就是读取到的数据
//               如果读取失败，error就是错误对象  

//          成功
//              data 数据
//              error null
//          失败
//              data undefined没有数据
//              error 错误对象

fs.readFile('./data/hello.txt',function(error,data){
    // 文件中存储的其实都是二进制的数据
    // 打印出来是二进制的，所以我们可以通过 toString（）方法来转换一下
    if(error) {
        console.log('读取文件失败了');
    }else{
        console.log(data.toString());
    }
})