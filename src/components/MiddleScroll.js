import Categories from './Categories';
import Star from './Star'
// import './Scroll.scss';
const MiddleScroll = () => {
    return (
        <section>
            <Categories image="https://via.placeholder.com/150" />
            <h1>Cafe De Bambaa</h1>
            <p>Cafe . Western Food <Star/> 4.9</p>
            <Categories image="https://via.placeholder.com/150" />
            <h1>Burger by Bella</h1>
            <p>Cafe . Western Food <Star/> 4.9</p>
        </section>
     );
}
export default MiddleScroll;