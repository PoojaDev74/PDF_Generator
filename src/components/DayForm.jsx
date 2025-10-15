import React from "react";
import "../styles/DayForm.css";

export default function DayForm({ data, onChange }) {
  function update(key, val) {
    onChange({ [key]: val });
  }

  return (
    <div className="day-form">
      <input
        placeholder="Morning Activity"
        value={data.morning}
        onChange={(e) => update("morning", e.target.value)}
      />
      <input
        placeholder="Afternoon Activity"
        value={data.afternoon}
        onChange={(e) => update("afternoon", e.target.value)}
      />
      <input
        placeholder="Evening Activity"
        value={data.evening}
        onChange={(e) => update("evening", e.target.value)}
      />
      <input
        placeholder="Transport / Transfer"
        value={data.transport}
        onChange={(e) => update("transport", e.target.value)}
      />
    </div>
  );
}
