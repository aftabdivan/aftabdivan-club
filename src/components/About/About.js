import React from "react";
import NatureDemo from "../../Images/nature-demo.jpg";
import { NavLink } from "react-router-dom";

function About() {
  return (
    <div>
      <div class="px-4 pt-5 my-5 text-center border-bottom">
        <h1 class="display-4 fw-bold text-body-emphasis">
          Crafting Digital Brilliance
        </h1>
        <div class="col-lg-6 mx-auto">
          <p class="lead mb-4">
            Welcome to D-Club Connect, where the ordinary transforms into the
            extraordinary, and software development becomes a form of alchemy.
            We are not just a company; we are architects of the digital
            renaissance, crafting solutions that transcend expectations. In the
            crucible of innovation, our team merges cutting-edge technology with
            a touch of artistry, creating software that is not merely functional
            but an immersive experience.
          </p>
          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
            <button
              type="button"
              onClick={() =>
                window.open(
                  "https://aftabdivan.github.io/aftabdivan-portfolio/"
                )
              }
              class="btn btn-primary btn-lg px-4 me-sm-3"
            >
              Creator of the web
            </button>
            <button
              type="button"
              class="btn btn-outline-secondary btn-lg px-4"
              onClick={() =>
                window.open(
                  "https://aftabdivan.github.io/aftabdivan-portfolio/"
                )
              }
            >
              Mind behind it
            </button>
          </div>
        </div>
        <div class="overflow-hidden" style={{ maxHeight: "30vh" }}>
          <div class="container px-5">
            <img
              src={NatureDemo}
              class="img-fluid border rounded-3 shadow-lg mb-4"
              alt="Example image"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div class="container px-4 py-5" id="hanging-icons">
        <h2 class="pb-2 border-bottom">About Legends</h2>
        <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div class="col d-flex align-items-start">
            <div class="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
              <i class="bi bi-bug-fill" width="1em" height="1em"></i>
            </div>
            <div>
              <h3 class="fs-2 text-body-emphasis">Aftab Divan</h3>
              <p>
                Unlock innovation with our team of excellent software
                developers. We blend expertise with creativity, crafting
                solutions that transcend expectations. At D-Club Connect, we
                don't just code; we architect digital excellence.
              </p>
              <p>
                <strong>Contact Number: </strong>+91 9510110261
              </p>
              <NavLink to={"/software"}>
                <a class="btn btn-primary">Visit detailed page</a>
              </NavLink>
            </div>
          </div>
          <div class="col d-flex align-items-start">
            <div class="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
              <i class="bi bi-feather" width="1em" height="1em"></i>
            </div>
            <div>
              <h3 class="fs-2 text-body-emphasis">Mahefuz Divan</h3>
              <p>
                Experience the epitome of style with our excellent clothes
                designer. Each creation is a fusion of passion and precision,
                tailored to elevate your fashion journey. At D-Club Clothes, we
                craft experiences that redefine elegance.
              </p>
              <p>
                <strong>Contact Number: </strong>+91 9712736170
              </p>
              <NavLink to={"/clothes"}>
                <a class="btn btn-primary">Visit detailed page</a>
              </NavLink>
            </div>
          </div>
          <div class="col d-flex align-items-start">
            <div class="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
              <i class="bi bi-tools" width="1em" height="1em"></i>
            </div>
            <div>
              <h3 class="fs-2 text-body-emphasis">Mahir Divan</h3>
              <p>
                Step into a world of timeless design and unmatched craftsmanship
                with our excellent furniture designer. Each piece is a
                harmonious blend of style and functionality, curated to elevate
                your living spaces. At D-Club Furniture.
              </p>
              <p>
                <strong>Contact Number: </strong>+91 9687812156
              </p>
              <NavLink to={"/furniture"}>
                <a class="btn btn-primary">Visit detailed page</a>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
