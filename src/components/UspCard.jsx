import PropTypes from 'prop-types'
const UspCard = ({ name, description }) => {
    return (
        <div className='bg-white border  rounded-md shadow-lg h-56'>
            <div className='px-4 py-2'>
                <h1 className='text-xl font-bold'>{name}</h1>
                <p className='text-sm mt-2 '>
                    {description}
                </p>
            </div>
        </div>
    )
}

UspCard.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}

export default UspCard
