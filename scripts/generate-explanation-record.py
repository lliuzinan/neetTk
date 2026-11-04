from pathlib import Path
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import A4
from reportlab.lib.colors import HexColor

root = Path(__file__).resolve().parents[1]
out = root / 'output/pdf/medqgo-explanation-record.pdf'
out.parent.mkdir(parents=True, exist_ok=True)
c = canvas.Canvas(str(out), pagesize=A4)
c.setTitle('MedQGo - Personal explanation record')
c.setAuthor('MedQGo')
w,h=A4

def text(x,y,value,size=11,bold=False):
 c.setFont('Helvetica-Bold' if bold else 'Helvetica',size);c.setFillColor(HexColor('#18352b'));c.drawString(x,y,value)
def header(page,subtitle):
 text(44,h-45,'MedQGo / INHERITANCE',10,True)
 text(44,h-78,'Personal explanation record',24,True)
 text(44,h-101,subtitle,11)
 text(44,h-132,'Topic: __________________________________  Date: __________________',10)
 c.setStrokeColor(HexColor('#98ad9e'));c.line(44,52,w-44,52)
 text(44,36,'Original blank worksheet | medqgo.com | November 2026',8)
 text(w-92,36,f'{page} / 2',9)
def field(y,label,hint,lines):
 text(44,y,label,13,True);text(44,y-20,hint,10)
 c.setStrokeColor(HexColor('#b9c8bf'))
 for i in range(lines): c.line(44,y-48-i*25,w-44,y-48-i*25)

header(1,'Choose one guide. Write in your own words, then keep both pages for review.')
field(h-170,'1. My conclusion','State what you think follows from the information.',4)
field(h-330,'2. Evidence and source','Note the observations or source section you used.',4)
field(h-490,'3. Assumptions','What conditions does your explanation depend on?',4)
text(44,78,'Blank writing spaces, not an answer key or a checked assessment.',9)
c.showPage()
header(2,'Return later: check your reasoning and record what you would change.')
field(h-170,'4. Reasoning or calculation','Write the steps connecting your evidence to your conclusion.',4)
field(h-330,'5. Limits and uncertainties','What cannot be concluded? What still needs checking?',2)
field(h-440,'6. What I changed','Record a mistake or a change in your explanation, and why.',2)
field(h-550,'7. Next review','Choose what to explain again and when to revisit it.',2)
text(44,78,'Editable HTML: medqgo.com/neet-ug/biology/learn/inheritance#explanation-record',8)
c.linkURL('https://medqgo.com/neet-ug/biology/learn/inheritance#explanation-record',(44,73,w-44,91))
c.save()
(root/'public/downloads/medqgo-explanation-record.pdf').write_bytes(out.read_bytes())
print(out)
