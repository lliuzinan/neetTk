"""Generate an unpublished, single-source review example; never writes public/."""
from pathlib import Path
from html import escape
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.colors import HexColor
from reportlab.lib.pagesizes import A4

root=Path(__file__).resolve().parents[1]
draft=root/'docs/drafts/2026-11-13-explanation-example'
draft.mkdir(parents=True,exist_ok=True)
out=root/'output/pdf/medqgo-explanation-example-draft.pdf'
out.parent.mkdir(parents=True,exist_ok=True)
fields=[
('My conclusion','For the stated Aa x Aa model, the probability of aa is 1/4. In 40 offspring, the expected aa count is 10; it is not a promise of exactly 10 in every batch.','State the prediction and its limits, not just a ratio.'),
('Evidence and source','This is a constructed learning example, not an experiment. Both parents are Aa. The MedQGo Mendelian guide explains the gamete combinations. A fictional observed batch contains 12 AA, 17 Aa and 11 aa. These numbers are invented for comparison with the prediction.','Separate the given model, the reference and the invented observations.'),
('Assumptions','At this autosomal locus, each parent contributes A or a with probability 1/2; fertilisation is random. To compare predicted genotype proportions with surviving offspring, assume equal survival and reliable scoring. Complete dominance is needed for the phenotype grouping, not for the 1:2:1 genotype calculation.','Name the conditions your calculation uses.'),
('Reasoning or calculation','The four ordered pairings are A+A, A+a, a+A and a+a, each with probability 1/4. The two middle pairings give Aa, so genotype probabilities are 1/4 AA, 1/2 Aa and 1/4 aa. Multiplying by 40 gives 10, 20 and 10 expected offspring. Under complete dominance, AA and Aa share the dominant phenotype: expected totals are 30 and 10. The invented observed totals are 12+17=29 dominant and 11 recessive.','Show the route from gametes to genotypes before grouping phenotypes.'),
('Limits and uncertainties','The invented batch does not establish a biological result. An observed 11 aa instead of an expected 10 does not by itself disprove segregation or prove all assumptions. A statistical assessment would require an appropriate analysis. Dominant appearance alone cannot distinguish AA from Aa.','Do not turn a small discrepancy or an appearance into proof.'),
('What I changed','Illustrative correction: I replaced “40 offspring must include 10 aa” with “10 is the expected aa count under this model; an individual batch can differ.” This is a model revision entry, not a report of an actual learner\'s mistake.','Explain why the old statement was too strong.'),
('Next review','At my next study session, I will hide this sample and rebuild the four pairings. I will explain why Aa has two paths, state the dominance assumption, and separate expected counts from observed counts. I will choose a review date in my own record.','Specify something you will produce or explain; copying this record is not proof of understanding.')]
intro='DRAFT FOR CONTENT REVIEW | November 13, 2026. An original filled example showing how to use the seven record fields. Not a real learner record, experiment, answer key or official exam material. Actual review of this new example is pending.'
sources=[('Reviewed parent guide (released November 12)', 'https://medqgo.com/neet-ug/biology/mendelian-inheritance'),('OpenStax Biology 2e 12.2: conceptual reference','https://openstax.org/books/biology-2e/pages/12-2-characteristics-and-traits'),('Blank personal record tool','https://medqgo.com/neet-ug/biology/learn/inheritance#explanation-record')]
styles=getSampleStyleSheet()
styles.add(ParagraphStyle(name='BodyGreen',fontName='Helvetica',fontSize=10,leading=14,textColor=HexColor('#18352b'),spaceAfter=7))
styles.add(ParagraphStyle(name='HintGreen',parent=styles['BodyGreen'],fontSize=9,leading=12,textColor=HexColor('#526b60')))
story=[]
for page,subset in enumerate([fields[:3],fields[3:]],1):
 if page>1: story.append(PageBreak())
 story += [Paragraph('MedQGo / Filled explanation record',styles['Title']),Paragraph('Expected counts are not a quota',styles['Heading2']),Paragraph(intro if page==1 else 'DRAFT — continuing the same constructed Aa x Aa example. Read both pages together.',styles['HintGreen']),Spacer(1,8)]
 for label,value,hint in subset:
  number=next(i+1 for i,x in enumerate(fields) if x[0]==label)
  story += [Paragraph(f'{number}. {label}',styles['Heading3']),Paragraph(escape(value),styles['BodyGreen']),Paragraph('Why this field matters: '+escape(hint),styles['HintGreen']),Spacer(1,5)]
 if page==1:
  story += [Spacer(1,12),Paragraph('How to use the sample',styles['Heading3']),Paragraph('Read the guide first. Compare this sample with the blank record, then close the sample and write your own explanation. The notes explain what belongs in each field; they do not score your knowledge.',styles['BodyGreen'])]
 else:
  for label,url in sources:story.append(Paragraph(f'<link href="{url}" color="#176747">{escape(label)}</link>',styles['HintGreen']))
def footer(c,doc):
 c.setFont('Helvetica',8);c.drawString(42,27,'MedQGo | Unpublished review draft | '+str(doc.page)+' / 2')
SimpleDocTemplate(str(out),pagesize=A4,leftMargin=42,rightMargin=42,topMargin=34,bottomMargin=45).build(story,onFirstPage=footer,onLaterPages=footer)
body='<h1>Expected counts are not a quota</h1><p class="notice">'+escape(intro)+'</p><p>Read the guide, compare the seven fields, then close the sample and write your own explanation. This sample does not score your knowledge.</p>'
for i,(label,value,hint) in enumerate(fields,1):body+=f'<section><h2>{i}. {label}</h2><p>{escape(value)}</p><p class="hint">Why this field matters: {escape(hint)}</p></section>'
body+='<nav aria-label="Sources and next step"><h2>Sources and your own record</h2><ul>'+''.join(f'<li><a href="{u}">{escape(l)}</a></li>' for l,u in sources)+'</ul></nav>'
html='<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>MedQGo filled record — review draft</title><style>*{box-sizing:border-box}body{margin:0 auto;padding:24px;max-width:800px;font:18px/1.6 system-ui;color:#18352b}h1{font-size:32px;line-height:1.2}h2{font-size:22px}section{border-top:1px solid #c9d7cf;padding:12px 0}.notice{background:#fff6dd;padding:16px}.hint{color:#526b60;font-size:16px}a{color:#176747;overflow-wrap:anywhere}@media print{body{font-size:11pt;padding:0}section{break-inside:avoid}}</style><main>'+body+'</main></html>'
(draft/'index.html').write_text(html)
(draft/'content.md').write_text('# Expected counts are not a quota\n\n'+intro+'\n\n'+'\n\n'.join(f'## {i}. {l}\n\n{v}\n\nWhy this field matters: {h}' for i,(l,v,h) in enumerate(fields,1))+'\n\n'+ '\n'.join(f'- [{l}]({u})' for l,u in sources)+'\n')
print(out)
