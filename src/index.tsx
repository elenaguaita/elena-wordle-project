import { createRoot } from "react-dom/client";

import App from "./components/App";

import "./styles.css";

const container = document.querySelector("#root");
if (!container) {
  throw new Error("Root container missing in index.html");
}

const root = createRoot(container);
root.render(<App />);
