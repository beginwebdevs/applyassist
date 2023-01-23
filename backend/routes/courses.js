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
            course_name: req.body.course_name,
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