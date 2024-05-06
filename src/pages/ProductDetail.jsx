import { useEffect, useState } from "react";
import { useParams } from "react-router"
import p1 from "../assets/black.png";
import p2 from "../assets/bike.png";
import p3 from "../assets/golden.png";
import Layout from "../layout";

const products = [
    {
        id: "1",
        name: "SE03 Lite",
        description: "Introducing the Rhyno SE03 Lite: an entry-level variant with a smaller battery and motor. Offers elegance, comfort, and style with an 80-100 km range and 55 km/h top speed. Ideal for budget-conscious commuters seeking effortless travel.",
        image: p1
    },
    {
        id: "2",
        name: "SE03",
        description: "Introducing the Rhyno SE03 Lite: an entry-level variant with a smaller battery and motor. Offers elegance, comfort, and style with an 80-100 km range and 55 km/h top speed. Ideal for budget-conscious commuters seeking effortless travel.",
        image: p2
    },
    {
        id: "3",
        name: "SE03 Max",
        description: "Designed for endurance over excitement, this Rhyno variant offers a dependable ride with a 150 km range. Featuring a fire-safe LFP battery and essential Rhyno benefits, it prioritizes long drives. With its optimal battery capacity and motor power, it ensures unwavering performance on the road.",
        image: p3
    }
]

// Specification table

// Specification
// SE03 Lite



// Battery
// 1.8Kwh
// Battery features
// LFP with 1500 cycles
// Active Balancing
// Waterproof(IP67)
// Battery warranty
// 3 years
// Charging time
// 3 hours(12A)
// Motor
// Motor
// Max speed
// 1500W
// Warranty on electronics
// 1 year
// Max range(@30km / h)
// 100 km
// Max range(@45km / h)
// 90 km
// Max range(@full speed)
// 70 km
// Other key benefits
// Fire - safe Battery
// Range prediction
// Comfortable ride
// Stable and safe


const ProductDetail = () => {
    const { id } = useParams();

    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        if (id) {
            const product = products.find((product) => product.id === id);
            setSelectedProduct(product);
        }
    }, [id])

    return (
        <div className="my-4">
            {selectedProduct && (
                <div className="flex md:flex-row flex-col justify-center items-center gap-8 mt-4 px-6">
                    <div className="bg-white md:w-[70%] w-full rounded-md shadow-lg">
                        <img src={selectedProduct.image} className='w-full h-full object-cover rounded-t-md' />
                        <div className='px-4 py-2'>
                            <h1 className='text-xl font-bold'>{selectedProduct.name}</h1>
                            <p className='text-sm mt-2'>
                                {selectedProduct.description}
                            </p>
                        </div>
                    </div>
                    <table>
                        <tr >
                            <th><h2>Specification</h2></th>
                            <th><h2>Rhyno {selectedProduct.name}</h2></th>
                        </tr>
                        <tr >
                            <th>Battery</th>
                            <td>1.8Kwh</td>
                        </tr>
                        <tr >
                            <th>Battery features</th>
                            <td >
                                <ul>
                                    <li>LFP with 1500 cycles</li>
                                    <li>Active Balancing</li>
                                    <li>Waterproof (IP67)</li>
                                </ul>
                            </td>
                        </tr>
                        <tr >
                            <th>Battery warrant</th>
                            <td>3 years</td>
                        </tr>
                        <tr >
                            <th>Charging time</th>
                            <td>3 hours (12A)</td>
                        </tr>
                        <tr >
                            <th>Motor</th>
                            <td>Motor</td>
                        </tr>
                        <tr >
                            <th>Max speed</th>
                            <td>1500W</td>
                        </tr>
                        <tr >
                            <th>Warranty on electronics</th>
                            <td>1 year</td>
                        </tr>
                        <tr >
                            <th>Max range (@30km/h)</th>
                            <td>100 km</td>
                        </tr>
                        <tr >
                            <th>Max range (@45km/h)</th>
                            <td>90 km</td>
                        </tr>
                        <tr >
                            <th>Max range (@full speed)</th>
                            <td>70 km</td>
                        </tr>
                        <tr >
                            <th>Other key benefits</th>
                            <td>
                                <ul>
                                    <li>Fire-safe Battery</li>
                                    <li>Range prediction</li>
                                    <li>Comfortable ride</li>
                                    <li>Stable and safe</li>
                                </ul>
                            </td>
                        </tr>
                    </table>
                </div>


            )}
        </div>
    )
}

const ProductDetailsPage = Layout(ProductDetail);

export default ProductDetailsPage
