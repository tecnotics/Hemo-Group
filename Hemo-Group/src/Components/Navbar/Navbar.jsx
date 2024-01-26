import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AppsLogo from "../../assets/navbar-assets/logoCompleto.svg";
import ForTheWorldLogo from "../../assets/navbar-assets/LogoSolo.svg";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const cerrarSesion = () => {
    navigate(`/`);
  };

  return (
    <header>
      <NavLink to={"/inicio"} className="logoContainer">
        <img src={AppsLogo} alt="Apps for the world Logo" />
        <img src={ForTheWorldLogo} alt="Apps for the world Logo" />
      </NavLink>
      <div className={`nav ${showMenu ? "show-menu" : ""}`}>
        <li className="header-li">
          <NavLink to={"/inicio"}>Inicio</NavLink>
        </li>
        <>
          <li className="header-li">
            <NavLink to={"/"}>Productos</NavLink>
          </li>
          <li className="header-li">
            <NavLink to={"/"}>Trabajadores</NavLink>
          </li>
          <li className="header-li">
            <NavLink to={"/"}>Locales</NavLink>
          </li>
          <li className="header-li">
            <NavLink to={"/"}>Clientes</NavLink>
          </li>
          <li className="header-li">
            <NavLink to={"/"}>Ventas</NavLink>
          </li>
          <li className="header-li">
            <button className="cerrarSesion" onClick={cerrarSesion}>
              <ExitToAppOutlinedIcon />
            </button>
          </li>
        </>
      </div>
      <div className="burger-menu" onClick={toggleMenu}>
        ☰
      </div>
    </header>
  );
}
