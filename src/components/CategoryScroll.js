import Categories from './Categories';
import './Scroll.scss';
const CategoryScroll = () => {
    return (
        <section className="categories">
            <Categories image="https://via.placeholder.com/150" text="Offers" />
            <Categories image="https://via.placeholder.com/150" text="Sri Lankan" />
            <Categories image="https://via.placeholder.com/150" text="Italien" />
            <Categories image="https://via.placeholder.com/150" text="Indian" />
        </section>
     );
}
export default CategoryScroll