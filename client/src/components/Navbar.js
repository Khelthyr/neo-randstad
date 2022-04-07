import React from 'react';
import { Link } from "react-router-dom";

const Navbar= () =>{
  return (
  <div>
    <li>
      <Link to="/">Logo</Link>
    </li>
    <li>
      <Link to="/inscription">S'inscrire</Link>
    </li>
  </div>
  );
}
export default Navbar;