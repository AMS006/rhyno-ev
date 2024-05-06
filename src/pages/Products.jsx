import Layout from "../layout";
// import product images
import p1 from "../assets/black.png";
import p2 from "../assets/bike.png";
import p3 from "../assets/golden.png";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";

const products = [
    {
        id: "1",
        name: "SE03 Lite",
        description: "Rhyno SE03 Lite is a electric scooter that is designed to provide you with a comfortable and luxurious experience. It is the perfect car for those who want to travel in style and elegance. With its sleek design and powerful engine, Rhyno SE03 Lite is sure to turn heads wherever you go.",
        image: p1
    },
    {
        id: "2",
        name: "SE03",
        description: "Rhyno SE03 is a electric scooter that is designed to provide you with a comfortable and luxurious experience. It is the perfect car for those who want to travel in style and elegance. With its sleek design and powerful engine, Rhyno SE03 is sure to turn heads wherever you go.",
        image: p2
    },
    {
        id: "3",
        name: "SE03 Max",
        description: "Rhyno SE03 Max is a electric scooter that is designed to provide you with a comfortable and luxurious experience. It is the perfect car for those who want to travel in style and elegance. With its sleek design and powerful engine, Rhyno SE03 Max is sure to turn heads wherever you go.",
        image: p3
    }
]
const Products = () => {
    return (
        <div className="my-4">
            <h1 className="font-bold text-center text-2xl font-mono">
                Our Products
            </h1>
            <div className="flex md:flex-row flex-col justify-center items-center gap-8">
                {products.map((product, index) => (
                    <ProductCard product={product} key={index} />
                ))}
            </div>

            <div>
                <Link to="/compare" className="flex justify-center items-center mt-4">
                    <button className="bg-[#FFD700] px-4 py-2 rounded-md text-white font-bold">Compare</button>
                </Link>
            </div>

        </div>
    )
}

const ProductsPage = Layout(Products);

export default ProductsPage
