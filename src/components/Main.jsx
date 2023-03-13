import {addToCart, clearCart, removeFromCart} from "../redux/action";
import {useDispatch, useSelector} from "react-redux";
import {productList} from "../redux/productAction";
import {useEffect} from "react";

function Main() {
    const dispatch = useDispatch()
    let data = useSelector((state) => state.productData)
    console.warn("data in main component ", data)

    useEffect(() => {
        dispatch(productList())
    }, [])

    return (
        <div className="App">
            <button onClick={() => dispatch(clearCart())}>
                clear cart
            </button>
            <div className='product-container'>
                {
                    data.map((item) => (
                        <div className='product-item'>
                            <img src={item.photo} alt="zdjecie"/>
                            <div>Name: {item.name}</div>
                            <div>price: {item.price}</div>
                            <div>color: {item.color}</div>
                            <div>category: {item.category}</div>
                            <div>brand: {item.brand}</div>
                            <button onClick={() => dispatch(addToCart(item))}>
                                Add to card
                            </button>
                            <button onClick={() => dispatch(removeFromCart(item.id))}>
                                Remove from card
                            </button>
                        </div>)
                    )
                }
            </div>
        </div>
    );
}

export default Main;
