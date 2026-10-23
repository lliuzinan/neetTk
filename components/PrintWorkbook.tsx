'use client';
export function PrintWorkbook() {
 return <div className="workbookPrintAction"><button type="button" onClick={()=>window.print()}>Print this free sample</button><p>Print the four-step sheet or choose Save as PDF in your browser. No sign-up is required.</p></div>;
}
