import React from "react";
import SoftwareSectionHero from "./SoftwareSectionHero";
import BlackCardSection from "./BlackCardSection";
import PricingCard from "./PricingCard";
import PricingTable from "./PricingTable";

function Software() {
  return (
    <div className="container py-4">
      <SoftwareSectionHero />
      <BlackCardSection />
      <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
        <h1 class="display-4 fw-normal text-body-emphasis">Pricing</h1>
        <p class="fs-5 text-body-secondary">
          Quickly build an effective pricing table for your potential customers
          with this Bootstrap example. It’s built with default Bootstrap
          components and utilities with little customization.
        </p>
      </div>
      <main>
        <PricingCard />
        <PricingTable />
      </main>
    </div>
  );
}

export default Software;
