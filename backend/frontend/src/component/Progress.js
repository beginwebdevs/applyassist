

function Progress () {
    return (
        <div 
         className="progress 
         w-[110px] 
         h-[110px] 
         relative">
            <div 
             className="outer 
             w-[110px] 
             h-[110px] 
             bg-[#ffffff] 
             rounded-[50%]
             p-[10px] shadow">
                <div
                 className="inner
                 w-[90px] 
                 h-[90px] 
                 rounded-[50%] flex justify-center items-center flex-col">
                    <h1 className="text-[#3045C5] font-bold text-2xl">40 %</h1>
                    <p className="text-[#3045C5] font-bold text-xs">Remaining</p>
                 </div>
             </div>
             <svg 
               className="absolute top-0 left-0"
               xmlns="http://www.w3.org/2000/svg" version="1.1" width="110px" height="110px">
                 <defs>
                   <linearGradient id="GradientColor">
                     <stop offset="0%" stop-color="#e91e63" />
                     <stop offset="100%" stop-color="#673ab7" />
                    </linearGradient>
                 </defs>
                    <circle
                     className="fill-[transparent]
                     stroke-[#3045C5] stroke-[10px]" 
                     strokeDasharray={322}
                     strokeDashoffset={125}
                     cx="55" cy="55" r="50" stroke-linecap="round" />
                </svg>
         </div>
    )
}

export default Progress;