import React from "react";

const NumberStat = () => {
  return (
    <section className="numbers numbers__two section__space__bottom">
      <div className="container">
        <div className="numbers__area wow fadeInUp">
          <div className="row d-flex align-items-center">
            <div className="col-lg-6">
              <div className="content column__space">
                <h5 className="neutral-top">Votre succès est notre succès.</h5>
                <h2>Pourquoi vendre par l'intermédiaire de Propr.io</h2>
                <p>
                Propr.io permet aux propriétaires immobiliers de vendre leurs biens
                  par le biais de sa plateforme. Soumettez votre bien rapidement et facilement !
                </p>
                <p>
                  <a href="contact-us.html">Faites-nous part de votre bien immobilier</a>
                </p>
                <a href="login.html" className="button button--effect">
                Soumettre votre bien
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row d-flex align-items-start align-items-lg-center">
                <div className="col-sm-6">
                  <div className="numbers__single shadow__effect">
                    <img
                      src="assets/images/icons/attractive.png"
                      alt="Attractive"
                    />
                    <h5>Conditions attractives</h5>
                    <p className="neutral-bottom">
                    Avec nous, vous vendez votre bien immobilier sans payer de commission
                      de courtage
                    </p>
                  </div>
                  <div className="numbers__single shadow__effect">
                    <img src="assets/images/icons/fast.png" alt="Fast" />
                    <h5>Processus rapide</h5>
                    <p className="neutral-bottom">
                    Recevez une offre initiale et une évaluation du bien dans les
                      48 heures.
                    </p>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="numbers__single alt shadow__effect">
                    <img
                      src="assets/images/icons/innovation.png"
                      alt="Innovation"
                    />
                    <h5>L'innovation</h5>
                    <p className="neutral-bottom">
                    Vendez votre bien en ligne grâce à un modèle commercial
                    innovant.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NumberStat;
