import React from "react";

export default function Banner() {
  return (
    <>
      <div className="banner py-5">
        <div className="container px-5 py-5">
          <div className="p-4 p-lg-5 bg-light rounded-3 text-center">
            <div className="m-4 m-lg-5">
              <h1 className="display-5 text-center fw-bold">Banner</h1>
              <p className="fs-4">
                Bootstrap utility classes are used to create this jumbotron
                since the old component has been removed from the framework. Why
                create custom CSS when you can use utilities?
              </p>
              <button
                type="button"
                className="btn bg-primary text-white px-4 py-2 rounded "
              >
                Call to action
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
