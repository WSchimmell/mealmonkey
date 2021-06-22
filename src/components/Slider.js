import offer from './img/z1.png';
import lankan from './img/z2.png';
import italian from './img/z3.png';
import indian from './img/z4.png';

const Slider = () => {
    return (
        <div className='pix'>
            <p className='pix__text'><img src={offer} alt="A offer" />Offer</p>
            <p className='pix__text'><img src={lankan} alt="A lankan" />Sri Lankan</p>
            <p className='pix__text'><img src={italian} alt="A italian" />Italian</p>
            <p className='pix__text'><img src={indian} alt="A indina" />Indian</p>
        </div>
    )
}
export default Slider
