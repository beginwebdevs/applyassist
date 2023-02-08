const express = require('express');
const router = express.Router()
const Universities = require('../models/Universities');


router.get('/alluniversities', async (req, res) => {
    let alluniv = await Universities.find();
    res.json(alluniv);
})


router.get('/filtercourse', async (req, res) => {
    let data = {}   
    if(req.query.course_type) {
        data.course_type = req.query.course_type;
    }
    if(req.query.course_name) {
        data.course_name = req.query.course_name;
    }
    if(req.query.field_of_study) {
        data.field_of_study = req.query.field_of_study;
    }
    if(req.query.area_of_study) {
        data.area_of_study = req.query.area_of_study;
    }
    if(req.query.sub_area_of_study) {
        data.sub_area_of_study = req.query.sub_area_of_study;
    }
    if(req.query.course_duration) {
        data.course_duration = req.query.course_duration;
    }
    if(req.query.intakes) {
        data.intakes = req.query.intakes;
    }
    if(req.query.post_study_work_visa) {
        data.post_study_work_visa = req.query.post_study_work_visa;
    }
    let requireddata = await Courses.find(data);
    res.json(requireddata);
})


router.post('/adduniversity', async (req, res) => {
   
        let univadd = await Universities.create({
            university_name: req.body.university_name,
            university_location: req.body.university_location,
            about_university: req.body.about_university,
            university_type: req.body.university_type,
            campus_accommodation: req.body.campus_accommodation,
            intake_months: req.body.intake_months,
            total_students: req.body.total_students,
            ielts_requirements: req.body.ielts_requirements,
            toefl_requirements: req.body.toefl_requirements,
            pte_requirements: req.body.pte_requirements,
            university_website: req.body.university_website,
        });
        success = true;
        message = "University added";
        res.json({ success, message, univadd });
    }
)




module.exports = router