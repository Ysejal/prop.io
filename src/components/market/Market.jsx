import React from "react";

const Market = () => {
  return (
    <section className="market section__space over__hi">
      <div className="container">
        <div className="market__area">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6 col-xl-5">
              <div className="market__thumb thumb__rtl column__space">
                <img
                  src="assets/images/market-illustration.png"
                  alt="Explore the Market"
                />
              </div>
            </div>
            <div className="col-lg-6 col-xl-6 offset-xl-1">
              <div className="content">
                <h5 className="neutral-top">
                Exposition réelle au marché de l'immobilier
                </h5>
                <h2>Vous investissez. Prop.io fait le reste</h2>
                <p>
                L'investissement immobilier transparent grâce à Propio. Rejoignez-nous et
                  découvrer une façon plus intelligente et meilleure d'investir dans l'immobilier
                </p>
                <a href="properties.html" className="button button--effect">
                Commencer à explorer
                </a>
                <img src="assets/images/arrow.png" alt="Go to" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Market;
