const mongoose = require('mongoose')
//链接mongo 并且使用imooc这个集合
const DB_URL = 'mongodb://localhost:27017/imooc-chat'
mongoose.connect(DB_URL)
// 类似于mysql的表，mongo有文档、字段概念
const models = {
	user: {
		'user': {type: String, require: true},
		'pwd': {type: String, require: true},
		'type': {type: String, require: true},
		// 头像
		'avatar': {type: String},
		// 简介
		'desc': {type: String},
		// 职位名称
		'title': {type: String},
		// 如果你是boss
		// 公司
		'company': {type: String},
		// 工资
		'money': {type: String}
	},
	chat: {

	}
}
for(let m in models) {
	mongoose.model(m, new mongoose.Schema(models[m]))
}

module.exports = {
	getModel: function(name) {
		return mongoose.model(name)
	}
} 