import Layout from "../layout";
import aboutImage from '../assets/about.jpeg';
const AboutUs = () => {
    return (
        <div className="mt-12  flex flex-col w-full justify-center items-center">

            <h1 className="font-bold text-center text-2xl font-mono">
                About Us
            </h1>

            <div className="flex justify-center mt-4 h-48 w-72">
                <img src={aboutImage} alt="aboutUs" />
            </div>

            <div className="flex justify-center mt-4 w-full py-4">
                <div className="w-1/2">
                    <p className="text-justify">
                        Established in 2019 by an automotive engineer with a vision for sustainable and robust
                        mobility solutions, Rhyno EV is not just a company; it &apos;s a collective effort of a dynamic team
                        of young individuals passionately driving innovation in the electric vehicle industry.We
                        believe in engineering solutions that solve problems.
                        With our first product, we &apos;ve taken a bold step to create something more than just a vehicle;
                        it &apos;s a unique experience of elegance, comfort and style, addressing the pitfalls of
                        conventional electric scooters.Our design prioritizes safety, eliminating concerns of fires and
                        ensuring a longer battery lifespan with our battery technology.Perfectly suited for fleet
                        operators, especially in tourist - centric locations like Goa, our rugged yet aesthetically
                        appealing scooters are engineered for longevity and reliability.Join us as we pioneer a new
                        era in sustainable and dependable electric transportation
                    </p>
                </div>
            </div>
        </div>
    )
}

const AboutUsPage = Layout(AboutUs);

export default AboutUsPage