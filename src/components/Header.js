import { HOME_LOGO } from "../utils/constants";
import { useState, useContext} from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/Usercontext";
import { useSelector } from "react-redux";

const Header =  ()=>
    {
        const [btn_text,set_btn_textState] = useState("Login");
        
        const {LoggedInUser} = useContext(UserContext);

        const cartItems = useSelector((store) => store.cart.items)
        // console.log(cartItems);
        return (
        <div className="flex justify-between bg-orange-500">
            <div className="logo-container">
                <img className="w-24" src = {HOME_LOGO}/>
            </div>

        
            <div className="w-2/6 ">
                <ul className="p-4 m-4 flex justify-between">
                    <li>
                        <Link to={"/"} className="link-tag">Home</Link>
                    </li>
                    <li>
                        <Link to={"/about"} className="link-tag">About Us</Link>
                    </li>
                    <li>
                        <Link to={"/contactus"}className="link-tag">Contact Us</Link>
                    </li>
                    <li>
                        <Link to={"/cart"}className="link-tag font-bold">Cart ({cartItems.length})</Link>
                    </li>
                    
                    <button className="Signin-btn" onClick={
                        ()=>
                        {
                            btn_text == 'Login' ? set_btn_textState("Logout"): set_btn_textState("Login") 
                        }
                    }>{btn_text}</button>
                    <li className="font-bold">{LoggedInUser}</li>
                    
                </ul>
            </div>
                
        </div>
        )
    }

export default Header;