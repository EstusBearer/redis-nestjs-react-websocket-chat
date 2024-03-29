import { useNavigate } from 'react-router-dom';
import cl from './Nav.module.scss';

export const Navbar = () => {
    const navigate = useNavigate();

    return (
        <div className={cl.nav}>
            <div className={cl.left}>
                <p onClick={() => navigate("/")}>Home</p>
                <p onClick={() => navigate("/chat")}>Chat</p>
            </div>
            <div className={cl.right}>
                <p onClick={() => navigate("/profile")}>Profile</p>
                <p onClick={() => navigate("/logout")}>Logout</p>
                <p onClick={() => navigate("/signin")}>Signin</p>
                <p onClick={() => navigate("/signup")}>Signup</p>
            </div>
        </div>
    );
};