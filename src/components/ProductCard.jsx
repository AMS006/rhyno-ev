import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {
    return (
        <Link to={`/products/${product.id}`} className='bg-white w-72  rounded-md shadow-lg'>
            <img src={product.image} className='w-full h-48 object-cover rounded-t-md' />
            <div className='px-4 py-2'>
                <h1 className='text-xl font-bold'>{product.name}</h1>
                <p className='text-sm mt-2'>

                    {product.description}

                </p>
            </div>
        </Link>
    )
}

ProductCard.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired
    })
}
export default ProductCard
