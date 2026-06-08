// Register the service worker for PWA installation
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js")
      .then(reg => console.log("Service Worker registered!", reg))
      .catch(err => console.error("Service Worker registration failed:", err));
  });
}

const textInput = document.getElementById("textInput");

textInput.addEventListener("paste", () => {

  // Wait for pasted text to appear
  setTimeout(() => {

    const text = textInput.value;

    if (!text.trim()) return;

    const blob = new Blob([text], {
      type: "text/plain"
    });

    const link = document.createElement("a");

    link.href = URL.createObjectURL(blob);

    link.download = "textfile.txt";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    URL.revokeObjectURL(link.href);

  }, 0);

});