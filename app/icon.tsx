import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#2c2c2c",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 4,
        }}
      >
        <div
          style={{
            fontFamily: "serif",
            fontSize: 14,
            fontWeight: 600,
            color: "#E8B84B",
            letterSpacing: "0.05em",
          }}
        >
          CH
        </div>
      </div>
    ),
    { ...size }
  );
}
