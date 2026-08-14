import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/ubicaciones" className="navbar-brand">
        <span className="brand-icon">📡</span>
        <strong>UTEQ</strong>
        <span className="brand-sub">Sensor Monitor</span>
      </Link>
      
      <div className="nav-links">
        {/* Aquí apuntamos a sensor_001 para que muestre "Sensor no encontrado" */}
        <NavLink 
          to="/sensor/sensor_001" 
          className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}
        >
          Dashboard
        </NavLink>
        <NavLink 
          to="/ubicaciones" 
          className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}
        >
          Ubicaciones
        </NavLink>
      </div>
    </nav>
  );
}