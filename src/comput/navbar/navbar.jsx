import  './navbar.css';
import logo from '../all data/logo.png'
import cart_icon from '../all data/cart_icon.png'
function  Navber () {
    return (
        <div className='navber'>
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>SHOPPER</p>
            </div>
            <ul className="nav-menu">
                <li>Shop <hr /></li>
                <li>Man</li>
                <li>Woman</li>
                <li>kids</li>
            </ul>
            <div className="nav-login-cart">
                <button>Longin</button>
                <img src={cart_icon} alt="" />
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    )
}

export default Navber ;
