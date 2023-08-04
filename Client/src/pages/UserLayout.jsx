import { useState } from "react";
import "./Layout.css";
import { Link } from "react-router-dom";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return width;
}
const UserLayout = (props) => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  const [isSideBarOpen, setIsSideBarOpen] = useState(() => {
    if (windowDimensions < 768) {
      return false;
    } else {
      return true;
    }
  });
  const sideBarNavigationHandler = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };
  return (
    <div>
      <div
        className={
          isSideBarOpen
            ? "side-navbar active-nav d-flex justify-content-between flex-wrap flex-column"
            : "side-navbar  d-flex justify-content-between flex-wrap flex-column"
        }
      >
        <ul className="nav flex-column text-white w-100">
          <Link
            to="/profile"
            className="nav-link h5 text-white my-4 sidebar-bottom-border d-flex jusifay-content-start align-item-start"
          >
            <div className="me-1">
              <img
                className="sidebar-profile-img rounded-circle"
                src="data:image/jpeg;base64,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"
              />
            </div>
            <div className="info">User Name</div>
          </Link>
          <li>
            <Link to="/home" className="nav-link">
              <span className="mx-1">Home</span>
            </Link>
            <Link to="/Request_Users" className="nav-link">
              <span className="mx-1">Request for Birth Certificate</span>
            </Link>
            <Link to="/Marrage_certU" className="nav-link">
              <span className="mx-1">Marriage Certificate</span>
            </Link>
          </li>
        </ul>
      </div>

      <div
        className={
          isSideBarOpen ? "p-1 my-container active-cont" : "p-1 my-container"
        }
      >
        <nav className="navbar fixed-top top-navbar navbar-light px-5 custom-top-navbar">
          <div className="container-fluid">
            <div className="container-fluid-inner">
              <a className="navbar-brand d-none d-md-inline-block" href="#">
                Company Name
              </a>
              <button
                className="navbar-toggler btn-sm menu-btn"
                type="button"
                onClick={sideBarNavigationHandler}
                style={{
                  height: "2.5rem",
                  position: "relative",
                }}
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
            <Link
              to="/"
              className="text-dark sidebar-bottom-border d-flex jusifay-content-start align-item-start"
            >
              Log out
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default UserLayout;