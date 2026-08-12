#!/usr/bin/env python3
"""Generate the public MedQGo sample PDF from reviewed first-party questions."""

from collections import defaultdict
from html import escape
import json
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import PageBreak, Paragraph, SimpleDocTemplate, Spacer

ROOT = Path(__file__).resolve().parents[1]
QUESTIONS_PATH = ROOT / "data" / "questions.json"
OUTPUT_PATH = ROOT / "public" / "downloads" / "medqgo-neet-biology-mcq-sample.pdf"


def choose_questions(rows, limit=30):
    """Keep coverage broad before filling the sample with additional reviewed questions."""
    by_topic = defaultdict(list)
    for row in rows:
        by_topic[row["topic"]].append(row)

    selected = []
    for topic in sorted(by_topic):
        if len(selected) == limit:
            return selected
        selected.append(by_topic[topic][0])

    selected_ids = {row["id"] for row in selected}
    for row in rows:
        if len(selected) == limit:
            break
        if row["id"] not in selected_ids:
            selected.append(row)
    return selected


def footer(canvas, document):
    canvas.saveState()
    canvas.setFont("Helvetica", 8)
    canvas.setFillColor(colors.HexColor("#5f6f64"))
    canvas.drawString(18 * mm, 12 * mm, "MedQGo | Original NCERT-aligned NEET Biology practice")
    canvas.drawRightString(A4[0] - 18 * mm, 12 * mm, f"Page {document.page}")
    canvas.restoreState()


def main():
    rows = json.loads(QUESTIONS_PATH.read_text())
    questions = choose_questions(rows)
    OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)

    styles = getSampleStyleSheet()
    title = ParagraphStyle("CoverTitle", parent=styles["Title"], fontName="Helvetica-Bold", fontSize=25, leading=31, textColor=colors.HexColor("#0e422b"), alignment=TA_CENTER, spaceAfter=14)
    subtitle = ParagraphStyle("CoverSubtitle", parent=styles["BodyText"], fontSize=12, leading=18, textColor=colors.HexColor("#5f6f64"), alignment=TA_CENTER, spaceAfter=10)
    heading = ParagraphStyle("Heading", parent=styles["Heading2"], fontName="Helvetica-Bold", fontSize=16, leading=21, textColor=colors.HexColor("#0e422b"), spaceBefore=8, spaceAfter=10)
    question = ParagraphStyle("Question", parent=styles["BodyText"], fontName="Helvetica-Bold", fontSize=10.5, leading=15, spaceBefore=8, spaceAfter=7)
    body = ParagraphStyle("Body", parent=styles["BodyText"], fontSize=9.5, leading=14, spaceAfter=5)
    option = ParagraphStyle("Option", parent=body, leftIndent=8 * mm, firstLineIndent=-5 * mm, spaceAfter=3)
    answer = ParagraphStyle("Answer", parent=body, backColor=colors.HexColor("#eef7e8"), borderColor=colors.HexColor("#dce7d6"), borderWidth=0.5, borderPadding=7, spaceBefore=7, spaceAfter=12)

    story = [
        Spacer(1, 38 * mm),
        Paragraph("MedQGo", ParagraphStyle("Brand", parent=subtitle, fontName="Helvetica-Bold", fontSize=16, textColor=colors.HexColor("#176b43"))),
        Spacer(1, 10 * mm),
        Paragraph("NEET Biology MCQ Sample", title),
        Paragraph("30 original, reviewed MCQs with answers and NCERT-aligned explanations", subtitle),
        Spacer(1, 15 * mm),
        Paragraph("How to use this sample", heading),
        Paragraph("Attempt each question without checking the answer. Mark uncertain items, then use the answer section to identify the NCERT concept behind each mistake. This sample contains only MedQGo original practice questions; it does not reproduce an official question paper.", body),
        Spacer(1, 8 * mm),
        Paragraph("Error-review sheet", heading),
        Paragraph("For every incorrect answer, write: (1) chapter, (2) exact NCERT concept, (3) why your chosen option looked plausible, and (4) one recall cue for the next attempt.", body),
        PageBreak(),
        Paragraph("Questions", heading),
    ]

    for index, item in enumerate(questions, start=1):
        story.append(Paragraph(f"{index}. {escape(item['stem'])}", question))
        for key in ("A", "B", "C", "D"):
            story.append(Paragraph(f"{key}. {escape(item['options'][key])}", option))
        story.append(Paragraph(f"<font color='#5f6f64'>{escape(item['ncertRef'])}</font>", body))

    story.extend([PageBreak(), Paragraph("Answers and revision notes", heading)])
    for index, item in enumerate(questions, start=1):
        correct = item["correctOption"]
        text = f"<b>{index}. Answer: {correct}. {escape(item['options'][correct])}</b><br/>{escape(item['explanation'])}"
        story.append(Paragraph(text, answer))

    document = SimpleDocTemplate(str(OUTPUT_PATH), pagesize=A4, rightMargin=18 * mm, leftMargin=18 * mm, topMargin=18 * mm, bottomMargin=20 * mm, title="MedQGo NEET Biology MCQ Sample", author="MedQGo Editorial Team")
    document.build(story, onFirstPage=footer, onLaterPages=footer)
    print(f"Generated {OUTPUT_PATH} with {len(questions)} questions")


if __name__ == "__main__":
    main()
