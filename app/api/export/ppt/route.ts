import { NextRequest } from "next/server";
import pptxgen from "pptxgenjs";
import { updateIntelligence } from "@/lib/intelligence";

function safeText(value: string, max = 500) {
  return String(value || "")
    .replace(/[\r\n]+/g, " ")
    .slice(0, max);
}

function bulletList(items: string[], max = 180) {
  return items
    .map((item: string) => "- " + safeText(item, max))
    .join("\n");
}

export async function POST(req: NextRequest) {
  const data = await req.json().catch(() => null);
  const s = data?.snapshot || (await updateIntelligence());

  const pptx = new pptxgen();

  pptx.layout = "LAYOUT_WIDE";
  pptx.author = "Lumos";
  pptx.subject = "Harry Potter Entertainment Intelligence";
  pptx.title = "Lumos Executive Intelligence";
  pptx.company = "Lumos";

  let slide = pptx.addSlide();

  slide.background = {
    color: "090806"
  };

  slide.addText("Lumos", {
    x: 0.5,
    y: 0.4,
    w: 4,
    h: 0.5,
    fontSize: 26,
    bold: true,
    color: "D4AF37"
  });

  slide.addText("Executive Intelligence Harry Potter", {
    x: 0.5,
    y: 1,
    w: 8,
    h: 0.3,
    fontSize: 16,
    color: "F7EEDB"
  });

  slide.addText(safeText(s.summary.headline, 220), {
    x: 0.5,
    y: 1.6,
    w: 11.5,
    h: 0.7,
    fontSize: 13,
    color: "F7EEDB"
  });

  slide.addText(bulletList(s.summary.bullets, 220), {
    x: 0.7,
    y: 2.5,
    w: 11,
    h: 2.5,
    fontSize: 12,
    color: "F7EEDB",
    breakLine: false,
    fit: "shrink"
  });

  slide = pptx.addSlide();

  slide.background = {
    color: "090806"
  };

  slide.addText("Risks & Opportunities", {
    x: 0.5,
    y: 0.5,
    w: 8,
    h: 0.5,
    fontSize: 24,
    bold: true,
    color: "D4AF37"
  });

  slide.addText("Risks", {
    x: 0.7,
    y: 1,
    w: 5.7,
    h: 0.3,
    fontSize: 15,
    bold: true,
    color: "EF4444"
  });

  slide.addText(bulletList(s.summary.risks, 180), {
    x: 0.7,
    y: 1.4,
    w: 5.7,
    h: 4.6,
    fontSize: 10,
    color: "F7EEDB",
    fit: "shrink"
  });

  slide.addText("Opportunities", {
