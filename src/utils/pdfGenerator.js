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

<<<<<<< HEAD

=======
>>>>>>> c63c25b (Add src/assets/logo.jpg)
    pdf.save(filename);
  } catch (err) {
    console.error("PDF generation failed:", err);
  }
}
