import { FaRegStar } from 'react-icons/fa';
import PropTypes from 'prop-types'
import tuk from './img/z5.png';
import noir from './img/z6.png';
import tella from './img/z7.png';

const Main = () => {
    // const onClick = (e) => {
    // }
    return (
        <>
            <div className='main'>
                <h2>Popular Restaurant</h2>
                <p>View all</p>
                {/* <button onClick={onClick} className='btn'><p>View all</p></button> */}
            </div>
            <div className='main_section'>
                <img className='main__img' src={tuk} alt="A noir" />
                <h1>Minute by tuk tuk</h1>
                <p>Cafe . Western Food <FaRegStar className='main__p' /> 4.9</p>
            </div>
            <div className='main_section'>
                <img className='main__img' src={noir} alt="A tuk" />
                <h1>Café de noir </h1>
                <p>Cafe . Western Food <FaRegStar className='main__p' /> 4.9</p>
            </div>
            <div className='main_section'>
                <img className='main__img' src={tella} alt="A tella" />
                <h1>Bakes by Tella</h1>
                <p>Cafe . Western Food <FaRegStar className='main__p' /> 4.9</p>
            </div>
        </>
    )

}
Main.propTypes = {
    onClick: PropTypes.func,
}

export default Main
