"use client"
import Link from "next/link";

const Hero = () => {
    const handleDownload = () => {
    const fileUrl = '/images/resume.pdf';
    fetch(fileUrl)
      .then(response => response.blob())
      .then(blob => {
        // Create a new blob object
        const url = window.URL.createObjectURL(new Blob([blob]));
        
        // Create a new anchor element
        const link = document.createElement('a');
        link.href = url;
        
        // Set the filename to be downloaded
        link.setAttribute('download', 'stephen-resume.pdf');
        
        // Append the anchor to the body
        document.body.appendChild(link);
        
        // Trigger the click event to download the file
        link.click();
        
        // Clean up: remove the anchor from the body
        document.body.removeChild(link);
      })
      .catch(error => console.error('Error downloading file:', error));
  };
    return ( 
        <div className="relative" id="home">
        <div className="py-40 max-md:py-10 px-48 max-lg:px-28 max-md:px-20 max-sm:px-5  flex flex-col gap-8 z-40 relative">
                <h1 className="text-5xl max-md:text-[40px] max-sm:text-[32px] max-[600px]:text-[30px]  leading-[60px] font-bold">Transforming creative ideas<br/> into stunning realities <br/>as a Frontend web developer. </h1>
                <div className="flex gap-5 items-center">
                <Link href="/#contact"> <h3 className="h-12 w-44 max-[400px]:w-32 max-[400px]:h-10 bg-gray-700 rounded-full text-center flex items-center justify-center text-[14px]">Hire me</h3></Link>
                    <h3 className="h-12 w-44 max-[400px]:w-32 max-[400px]:h-10 bg-gradient-to-br from-[#C961DE] to-[#2954A3] rounded-full text-center flex items-center justify-center text-[14px] cursor-pointer" onClick={handleDownload}>Download CV</h3>
                </div>
            </div>
            <img src="/images/Group 1190.png" alt="" className="absolute right-0 -bottom-10 z-10 w-[800px] " />
        </div>
     );
}
 
export default Hero;