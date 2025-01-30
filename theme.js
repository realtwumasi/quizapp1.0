// Function to apply a theme
const applyTheme = (theme) => {
    document.body.className = theme;
    localStorage.setItem("selectedTheme", theme); // Save theme to localStorage
  };
  
  // Check localStorage on page load and apply the saved theme
  const savedTheme = localStorage.getItem("selectedTheme");
  if (savedTheme) {
    document.body.className = savedTheme;
  }
  
  // Add event listeners if buttons are present
  const lightTheme = document.getElementById("lightTheme");
  const darkTheme = document.getElementById("darkTheme");
  const blueTheme = document.getElementById("blueTheme");
  const greenTheme = document.getElementById("greenTheme");
  
  if (lightTheme) lightTheme.addEventListener("click", () => applyTheme("light-theme"));
  if (darkTheme) darkTheme.addEventListener("click", () => applyTheme("dark-theme"));
  if (blueTheme) blueTheme.addEventListener("click", () => applyTheme("blue-theme"));
  if (greenTheme) greenTheme.addEventListener("click", () => applyTheme("green-theme"));
  