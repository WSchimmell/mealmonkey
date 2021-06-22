import { FaRegStar } from 'react-icons/fa';
import bambaa from './img/z8.png';
import bella from './img/z9.png';

const Most = () => {
    return (
        <>
            <div className='most'>
                <h2>Popular Restaurant</h2>
                <p>View all</p>
                {/* <button onClick={onClick} className='btn'><p>View all</p></button> */}
            </div>
            <section className='most_selection'>
                <p><img className='most__img' src={bambaa} alt="A offer" /></p>
                <h1>Cafe De Bambaa</h1>
                <p>Cafe . Western Food <FaRegStar className='main__p' /> 4.9</p>
            </section>
            <section className='most_selection'>
                <p><img className='most__img' src={bella} alt="A lankan" /></p>
                <h1>Burger by Bella</h1>
                <p>Cafe . Western Food <FaRegStar className='main__p' /> 4.9</p>
            </section>

            {/* <section className='most_selection'>
                <div className='card'>
                    <img className='most__img' src={bambaa} alt="A offer" />
                    <div className='body'>
                        <h1>Cafe De Bambaa</h1>
                        <p>Cafe . Western Food <FaRegStar className='main__p' /> 4.9</p>
                    </div>
                </div>
            </section>
            <section className='most__selection'>
                <div className='most__section'>
                    <img className='most__img' src={bambaa} alt="A offer" />
                    <div className='body'>
                        <h1>Cafe De Bambaa</h1>
                        <p>Cafe . Western Food <FaRegStar className='main__p' /> 4.9</p>
                    </div>
                </div>
            </section> */}
        </>
    )
}

export default Most
