import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AppsLogo from "../../assets/navbar-assets/logoCompleto.svg";
import logoSolo from "../../assets/navbar-assets/LogoSolo.svg";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const cerrarSesion = () => {
    navigate(`/`);
  };

  return (
    <div className="bottom-nav">
      <div className="menu-list">
        <>
          <div className="menu">
            <NavLink to="/inicio" className="frame">
              <i className="ri-home-3-line"></i>
              <p className="li-mobile-p">Inicio</p>
            </NavLink>
          </div>
          <div className="menu">
            <NavLink to="/productos" className="frame">
              <i className="ri-group-line"></i>
              <p className="li-mobile-p">Quienes Somos</p>
            </NavLink>
          </div>
          <div className="menu">
            <NavLink to="/listaQrs" className="frame">
              <i className="ri-service-line"></i>
              <p className="li-mobile-p">Servicios</p>
            </NavLink>
          </div>
          <div className="menu">
            <NavLink to="/estadistica" className="frame">
              <i className="ri-handbag-line"></i>
              <p className="li-mobile-p">Directorio Medico</p>
            </NavLink>
          </div>
          <div className="contenedor-logos">
            <img
              className="logo1"
              src={logoSolo}
              alt="Apps for the world Logo"
            />
          </div>
          <div className="menu">
            <div className="frame">
              <i className="ri-calendar-line"></i>
              <p className="li-mobile-p">Citas</p>
            </div>
          </div>
          <div className="menu">
            <NavLink to="/MiPerfil" className="frame">
              <i className="ri-file-text-line "></i>
              <p className="li-mobile-p">Contacto</p>
            </NavLink>
          </div>
          <div className="menu">
            <NavLink to="/MiPerfil" className="frame">
              <i className="ri-file-info-line "></i>
              <p className="li-mobile-p">Informes</p>
            </NavLink>
          </div>
          <div className="menu">
            <div onClick={cerrarSesion} className="frame">
              <i className="ri-logout-box-line"></i>
              <p className="li-mobile-p">Salir</p>
            </div>
          </div>
        </>
      </div>
      <div className="menu-5"></div>
    </div>
  );
}
