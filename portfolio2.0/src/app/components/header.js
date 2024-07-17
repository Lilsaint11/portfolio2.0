import Link from "next/link";

const Header = () => {
    return ( 
        <div className="max-sm:pt-5 ">
            <img src="/images/Group 1184.png" alt="" className="absolute left-0 top-0 w-[100px]" />
            <div className="flex w-full gap-24 justify-center sm:py-10 px-20 max-[520px]:px-10  text-[14px] items-center relative z-50">
                <Link href="/" className="max-sm:hidden"><p>Home</p></Link>
                <Link href="/#about" className="max-sm:hidden"><p>About me</p></Link>
                <div>
                    <Link href="/"> <h1 className="text-[28px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#C961DE] to-[#477cdd] logo">Stephen's Folio</h1></Link>
                </div>
                <Link href="/#work" className="max-sm:hidden"><p>Work</p></Link>
                <Link href="/#contact" className="max-sm:hidden"><p>Contact</p></Link>
            </div>
            <div className="flex w-full gap-12 justify-center p-5 mt-5 text-[14px] items-center relative z-50 sm:hidden ">
                <Link href="/" className="font-bold "><p>Home</p></Link>
                <Link href="/#about" className=""><p>About me</p></Link>
                <Link href="/#work" className=""><p>Work</p></Link>
                <Link href="/#contact" className=""><p>Contact</p></Link>
            </div>
        </div>
     );
}
 
export default Header;