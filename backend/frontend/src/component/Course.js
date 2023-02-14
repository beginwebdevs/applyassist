import rmit from '../assets/images/rmit.png';
import univercity01 from '../assets/images/univercity01.png';
import univercity02 from '../assets/images/univercity02.png';
import univercity03 from '../assets/images/univercity03.png';
import univercity04 from '../assets/images/univercity04.png';
import univercity05 from '../assets/images/univercity05.png';
import Bachelor from '../assets/icons/Bachelor.svg';
import Watch from '../assets/icons/Watch.svg';
import Dollar from '../assets/icons/Dollar.svg';
import Home from '../assets/icons/Home.svg';
import Exc from '../assets/icons/Exc.svg';
import SililarCourse from './SimailarCourse';

function Course () {
    return (
        <div className="courseWrapper w-full">
            <div className='px-6 py-4'>
                <p><i class="fa-solid fa-arrow-left"></i> Search Board <i class="fa-solid fa-chevron-right"></i> 
                Australia <i class="fa-solid fa-chevron-right"></i> 
                RMIT University <i class="fa-solid fa-chevron-right"></i> 
                <strong>Bachelor Of Data Science</strong></p>
            </div>
            <div className="course w-full flex">
                <div className="sidebar w-[280px]">
                    <div className="universicy bg-[#DBF9FB] py-8 px-4 rounded-md w-full">
                        <div className="intro text-center">
                            <img src={rmit} alt='logo' className='w-[150px] mx-auto mb-6' />
                            <div className='heading mb-6'>
                               <h1 className='text-xl font-bold text-secondary'>RMIT University</h1>
                               <span className='text-sm font-[500] text-[#7C878E] mt-[-10px]'>Melbourne, Victoria</span>
                            </div>
                            <div className='map'>
                                <p className='text-[#7C878E] font-[500] text-md'><i class="fa-solid fa-map-location"></i> Melbourne, Victoria</p>
                            </div>
                        </div>
                        <div className='info mt-12'>
                            <h1 className='text-lg font-[500] text-secondary'>About</h1>
                            <p className='text-[#586A78] text-md leading-[19px]'>RMIT is a world leader in Art and Design; Architecture; Education; Engineering; Development; Computer Science and Information Systems; Business and Management; and Communication and Media Studies.</p>
                        </div>
                        <div className='button mt-12 text-center'>
                            <button className='px-6 py-2 border border-primary bg-[#ffffff] text-primary text-sm font-[500] rounded-3xl hover:bg-primary hover:text-[#ffffff] cursor-pointer'>Explore University</button>
                        </div>
                        <div className='website text-center mt-12'>
                            <a className='text-sm font-bold text-[#0A1C2B]'>Website</a>
                        </div>
                    </div>
                </div>
                <div className="main pl-6 w-full">
                    <div className='main-inner'>
                        <div className='heading flex justify-between w-[90%]'>
                            <div className='left'>
                                <h1 className='text-2xl font-bold text-[#0A1C2B]'>Bachelor of Data Science</h1>
                                <span className='text-xs text-[#7C878E]'>Full-time | 3 Years Bachelor's Degree</span>
                            </div>
                            <div className='right flex items-center'>
                                <div className='innerleft mr-4'>
                                    <button className='bg-primary text-[#ffffff] py-2 px-6 rounded-3xl'>Start Application</button>
                                </div>
                                <div className='inner-right'>
                                    <span className='text-xs text-[#7C878E]'>Application Fee</span>
                                    <p className='text-md text-decondary font-bold'>$ 149 AUD</p>
                                </div>
                            </div>
                        </div>

                        <div className='gallery flex space-4 mt-2'>
                            <div className='item1 w-1/2 pr-2'>
                                <img src={univercity01} alt='univercity01' />
                            </div>
                            <div className='flex flex-wrap w-1/2 pl-2'>
                            <div className='item1 w-1/2 pb-2 pr-2'>
                                <img src={univercity02} alt='univercity01' />
                            </div>
                            <div className='item1 w-1/2 pb-2 pl-2'>
                                <img src={univercity03} alt='univercity01' />
                            </div>
                            <div className='item1 w-1/2 pt-2 pr-2'>
                                <img src={univercity04} alt='univercity01' />
                            </div>
                            <div className='item1 w-1/2 pt-2 pl-2'>
                                <img src={univercity05} alt='univercity01' />
                            </div>
                            </div>
                        </div>

                        <div className='course-detail flex mt-8'>
                            <div className='left w-[70%] pl-4'>
                                <h1 className='text-xl font-[600]'>Course Summary</h1>
                                <p className='text-sm mt-4'>In the Bachelor of Data Science, you'll develop enhanced problem-solving, 
                                    critical thinking, and communication skills that will carry you through 
                                    an interesting and flexible career in a range of industries and 
                                    organisations.
                                </p>
                                <p className='text-sm mt-4'> 
                                    Data science is driving economic growth, public policy and corporate 
                                    strategy worldwide, and the ability to manage and interpret data is 
                                    rapidly becoming an essential skill in many organisations and industries.
                                    The Bachelor of Data Science has been designed to prepare you for a career
                                    in this emerging and expansive field.
                                </p>
                                <p className='text-sm mt-4'>
                                    As a student of this degree, you'll 
                                    build a practical understanding of recent developments in computer
                                    science, information technology and statistics and be able to apply 
                                    relevant mathematical and statistical knowledge and methods to new and 
                                    ongoing problems.
                                </p>
                                <div className='key-point flex justify-between items-center mt-12'>
                                    <div className='btn'>
                                      <button className='bg-primary text-[#ffffff] py-2 px-6 rounded-3xl'>Start Application</button>
                                    </div>
                                    <div className='icon-box flex items-center'>
                                        <div className='icon text-[#AEAEAE] mr-4'>
                                          <i class="fa-solid fa-graduation-cap"></i>
                                        </div>
                                        <div className='text'>
                                            <span className='text-xs text-[#AEAEAE]'>Course Start</span>
                                            <p className='text-[#0A1C2B] text-sm font-bold'>March 2023</p>
                                        </div>
                                    </div>
                                    <div className='icon-box flex items-center'>
                                        <div className='icon text-[#AEAEAE] mr-4'>
                                          <i class="fa-solid fa-calendar-days"></i>
                                        </div>
                                        <div className='text'>
                                            <span className='text-xs text-[#AEAEAE]'>Intake Months</span>
                                            <p className='text-[#0A1C2B] text-sm font-bold'>March, July</p>
                                        </div>
                                    </div>
                                    <div className='icon-box flex items-center'>
                                        <div className='icon text-[#AEAEAE] mr-4'>
                                          <i class="fa-regular fa-timer"></i>
                                        </div>
                                        <div className='text'>
                                            <span className='text-xs text-[#AEAEAE]'>Deadline</span>
                                            <p className='text-[#0A1C2B] text-sm font-bold'>February 2023</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='right pl-6 w-[30%]'>
                                <h1 className='text-xl font-[600]'>Course Highlights</h1>
                            <div className="mt-6 bg-[#E2E2E2] w-full p-6 rounded-lg">
                                    <div className='icon-box flex items-center mb-2'>
                                        <div className='icon text-[#AEAEAE] mr-4'>
                                          <img src={Bachelor} className='w-[17px]' alt='icon' />
                                        </div>
                                        <div className='text'>
                                            <span className='text-xs text-[#AEAEAE]'>Qualification</span>
                                            <p className='text-[#0A1C2B] text-md font-bold'>Bachelor Degree</p>
                                        </div>
                                    </div>

                                    <div className='icon-box flex items-center mb-2'>
                                        <div className='icon text-[#AEAEAE] mr-4'>
                                          <img src={Watch} className='w-[17px]' alt='icon' />
                                        </div>
                                        <div className='text'>
                                            <span className='text-xs text-[#AEAEAE]'>Course Duration</span>
                                            <p className='text-[#0A1C2B] text-md font-bold'>3 Years</p>
                                        </div>
                                    </div>

                                    <div className='icon-box flex items-center mb-2'>
                                        <div className='icon text-[#AEAEAE] mr-4'>
                                          <img src={Dollar} className='w-[12px]' alt='icon' />
                                        </div>
                                        <div className='text'>
                                            <span className='text-xs text-[#AEAEAE]'>Tuition Fee</span>
                                            <p className='text-[#0A1C2B] text-md font-bold'>Tuition Fee</p>
                                        </div>
                                    </div>

                                    <div className='icon-box flex items-center mb-2'>
                                        <div className='icon text-[#AEAEAE] mr-4'>
                                          <img src={Home} className='w-[20px]' alt='icon' />
                                        </div>
                                        <div className='text'>
                                            <span className='text-xs text-[#AEAEAE]'>Cost of Living</span>
                                            <p className='text-[#0A1C2B] text-md font-bold'>$ 21,500 AUD / Year</p>
                                        </div>
                                    </div>

                                    <div className='icon-box flex items-center mb-2'>
                                        <div className='icon text-[#AEAEAE] mr-4'>
                                          <img src={Exc} className='w-[20px]' alt='icon' />
                                        </div>
                                        <div className='text'>
                                            <span className='text-xs text-[#AEAEAE]'>Application Fee</span>
                                            <p className='text-[#0A1C2B] text-md font-bold'>$ 149 AUD</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>


                        <div className='requirement flex justify-between mt-3'>
                            <div className='addinission w-[30%]'>
                                <h1 className='text-md font-bold'>Admission Requirements</h1>
                                <div className='border border-[#707070] rounded-lg p-2 flex justify-between item-center w-[100%]'>
                                    <div  className='border-r border-r-[#707070] w-[65%]'>
                                        <span className='text-xs text-[#7C878E]'>Minimum Level of Education</span>
                                        <p className='text-md font-bold'>Grade 12/ High School</p>
                                    </div>
                                    <div>
                                        <span className='text-xs text-[#7C878E]'>Minimum GPA</span>
                                        <p className='text-md font-bold'>65%</p>
                                    </div>
                                </div>
                            </div>

                            <div className='addinission w-[30%]'>
                                <h1 className='text-md font-bold'>English Requirements</h1>
                                <div className='border border-[#707070] rounded-lg p-2 flex justify-between item-center w-[100%]'>
                                    <div  className='border-r border-r-[#707070] w-[25%]'>
                                        <span className='text-xs text-[#7C878E]'>IELTS</span>
                                        <p className='text-md font-bold'>6.5</p>
                                    </div>
                                    <div className='w-[28%] border-r border-r-[#707070]'>
                                        <span className='text-xs text-[#7C878E]'>TOEFL Internet</span>
                                        <p className='text-md font-bold'>79</p>
                                    </div>
                                    <div>
                                        <span className='text-xs text-[#7C878E]'>PTE</span>
                                        <p className='text-md font-bold'>58</p>
                                    </div>
                                </div>
                            </div>

                            <div className='addinission w-[30%]'>
                                <h1 className='text-md font-bold'>Scholarship</h1>
                                <div className='border border-[#707070] rounded-lg p-2 flex justify-between item-center w-[100%]'>
                                    <div  className='border-r border-r-[#707070] w-[50%]'>
                                        <span className='text-xs text-[#7C878E]'>Minimum Stipend</span>
                                        <p className='text-md font-bold'>Minimum Stipend</p>
                                    </div>
                                    <div>
                                        <span className='text-xs text-[#7C878E]'>Maximum Stipend</span>
                                        <p className='text-md font-bold'>$ 1,000/ Yr</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className='Similar Course mt-10'>
                            <div className='flex items-center'>
                                <h1 className='text-lg font-bold mr-4'>Similar Course</h1>
                                <a className='text-primary underline'>View All</a>
                            </div>
                            <div className='grid grid-cols-2 gap-3 mt-4'>
                                <SililarCourse title="Master of Information and Communications Technology (Advanced)" />
                                <SililarCourse title="Master of Information and Communications Technology (Advanced)" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Course;