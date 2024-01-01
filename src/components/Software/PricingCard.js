import React from "react";

function PricingCard() {
  return (
    <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm">
          <div class="card-header py-3">
            <h4 class="my-0 fw-normal">Entry</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">
              $10<small class="text-body-secondary fw-light"></small>
            </h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>1 Poftfolio</li>
              <li>Lifetime Access</li>
              <li>Email support</li>
              <li>Help center access</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm">
          <div class="card-header py-3">
            <h4 class="my-0 fw-normal">Pro</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">
              $30<small class="text-body-secondary fw-light">/our</small>
            </h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>2 developers included</li>
              <li>Always support</li>
              <li>Priority email support</li>
              <li>Help center access</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm border-primary">
          <div class="card-header py-3 text-bg-primary border-primary">
            <h4 class="my-0 fw-normal">Enterprise</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">
              $150<small class="text-body-secondary fw-light">/our</small>
            </h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>10 developers included</li>
              <li>Always developer support</li>
              <li>Phone and email support</li>
              <li>Help center access</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingCard;
