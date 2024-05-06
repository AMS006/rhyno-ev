/* eslint-disable react/display-name */
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import PropTypes from 'prop-types'

const Layout = (Component) => ({ ...props }) => {
    return (
        <div className='flex flex-col h-full'>
            <Navbar />
            <main>
                <Component {...props} />
            </main>
            <Footer />
        </div>
    )
}

Layout.propTypes = {
    Component: PropTypes.elementType.isRequired
}

export default Layout