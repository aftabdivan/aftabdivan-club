import React from "react";
import CheckIcon from "./CheckIcon";

function PricingTable() {
  return (
    <div class="table-responsive">
      <table class="table text-center">
        <thead>
          <tr>
            <th style={{ width: "34%" }}></th>
            <th style={{ width: "22%" }}>Free</th>
            <th style={{ width: "22%" }}>Pro</th>
            <th style={{ width: "22%" }}>Enterprise</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" class="text-start">
              Public
            </th>
            <td>
              <CheckIcon />
            </td>
            <td>
              <CheckIcon />
            </td>
            <td>
              <CheckIcon />
            </td>
          </tr>
          <tr>
            <th scope="row" class="text-start">
              Private
            </th>
            <td></td>
            <td>
              <CheckIcon />
            </td>
            <td>
              <CheckIcon />
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <th scope="row" class="text-start">
              Permissions
            </th>
            <td>
              <CheckIcon />
            </td>
            <td>
              <CheckIcon />
            </td>
            <td>
              <CheckIcon />
            </td>
          </tr>
          <tr>
            <th scope="row" class="text-start">
              Sharing
            </th>
            <td></td>
            <td>
              <CheckIcon />
            </td>
            <td>
              <CheckIcon />
            </td>
          </tr>
          <tr>
            <th scope="row" class="text-start">
              Unlimited members
            </th>
            <td></td>
            <td>
              <CheckIcon />
            </td>
            <td>
              <CheckIcon />
            </td>
          </tr>
          <tr>
            <th scope="row" class="text-start">
              Extra security
            </th>
            <td></td>
            <td></td>
            <td>
              <CheckIcon />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default PricingTable;
