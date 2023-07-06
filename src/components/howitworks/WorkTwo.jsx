import React from "react";

const WorkTwo = () => {
  return (
    <section className="work__two section__space bg__img">
      <div className="container">
        <div className="work__two__area wow fadeInUp">
          <div className="section__header">
            <h5 className="neutral-top">Comment ça marche</h5>
            <h2>Il est facile de commencer.</h2>
            <p className="neutral-bottom">
            Soumettez votre bien rapidement et facilement !
            </p>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className="work__two__single">
                <div className="ico">
                  <h4>1</h4>
                </div>
                <h4>Remplir le formulaire en ligne</h4>
                <p className="neutral-bottom">
                Répondez à quelques questions et joignez un fichier récapitulatif pour nous aider à évaluer votre bien.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="work__two__single">
                <div className="ico">
                  <h4>2</h4>
                </div>
                <h4>Analyse du bien</h4>
                <p className="neutral-bottom">
                Répondez à quelques questions et joignez un fichier récapitulatif pour nous aider à évaluer votre bien
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="work__two__single">
                <div className="ico">
                  <h4>3</h4>
                </div>
                <h4>Recevoir une première offre</h4>
                <p className="neutral-bottom">
                Répondez à quelques questions et joignez un fichier récapitulatif pour nous aider à évaluer votre bien
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkTwo;
