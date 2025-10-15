import React from "react";
import "../styles/HotelForm.css";

export default function HotelForm({ data, onChange }) {
  function set(key, val) {
    onChange({ ...data, [key]: val });
  }
  return (
    <div className="hotel-form">
      <input
        value={data.name}
        onChange={(e) => set("name", e.target.value)}
        placeholder="Hotel Name"
      />
      <input
        value={data.city}
        onChange={(e) => set("city", e.target.value)}
        placeholder="City"
      />
      <input
        type="date"
        value={data.checkIn}
        onChange={(e) => set("checkIn", e.target.value)}
      />
      <input
        type="date"
        value={data.checkOut}
        onChange={(e) => set("checkOut", e.target.value)}
      />
      <input
        type="number"
        value={data.nights}
        onChange={(e) => set("nights", Number(e.target.value))}
        placeholder="Nights"
      />
    </div>
  );
}
