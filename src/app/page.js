import Image from "next/image";
import styles from "./page.module.css";
import Sidebar from "./component/sidebar";
import Home from "./home/page.js"
import Message from "./component/message";

export default function RootLayout({ children }) {
  return (
        <Home></Home>
  );
}
