import  place from '../assets/icons/place.svg';

function SililarCourse ({ title }) {
    return (

        <div className="card">
            <div className="inner relative border border-[#AEAEAE] rounded-lg hover:border-[2px] border-[#7C878E] p-4">
                <p className="text-sm">3-Year Bachelor's Degree</p>
                <div className="card-title h-[50px] my-6">
                    <h1 className="text-xl font-semibold">{ title }</h1>
                </div>
                <div className="university flex w-full mb-4">
                    <p className="text-md font-semibold text-primary">RMIT University</p>
                    <span className="flex mx-6 font-semibold"><img className="mx-2" src={place} /> Melbourne, Victoria</span>
                </div>
                <div className="fees flex w-full mb-4">
                    <div className="left w-1/2">
                        <span className="text-xs opacity-[.5]">Tuition</span>
                        <p className="text-sm">AUD $ 36,480 per year</p>
                    </div>
                    <div className="right">
                        <span className="text-xs opacity-[.5]">Application Fee</span>
                        <p className="text-sm">AUD $ 300</p>
                    </div>
                </div>
                <div className='btn'>
                    <button className="text-sm font-semibold rounded-3xl hover:text-[#ffffff] mr-4 hover:bg-primary text-primary py-1 px-4 border-[2px] border-primary">Start Application</button>
                    <button className="text-sm font-semibold rounded-3xl mr-4 hover:bg-[#FFC9CF] text-primary py-2 px-6">Program Details</button>
                </div>
                <div className="action flex absolute top-4 right-4">
                    <span className="w-[30px] h-[30px] hover:bg-[#7C878E] cursor-pointer bg-[#AEAEAE] flex rounded-[50%] text-[#ffffff] justify-center items-center"><i class="fa-solid fa-bookmark"></i></span>
                </div>
            </div>
        </div>
    )
}
export default SililarCourse;