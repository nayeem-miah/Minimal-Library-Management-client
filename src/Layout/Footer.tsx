
import { CgFacebook } from "react-icons/cg";
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-black shadow border-t rounded-xl w-full p-2 relative">

            <div
                className="w-full flex items-center justify-center pt-[30px] flex-col gap-[20px] pb-[40px]">
                <h3 className="text-2xl font-bold text-pink-600">Book <span className="dark:text-white text-black ">library</span></h3>

                <p className="text-[0.9rem] text-center">Book Library is a platform that connects readers with a vast collection of books. </p>


                <button className="py-2 px-6 rounded-full bg-pink-600 text-white">Contact Us</button>

                <div className="flex gap-[15px] text-black mt-4">
                    <a className="text-[1.3rem] dark:bg-slate-800 dark:text-[#abc2d3] p-1.5 cursor-pointer rounded-full bg-white text-[#424242] shadow-md">
                        <CgFacebook />
                    </a>
                    <a className="text-[1.2rem] dark:bg-slate-800 dark:text-[#abc2d3] p-1.5 cursor-pointer rounded-full bg-white text-[#424242] shadow-md">
                        <BsTwitter />
                    </a>
                    <a className="text-[1.2rem] dark:bg-slate-800 dark:text-[#abc2d3] p-1.5 cursor-pointer rounded-full bg-white text-[#424242] shadow-md">
                        <BsInstagram />
                    </a>
                    <a className="text-[1.2rem] dark:bg-slate-800 dark:text-[#abc2d3] p-1.5 cursor-pointer rounded-full bg-white text-[#424242] shadow-md">
                        <BsLinkedin />
                    </a>
                </div>
            </div>
            <p className="text-xl font-bold text-center text-gray-300">© {new Date().getFullYear()} All Rights Reserved</p>
        </footer>
    );
};

export default Footer;
