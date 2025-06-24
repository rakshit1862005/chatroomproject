import Image from "next/image";
import styles from "./page.module.css";
import Sidebar from "./component/sidebar";
import Home from "./home/page.js"

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Home></Home>
      </body>
    </html>
  );
}
