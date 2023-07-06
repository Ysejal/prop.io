import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero hero--two hero--three clear__top pos__rel over__hi bg__img">
      <div className="container">
        <div className="hero__area">
          <div className="row">
            <div className="col-lg-10">
              <div className="hero__content">
                <h5 className="neutral-top">
                Plateforme d'investissement immobilier intelligente et sécurisée
                </h5>
                <h1>Investir dans l'avenir de l'immobilier</h1>
                <p className="primary neutral-bottom">
                Commencez à percevoir des revenus locatifs quotidiens et à bénéficier d'une croissance du capital grâce à nos investissements garantis par des biens immobiliers.
                 
                </p>
                <div className="hero__cta__group">
                  <Link
                    href="business-loan.html"
                    className="button button--secondary button--effect"
                  >
                    Commencer
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
