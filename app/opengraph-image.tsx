import { ImageResponse } from "next/og";

export const alt = "ShipOps — Ship faster. Sleep better.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "64px 72px",
        background: "#071827",
        color: "#edf5ff",
        fontFamily: "Arial, sans-serif",
        border: "2px solid #1d3552",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 18, color: "#7bb6ff", fontSize: 28, fontWeight: 700 }}>
        <div
          style={{
            width: 52,
            height: 52,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            background: "#0f1d31",
            color: "#7bb6ff",
            fontSize: 32,
            fontWeight: 900,
          }}
        >
          S
        </div>
        SHIPOPS
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        <div style={{ fontSize: 74, fontWeight: 900, letterSpacing: 2 }}>Ship faster.</div>
        <div style={{ fontSize: 74, fontWeight: 900, letterSpacing: 2, color: "#7bb6ff" }}>Sleep better.</div>
        <div style={{ marginTop: 16, color: "#bfdbfe", fontSize: 30 }}>DevOps as a Service for growing product teams.</div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", color: "#a7bbd6", fontSize: 22 }}>
        <span>CI/CD · Cloud · Kubernetes · Reliability</span>
        <span style={{ color: "#60a5fa" }}>shipops</span>
      </div>
    </div>,
    size,
  );
}