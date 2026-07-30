import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") || "NEET-UG Biology MCQs";
  const subtitle = searchParams.get("subtitle") || "NCERT-aligned practice with answers";

  return new ImageResponse(
    (
      <div
        style={{
          background: "#f5fbf7",
          color: "#10251c",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          padding: "64px",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
          <div style={{ color: "#1f7a4d", fontSize: 32, fontWeight: 800 }}>MedQGo</div>
          <div style={{ color: "#4e6358", fontSize: 28, fontWeight: 700 }}>NEET-UG Biology</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ color: "#1f7a4d", fontSize: 30, fontWeight: 800 }}>
            Free NCERT-aligned MCQs
          </div>
          <div style={{ fontSize: 68, fontWeight: 900, lineHeight: 1.08, maxWidth: 980 }}>
            {title}
          </div>
          <div style={{ color: "#4e6358", fontSize: 34, lineHeight: 1.25, maxWidth: 920 }}>
            {subtitle}
          </div>
        </div>
        <div
          style={{
            alignItems: "center",
            borderTop: "2px solid #cfe5d8",
            color: "#2f5f48",
            display: "flex",
            fontSize: 28,
            fontWeight: 750,
            justifyContent: "space-between",
            paddingTop: 28,
            width: "100%",
          }}
        >
          <span>Chapter-wise practice</span>
          <span>Answers + explanations</span>
          <span>medqgo.com</span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
