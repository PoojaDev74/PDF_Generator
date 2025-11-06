import React from "react";
import "../styles/ItineraryPreview.css";

import day1 from "../assets/day1.jpg";
import day2 from "../assets/day2.jpg";
import day3 from "../assets/day3.jpg";
import day4 from "../assets/day4.jpg";
import logo from "../assets/logo.jpg";

export default function ItineraryPreview({ data }) {
    const dayImages = [day1, day2, day3, day4];
    return (
        <div className="itinerary-preview">
            {/* HEADER */}
            <header className="itinerary-header">
                <img
                    src={logo}
                    alt="The Travel Tribe"
                    className="logo"
                />
                <p className="tagline">The Travel Tribe</p>
                <div className="header-banner">
                    <p className="welcome">{data.userName || "Hi, Pooja!"}</p>
                    <h2>{data.tourTitle || "Singapore Itinerary"}</h2>
                    <p>{data.subTitle || "4 Days 3 Nights"}</p>
                </div>
            </header>

            {/* TRIP SUMMARY */}
            <section className="trip-summary">
                <div><strong>Travel Dates</strong><p>{data.departure} - {data.arrival}</p></div>
                <div><strong>Duration</strong><p>{data.durationDays} Days</p></div>
                <div><strong>Travellers</strong><p>{data.travelers}</p></div>
                <div><strong>Destination</strong><p>{data.hotel.city}</p></div>
            </section>

            {/* ===== DAYS SECTION (Timeline Layout) ===== */}
            <section className="timeline-section">
                {data.days.map((day, index) => (
                    <div className="timeline-card" key={index}>
                        {/* Day Left Bar */}
                        <div className="day-label">
                            <span>Day {index + 1}</span>
                        </div>

                        {/* Circle Image + Date */}
                        <div className="timeline-photo">
                            <img
                                src={dayImages[index] || dayImages[0]}
                                alt={`Day ${index + 1}`}
                            />
                            <h4 className="timeline-date">{day.date}</h4>
                            <p className="timeline-title">{day.dayTitle}</p>
                        </div>

                        {/* Vertical Line */}
                        <div className="timeline-line">
                            <div className="timeline-dot"></div>
                            <div className="timeline-dot"></div>
                            <div className="timeline-dot"></div>
                        </div>

                        {/* Activities */}
                        <div className="timeline-details">
                            <div className="timeline-section-item">
                                <strong>Morning:</strong>
                                {Array.isArray(day.Morning) ? (
                                    <ul>
                                        {day.Morning.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p>{day.Morning}</p>
                                )}
                            </div>

                            <div className="timeline-section-item">
                                <strong>Afternoon:</strong>
                                {Array.isArray(day.Afternoon) ? (
                                    <ul>
                                        {day.Afternoon.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p>{day.Afternoon}</p>
                                )}
                            </div>

                            <div className="timeline-section-item">
                                <strong>Evening:</strong>
                                {Array.isArray(day.Evening) ? (
                                    <ul>
                                        {day.Evening.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p>{day.Evening}</p>
                                )}
                            </div>
                        </div>

                    </div>
                ))}
            </section>

            {/* FLIGHT SUMMARY */}
            <Section title="Flight Summary">
                <StyledTable headers={["From", "To", "Flight", "Date", "Time"]}>
                    {(data.flights || []).map((f, i) => (
                        <tr key={i}>
                            <td>{f.from}</td>
                            <td>{f.to}</td>
                            <td>{f.flight}</td>
                            <td>{f.date}</td>
                            <td>{f.time}</td>
                        </tr>
                    ))}
                </StyledTable>
            </Section>

            {/* HOTEL DETAILS */}
            <Section title="Hotel Booking">
                <StyledTable headers={["Hotel", "City", "Check-in", "Check-out", "Nights"]}>
                    <tr>
                        <td>{data.hotel.name}</td>
                        <td>{data.hotel.city}</td>
                        <td>{data.hotel.checkIn}</td>
                        <td>{data.hotel.checkOut}</td>
                        <td>{data.hotel.nights}</td>
                    </tr>
                </StyledTable>
            </Section>

            {/* IMPORTANT NOTES */}
            <Section title="Important Notes">
                <div className="purple-card">
                    <StyledTable headers={["Point", "Details"]}>
                        {[
                            ["Airlines Standard Policy", "In Case Of Visa Rejection, Visa Fees Or Any Other Non Cancellable Component Cannot Be Reimbursed At Any Cost."],
                            ["Flight/Hotel Cancellation", "In Case Of Visa Rejection, Visa Fees Or Any Other Non Cancellable Component Cannot Be Reimbursed At Any Cost."],
                            ["Trip Insurance", "In Case Of Visa Rejection, Visa Fees Or Any Other Non Cancellable Component Cannot Be Reimbursed At Any Cost."],
                            ["Hotel Check-in & Check-out", "In Case Of Visa Rejection, Visa Fees Or Any Other Non Cancellable Component Cannot Be Reimbursed At Any Cost."],
                            ["Visa Rejection", "In Case Of Visa Rejection, Visa Fees Or Any Other Non Cancellable Component Cannot Be Reimbursed At Any Cost."]
                        ].map(([l, r], i) => (
                            <tr key={i}>
                                <td>{l}</td>
                                <td>{r}</td>
                            </tr>
                        ))}
                    </StyledTable>
                </div>
            </Section>

            {/* SCOPE OF SERVICE */}
            <Section title="Scope Of Service">
                <div className="purple-card">
                    <StyledTable headers={["Service", "Details"]}>
                        {[
                            ["Flight Tickets And Hotel Vouchers", "Delivered 3 Days Post Full Payment"],
                            ["Web Check-in", "Boarding Pass Delivery Via Email/WhatsApp"],
                            ["Support", "Chat Support — Response Time: 4 Hours"],
                            ["Cancellation Support", "Provided"],
                            ["Trip Support", "Response Time: 5 Minutes"]
                        ].map(([l, r], i) => (
                            <tr key={i}>
                                <td>{l}</td>
                                <td>{r}</td>
                            </tr>
                        ))}
                    </StyledTable>
                </div>
            </Section>

            {/* INCLUSION SUMMARY */}
            <Section title="Inclusion Summary">
                <div className="purple-card">
                    <StyledTable headers={["Category", "Count", "Details", "Status / Comments"]}>
                        {[
                            ["Flight", "2", "All Flights Mentioned", "Awaiting Confirmation"],
                            ["Tourist Tax", "2", "Yotel (Singapore), Oakwood (Sydney), Mercure (Cairns), Holiday Inn (Melbourne)", "Awaiting Confirmation"],
                            ["Hotel", "2", "Airport To Hotel - Hotel To Attractions - Day Trips If Any", "Included"]
                        ].map((row, i) => (
                            <tr key={i}>
                                {row.map((cell, j) => (
                                    <td key={j}>{cell}</td>
                                ))}
                            </tr>
                        ))}
                    </StyledTable>
                    <p className="tiny-text">
                        <b>Transfer Policy (Refundable Upon Claim):</b> If Any Transfer Is Delayed Beyond 15 Minutes, Customers May Book An App-Based Or Radio Taxi And Claim A Refund For That Specific Leg.
                    </p>
                </div>
            </Section>

            {/* ACTIVITY TABLE */}
            <Section title="Activity Table">
                <div className="purple-card">
                    <StyledTable headers={["City", "Activity", "Type", "Time Required"]}>
                        {[
                            { city: "Rio De Janeiro", activity: "Sydney Harbour Cruise & Taronga Zoo", type: "Nature/Sightseeing", time: "2–3 Hours" },
                            { city: "Rio De Janeiro", activity: "Sydney Harbour Cruise & Taronga Zoo", type: "Airlines Standard", time: "2–3 Hours" },
                            { city: "Rio De Janeiro", activity: "Sydney Harbour Cruise & Taronga Zoo", type: "Airlines Standard", time: "2–3 Hours" },
                            { city: "Rio De Janeiro", activity: "Sydney Harbour Cruise & Taronga Zoo", type: "Airlines Standard", time: "2–3 Hours" },
                            { city: "Rio De Janeiro", activity: "Sydney Harbour Cruise & Taronga Zoo", type: "Airlines Standard", time: "2–3 Hours" }
                        ].map((a, i) => (
                            <tr key={i}>
                                <td>{a.city}</td>
                                <td>{a.activity}</td>
                                <td>{a.type}</td>
                                <td>{a.time}</td>
                            </tr>
                        ))}
                    </StyledTable>
                </div>
            </Section>


            {/* TERMS & CONDITIONS */}
            <Section title="Terms & Conditions">
                <div className="terms-box">
                    <ul>
                        <li>All payments are non-refundable once confirmed.</li>
                        <li>Any amendment may incur additional costs.</li>
                        <li>Itinerary is subject to change based on local conditions.</li>
                        <li>Travel insurance is recommended for all travelers.</li>
                        <li>Prices are valid only for the quoted period.</li>
                    </ul>
                </div>
            </Section>

            {/* PAYMENT PLAN */}
            <Section title="Payment Plan">
                <StyledTable headers={["Installment", "Amount", "Due Date"]}>
                    {(data.paymentPlan.schedule || []).map((s, i) => (
                        <tr key={i}>
                            <td>#{i + 1}</td>
                            <td>₹{s.amount.toLocaleString()}</td>
                            <td>{s.dueDate}</td>
                        </tr>
                    ))}
                </StyledTable>
            </Section>

            {/* VISA DETAILS */}
            <Section title="Visa Details">
                <div className="visa-box">
                    <ul>
                        <li>Passport must be valid for a minimum of 6 months beyond the travel date.</li>
                        <li>Visa approval is subject to Embassy discretion.</li>
                        <li>All required documents must be submitted before the deadline.</li>
                    </ul>
                    <div className="visa-info">
                        <p><b>Visa Type:</b> Tourist</p>
                        <p><b>Processing Time:</b> 3–5 Business Days</p>
                        <p><b>Documents Required:</b> Passport Copy, Photo, Form 14</p>
                    </div>
                </div>
            </Section>

            {/* CTA Banner */}
            <div className="cta-banner">
                <h2>PLAN • PACK • GO!</h2>
                <p>Thank you for choosing Vigovia for your travel experience.</p>
            </div>

            {/* FOOTER */}
            <footer className="footer">
                <div className="footer-left">
                    <h3>The Travel Tribe Pvt. Ltd</h3>
                    <p>
                        Registered Office: HD-109 Cinnabar Hills,<br />
                        Links Business Park, Karnataka, India.
                    </p>
                </div>

                <div className="footer-center">
                    <p>
                        <strong>Phone:</strong> +91-9504061112<br />
                        <strong>Email ID:</strong> Utkarsh@TheTravelTribe.com<br />
                        <strong>CIN:</strong> U79110KA2024PTC191890
                    </p>
                </div>

                <div className="footer-right">
                    <h2 className="footer-logo">The Travel Tribe</h2>
                    <p className="footer-tagline">PLAN.PACK.GO ✈️</p>
                </div>
            </footer>
        </div >
    );
}

/* ============ Sub Components ============ */
function Section({ title, children }) {
    return (
        <section className="section">
            <h4>{title}</h4>
            {children}
        </section>
    );
}

function StyledTable({ headers, children }) {
    return (
        <table className="styled-table">
            <thead>
                <tr>
                    {headers.map((head, i) => (
                        <th key={i}>{head}</th>
                    ))}
                </tr>
            </thead>
            <tbody>{children}</tbody>
        </table>
    );
}
