
import { CgFacebook } from "react-icons/cg";
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { SlArrowUp } from "react-icons/sl";

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-black shadow border-t rounded-xl w-full p-2 relative">

            <div
                className="w-full flex items-center justify-center pt-[30px] flex-col gap-[20px] pb-[130px]">
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

            <div
                className="z-30 absolute bottom-3 left-0 right-0 px-3 flex items-center justify-between w-full">
                <p className="text-[0.9rem] text-gray-300">© {new Date().getFullYear()} All Rights Reserved</p>

                <SlArrowUp
                    className="p-2 rounded-full border border-gray-300 cursor-pointer text-[2rem] text-gray-300" />
            </div>

            <img src="https://i.ibb.co/zNk7XT4/Rectangle-97.png" alt="background/image"
                className="absolute bottom-[20px] sm:bottom-0 left-0 right-0 z-10 rounded-b-xl" />
            <img src="https://i.ibb.co/0mp2FwS/Rectangle-95.png"
                alt="background/image"
                className="absolute bottom-0 left-0 right-0 z-10 rounded-b-xl" />
        </footer>
    );
};

export default Footer;
