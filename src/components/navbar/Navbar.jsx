import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";
import Home from "@/app/page";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
      </div>
      <div className={styles.logo} href="/">DextrLabs</div>
      <div className={styles.links}>
        <ThemeToggle />
        <AuthLinks />
        <Link href="/" className={styles.links}>Home</Link>
      </div>
    </div>
  );
};

export default Navbar;
