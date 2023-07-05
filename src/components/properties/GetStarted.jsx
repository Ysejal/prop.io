import React from "react";

const GetStarted = () => {
  return (
    <section className="start start--two start--three section__space">
      <div className="container">
        <div className="start__area wow fadeInUp">
          <div className="section__header">
            <h5 className="neutral-top">Nous changeons votre façon d'investir.</h5>
            <h2>Il est facile de commencer.</h2>
            <p className="neutral-bottom">
            L'inscription à Propio est simple et ne prend que quelques minutes. 
              Automatiquement, nous vous connectons avec les banques locales et nous nous occupons de de votre dossier.
              
            </p>
          </div>
          <div className="row">
            <div className="col-md-6 col-xl-4">
              <div className="start__single__item column__space--secondary">
                <div className="img__box">
                  <img
                    src="assets/images/step/browse.png"
                    alt="Browse Properties"
                  />
                  <div className="step__count">
                    <h4>01</h4>
                  </div>
                </div>
                <h4>Parcourir les propriétés</h4>
                <p className="neutral-bottom">
                Sélectionnez une propriété qui correspond à votre objectif parmi notre vaste gamme de propriétés triées sur le volet.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="start__single__item column__space--secondary">
                <div className="img__box arrow__container">
                  <img
                    src="assets/images/step/invest.png"
                    alt="View Details & Invest"
                  />
                  <div className="step__count">
                    <h4>02</h4>
                  </div>
                </div>
                <h4>Voir les détails et investir</h4>
                <p className="neutral-bottom">
                Affichez des mesures détaillées pour ce bien, comme le rendement locatif, etc,  et investissez comme des institutions.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="start__single__item">
                <div className="img__box">
                  <img src="assets/images/step/earn.png" alt="Earn and Track" />
                  <div className="step__count">
                    <h4>03</h4>
                  </div>
                </div>
                <h4>Gagnez et suivez</h4>
                <p className="neutral-bottom">
                Vous avez une visibilité totale sur la performance de votre investissement. Suivez l'évolution de votre capital total.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
