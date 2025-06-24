import Image from "next/image";
import styles from "./page.module.css";

import Home from "./home/page.js"

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Home></Home>
        <Sidebar></Sidebar>
      </body>
    </html>
  );
}
