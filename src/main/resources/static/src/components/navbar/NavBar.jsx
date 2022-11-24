import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../context/context";
import "./navbar.css";

const NavBar = () => {
  const navigate = useNavigate();

  const { theme, setTheme } = useContext(Context);

  const changeClassName = (classNameComponent) => {
    return `${classNameComponent} ${theme}`;
  };

  const changeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("light");
    }
  };

  return (
    <div className={changeClassName("nav")}>
      <div>
        <div className="container">
          <div className={changeClassName("nav-inner")}>
            <h3
              style={{ cursor: "pointer" }}
              className={changeClassName("nav-inner-name")}
              onClick={() => navigate("/")}
            >
              ichuvilin
            </h3>

            <button
              className={changeClassName("btn_switchTheme")}
              onClick={() => {
                changeTheme();
              }}
            >
              Switch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
