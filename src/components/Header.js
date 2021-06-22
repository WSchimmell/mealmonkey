import Cart from './Cart';
const Header = ({ title }) => {
    const onClick = () => {
        // console.log('onClick')
    }
    return (
        <>
        <header className='header'>
            <h1>{title}</h1>
            <Cart onClick={onClick} />
        </header>
        <p>Delivering to</p>
        <h3>Current Location</h3>
        </>
    )
}
Header.defaultProps = {
    title: 'Good Morning Akila!',
}

export default Header
