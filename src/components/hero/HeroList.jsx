import React from "react";

const HeroList = () => {
  return (
    <section className="hero hero--two hero--three hero__list clear__top pos__rel over__hi bg__img">
      <div className="container">
        <div className="hero__area">
          <div className="row">
            <div className="col-lg-8">
              <div className="hero__content">
                <h5 className="neutral-top">
                Inscrivez votre bien et vendez-le instantanément
                </h5>
                <h1>Vendez votre bien, en ligne et sans souci</h1>
                <p className="primary neutral-bottom">
                Vous percevez un loyer pour une propriété commerciale et souhaitez la vendre immédiatement ?
                Inscrivez votre propriété et convertissez les rentes de loyers annuels que vous recevez en milliards d'euros en vendant à plus de 5000 acheteurs.
                  de loyer annuel que vous percevez en Crores en le vendant à plus de 5000
                </p>
                <div className="hero__cta__group">
                  <a
                    href="registration.html"
                    className="button button--secondary button--effect"
                  >
                    inscrivez votre bien
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroList;
