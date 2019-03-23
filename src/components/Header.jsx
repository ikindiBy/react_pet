import React, { Component } from "react";
import "./Header.scss";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="header-wrapper">
          <div className="logo-line">logo</div>
          <form>
            <label>Find your movie</label>
            <input />
            <div className="managing-of-search">
              <div className="filtering-of-search">
                <h4>Search by</h4>
                <button>Title</button>
                <button>Genre</button>
              </div>
              <button>Search</button>
            </div>
          </form>
        </div>
        <div className="resul-line">
          <div className="resul-line-wrapper">searcing result</div>
        </div>
      </header>
    );
  }
}

export default Header;
