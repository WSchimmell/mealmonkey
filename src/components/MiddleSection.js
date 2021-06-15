import Categories from './Categories';
import Star from './Star';

const MiddleCategory = ({ number }) => {
    return (
        <section>
            <h1>Popular Restaurents</h1><p>View All</p>
            <Categories image="https://via.placeholder.com/150" />
            <h1>Minute by Tuk Tuk</h1>
            <p><Star/> 4.9 (124 ratings) Cafe . Western Food</p>
            <Categories image="https://via.placeholder.com/150" />
            <h1>Cafe de Noir</h1>
            <p><Star/> 4.9 (124 ratings) Cafe . Western Food</p>
            <Categories image="https://via.placeholder.com/150" />
            <h1>Bakes by Tella</h1>
            <p><Star/> 4.9 (124 ratings) Cafe . Western Food</p>
        </section>
     );
}
export default MiddleCategory;