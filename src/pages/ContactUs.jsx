import Layout from "../layout";


// Mail: info @rhyno.in
// ● Mobile no.: +91 - 9023987528
// ● Location: Rhyno Wheels Private limited, Near UG hostel gate #2, Behind PDEU,
//     Raisan, Gandhinagar, Gujarat, India.
const ContactUs = () => {
    return (
        <div className="mt-4  flex flex-col w-full h-full justify-center items-center">
            <h1 className="font-bold text-center text-2xl font-mono">
                Contact Us
            </h1>

            <div className="flex justify-center mt-4 w-full">
                <div className="w-1/2">
                    <h1 className="font-bold text-center text-xl font-mono">
                        Mail:
                    </h1>
                    <p className="text-center">
                        info@rhyno.in
                    </p>
                </div>

                <div className="w-1/2">
                    <h1 className="font-bold text-center text-xl font-mono">
                        Mobile no.:
                    </h1>
                    <p className="text-center">
                        +91 - 9023987528
                    </p>
                </div>
            </div>

            <div className="flex justify-center mt-4">
                <div className="w-1/2">
                    <h1 className="font-bold text-center text-xl font-mono">
                        Location:
                    </h1>
                    <p className="text-center">
                        Rhyno Wheels Private limited, Near UG hostel gate #2, Behind PDEU, Raisan, Gandhinagar, Gujarat, India.
                    </p>
                </div>
            </div>
        </div>
    )
}

const ContactUsPage = Layout(ContactUs);

export default ContactUsPage