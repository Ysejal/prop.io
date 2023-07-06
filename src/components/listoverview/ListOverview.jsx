import React from "react";

const ListOverview = () => {
  return (
    <section className="list__overview">
      <div className="container">
        <div className="list__overview__area">
          <div className="row">
            <div className="col-sm-6 col-lg-4">
              <div className="list__overview__single shadow__effect">
                <img src="assets/images/icons/successs.png" alt="Success" />
                <h3>
                  <span className="counterFour">1000</span>+
                </h3>
                <p className="neutral-bottom">
                Transactions à haute valeur ajoutée réussies
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="list__overview__single shadow__effect">
                <img src="assets/images/icons/served.png" alt="served" />
                <h3>
                  <span className="counterFour">5000</span>+
                </h3>
                <p className="neutral-bottom">Nombre de clients servis</p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="list__overview__single shadow__effect">
                <img src="assets/images/icons/exp.png" alt="experience" />
                <h3>
                  <span className="counterFour">45</span>ans
                </h3>
                <p className="neutral-bottom">
                Expérience en matière d'investissement immobilier
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListOverview;
