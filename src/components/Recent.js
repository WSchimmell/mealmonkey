import { FaRegStar } from 'react-icons/fa';
import josh from './img/z10.png';
import barita from './img/z11.png';
import hour from './img/z12.png';

const Recent = () => {
    return (
        <>
            <div className='recent'>
                <h2>Recent Items</h2>
                <p>View all</p>
            </div>

            <div className='recent__row'>
                <img className='recent__img' src={josh} alt="A offer" />
                <div className='recent__text'>
                    <div>Mulberry Pizza by Josh</div>
                    <div>Cafe . Western Food <p className='main__p'><FaRegStar /> 4.9 (124 Ratings)</p></div>
                </div>
            </div>
            <div className='recent__row'>
                <img className='recent__img' src={barita} alt="A offer" />
                <div className='recent__text'>
                    <div>Barita</div>
                    <div>Cafe . Coffee <p className='main__p'><FaRegStar /> 4.9 (124 Ratings)</p></div>
                </div>
            </div>
            <div className='recent__row'>
                <img className='recent__img' src={hour} alt="A offer" />
                <div className='recent__text'>
                    <div>Pizza Rush Hour</div>
                    <div>Cafe . Italian Food <p className='main__p'><FaRegStar /> 4.9 (124 Ratings)</p></div>
                </div>
            </div>
        </>

    )
}

export default Recent
