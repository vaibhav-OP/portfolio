"use client";

import Link from "next/link";
import { useScrollPosition } from "./useScrollPosition";

import styles from "./navbar.module.css";
import { useState } from "react";
import RESUME_DATA from "@/src/data/resume-data";

export default function Navbar() {
  const scrollPosition = useScrollPosition();
  const [scrolled, setScolled] = useState(false);

  const changeNavbar = () => {
    if (scrollPosition > 10) {
      setScolled(true);
    } else {
      setScolled(false);
    }
  };

  if (typeof window !== "undefined")
    window.addEventListener("scroll", changeNavbar);

  return (
    <nav className={styles.navbar + " " + (scrolled ? styles.active : "")}>
      <h3>
        <Link href="/" style={{ outline: "none" }}>
          {RESUME_DATA.name}
        </Link>
      </h3>
    </nav>
  );
}
