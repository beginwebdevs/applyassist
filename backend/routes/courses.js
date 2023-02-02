const express = require('express');
const router = express.Router()
// const { body, validationResult } = require('express-validator');
const Courses = require('../models/Courses');
const Courseslocation = require('../models/Courselocation');


router.get('/allcourses', async (req, res) => {
    let coursedata = await Courses.find();
    res.json(coursedata);
})

router.get('/allcourseslocation', async (req, res) => {
    let courselocationdata = await Courseslocation.find();
    res.json(courselocationdata);
})

router.get('/filtercourse', async (req, res) => {
    let data = {}   
    if(req.query.course_type) {
        data.course_type = req.query.course_type;
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


router.post('/addcourse', async (req, res) => {
    let coursefound = await Courses.findOne({ aa_program_id: req.body.aa_program_id });
    if (coursefound) {
        success = false;
        message = "Course already there";
        res.json({ success, message, coursefound });
    }
    else {
        let courseadd = await Courses.create({
            aa_program_id: req.body.aa_program_id,
            aa_institute_code: req.body.aa_institute_code,
            is_active: req.body.is_active,
            institution_name: req.body.institution_name,
            course_level: req.body.course_level,
            field_of_study: req.body.field_of_study,
            area_of_study: req.body.area_of_study,
            sub_area_of_study: req.body.sub_area_of_study,
            course_type: req.body.course_type,
            course_name: req.body.course_name,
            course_duration: req.body.course_duration,
            intakes: req.body.intakes,
            post_study_work_visa: req.body.post_study_work_visa,
            session_starts: req.body.session_starts,
            program_overview: req.body.program_overview,
            admission_process: req.body.admission_process,
            no_of_units: req.body.no_of_units,
            careers: req.body.careers,
            assessment: req.body.assessment,
            progression: req.body.progression,
            total_elective_units: req.body.total_elective_units,
            units: req.body.units,
            scholarships: req.body.scholarships,
            course_ranking: req.body.course_ranking,
            url: req.body.url,
            tags: req.body.tags,
        });
        success = true;
        message = "Course added";
        res.json({ success, message, courseadd });
    }
})

router.post('/addcourselocation', async (req, res) => {
    let courselocationfound = await Courseslocation.findOne({ cricos_course_code: req.body.cricos_course_code });
    if (courselocationfound) {
        success = false;
        message = "Course Location already there";
        res.json({ success, message, courselocationfound });
    }
    else {
        let courselocationadd = await Courseslocation.create({
            cricos_provider_code : req.body.cricos_provider_code,
            institution_name : req.body.institution_name,
            cricos_course_code : req.body.cricos_course_code,
            location_name : req.body.location_name,
            location_city : req.body.location_city,
            location_state : req.body.location_state,
        });
        success = true;
        message = "Course Location added";
        res.json({ success, message, courselocationadd });
    }
})




module.exports = router