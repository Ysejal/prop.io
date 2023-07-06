import React from "react";

const Faq = () => {
  return (
    <section className="faq section__space">
      <div className="container">
        <div className="faq__area">
          <div className="section__header">
            <h2 className="neutral-top">Questions fréquemment posées</h2>
          </div>
          <div className="faq__group">
            <div className="accordion" id="accordionExampleQuestions">
              <div className="accordion-item content__space">
                <h5 className="accordion-header" id="headingQuestionsOne">
                  <span className="icon_box">
                    <img
                      src="assets/images/icons/message.png"
                      alt="Questions"
                    />
                  </span>
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseQuestionsOne"
                    aria-expanded="true"
                    aria-controls="collapseQuestionsOne"
                  >
                    Qui peut demander un investissement ?
                  </button>
                </h5>
                <div
                  id="collapseQuestionsOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingQuestionsOne"
                  data-bs-parent="#accordionExampleQuestions"
                >
                  <div className="accordion-body">
                    <p>
                    Les promoteurs immobiliers peuvent rechercher des investissements pour financer des projets de construction, de rénovation ou de développement immobilier. Ils peuvent solliciter des investisseurs individuels ou institutionnels intéressés par le secteur immobilier. 
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item content__space">
                <h5 className="accordion-header" id="headingQuestionsTwo">
                  <span className="icon_box">
                    <img
                      src="assets/images/icons/message.png"
                      alt="Questions"
                    />
                  </span>
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseQuestionsTwo"
                    aria-expanded="false"
                    aria-controls="collapseQuestionsTwo"
                  >
                    Combien de temps faut-il pour collecter le montant nécessaire à mon
                    projet ?
                  </button>
                </h5>
                <div
                  id="collapseQuestionsTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingQuestionsTwo"
                  data-bs-parent="#accordionExampleQuestions"
                >
                  <div className="accordion-body">
                    <p>
                    Le temps nécessaire pour collecter le montant nécessaire à votre projet peut varier considérablement en fonction de plusieurs facteurs, tels que la taille du montant recherché, la nature du projet, le contexte économique, la stratégie de collecte de fonds utilisée et l'attrait du projet pour les investisseurs potentiels. 
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item content__space">
                <h5 className="accordion-header" id="headingQuestionsThree">
                  <span className="icon_box">
                    <img
                      src="assets/images/icons/message.png"
                      alt="Questions"
                    />
                  </span>
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseQuestionsThree"
                    aria-expanded="false"
                    aria-controls="collapseQuestionsThree"
                  >
                    Que se passera-t-il si le montant total requis pour le projet n'est pas collecté ?
                  </button>
                </h5>
                <div
                  id="collapseQuestionsThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingQuestionsThree"
                  data-bs-parent="#accordionExampleQuestions"
                >
                  <div className="accordion-body">
                    <p>
                    Si le montant total requis pour votre projet n'est pas collecté, cela peut avoir différentes conséquences en fonction de la structure de collecte de fonds et des arrangements prévus. 
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item content__space">
                <h5 className="accordion-header" id="headingQuestionsFour">
                  <span className="icon_box">
                    <img
                      src="assets/images/icons/message.png"
                      alt="Questions"
                    />
                  </span>
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseQuestionsFour"
                    aria-expanded="false"
                    aria-controls="collapseQuestionsFour"
                  >
                    Est-il possible de modifier la durée du projet, le calendrier de remboursement des investissements reçus ?
                  </button>
                </h5>
                <div
                  id="collapseQuestionsFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingQuestionsFour"
                  data-bs-parent="#accordionExampleQuestions"
                >
                  <div className="accordion-body">
                    <p>
                    Oui, il est possible de modifier les termes d'un projet et le calendrier de remboursement des investissements reçus, mais cela dépendra des accords spécifiques conclus avec les investisseurs et des modalités convenues initialement.efore always free from repetition,
                      injected humour, or
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item content__space">
                <h5 className="accordion-header" id="headingQuestionsFive">
                  <span className="icon_box">
                    <img
                      src="assets/images/icons/message.png"
                      alt="Questions"
                    />
                  </span>
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseQuestionsFive"
                    aria-expanded="false"
                    aria-controls="collapseQuestionsFive"
                  >
                    Dois-je présenter des documents sur l'utilisation des investissements collectés ?
                  </button>
                </h5>
                <div
                  id="collapseQuestionsFive"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingQuestionsFive"
                  data-bs-parent="#accordionExampleQuestions"
                >
                  <div className="accordion-body">
                    <p>
                    La présentation de documents sur l'utilisation des investissements collectés dépend des accords établis avec les investisseurs et des obligations légales qui s'appliquent à votre projet. Dans de nombreux cas, il est recommandé et souvent requis de fournir des informations transparentes sur l'utilisation des fonds collectés.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item content__space">
                <h5 className="accordion-header" id="headingQuestionsSix">
                  <span className="icon_box">
                    <img
                      src="assets/images/icons/message.png"
                      alt="Questions"
                    />
                  </span>
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseQuestionsSix"
                    aria-expanded="false"
                    aria-controls="collapseQuestionsSix"
                  >
                    Que dois-je faire si le projet n'aboutit pas et que je ne peux pas rembourser la somme empruntée ?
                  </button>
                </h5>
                <div
                  id="collapseQuestionsSix"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingQuestionsSix"
                  data-bs-parent="#accordionExampleQuestions"
                >
                  <div className="accordion-body">
                    <p className="neutral-top neutral-bottom">
                    Si votre projet n'aboutit pas et que vous vous trouvez dans l'incapacité de rembourser la somme empruntée, voici quelques étapes que vous pouvez envisager :
                    <p>- Évaluation de la situation financière : Faites une évaluation honnête de votre situation financière et déterminez la mesure dans laquelle vous pouvez rembourser les fonds. Analysez vos actifs, vos revenus et vos autres obligations financières pour évaluer votre capacité de remboursement.</p>
                    <p>- Communication avec les créanciers : Communiquez immédiatement avec les créanciers (les prêteurs ou les investisseurs) pour les informer de la situation et expliquer les raisons pour lesquelles vous êtes dans l'incapacité de rembourser. Soyez ouvert et transparent dans vos communications et faites preuve de bonne foi pour trouver une solution.</p>
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

export default Faq;
