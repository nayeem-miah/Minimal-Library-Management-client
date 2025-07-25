
const faqs = [
    {
        question: "How do I add a new book?",
        answer:
            "Fill in all required fields like Title, Author, Genre, ISBN, and Description. Then click the 'Add Book' button.",
    },
    {
        question: "What if I leave a required field empty?",
        answer:
            "The form will not submit. Make sure all mandatory fields are filled correctly.",
    },
    {
        question: "What is the correct format for the ISBN?",
        answer:
            "Use a valid ISBN format, usually 13 digits without dashes. Example: 97805766580163",
    },
    {
        question: "How many copies can I add?",
        answer:
            "You can add any number of copies. Enter a number greater than 0 in the 'Copies' field.",
    },
    {
        question: "How do I know if the book was successfully added?",
        answer:
            "After submission, a success message will appear and the book will be listed in the book list.",
    },
    {
        question: "Why does the available status default to true?",
        answer:
            "A book is marked available if at least one copy exists. You can later update availability if needed.",
    },
    {
        question: "What image formats are supported (if image upload is required)?",
        answer:
            "Supported formats include JPG, PNG, or WEBP, with a maximum size of 2MB.",
    },
    {
        question: "Can I update book details later?",
        answer:
            "Yes, you can edit any book’s details from the book list using the Edit button.",
    },
];

export const HelpSupport = () => {
    return (
        <section className="mt-8">
            <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
                {
                    faqs.map((faq, index) => (
                        <div key={index} className="divide-y dark:divide-gray-300">
                            <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                                <h3 className=" md:col-span-5 font-bold">{faq.question}</h3>
                                <p className="md:pl-0 md:col-span-7">{faq.answer}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

