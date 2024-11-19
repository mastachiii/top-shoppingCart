import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCart } from "./scripts/shop";
import ItemCart from "./components/itemCart";

function Cart() {
    const [cart, setCart] = useState(null);
    const [totalPrice, setTotalPrice] = useState(null);

    useEffect(() => {
        getCart().then((response) => {
            setCart(response.items);
            setTotalPrice(response.items.reduce((a, b) => (a += b.price), 0));
        });
    }, []);

    const deleteCartItem = (title) => {
        setCart([...cart].filter((a) => a.title !== title));
    };

    return (
        <div>
            <p>CART</p>
            <ul>
                {cart &&
                    cart.map((a, b) => (
                        <ItemCart
                            index={b + 1}
                            title={a.title}
                            handle={deleteCartItem}
                            key={a.title}
                            price={a.price}
                            totalPriceHandler={setTotalPrice}
                        />
                    ))}
            </ul>
            <h3>${totalPrice}</h3>
            <Link to="/shop">BACK TO SHOP</Link>
        </div>
    );
}

export default Cart;
