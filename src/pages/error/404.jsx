import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="error bg__img pos__rel over__hi">
      <div className="container">
        <div className="error__area">
          <div className="row d-flex align-items-center">
            <div className="col-lg-4">
              <div className="error__content">
                <h1>Oops!</h1>
                <h3>Page Not Found</h3>
                <p className="primary">
                  We can’t seem to find the page you’re looking for
                </p>
                <Link to="/" className="button button--effect">
                  {" "}
                  Back To Home <i className="fa-solid fa-arrow-right-long" />{" "}
                </Link>
              </div>
            </div>
            <div className="col-lg-8 d-none d-lg-block">
              <div className="error__thumb thumb__ltr">
                <img src="assets/images/error.png" alt="Error" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Error;
