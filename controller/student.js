const Student = require('../models/student');

async function getAllStudents(req,res){
    const students = await Student.find().exec();
    console.log('getAllStudents');
    return res.json(students);
}

async function getStudentById(req,res){
    const {id} = req.params;
    const student = await Student.findById(id);
    if(!student){
        return res.sendStatus(404);
    }
    return res.json(student);
}

async function createStudent(req,res){
    const {firstName,lastName,email} = req.body;
    const newStudent = new Student({firstName,lastName,email});
    try{
        await newStudent.save();
    }catch(e){
        return res.send(e);
    }//抓取错误的方法；
    console.log('createStudent');
    return res.status(201).json(newStudent);
}

async function deleteStudentById(req,res){
    const {id} = req.params;
    const deleteStudent = await Student.findByIdAndDelete(id);
    if(!deleteStudent){
        return res.sendStatus(404);
    }
    return res.json(deleteStudent);
}

async function updateStudentById(req,res){
    const {id} = req.params;
    const {firstName,lastName,email} = req.body;
    const targetStudent = await Student.findByIdAndUpdate(id,{firstName,lastName,email});
    if(!targetStudent){
        return res.sendStatus(404);
    }
    return res.sendStatus(201).json(targetStudent);
}

module.exports = {
    getAllStudents,
    getStudentById,
    createStudent,
    deleteStudentById,
    updateStudentById
}