import "./styles/main.scss";

import "nano-analytics";
import "nano-insights";
import { track } from "nano-custom";

// Assign track function to the global window object
(window as any).track = track;

console.log("NanoSights + Webpack is running");
