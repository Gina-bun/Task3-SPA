import "./ThemeToggle.css";

export function ThemeToggle({theme, toggleTheme}) {
  return (
    <>
      <div className="container">
    <button className={`theme-button ${theme === "dark" ? "dark": ""}`} onClick={toggleTheme}>
          <div className={`slider-button ${theme === "dark" ? "dark": ""}`}>
            {theme === "dark" ? "🌕" : "🌞"}
          </div>
        </button>
      </div>
    </>
  );
}
