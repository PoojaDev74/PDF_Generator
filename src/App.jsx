import React, { useRef, useState } from "react";
import ItineraryForm from "./components/ItineraryForm";
import ItineraryPreview from "./components/ItineraryPreview";
import { generatePdfFromElement } from "./utils/pdfGenerator";

import "./App.css"; 

export default function App() {
  const [data, setData] = useState({
    tourTitle: "Singapore Itinerary",
    userName: "Hi, Pooja!",
    subTitle: "5 Days 4 Nights",
    travelers: 2,
    durationDays: 4,
    departure: "05 Aug 2025",
    arrival: "08 Aug 2025",
    hotel: {
      name: "Hotel Example",
      city: "Singapore",
      checkIn: "2025-08-05",
      checkOut: "2025-08-08",
      nights: 3
    },
    inclusions: "Breakfast, Airport transfer, Guided tours",
    exclusions: "Flights, Personal expenses",
    paymentPlan: {
      totalAmount: 150000,
      schedule: [
        { amount: 50000, dueDate: "2025-06-01" },
        { amount: 50000, dueDate: "2025-07-01" },
        { amount: 50000, dueDate: "2025-07-20" }
      ]
    },
    days: [
      {
        dayTitle: "Arrival In Singapore & City Exploration",
        date: "5th Aug",
        Morning: "Arrive In Singapore. Transfer From Airport To Hotel",
        Afternoon: [
            "Check In To Your Hotel",
            "Visit Marina Bay Sands Sky Park (2–3 Hours).",
            "Optional: Stroll along Marina Bay Waterfront Promenade or Helix Bridge."
        ],
        Evening: "Explore Gardens By The Bay, Including Super Tree Grove(3-4 Hours)",
      },
      {
        dayTitle: "Singapore City excursion",
        date: "6th Aug",
        Morning: "Arrive In Singapore. Transfer From Airport To Hotel",
        Afternoon: [
            "Check In To Your Hotel",
            "Visit Marina Bay Sands Sky Park (2–3 Hours).",
            "Optional: Stroll along Marina Bay Waterfront Promenade or Helix Bridge."
        ],
        Evening: "Explore Gardens By The Bay, Including Super Tree Grove(3-4 Hours)",
      },
      {
        dayTitle: "Gardens By The Bay + Marina Bay",
        date: "7th Aug",
        Morning: "Arrive In Singapore. Transfer From Airport To Hotel",
        Afternoon: [
            "Check In To Your Hotel",
            "Visit Marina Bay Sands Sky Park (2–3 Hours).",
            "Optional: Stroll along Marina Bay Waterfront Promenade or Helix Bridge."
        ],
        Evening: "Explore Gardens By The Bay, Including Super Tree Grove(3-4 Hours)",
      },
      {
        dayTitle: "Arrive In Genting And Relax",
        date: "8th Aug",
        Morning: "Arrive In Genting. Transfer From Airport To Hotel",
        Afternoon: [
            "Check In To Your Hotel",
            "Visit Marina Bay Sands Sky Park (2–3 Hours).",
            "Optional: Stroll along Marina Bay Waterfront Promenade or Helix Bridge."
        ],
        Evening: "Explore Gardens By The Bay, Including Super Tree Grove(3-4 Hours)",
      }
    ],
    flights: [
      { from: "DEL", to: "SIN", date: "05 Aug", flight: "AI 142", time: "09:00" },
      { from: "SIN", to: "DEL", date: "08 Aug", flight: "AI 143", time: "20:00" }
    ],
    notes: "Passport & visa requirements to be checked."
  });

  const previewRef = useRef();

  function update(partial) {
    setData((prev) => ({ ...prev, ...partial }));
  }

  return (
    <div className="app-container bg-gray-50 min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-semibold mb-4 text-vgPurple">
          Itinerary Builder 
        </h1>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Left: Form */}
          <div className="card">
            <ItineraryForm data={data} onChange={update} />
            <div className="mt-4 flex gap-3">
              <button
                onClick={() =>
                  generatePdfFromElement(previewRef.current, {
                    filename: `${data.tourTitle}.pdf`
                  })
                }
                className="px-4 py-2 bg-vgPurple text-white rounded font-semibold"
              >
                Get Itinerary (Download PDF)
              </button>
            </div>
          </div>

          {/* Right: PDF Preview */}
          <div className="card overflow-auto">
            <h2 className="font-semibold mb-3 text-vgPurple">PDF Preview</h2>
            <div ref={previewRef} className="print-viewport bg-white p-6 mx-auto">
              <ItineraryPreview data={data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
