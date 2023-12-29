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
          Unlock the potential of your online presence with our thoughtfully
          curated pricing plans, offering you not just a website but a
          masterpiece crafted with precision, innovation, and the artistry of
          digital elegance.
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
