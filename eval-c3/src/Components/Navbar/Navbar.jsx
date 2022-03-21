import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className="navbar">
          <Link to="/" title="home"> <button className="home">Home</button> </Link>
          <Link to="/Mystery" title="Mystery"> <button className="Mystery">Mystery</button> </Link>
          <Link to="/Technology" title="Technology"> <button className="Technology">Technology</button> </Link>

          <Link to="/Mythology" title="Mythology"> <button className="Mythology">Mythology</button> </Link>
          <Link to="/History" title="History"> <button className="History">History</button> </Link>
        {/* Populate 5 buttons with EXACT same classnames as of their routes name */}
        {/* Example: 
            <button className="history"> Link to history here  </button>  */}
        {/* Home component will have `/` route and classname as `home`  */}
      </div>
    </>
  );
};