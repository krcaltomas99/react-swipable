import React, { Component } from "react";
import { Link } from "react-router-dom";
import Darker from "../components/Darker";

class ContactScreen extends Component {
  render() {
    return (
      <div className="page cn">
        <Darker />
        <div className="wrap">
          <h1>Kontakt</h1>
          <p>
            mnou, ať rovněž známost severu uzavřeli. Rysů obrátit ty invazivními
            přikládání, za je zvyšují celém mě jednu tři u tam co nebo obilí,
            odstřihne server, a ve patří stát až nádech pánve pro každou
            rekonstrukce. Nemů
          </p>
          <Link to="/">Domů</Link>
          <Link to="/about">About</Link>
        </div>
      </div>
    );
  }
}

export default ContactScreen;
