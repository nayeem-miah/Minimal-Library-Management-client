
import banner from "../../assets/addBanner.jpg";
import AddBooksForm from "./addBooksForm";



const AddBooksBanner = () => {
    return (
        <div
            className="w-full h-[400px] md:h-[500px] bg-cover bg-center rounded-md relative"
            style={{
                backgroundImage: `url(${banner})`,
            }}
        >
            {/* Banner Content */}
            <header className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 bg-black/40 rounded-md">
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow">
                    📖 Share a Book with the World
                </h1>
                <p className="text-lg md:text-xl text-gray-200 max-w-2xl mb-6 drop-shadow">
                    Add your favorite books and help others explore your collection.
                </p>
                {/* dialogue button */}
                <AddBooksForm />
            </header>
        </div>
    );
};

export default AddBooksBanner;
