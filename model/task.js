// 引入mongoose模块
const mongoose = require('mongoose');
// 创建任务集合规则
const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
}, { versionKey: false });
// 创建todo集合
const Task = mongoose.model('task', taskSchema);

// 将集合构造函数作为模块成员进行导出
Task.create({
        title: '吃饭',
        completed: true
    }).then(() => { console.log("数据插入成功") })
    .catch(() => console.log('数据插入失败'));
module.exports = Task;