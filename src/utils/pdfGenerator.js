import html2canvas from "html2canvas";
import jsPDF from "jspdf";

/**
 * Generates a visually identical, full-length PDF.
 * Preserves gradient backgrounds, border-radius, shadows, and colors.
 */
export async function generatePdfFromElement(element, { filename = "Itinerary.pdf" } = {}) {
  try {
   
    window.scrollTo(0, 0);

    const canvas = await html2canvas(element, {
      scale: 3, 
      useCORS: true,
      backgroundColor: "#ffffff", // force white background
      logging: false,
      removeContainer: false,
      scrollY: 0,
      windowWidth: element.scrollWidth,
      windowHeight: element.scrollHeight,
    });

    const imgData = canvas.toDataURL("image/png", 1.0);

   
    const pdfWidth = 210;
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: [pdfWidth, pdfHeight],
    });


    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);

    // Optionally draw the footer line and text at bottom of every visible “page slice”
const totalHeight = pdfHeight;
const footerHeight = 10; // approx space for footer
const footerInterval = 297; // A4 height
const totalPages = Math.ceil(totalHeight / footerInterval);

pdf.setFontSize(9);
pdf.setTextColor(120);

for (let i = 1; i <= totalPages; i++) {
  const y = i * footerInterval - footerHeight;
  if (y < totalHeight - 5) {
    pdf.text("www.vigovia.example | +91 90000 00000 | contact@vigovia.com", 105, y, {
      align: "center",
    });
    pdf.text("vigovia", 105, y + 5, { align: "center" });
  }
}

    pdf.save(filename);
  } catch (err) {
    console.error("PDF generation failed:", err);
  }
}
