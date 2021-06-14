const Categories = ({image, text}) => {
    return (
        <figure>
            <img src={image} alt={text} />
            <figcaption>{text}</figcaption>
        </figure>
    );
}

export default Categories;