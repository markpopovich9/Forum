import { createRoot } from "react-dom/client";
import App from "./App";

const htmlDiv = document.getElementById("root") as HTMLElement ;
if (!htmlDiv) throw new Error('Root element  not found');
export const root = createRoot(htmlDiv);
root.render(<App/>);
 