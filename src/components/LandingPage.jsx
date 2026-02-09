import "./LandingPage.css";

export function LandingPage({theme}) {
  return (
    <>
      <div className="landing-container">
        <h1 className="hero-text" data-text="Creamy. Dreamy. Delicious.">Creamy. <br /> Dreamy. <br /> Delicious.</h1>
        <svg
        className="wave"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,40 C120,80 240,0 360,30
             480,60 600,100 720,70
             840,40 960,0 1080,20
             1200,40 1320,80 1440,60
             L1440,120 L0,120 Z"
          fill={theme === "dark" ? "#000" : "#b4b4f6"}
        />
      </svg>
      </div>
    </>
  );
}
