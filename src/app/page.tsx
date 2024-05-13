"use client"
import Image from "next/image";
import styles from "./page.module.css";
import SearchBar from "./components/SearchBar";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1 className={styles.title}>Search cards</h1>
        <SearchBar />
      </div>
    </main>
  );
}
