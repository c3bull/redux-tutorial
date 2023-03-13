import {useSelector, useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {productSearch} from "../redux/productAction";

const Header = () => {

    const result = useSelector((state) => state.cartData)
    const dispatch = useDispatch()
    console.warn("data ion header ", result)
    return (
        <div className='header'>
            <Link to="/"><h1 className='logo'>E-comm</h1></Link>
            <div className='search-box'>
                <input type="text" onChange={(e) => dispatch(productSearch(e.target.value))}
                       placeholder="search product"/>
            </div>
            <Link to="/cart">
                <div className='cart-div'>
                    <span>{result.length}</span>
                    <img src="https://cdn-icons-png.flaticon.com/512/3721/3721818.png" alt="basket"/>
                </div>
            </Link>
        </div>
    )
}
export default Header;
