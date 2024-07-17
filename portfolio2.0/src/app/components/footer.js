import { IoHomeOutline } from "react-icons/io5";
import { IoMdPerson,IoIosCall } from "react-icons/io";
import { BsBagFill } from "react-icons/bs";
import { FaTwitter,FaLinkedinIn,FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import Link from "next/link";


const Footer = () => {
    const currentYear = new Date().getFullYear();
    const yearsSince2019 = currentYear - 2019;
    return ( 
        <div className="bg-[#1C1C65] py-20 px-10  max-[470px]:px-5 flex flex-col gap-10 justify-center items-center">
            <div className="flex items-center gap-20 max-sm:gap-10  max-[540px]:gap-5  relative z-40 max-[760px]:text-[14px] max-[540px]:text-[12px]">
                <Link href="/#home">
                    <div className="flex items-center gap-4 max-[540px]:gap-2 cursor-pointer">
                        <IoHomeOutline className="text-lg" />
                        <p>Home</p>
                    </div>
                </Link>
                <Link href="/#about">
                    <div className="flex items-center gap-4 max-[540px]:gap-2 cursor-pointer">
                        <IoMdPerson className="text-lg" />
                        <p>About me</p>
                    </div>
                </Link>
                <Link href="/#work">
                    <div className="flex items-center gap-4 max-[540px]:gap-2 cursor-pointer">
                        <BsBagFill className="text-lg" />
                        <p>Work</p>
                    </div>
                </Link>
                <Link href="/#contact">
                    <div className="flex items-center gap-4 max-[540px]:gap-2 cursor-pointer">
                        <IoIosCall  className="text-lg"/>
                        <p>Contact</p>
                    </div>
                </Link>
            </div>
            <div className="flex items-center gap-20 max-sm:gap-10">
                <Link href='https://twitter.com/apostlelilsaint'>
                    <div className="bg-[#C13584] flex place-items-center justify-center h-8 w-8 max-[540px]:h-6 max-[540px]:w-6 rounded-full cursor-pointer">
                        < FaTwitter className="max-[540px]:text-[14px]"/>
                    </div>
                </Link>
                <Link href='https://linkedin.com/in/stephen-obisesan-898a5524b'>
                    <div className="bg-[#0077B5] flex place-items-center justify-center h-8 w-8  max-[540px]:h-6 max-[540px]:w-6 rounded-full cursor-pointer">
                        < FaLinkedinIn className="max-[540px]:text-[14px]"/>
                    </div>
                </Link>
                <Link href='mailto: saintobis11@gmail.com'>
                    <div className="bg-[#1DA1F2] flex place-items-center justify-center h-8 w-8  max-[540px]:h-6 max-[540px]:w-6 rounded-full cursor-pointer">
                        < MdOutlineEmail className="max-[540px]:text-[14px]"/>
                    </div>
                </Link>
                <Link href='https://github.com/Lilsaint11'>
                    <div className="bg-[#3B5998] flex place-items-center justify-center h-8 w-8  max-[540px]:h-6 max-[540px]:w-6 rounded-full cursor-pointer ">
                        < FaGithub className="max-[540px]:text-[14px]"/>
                    </div>
                </Link>
            </div>
            <div className="w-full border-t border-slate-400 mt-7  max-[540px]:mt-0  pt-12  max-[540px]:pt-6 flex justify-center items-center">
                <p className="text-[14px] text-slate-300"><span className="font-bold">{yearsSince2019}</span> years of experience building as a web developer</p>
            </div>
        </div>
     );
}
 
export default Footer;