import React from "react";
import { NavLink } from "react-router-dom";
import { personData } from "../constants";

function AboutLegends() {
  return (
    <div class="container px-4 py-5" id="hanging-icons">
      <h2 class="pb-2 border-bottom">About Legends</h2>
      <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
        {personData.map((data) => {
          return (
            <>
              <div class="col d-flex align-items-start">
                <div class="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                  <i class={data.icon} width="1em" height="1em"></i>
                </div>
                <div>
                  <h3 class="fs-2 text-body-emphasis">{data.name}</h3>
                  <p>{data.para}</p>
                  <p>
                    <strong>Contact Number: </strong>
                    {data.number}
                  </p>
                  <NavLink to={data.path}>
                    <a class="btn btn-primary">Visit detailed page</a>
                  </NavLink>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default AboutLegends;
