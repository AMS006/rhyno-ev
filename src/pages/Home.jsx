import { useEffect, useState } from "react";
import homeImage from "../assets/front-image.png";
import UspCard from "../components/UspCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Layout from "../layout";




const Home = () => {
    const changingTexts = [
        "Style",
        "Elegance",
        "Minimalism",
        "Comfort",
    ]



    const usps = [
        {
            name: "LFP Battery",
            description: `Rhyno is equipped with Lithium Iron Phosphate (LFP) batteries,
            renowned for their safety features—eliminating the risk of fire associated with other
            Lithium batteries.These batteries boast a broader temperature range, ideal for the
            diverse Indian climate.`,
        },
        {
            name: "Wider tyres",
            description: `Now, say goodbye to skidding and embrace the leaning turns!
            Featuring first-of-its-kind, 9.5-inch wider tyres that make this machine an enormous
            beast that ensures stability on different terrains such as wet roads, mud, and sand.`,
        },
        {
            name: "Range prediction",
            description: `Many budget-friendly electric scooters overlook this crucial
            feature, causing riders to experience range anxiety. With Rhyno, you can ride with
            peace of mind, thanks to the scooter providing precise information about the
            remaining battery.`,
        },
        {
            name: "Extraordinery Experience",
            description: `Rhyno is more than just a mode of transportation. It is
            an experience of sheer comfort and style! A seamless fusion of minimalism,
            sophistication, and a touch of masculinity!`
        }
    ]

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => {
                if (prevIndex === changingTexts.length - 1) {
                    return 0;
                }
                return prevIndex + 1;
            });
        }, 2000);
        return () => clearInterval(interval);
    }, [changingTexts.length]);


    return (
        <div className="">
            <div className="mt-4">
                <h1 className="font-bold text-center text-2xl font-mono transition-all duration-150 ease-in-out">
                    Let &apos;s Elevate Your Ride Experience With Rhyno - Where Superiority Meets <span className="text-[#FFD700]">{changingTexts[index]}</span>
                </h1>

                <div className="flex justify-center mt-4">
                    <img src={homeImage} alt="homeImage" className="w-full h-1/2" />
                </div>

                <div className="px-8 py-8">
                    <h1 className="font-bold text-center text-2xl font-mono mt-4">
                        Our USPs
                    </h1>

                    <Swiper
                        modules={[Navigation, Pagination]}
                        className="mt-4"
                        slidesPerView={3}
                        spaceBetween={40}
                        navigation
                        pagination={{ clickable: true }}


                        breakpoints={

                            {
                                0: {
                                    slidesPerView: 1,
                                    spaceBetween: 10,
                                },
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 40,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 40,
                                },

                            }
                        }

                    >
                        {usps.map((usp, index) => (
                            <SwiperSlide key={index}>
                                <UspCard name={usp.name} description={usp.description} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>



                <div className="fixed bottom-4 right-4 z-40">
                    <button className="bg-[#FFD700] hover:bg-[#f8d614] shadow text-white font-bold py-2 px-4 rounded">
                        Pre Book Now
                    </button>
                </div>
            </div>
        </div >
    )
}

// const HomePage = Layout(Home);

// export default HomePage
const HomePage = Layout(Home);

export default HomePage;
