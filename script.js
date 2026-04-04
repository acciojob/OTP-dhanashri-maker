const codes = document.querySelectorAll(".code");

codes.forEach((code, index) => {
  code.addEventListener("input", (e) => {
    const value = e.target.value;

    // Allow only digits; remove non-digit chars
    if (!/^\d$/.test(value)) {
      e.target.value = "";
      return;
    }

    // Move focus to next input if exists
    if (index < codes.length - 1) {
      codes[index + 1].focus();
    }
  });

  code.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") {
      if (code.value) {
        // If current input has a value, just clear it (default behavior)
        code.value = "";
        e.preventDefault(); // Prevent default backspace navigation
      } else if (index > 0) {
        // If current is empty, move to previous and clear it
        codes[index - 1].focus();
        codes[index - 1].value = "";
        e.preventDefault();
      }
    }
  });

  // Optional: To allow only digits by preventing other keys
  code.addEventListener("keypress", (e) => {
    if (!/\d/.test(e.key)) {
      e.preventDefault();
    }
  });
});

});