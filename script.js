const textInput = document.getElementById("textInput");

textInput.addEventListener("paste", () => {

  // Wait until pasted text appears
  setTimeout(() => {

    const text = textInput.value;

    if (!text.trim()) return;

    // Create TXT file
    const blob = new Blob([text], {
      type: "text/plain"
    });

    // Create download link
    const link = document.createElement("a");

    link.href = URL.createObjectURL(blob);

    link.download = "textfile.txt";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    URL.revokeObjectURL(link.href);

    // Clear textarea automatically
    textInput.value = "";

  }, 0);

});
