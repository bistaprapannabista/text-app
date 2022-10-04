import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
const Navbar = (props) => {
  let mode='';
  {props.darkMode?mode="dark":mode="light"}
	return(

  <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>

  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.name}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="" className="nav-link active" >Home</Link>
        </li>
        <li class="nav-item">
          <Link to="about" class="nav-link active">About</Link>
        </li>
      </ul>
      <form className="d-flex">
		<div className="form-check form-switch">
		  <input onClick={props.onClick} className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
		  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.darkMode?"Disable DarkMode":"Enable DarkMode"}</label>
		</div>
      </form>
    </div>
  </div>
</nav>
	);
}

export default Navbar;

Navbar.propTypes = {
  darkMode: PropTypes.bool,
  name:PropTypes.string
}