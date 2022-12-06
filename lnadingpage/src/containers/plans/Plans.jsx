import React from "react";
import "./Plans.css";
import { Plan } from "../../components/index.js";

function Plans() {
  const freePlan = [
    "Unlimited Bandwitch",
    "Encrypted Connection",
    "No Traffic Logs",
    "Works on All Devices",
  ];
  const standardPlan = [
    "Unlimited Bandwitch",
    "Encrypted Connection",
    "Yes Traffic Logs",
    "Works on All Devices",
    "connect Anyware",
  ];
  const premiumPlan = [
    "Unlimited Bandwitch",
    "Encrypted Connection",
    "Yes Traffic Logs",
    "Works on All Devices",
    "connect Anyware",
    "Get New Features",
  ];
  return (
    <div name="pricing" className="Lasles__plans section__margin">
      <header className="Lasles__plans-header">
        <h1 className="Lasles__plans-header__title">Choose Your Plan</h1>
        <p className="Lasles__plans-header__text">
          Let's choose the package that is best for you and explore it happily
          and cheerfully.
        </p>
      </header>

      <main className="Lasles__plans-container">
        <Plan list={freePlan} title="Free Plan" Price="Free" />
        <Plan list={standardPlan} title="Standard Plan" Price="$9/mo" />
        <Plan list={premiumPlan} title="premium Plan" Price="$12/mo" />
      </main>
    </div>
  );
}

export default Plans;
