import { NavLink } from "react-router-dom";
export function Menu() {
  return (
    <>
      <nav className="menu">
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : null)}
          to="/"
        >
          Home
        </NavLink>
      </nav>
    </>
  );
}
