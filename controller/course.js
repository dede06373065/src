const Course = require('../models/course');
async function getAllCourses(req,res){
    //db.Course.find()在MongoDB中
    const courses = await Course.find().exec();//async await;exec()代表代码终止；
    //其他两种写法：
    //Course.findById().then().catch(); promise;
    //Course.findById((error,data)=>{});callback();
    console.log("getAllCourse");
    return res.json(courses);
}

async function getCourseById(req,res){
    const {id} = req.params;
    console.log(id);
    const course = await Course.findById(id);
    if(!course){
        return res.sendStatus(404);
    }
    return res.json(course);
}

async function createCourseId(req,res){
    const {code, name, description} = req.body;
    const newcourse = new Course({_id:code, name, description});
    await newcourse.save();
    console.log("createCourseId");
    return res.status(201).json(newcourse);
}

async function deleteCourseById(req,res){
    const {id} = req.params;
    const targetcourse = await Course.findByIdAndDelete(id);//返回更新后的结果；
    if(!targetcourse){
        return res.sendStatus(404);
    }
    return res.json(targetcourse);
}

async function updateCourseById(req,res){
    const {name, description} = req.body;
    const {id} = req.params;
    const targetcourse = await Course.findByIdAndUpdate(id,{name,description},{new:true});//返回更新后的结果；
    if(!targetcourse){
        return res.sendStatus(404);
    }
    console.log('updateCourseById');
    return res.sendStatus(204);//no content;
    // return res.json(targetcourse);

}

module.exports = {
    getAllCourses,
    getCourseById,
    createCourseId,
    deleteCourseById,
    updateCourseById
};