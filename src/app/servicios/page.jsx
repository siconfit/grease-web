"use client";
import HomeButton from "@/components/HomeButton";
import "@react-pdf-viewer/core/lib/styles/index.css";

export default function servicios() {
  return (
    <>
      <HomeButton />
      <div className="relative py-16">
        <div className="mx-4 max-w-5xl xl:mx-auto">
          <div
            style={{
              position: "relative",
              width: "100%",
              height: 0,
              paddingTop: "56.2500%",
            }}
          >
            <iframe
              loading="lazy"
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
                padding: 0,
                margin: 0,
              }}
              src="https://www.canva.com/design/DAGGZrXHvzs/GGHuM3J9pbat7PAnAxw7rw/view?embed"
              allowFullScreen
              allow="fullscreen"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
