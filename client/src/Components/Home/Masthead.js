import React from "react";

function Masthead() {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center home-gradient">
      <div
        className="row d-flex justify-content-center align-items-center"
        style={{ flexDirection: "column" }}
      >
        <div className="col-lg-7 text-white font-weight-bold display-1 text-center">
          Welcome to Sign Kit!
        </div>
        <div className="col-lg-4 divider my-4" />
        <div
          className="col-lg-7 container text-white-50 lead text-center"
          style={{ fontSize: "5rem !important" }}
        >
          The complete toolkit for Indian Sign Language. Explore our range of
          features which have been carefully designed keeping in mind the
          specific needs of people related to ISL.{" "}For a tutorial click{" "}
<a
  href="https://youtu.be/NHrOwkBfRzI?si=owAgR2THbNmOmyzV"
  target="_blank"
  rel="noopener noreferrer"
  className="text-info"
>
  here
</a>.
        </div>
        <div className="d-flex justify-content-center mt-5">
          <a className="btn btn-info btn-lg px-3" href="#intro">
            Get Started <i className="fa fa-angle-down" />
          </a>
        </div>
      <div className="d-flex justify-content-center mt-5 mb-4 px-3">
  <img
    src="/WhatsApp%20Image%202026-11-01%20at%2011.59.27.jpeg"
    alt="Community feedback about Sign Kit"
    className="img-fluid"
    style={{
      width: "100%",
      maxWidth: "550px",
      height: "auto",
      borderRadius: "12px",
      boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
    }}
  />
</div>
    </div>
    </div>
  );
}

export default Masthead;
