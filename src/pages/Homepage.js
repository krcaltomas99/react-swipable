import React, { Component } from "react";
import { Link } from "react-router-dom";
import Darker from "../components/Darker";

class Homepage extends Component {
  render() {
    return (
      <div className="page hp">
        <Darker />
        <div className="wrap">
          <h1>This is the the homepage</h1>
          <p>
            u nedávno historici z struktury pilin. Severu generace mé
            propůjčuje. Tvrdě názvy jisté jaké oblečením u pohromou silnice
            programy indy u o nemohu pohonů poslední zmiňuje o přirozené
            poloostrově ke aula já řadě snažil teprve sám věnována jícnu. Mu ní
            obcí mužskou tří sen, ostrova kontak
          </p>
          <Link to="/about">About</Link>
        </div>
      </div>
    );
  }
}

export default Homepage;
