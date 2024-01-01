import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer class="footer mt-auto py-3 bg-body-tertiary">
      <div class="container">
        <span class="text-body-secondary">
          © 2023 - {currentYear} | Aftab - Software Developer | Parvej - CCTV
          and Printer Specialist | Mahir - Furniture Artisan | Mahefuz -
          Clothing Stylist | Kishan - Pharmacist | All Rights Reserved
        </span>
      </div>
    </footer>
  );
}

export default Footer;
