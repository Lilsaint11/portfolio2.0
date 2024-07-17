const About = () => {
    return ( 
        <div className="flex  justify-center relative py-20 max-sm:px-14 max-[400px]:px-5 " id="about">
            <div className="relative">
                <div className="flex flex-col-reverse h-[550px] w-[550px] max-sm:w-full max-sm:h-full rounded-full bg-gradient-to-br from-[#C961DE] to-[#2954A3] items-center gap-5 px-16 relative z-40">
                    <img src="/images/sitting.png" alt="" className="w-[250px] object-cover -mb-5" />
                    <div className="flex flex-col gap-3 mt-10">
                        <h3 className="text-center text-[28px] font-bold logo capitalize">About me</h3>
                        <p className="text-[14px] max-sm:text-[12px] text-center">I'm Stephen, a results-oriented web developer with a strong understanding of user needs. I enjoy tackling challenges and collaborating with clients to bring their digital visions to life.  I take pride in my ability to translate ideas into well-structured and functional websites.  My experience spans across  e-commerce websites, content management systems, blog websites, landing pages and many more, according to clients needs and desires. </p>
                    </div>
                </div>
                <img src="/images/Illustration.png" alt="" className="absolute -bottom-28 max-sm:-bottom-36  w-[220px] max-sm:w-[180px] z-50 -right-20"/>
                </div>
                <img src="/images/Background.png" alt="" className="absolute -bottom-36 max-sm:-bottom-16 max-[700px]:-bottom-10  z-10 right-[50%] translate-x-[50%] w-[900px]"/>
        </div>
     );
}
 
export default About;
