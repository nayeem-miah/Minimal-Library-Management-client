import { Link } from "react-router";
import banner2 from "../../assets/banner2.jpg";
import { Button } from "../ui/button";

const Banner = () => {
    return (
        <div
            className="w-full h-[400px] md:h-[500px] bg-cover bg-center rounded-md relative"
            style={{
                backgroundImage: `url(${banner2})`,
            }}
        >

            {/* Header Content */}
            <header className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight drop-shadow-md">
                    📚 Welcome to Your Digital Library
                </h1>
                <p className="text-lg md:text-xl text-gray-200 max-w-2xl mb-6 drop-shadow">
                    Manage your favorite books, borrow easily, and explore thousands of titles with one click.
                </p>
                <Link to={'/all-books'}> <Button className="bg-pink-500 text-white px-6 py-2 rounded hover:bg-pink-600 transition">
                    Browse Books
                </Button></Link>
            </header>
        </div>
    );
};

export default Banner;
