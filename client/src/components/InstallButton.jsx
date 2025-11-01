import { useEffect, useState } from "react";

export default function InstallButton() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsVisible(true);
      console.log("Install prompt available!");
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    console.log("User response to install:", outcome);
    setDeferredPrompt(null);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={handleInstallClick}
      style={{
        backgroundColor: "#00D1CD",
        border: "none",
        padding: "10px 20px",
        borderRadius: "8px",
        color: "#fff",
        cursor: "pointer",
        fontWeight: "bold",
        position: "fixed",
        bottom: "20px",
        right: "20px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
      }}
    >
      📲 Install Mate.io
    </button>
  );
}
