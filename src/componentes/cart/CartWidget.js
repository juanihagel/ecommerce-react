import React from "react";
import { Link } from "react-router-dom";

const CartWidget = () => {
    return (
        <div>
            <i className="bi bi-cart4"></i>
            <ul>
                <li>
                    <Link to={"/"} >Shop</Link>
                </li>
            </ul>
        </div>
    );
}

export default CartWidget;