import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({name,image,stacks,webLink,githubLink}) => {
    return ( 
        <div  className='w-[300px] bg-[#B5F9FD] rounded-2xl backdrop-blur-xl bg-opacity-30  flex flex-col justify-between '>
            <div className='px-5 py-5 flex justify-center items-center relative'>
                <img src={image} alt="" className='w-full h-[150px] rounded-md'  />
                <div className="absolute rounded-tl-2xl rounded-tr-2xl bg-[rgba(0,0,0,0.4)]  top-0 left-0 h-full w-full flex flex-col text-center justify-center items-center ipad:gap-10 md:gap-20 sm:gap-10 gap-5 opacity-0 hover:opacity-100 transition duration-300">             
                    <span className=" text-[12px] flex gap-1  w-full bottom-5 justify-center">
                        <a href={ webLink } className=" flex justify-center items-center gap-1 text-black px-3 py-1 w-28 bg-white bg-opacity-70 rounded-full font-semibold shadow-sm shadow-slate-900">
                            
                            <button> Website</button>
                            <FaExternalLinkAlt className="text-[12px]"/>
                        </a>
                        <a href={ githubLink } className=" flex justify-center items-center gap-1 text-white px-3 py-1 w-28 bg-black rounded-full font-semibold shadow-sm shadow-slate-500">
                            <button>Github repo</button>
                            <FaExternalLinkAlt className="text-[12px]"/>
                        </a>
                    </span>
                </div>
            </div>
            <div className=' bg-[#000000] bg-opacity-50 backdrop-blur-2xl py-1 px-2 rounded-bl-2xl rounded-br-2xl flex flex-col justify-center items-center'>
                <p className=' border-b border-white w-full text-center pb-1  text-[13px] font-bold'>{name}</p>
                <div className='flex gap-2 text-[12px] mt-1'>
                {stacks.map(stack => (
                    <p>{stack}</p>
                ))}
                </div>
            </div>
        </div>
     );
}
 
export default ProjectCard;