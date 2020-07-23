import React from "react";

const Navbar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand">
        Number of non zero counters:
        <span className="badge badge-warning badge-md m-2">
          {totalCounters}
        </span>
      </span>
    </nav>
  );
};

export default Navbar;
