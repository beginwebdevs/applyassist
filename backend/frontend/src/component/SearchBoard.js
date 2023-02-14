import CourseCard from "./CourseCard";
import Progress from "./Progress";
import Footer from './Footer';
import { useEffect, useState } from 'react';
import axios from 'axios';
//import querystring from 'querystring';

function SearchBoard () {

   const [sidebarState, setSidebarState] = useState(false);

   const [courseData, setCourseData] = useState([]);
   const [totalCourse, setToatlCourse] = useState('');
   const [coureType, setCourseType] = useState('');
   const [fieldOfStudy, setFieldOfStudy] = useState('');
   const [areaOfStudy, setAreaOfStudy] = useState('');
   const [subAreaOfStudy, setSubAreaOfStudy] = useState('');
   const [intake, setIntake] = useState('');
   const [postStudyWorkVisa, setPostStudyWorkVisa] = useState('');

   const [searchCourseType, setSearchCourseType] = useState('');
   const [searchCourseTitle, setSearchCourseTitle] = useState('Bachelor in data science');
   const [searchCourseDest, setSearchCourseDest] = useState('');
 


   const handleSidebarState = () => {
      if(sidebarState){
         setSidebarState(false)
      }else{
         setSidebarState(true)
      }
   }
  

   useEffect(() => {
      const getCourseData = () => {
         let data = axios('http://localhost:5000/api/courses/allcourses', {
            method: 'GET'
         }).then(cdata => setCourseData(cdata.data))
      }
      getCourseData();
   },[])

   const filterCourse = () => {
      let queryStr = '?';
      let f_data = {};
      if(coureType) {
         f_data.course_type = coureType
      }
      if(fieldOfStudy) {
         f_data.field_of_study = fieldOfStudy
      }
      if(areaOfStudy) {
         f_data.area_of_study = areaOfStudy
      }

      if(subAreaOfStudy) {
         f_data.sub_area_of_study = subAreaOfStudy
      }
      if(intake) {
         f_data.intakes = intake
      }
      if(postStudyWorkVisa) {
         f_data.post_study_work_visa = postStudyWorkVisa
      }
      

      queryStr += new URLSearchParams(f_data).toString().replace(/\+/g, '%20');
      //queryStr = querystring.stringify(f_data)

      
      let c_url = `http://localhost:5000/api/courses/filtercourse${queryStr}`

      console.log(c_url);

      let data = axios(c_url, {
            method: 'GET'
         }).then(cdata => setCourseData(cdata.data))
   }

   const searchCourse = (e) => {
      e.preventDefault();
      let queryStr = '?';
      let s_data = {};
      if(searchCourseType) {
         s_data.course_type = searchCourseType
      }
      if(searchCourseTitle) {
         s_data.course_name = searchCourseTitle
      }
      if(searchCourseDest) {
         s_data.field_of_study = searchCourseDest
      }
      queryStr += new URLSearchParams(s_data).toString().replace(/\+/g, '%20');
      
      let s_url = `http://localhost:5000/api/courses/filtercourse${queryStr}`

      console.log(s_url);

      let data = axios(s_url, {
            method: 'GET'
         }).then(sdata => setCourseData(sdata.data))
   }

    return (
        <div>
            <div
              className="login-footer 
              pt-5 w-full
               h-[120px]">
               <div 
                className="top 
                justify-between 
                h-[120px] 
                items-center 
                bg-[#F5F5F5] flex 
                justify-between 
                max-w-screen-xl 
                mx-auto 
                rounded-xl px-8">
                 <div
                  className="profile-name">
                    <h1 className="text-2xl font-bold text-[#0A1C2B]">Hello John!</h1>
                    <p className="text-lg opacity-[.6]">Welcome back</p>
                  </div>
                  <div className="progess flex h-[100%] items-center">
                    <div className="progress-bar">
                       <Progress />
                    </div>
                    <div className="mx-6">
                        <p className="text-lg text-[#3045C5]">Complete your profile to <br/>unlock the <strong>Course Match Tool</strong></p>
                    </div>
                    <div className="w-[200px]">
                        <button className="bg-[#3045C5] text-[#ffffff] px-7 hover:px-3 hover:translate-x-2 text-center py-2 rounded-3xl">Complete Profile</button>
                    </div>
                  </div>
                </div>
            </div>


            <div
              className="login-footer 
              my-5 w-full">
               <div 
                className="top 
                justify-between  
                items-center 
                flex 
                justify-between 
                w-[full]
                mt-10
                mx-auto 
                rounded-xl">
                 <div
                  className="profile-name w-1/4 flex" id={sidebarState ? 'show_side_btn_con' : 'hide_side_btn_con'}>
                    <button 
                    id={sidebarState ? 'show_side_btn' : 'hide_side_btn'}
                     onClick={handleSidebarState}
                     className="bg-[#0E3454] text-[#ffffff]
                     px-[80px] 
                     py-2 mt-10
                     rounded-3xl"><i class="fa-solid fa-sliders"></i> Refine</button>
                  </div>
                  <div 
                   className="progess 
                   flex h-[100%] 
                   items-center
                   bg-[#FFF7F5]
                   w-3/4 px-3 py-4">
                     <form className="search-form w-full flex items-end justify-between">
                        <div 
                          className="big-input-box 
                          border 
                          border-[#0A1C2B]
                          py-2 px-4 rounded-3xl
                          w-2/4 bg-[#ffffff] rounded-2xl">
                            <select
                              onChange={(e) => setSearchCourseType(e.target.value)}
                              className="w-1/4 outline-none px-2">
                                <option value="Course">Course</option>
                                <option value="Institution">Institution</option>
                                <option value="Vocational">Vocational</option>
                                <option value="Hobby">Hobby</option>
                            </select>
                            <input
                             onChange={(e) => setSearchCourseTitle(e.target.value)}
                             className="w-3/4
                             outline-none
                             px-2 border-l border-[#0A1C2B]" type="text" value={searchCourseTitle} />
                        </div>
                        <div className="box">
                          <label className="form-label">Destination</label>
                          <div 
                          className="big-input-box 
                          border 
                          border-[#0A1C2B]
                          py-2 px-4 rounded-3xl
                          w-full bg-[#ffffff]">
                            <select
                              onChange={(e) => setSearchCourseDest(e.target.value)}
                              className="w-full outline-none px-4 w-full">
                                <option value="Australia">Australia</option>
                                <option value="Usa">USA</option>
                               
                            </select>
                        </div>
                        </div>
                        <div 
                          className="big-input-box 
                          w-1/4 bg-[#ffffff]">
                           <input type="submit" 
                            onClick={searchCourse} 
                            className="bg-primary text-[#ffffff] w-full
                            
                             rounded-3xl py-2" value="Search" />
                        </div>
                     </form>
                  </div>
                </div>
            </div>


            <div
              className="login-footer 
               w-full
               ">
               <div 
                className="top 
                justify-between
                flex 
                justify-between 
                w-[full] 
                mx-auto 
              ">

<div
                  className="sidebar transition-all duration-500 pr-6" id={sidebarState ? 'shidebar_show' : 'sidebar_hide'}>
                    <div 
                     className="sidebar-inner
                     bg-[#F4FDFE] rounded-xl" id="active-sidebar">
                        
                        <div className="w-full relative overflow-hidden">
                           <input 
                             type="checkbox" checked
                             className="
                             peer
                             absolute top-0 inset-x-0 
                             w-full h-12
                             opacity-0 z-10 cursor-pointer
                             "
                              />
                           <div
                             className="h-12 w-full flex items-center">
                              <h1 className="text-lg font-semibold">Course</h1>
                           </div>
                           <div 
                             className="
                             absolute top-3 right-3
                             transition-transform 
                             duration-500
                             peer-checked:rotate-90
                             ">
                             <i class="fa-solid fa-chevron-right"></i>
                           </div>
                           <div className="
                              overflow-hidden
                              transition-all duration-500 
                              h-0 peer-checked:h-auto border-b-2">
                            <div>


                              <div className="box mb-4">
                                 <label className="form-label">Course Type</label>
                                 <div 
                                    className="big-input-box 
                                    border 
                                    border-[#0A1C2B]
                                    py-1 px-4 rounded-3xl
                                    w-full ">
                                       <select onChange={(e) => {setCourseType(e.target.value)}}
                                          className="w-full outline-none w-full bg-[transparent]">
                                            <option value="Course">Course</option>
                                            <option value="Institution">Institution</option>
                                            <option value="Vocational">Vocational</option>
                                            <option value="Hobby">Hobby</option>
                                        </select>
                                        
                                    </div>
                                </div>

                                <div className="box mb-4">
                                 <label className="form-label">Field Of Study</label>
                                 <div 
                                    className="big-input-box 
                                    border 
                                    border-[#0A1C2B]
                                    py-1 px-4 rounded-3xl
                                    w-full ">
                                       <select
                                          onChange={(e) => setFieldOfStudy(e.target.value)}
                                          className="w-full outline-none w-full bg-[transparent]">
                                            <option value="Science">Science</option>
                                            <option value="Management">Management</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="box mb-4">
                                 <label className="form-label">Area Of Study</label>
                                 <div 
                                    className="big-input-box 
                                    border 
                                    border-[#0A1C2B]
                                    py-1 px-4 rounded-3xl
                                    w-full ">
                                       <select
                                          onChange={(e) => setAreaOfStudy(e.target.value)}
                                          className="w-full outline-none w-full bg-[transparent]">
                                            <option value="Computer Science">Computer Science</option>
                                            <option value="Business Management">Business Management</option>
                                            <option value="Hotel Management">Hotel Management</option>
                                        </select>
                                    </div>
                                </div>
  

                                <div className="box mb-4">
                                 <label className="form-label">Subarea Of Study</label>
                                 <div 
                                    className="big-input-box 
                                    border 
                                    border-[#0A1C2B]
                                    py-1 px-4 rounded-3xl
                                    w-full ">
                                       <select
                                          onChange={(e) => setSubAreaOfStudy(e.target.value)}
                                          className="w-full outline-none w-full bg-[transparent]">
                                            <option value="Artificial Intelligence">Artificial Intelligence</option>
                                            <option value="Data Science">Data Science</option>
                                            <option value="Business Studies">Business Studies</option>
                                            
                                        </select>
                                    </div>
                                </div>  




                                <div className="box mb-4">
                                 <label className="form-label">Course Duration</label>
                                 <div 
                                    className="big-input-box 
                                    py-1
                                    w-full ">
                                      <input type='range' className="w-full h-[2px]" />
                                    </div>
                                </div>



                                

                             
                                <div className="box mb-4">
                                 <label className="form-label">Intake</label>
                                 <div 
                                    className="big-input-box 
                                    border 
                                    border-[#0A1C2B]
                                    py-1 px-4 rounded-3xl
                                    w-full ">
                                       <select
                                          onChange={(e) => setIntake(e.target.value)}
                                          className="w-full outline-none w-full bg-[transparent]">
                                            <option value="July, August">July, August</option>
                                            <option value="March, April">March, April</option>
                                            
                                        </select>
                                    </div>
                                </div>

                                <div className="box mb-4">
                                 <label className="form-label">Post-Study Work Visa</label>
                                 <div 
                                    className="big-input-box 
                                    flex flex-wrap
                                    py-1
                                    w-full ">
                                      <div className="w-1/2">
                                        <input type="radio" value="1 year" onClick={(e) => setPostStudyWorkVisa(e.target.value)} name="post-study" id="1y" />
                                        <label for="1y">1 Year</label>
                                      </div>
                                      <div className="w-1/2">
                                        <input type="radio" value="2 year" onChange={(e) => setPostStudyWorkVisa(e.target.value)} name="post-study" id="2y" />
                                        <label for="2y">2 Year</label>
                                      </div>
                                      <div className="w-1/2">
                                        <input type="radio" value="3 year" onChange={(e) => setPostStudyWorkVisa(e.target.value)} name="post-study" id="3y" />
                                        <label for="3y">3 Year</label>
                                      </div>
                                      <div className="w-1/2">
                                        <input type="radio" value="4 year" onChange={(e) => setPostStudyWorkVisa(e.target.value)} name="post-study" id="4y" />
                                        <label for="4y">4 Year</label>
                                      </div>
                                    </div>
                                </div>
                           </div>
                        </div>

                    </div>

                    <div className="w-full relative overflow-hidden">
                           <input 
                             type="checkbox"
                             className="
                             peer
                             absolute top-0 inset-x-0 
                             w-full h-12
                             opacity-0 z-10 cursor-pointer
                             "
                              />
                           <div
                             className="h-12 w-full flex items-center">
                              <h1 className="text-lg font-semibold">Admission Criteria</h1>
                           </div>
                           <div 
                             className="
                             absolute top-3 right-3
                             transition-transform 
                             duration-500
                             peer-checked:rotate-90
                             ">
                             <i class="fa-solid fa-chevron-right"></i>
                           </div>
                           <div className="
                              overflow-hidden
                              transition-all duration-500 
                              h-0 peer-checked:h-auto border-b-2">
                            <div>


                              <div className="box mb-4">
                                 <label className="form-label">Nationality</label>
                                 <div 
                                    className="big-input-box 
                                    border 
                                    border-[#0A1C2B]
                                    py-1 px-4 rounded-3xl
                                    w-full ">
                                       <select
                                          className="w-full outline-none w-full bg-[transparent]">
                                            <option>India</option>
                                            <option>Nepal</option>
                                            <option>Bangladesh</option>
                                            <option>Bhutan</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="box mb-4">
                                 <label className="form-label">Province of Residency</label>
                                 <div 
                                    className="big-input-box 
                                    border 
                                    border-[#0A1C2B]
                                    py-1 px-4 rounded-3xl
                                    w-full ">
                                       <select
                                          className="w-full outline-none w-full bg-[transparent]">
                                            <option>India</option>
                                            <option>Nepal</option>
                                            <option>Bangladesh</option>
                                            <option>Bhutan</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="box mb-4">
                                 <label className="form-label">Education Country</label>
                                 <div 
                                    className="big-input-box 
                                    border 
                                    border-[#0A1C2B]
                                    py-1 px-4 rounded-3xl
                                    w-full ">
                                       <select
                                          className="w-full outline-none w-full bg-[transparent]">
                                             <option>India</option>
                                            <option>Nepal</option>
                                            <option>Bangladesh</option>
                                            <option>Bhutan</option>
                                        </select>
                                    </div>
                                </div>

                          <div className="w-full relative overflow-hidden">
                           <input 
                             type="checkbox"
                             className="
                             peer
                             absolute top-0 inset-x-0 
                             w-full h-12
                             opacity-0 z-10 cursor-pointer
                             "
                              />
                           <div
                             className="h-12 w-full flex items-center">
                              <h1 className="form-label">GPA Scores</h1>
                           </div>
                           <div 
                             className="
                             absolute top-3 right-3
                             p-[2px] flex justify-start
                             transition-transform 
                             duration-500 w-[40px] h-[22px] 
                             border border-[#0A1C2B] rounded-[10px] [&>div]:bg-[#0A1C2B] peer-checked:[&>div]:bg-[#ffffff]
                             peer-checked:bg-primary peer-checked:border-primary peer-checked:justify-end transition-all duration-400
                             ">
                              <div className="
                               w-[16px] h-[16px] bounded-[50%] block 
                               rounded-[50%] transition-all duration-400
                              ">

                              </div>
                           </div>
                           <div className="
                              overflow-hidden
                              transition-all duration-500 
                              h-0 peer-checked:h-auto">
                            <div>
                                
                            <div className="box mb-4">
                                 <label className="form-label">Verbal</label>
                                 <div 
                                    className="big-input-box 
                                    border 
                                    border-[#0A1C2B]
                                    py-1 px-4 rounded-3xl
                                    w-full ">
                                       <select
                                          className="w-full outline-none w-full bg-[transparent]">
                                             <option>India</option>
                                            <option>Nepal</option>
                                            <option>Bangladesh</option>
                                            <option>Bhutan</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="box mb-4">
                                 <label className="form-label">Quantitative</label>
                                 <div 
                                    className="big-input-box 
                                    border 
                                    border-[#0A1C2B]
                                    py-1 px-4 rounded-3xl
                                    w-full ">
                                       <select
                                          className="w-full outline-none w-full bg-[transparent]">
                                             <option>India</option>
                                            <option>Nepal</option>
                                            <option>Bangladesh</option>
                                            <option>Bhutan</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="box mb-4">
                                 <label className="form-label">Writting</label>
                                 <div 
                                    className="big-input-box 
                                    border 
                                    border-[#0A1C2B]
                                    py-1 px-4 rounded-3xl
                                    w-full ">
                                       <select
                                          className="w-full outline-none w-full bg-[transparent]">
                                             <option>India</option>
                                            <option>Nepal</option>
                                            <option>Bangladesh</option>
                                            <option>Bhutan</option>
                                        </select>
                                    </div>
                                </div>


                                <div className="box mb-4">
                                 <label className="form-label">Overall</label>
                                 <div 
                                    className="big-input-box 
                                    border 
                                    border-[#0A1C2B]
                                    py-1 px-4 rounded-3xl
                                    w-full ">
                                       <select
                                          className="w-full outline-none w-full bg-[transparent]">
                                             <option>India</option>
                                            <option>Nepal</option>
                                            <option>Bangladesh</option>
                                            <option>Bhutan</option>
                                        </select>
                                    </div>
                                </div>



                               

                           </div>
                        </div>

                    </div>

                    <div className="w-full relative overflow-hidden">
                           <input 
                             type="checkbox"
                             className="
                             peer
                             absolute top-0 inset-x-0 
                             w-full h-12
                             opacity-0 z-10 cursor-pointer
                             "
                              />
                           <div
                             className="h-12 w-full flex items-center">
                              <h1 className="form-label">GRE Scores</h1>
                           </div>
                           <div 
                             className="
                             absolute top-3 right-3
                             p-[2px] flex justify-start
                             transition-transform 
                             duration-500 w-[40px] h-[22px] 
                             border border-[#0A1C2B] rounded-[10px] [&>div]:bg-[#0A1C2B] peer-checked:[&>div]:bg-[#ffffff]
                             peer-checked:bg-primary peer-checked:border-primary peer-checked:justify-end transition-all duration-400
                             ">
                              <div className="
                               w-[16px] h-[16px] bounded-[50%] block 
                               rounded-[50%] peer-checked:bg-[#ffffff] transition-all duration-400
                              ">

                              </div>
                           </div>
                           <div className="
                              overflow-hidden
                              transition-all duration-500 
                              h-0 peer-checked:h-auto">
                            <div>
                            <div className="box mb-4">
                                 <label className="form-label">Verbal</label>
                                 <div 
                                    className="big-input-box 
                                    border 
                                    border-[#0A1C2B]
                                    py-1 px-4 rounded-3xl
                                    w-full ">
                                       <select
                                          className="w-full outline-none w-full bg-[transparent]">
                                             <option>India</option>
                                            <option>Nepal</option>
                                            <option>Bangladesh</option>
                                            <option>Bhutan</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="box mb-4">
                                 <label className="form-label">Quantitative</label>
                                 <div 
                                    className="big-input-box 
                                    border 
                                    border-[#0A1C2B]
                                    py-1 px-4 rounded-3xl
                                    w-full ">
                                       <select
                                          className="w-full outline-none w-full bg-[transparent]">
                                             <option>India</option>
                                            <option>Nepal</option>
                                            <option>Bangladesh</option>
                                            <option>Bhutan</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="box mb-4">
                                 <label className="form-label">Writting</label>
                                 <div 
                                    className="big-input-box 
                                    border 
                                    border-[#0A1C2B]
                                    py-1 px-4 rounded-3xl
                                    w-full ">
                                       <select
                                          className="w-full outline-none w-full bg-[transparent]">
                                             <option>India</option>
                                            <option>Nepal</option>
                                            <option>Bangladesh</option>
                                            <option>Bhutan</option>
                                        </select>
                                    </div>
                                </div>


                                <div className="box mb-4">
                                 <label className="form-label">Overall</label>
                                 <div 
                                    className="big-input-box 
                                    border 
                                    border-[#0A1C2B]
                                    py-1 px-4 rounded-3xl
                                    w-full ">
                                       <select
                                          className="w-full outline-none w-full bg-[transparent]">
                                             <option>India</option>
                                            <option>Nepal</option>
                                            <option>Bangladesh</option>
                                            <option>Bhutan</option>
                                        </select>
                                    </div>
                                </div>
                           </div>
                        </div>

                    </div>

                    <div className="w-full relative overflow-hidden">
                           <input 
                             type="checkbox"
                             className="
                             peer
                             absolute top-0 inset-x-0 
                             w-full h-12
                             opacity-0 z-10 cursor-pointer
                             "
                              />
                           <div
                             className="h-12 w-full flex items-center">
                              <h1 className="form-label">GMAT Scores</h1>
                           </div>
                           <div 
                             className="
                             absolute top-3 right-3
                             p-[2px] flex justify-start
                             transition-transform 
                             duration-500 w-[40px] h-[22px] 
                             border border-[#0A1C2B] rounded-[10px] [&>div]:bg-[#0A1C2B] peer-checked:[&>div]:bg-[#ffffff]
                             peer-checked:bg-primary peer-checked:border-primary peer-checked:justify-end transition-all duration-400
                             ">
                              <div className="
                               w-[16px] h-[16px] bounded-[50%] block 
                               rounded-[50%] transition-all duration-400
                              ">

                              </div>
                           </div>
                           <div className="
                              overflow-hidden
                              transition-all duration-500 
                              h-0 peer-checked:h-auto">
                            <div>
                            <div className="box mb-4">
                                 <label className="form-label">Verbal</label>
                                 <div 
                                    className="big-input-box 
                                    border 
                                    border-[#0A1C2B]
                                    py-1 px-4 rounded-3xl
                                    w-full ">
                                       <select
                                          className="w-full outline-none w-full bg-[transparent]">
                                             <option>India</option>
                                            <option>Nepal</option>
                                            <option>Bangladesh</option>
                                            <option>Bhutan</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="box mb-4">
                                 <label className="form-label">Quantitative</label>
                                 <div 
                                    className="big-input-box 
                                    border 
                                    border-[#0A1C2B]
                                    py-1 px-4 rounded-3xl
                                    w-full ">
                                       <select
                                          className="w-full outline-none w-full bg-[transparent]">
                                             <option>India</option>
                                            <option>Nepal</option>
                                            <option>Bangladesh</option>
                                            <option>Bhutan</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="box mb-4">
                                 <label className="form-label">Writting</label>
                                 <div 
                                    className="big-input-box 
                                    border 
                                    border-[#0A1C2B]
                                    py-1 px-4 rounded-3xl
                                    w-full ">
                                       <select
                                          className="w-full outline-none w-full bg-[transparent]">
                                             <option>India</option>
                                            <option>Nepal</option>
                                            <option>Bangladesh</option>
                                            <option>Bhutan</option>
                                        </select>
                                    </div>
                                </div>


                                <div className="box mb-4">
                                 <label className="form-label">Overall</label>
                                 <div 
                                    className="big-input-box 
                                    border 
                                    border-[#0A1C2B]
                                    py-1 px-4 rounded-3xl
                                    w-full ">
                                       <select
                                          className="w-full outline-none w-full bg-[transparent]">
                                             <option>India</option>
                                            <option>Nepal</option>
                                            <option>Bangladesh</option>
                                            <option>Bhutan</option>
                                        </select>
                                    </div>
                                </div>
                           </div>
                        </div>

                    </div>
                                
                           </div>
                        </div>

                    </div>

                    <div className="w-full relative overflow-hidden">
                           <input 
                             type="checkbox"
                             className="
                             peer
                             absolute top-0 inset-x-0 
                             w-full h-12
                             opacity-0 z-10 cursor-pointer
                             "
                              />
                           <div
                             className="h-12 w-full flex items-center">
                              <h1 className="text-lg font-semibold">Finance</h1>
                           </div>
                           <div 
                             className="
                             absolute top-3 right-3
                             transition-transform 
                             duration-500
                             peer-checked:rotate-90
                             ">
                             <i class="fa-solid fa-chevron-right"></i>
                           </div>
                           <div className="
                              overflow-hidden
                              transition-all duration-500 
                              h-0 peer-checked:h-auto border-b-2">
                            <div>
                                <div className="box mb-4">
                                 <div 
                                    className="big-input-box 
                                    flex flex-wrap
                                    py-1
                                    w-full ">
                                      <div className="w-full">
                                        <input type="radio" name="post-study" id="1y" />
                                        <label for="1y">Scholarship</label>
                                      </div>
                                    </div>
                                </div>
                           </div>
                        </div>

                    </div>
                    <div className="flex justify-between py-6 items-center">
                     <button className="text-sm">Clear<br/>All</button>
                     <button className="text-sm text-[#ffffff] bg-primary py-3 px-6 rounded-3xl" onClick={filterCourse}>Apply Filter</button>
                    </div>
                  </div>
                  
                  </div>
            
                 
              <div className="h-[auto]" id={sidebarState ? 'show_side_left' : 'hide_side_left'}>
                <div 
                 className="top-filter flex justify-between">
                  <div 
                   className="left flex items-center">
                    <p className="text-sm font-semibold">Showing 234 total results | <span className="opacity-[.5]">Page 1 of 34</span></p>
                    <button className="mx-8 text-sm font-semibold border border-[#0A1C2B] px-4 py-1 rounded-3xl"><i class="fa-solid fa-code-compare"></i> Compare</button>
                   </div>
                   <div className="right">
                    <label className="text-sm font-semibold mx-4">Sort By</label>
                    <select className="text-sm font-semibold outline-none border-b-[2px] border-primary">
                      <option>Feature</option>
                    </select>
                   </div>
                 </div>

                 <div className="card-container my-4 grid grid-cols-2 gap-3">
                  
                  {
                     courseData.map((d) => {
                        return <CourseCard data={d} />
                     })
                  }
                 
                 </div>

              </div>

                
               
            </div>

            
            <Footer />
          
       
       </div>
      
       </div>
    )
}

export default SearchBoard;