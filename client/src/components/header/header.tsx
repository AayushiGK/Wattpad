import { useState } from "react";
import "./header.css";
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const [searchValue, setSearchValue] = useState("");

    return (
        <div className="header">
            <div className="header__logo">
                <img onClick={() => { navigate("/") }} src="https://static1.squarespace.com/static/5f1b3f20d14261210b6a0a7e/t/60027bf59cabb86c70c40d29/1610775541662/Wattpad_Vertical_Logo_Orange_RGB.png" alt="Wattpad Logo" width={'50px'} height={'50px'} />
            </div>
            <div className="header__search">
                <input
                    type="text"
                    placeholder="Search stories, users, or tags"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    className="search-input"
                />
                {searchValue && (
                    <span
                        onClick={() => { setSearchValue("") }}
                        className="clear-btn"
                    >
                        X
                    </span>
                )}
            </div>
            <div className="header__nav">
                <a href="/stories">Stories</a>
                <a href="/Library">Library</a>
                <a href="/lists">Reading List</a>
            </div>
        </div>
    )
}

export default Header;