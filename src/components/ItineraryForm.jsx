import React from "react";
import "../styles/ItineraryForm.css";
import DayForm from "./DayForm";
import HotelForm from "./HotelForm";
import PaymentForm from "./PaymentForm";

export default function ItineraryForm({ data, onChange }) {
  function setField(key, val) {
    onChange({ [key]: val });
  }

  function updateHotel(upd) {
    onChange({ hotel: { ...data.hotel, ...upd } });
  }

  function updatePayment(upd) {
    onChange({ paymentPlan: { ...data.paymentPlan, ...upd } });
  }

  function updateDay(i, upd) {
    const days = data.days.slice();
    days[i] = { ...days[i], ...upd };
    onChange({ days });
  }

  function addDay() {
    onChange({
      days: [
        ...data.days,
        { dayTitle: `Day ${data.days.length + 1}`, morning: "", afternoon: "", evening: "", transport: "" },
      ],
    });
  }

  function removeDay(i) {
    const days = data.days.filter((_, idx) => idx !== i);
    onChange({ days });
  }

  return (
    <div className="itinerary-form">
      <div className="form-group">
        <label>Tour Title</label>
        <input
          value={data.tourTitle}
          onChange={(e) => setField("tourTitle", e.target.value)}
        />
      </div>

      <div className="form-row">
        <div>
          <label>Travelers</label>
          <input
            type="number"
            min="1"
            value={data.travelers}
            onChange={(e) => setField("travelers", Number(e.target.value))}
          />
        </div>
        <div>
          <label>Duration (Days)</label>
          <input
            type="number"
            min="1"
            value={data.durationDays}
            onChange={(e) => setField("durationDays", Number(e.target.value))}
          />
        </div>
      </div>

      <div className="form-group">
        <label>Departure</label>
        <input
          value={data.departure}
          onChange={(e) => setField("departure", e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Arrival</label>
        <input
          value={data.arrival}
          onChange={(e) => setField("arrival", e.target.value)}
        />
      </div>

      {/* Days Section */}
      <section className="form-section">
        <h3>Days</h3>
        {data.days.map((d, i) => (
          <div key={i} className="day-form-container">
            <div className="day-header">
              <strong>{d.dayTitle}</strong>
              {data.days.length > 1 && (
                <button className="remove-btn" onClick={() => removeDay(i)}>
                  Remove
                </button>
              )}
            </div>
            <DayForm data={d} onChange={(upd) => updateDay(i, upd)} />
          </div>
        ))}
        <button className="add-btn" onClick={addDay}>
          + Add Day
        </button>
      </section>

      <section className="form-section">
        <h3>Hotel Details</h3>
        <HotelForm data={data.hotel} onChange={updateHotel} />
      </section>

      <section className="form-section">
        <h3>Inclusions / Exclusions</h3>
        <textarea
          placeholder="Inclusions"
          value={data.inclusions}
          onChange={(e) => setField("inclusions", e.target.value)}
        />
        <textarea
          placeholder="Exclusions"
          value={data.exclusions}
          onChange={(e) => setField("exclusions", e.target.value)}
        />
      </section>

      <section className="form-section">
        <h3>Payment Plan</h3>
        <PaymentForm data={data.paymentPlan} onChange={updatePayment} />
      </section>
    </div>
  );
}
