import React from "react";

function Header() {
  return (
    <section className="header">
      <div className="wrapper">
        <div className="inner">
          <img src="/assets/images/covid19-img.png" alt="covid" />
          <h1 className="title">Global and Country Wise Cases of Corona Virus</h1>
          <span className="sub-title">(For a Particular country, select a Country from below)</span>
        </div>
      </div>
    </section>
  );
}

export default Header;
