"use client"

import Link from "next/link";
import { IoIosCall, IoIosMail } from "react-icons/io";
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
    const [state, handleSubmit] = useForm("xldrddyj");
    if (state.succeeded) {
       alert("Thanks for reaching out, will get back to you in a few")
    }
    return ( 
        <div  className="flex  justify-center relative px-48 max-[1150px]:px-24 max-[960px]:px-20 max-[570px]:px-10 pb-20 " id="contact">
            <div className="flex max-[700px]:flex-col max-[700px]:gap-10 gap-10 max-[960px]:gap-5 justify-between bg-[#2F2F8A] rounded-lg backdrop-blur-md bg-opacity-30 w-full p-16 max-[960px]:p-8 relative z-40  ">
                <div className="flex flex-col gap-5 relative z-40">
                    <h3 className="text-[28px] max-[960px]:text-[24px] font-bold logo">Get in Touch</h3>
                    <p className="text-[16px] max-[960px]:text-[14px] leading-relaxed ">I’m very approachable and<br/> would love to speak to you.<br/> Feel free to text, send me an<br/> email . Follow me in social media<br/> or simply complete the enquiry form.</p>
                    <div className="mt-5 flex flex-col gap-3">
                        <div className="flex place-items-center gap-3">
                            <div className="flex place-items-center justify-center h-10 w-10 max-[580px]:h-7 max-[580px]:w-7 rounded-full bg-gray-200 backdrop-blur-md bg-opacity-30">
                                <IoIosMail className="text-2xl max-[580px]:text-lg"/>
                            </div>
                            <Link href='mailto: saintobis11@gmail.com'> <p className="text-[14px] max-[960px]:text-[12px]">stephen11@gmail.com</p></Link>       
                        </div>
                        <div className="flex place-items-center gap-3">
                            <div className="flex place-items-center justify-center h-10 w-10 max-[580px]:h-7 max-[580px]:w-7 rounded-full bg-gray-200 backdrop-blur-md bg-opacity-30">
                                <IoIosCall className="text-2xl max-[580px]:text-lg"/>
                            </div>
                            <p className="text-[14px] max-[960px]:text-[12px]">For calls, kindly text on social media</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-5  relative z-50">
                    <h3 className="text-[28px] font-bold logo">Send me a message</h3>
                    <form action="https://formspree.io/f/xldrddyj" method="POST" onSubmit={handleSubmit} className="flex flex-col gap-5 text-white relative z-40">
                        <input type="text" placeholder="Name" name="name" className="bg-gray-200 backdrop-blur-md bg-opacity-30 text-[14px] rounded-xl h-10 w-96 max-[960px]:w-full pl-3 " />
                        <input type="email" placeholder="Email" name="email" className="bg-gray-200  backdrop-blur-md bg-opacity-30 text-[14px] rounded-xl h-10 w-96 max-[960px]:w-full pl-3" />
                        <textarea name="message" id="" cols="30" rows="10" placeholder="Your message" className="bg-gray-200  backdrop-blur-md rounded-xl bg-opacity-30  w-96 max-[960px]:w-full text-[14px] pl-3 pt-3"></textarea>
                        <div>
                            <button className="h-12 w-44 bg-gradient-to-br from-[#C961DE] to-[#2954A3] rounded-lg text-center flex items-center justify-center text-[14px]" type="submit" disabled={state.submitting}>Send message</button>
                        </div>
                    </form>
                </div>
                
            </div>
            <img src="/images/sit4.png" alt="" className="absolute w-96 max-sm:w-80 -top-[235px] -right-0 max-sm:-right-28 max-lg:-right-24 z-40" />
            <img src="/images/eclipse.png" alt="" className="absolute w-[700px] rotate-90 -bottom-44 -left-20 z-10" />
        </div>
     );
}
 
export default Contact;