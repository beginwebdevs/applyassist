const mongoose = require('mongoose');
const { Schema } = mongoose;

const courseSchema = new Schema({
    aa_program_id: {
        type: String,
        required: true,
        unique: true
    },
    aa_institute_code: {
        type: String,
        required: true,
    },
    is_active: {
        type: Boolean,
        required: true,
        default: 1
    },
    institution_name: {
        type: String,
        required: true
    },
    course_level: {
        type: String,
        required: true
    },
    field_of_study: {
        type: String,
        required: true
    },
    area_of_study: {
        type: String,
        required: true
    },
    sub_area_of_study: {
        type: String,
        required: true
    },
    course_type: {
        type: String,
        required: true
    },
    course_name: {
        type: String,
        required: true
    },
    course_duration: {
        type: String,
        required: true
    },
    intakes: {
        type: String,
        required: true
    },
    post_study_work_visa: {
        type: String,
        required: true
    },
    session_starts: {
        type: Date,
        required: false
    },
    program_overview: {
        type: String,
        required: false
    },
    admission_process: {
        type: String,
        required: false
    },
    no_of_units: {
        type: String,
        required: false
    },
    careers: {
        type: String,
        required: false
    },
    assessment: {
        type: String,
        required: false
    },
    progression: {
        type: String,
        required: false
    },
    total_elective_units: {
        type: String,
        required: false
    },
    units: {
        type: String,
        required: false
    },
    scholarships: {
        type: String,
        required: false
    },
    course_ranking: {
        type: String,
        required: false
    },
    url: {
        type: String,
        required: false
    },
    tags: {
        type: String,
        required: false
    }

});

const Courses = mongoose.model('courses', courseSchema);
module.exports = Courses;