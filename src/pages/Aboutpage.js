import React, { Component } from "react";
import { Link } from "react-router-dom";
import Darker from "../components/Darker";

class Aboutpage extends Component {
  render() {
    return (
      <div className="page ab">
        <Darker />
        <div className="wrap">
          <h1>This is the about page</h1>
          <p>
            á řadě snažil teprve sám věnována jícnu. Mu ní obcí mužskou tří sen,
            ostrova kontakty s přehlídky módní, a výjimky automatický zasloužil.
            Efektu vodorovných valounů obchodních mlh ať schopní býložravých
            stran v rozumnou, ať rovněž známost severu uzavřeli. Rysů obrátit ty
            invazivními přikládání, za je zvyšují celém mě jednu tři u tam co
            nebo obilí, odstřihne server
          </p>
          <Link to="/">Domů</Link>
          <Link to="/contact">Kontakt</Link>
        </div>
      </div>
    );
  }
}

export default Aboutpage;
