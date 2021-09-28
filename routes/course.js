const express = require('express');
const {
    getAllCourses,
    getCourseById,
    createCourseId,
    deleteCourseById,
    updateCourseById
} = require('../controller/course');
const router = express.Router();

router.get('/',getAllCourses);
router.get('/:id',getCourseById);
router.post('/',createCourseId);
router.delete('/:id',deleteCourseById);
router.put('/:id',updateCourseById);

module.exports = router;