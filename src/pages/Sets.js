import React from "react";
import sets from "../data/sets";
import "./Sets.css";
import SetModal from "../components/SetModal";
import { useState } from "react";
import SetCard from "../components/SetCard";


function Sets() {
  // this groups sets by keywords
  const acneGlowSets = sets.filter(set =>
    set.concern === "Acne Repair, Skin Clarifying & Glow"
  );

  const evenGlowSets = sets.filter(set =>
    set.concern === "Glow Enhancing & Even Skin"
  );

  const moistureBodySets = sets.filter(set =>
    set.concern === "Moisture Care – Body Butters and Oils"
  );

  const fullBodyKits = sets.filter(set =>
    set.concern === "Full Body Kits"
  );

  const hairGrowthSets = sets.filter(set =>
    set.concern === "Hair Growth & Damage Repair"
  );

  const fullHairRegimen = sets.filter(set =>
    set.concern === "Full Hair Care Regimen"
  );

  const hairStylingSets = sets.filter(set =>
    set.concern === "Styling & Moisture Care"
  );

  const [selectedSet, setSelectedSet] = useState(null);

  const renderSetSection = (title, data) => (
    <section className="set-section">
       <h2>{title}</h2>
       <div className="set-grid">
         {data.map(set => (
          <SetCard
            key={set.id}
            set={set}
            onViewInfo={() => setSelectedSet(set)}
        />
      ))}
    </div>
  </section>
  );

  return (
    <div className="sets-page">
      {renderSetSection("1. Acne Repair, Skin Clarifying & Glow", acneGlowSets)}
      {renderSetSection("2. Glow Enhancing & Even Skin", evenGlowSets)}
      {renderSetSection("3. Moisture Care – Body Butters and Oils", moistureBodySets)}
      {renderSetSection("4.Full Body Kits", fullBodyKits)}
      {renderSetSection("5. Hair Growth & Damage Repair", hairGrowthSets)}
      {renderSetSection("6. Full Hair Care Regimen", fullHairRegimen)}
      {renderSetSection("7. Styling & Moisture Care", hairStylingSets)}
      {selectedSet && <SetModal setData={selectedSet} onClose={() => setSelectedSet(null)} />}

    </div>
  );
}

export default Sets;
