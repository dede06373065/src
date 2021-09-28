const express = require('express');
const {
    getAllStudents,
    getStudentById,
    createStudent,
    deleteStudentById,
    updateStudentById
} = require('../controller/student.js');

const router = express.Router();
router.get('/',getAllStudents);
router.get('/:id',getStudentById);
router.post('/',createStudent);
router.delete('/:id',deleteStudentById);
router.put('/:id',updateStudentById);

module.exports = router;
