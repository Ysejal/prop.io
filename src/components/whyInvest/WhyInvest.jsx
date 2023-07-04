import React from "react";

const WhyInvest = () => {
  return (
    <section className="why__invest__two section__space">
      <div className="container">
        <div className="why__invest__two__area wow fadeInUp">
          <div className="section__header">
            <h5 className="neutral-top">Investir intelligemment dans l'immobilier</h5>
            <h2>Pourquoi investir dans l'immobilier ?</h2>
            <p className="neutral-bottom">
            Commencez à construire votre portefeuille d'investissement immobilier dès aujourd'hui avec seulement
              avec seulement 5 000 $.
            </p>
          </div>
          <div className="row">
            <div className="col-sm-6 col-xxl-3">
              <div className="why__invest__two__single__item">
                <img
                  src="assets/images/icons/secure.png"
                  alt="Secure Investment"
                />
                <h5>Investissement sûr</h5>
                <p className="neutral-bottom">
                Investir dans l'immobilier peut être une option sûre, surtout si vous investissez dans des propriétés dans des zones à forte demande.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-xxl-3">
              <div className="why__invest__two__single__item">
                <img
                  src="assets/images/icons/transparent.png"
                  alt="Transparent Platform"
                />
                <h5>Plate-forme transparente</h5>
                <p className="neutral-bottom">
                Visibilité claire et ouverte sur ses opérations, ses pratiques, ses tarifs, etc..
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-xxl-3">
              <div className="why__invest__two__single__item">
                <img
                  src="assets/images/icons/cashout.png"
                  alt="Cash out any time"
                />
                <h5>Encaissement à tout moment</h5>
                <p className="neutral-bottom">
                possibilité de retirer ou de réaliser des fonds ou des investissements à n'importe quel moment.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-xxl-3">
              <div className="why__invest__two__single__item">
                <img src="assets/images/icons/reinvest.png" alt="Reinvest" />
                <h5>Reinvest</h5>
                <p className="neutral-bottom">
                Si vous vendez un investissement pour réaliser un gain en capital, vous pouvez réinvestir cet argent dans d'autres investissements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyInvest;
