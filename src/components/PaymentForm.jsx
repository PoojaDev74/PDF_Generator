import React from "react";
import "../styles/PaymentForm.css";

export default function PaymentForm({ data, onChange }) {
  function updateRoot(upd) {
    onChange({ ...data, ...upd });
  }

  function addInstallment() {
    const newSchedule = [...(data.schedule || []), { amount: 0, dueDate: "" }];
    updateRoot({ schedule: newSchedule });
  }

  function updateInstallment(i, upd) {
    const schedule = data.schedule.slice();
    schedule[i] = { ...schedule[i], ...upd };
    updateRoot({ schedule });
  }

  function removeInstallment(i) {
    const schedule = data.schedule.filter((_, idx) => idx !== i);
    updateRoot({ schedule });
  }

  return (
    <div className="payment-form">
      <div className="form-group">
        <label>Total Amount</label>
        <input
          type="number"
          value={data.totalAmount}
          onChange={(e) => updateRoot({ totalAmount: Number(e.target.value) })}
        />
      </div>

      <button className="add-btn" onClick={addInstallment}>
        + Add Installment
      </button>

      <div className="installment-list">
        {(data.schedule || []).map((s, i) => (
          <div key={i} className="installment-card">
            <div className="installment-header">
              <strong>Installment {i + 1}</strong>
              <button
                className="remove-btn"
                onClick={() => removeInstallment(i)}
              >
                Remove
              </button>
            </div>
            <input
              type="number"
              placeholder="Amount"
              value={s.amount}
              onChange={(e) =>
                updateInstallment(i, { amount: Number(e.target.value) })
              }
            />
            <input
              type="date"
              value={s.dueDate}
              onChange={(e) =>
                updateInstallment(i, { dueDate: e.target.value })
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}
