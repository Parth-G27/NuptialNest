"use client";
import Link from "next/link";
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  // Example state and function if you want to update something on click
  const [counter, setCounter] = useState(0);

  const updateCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <main className={styles.main}>
      <div>
        {nums.map((num) => (
          <Link href={`/dyna/${num}`} passHref key={num}>
            <button onClick={updateCounter}>Click {num}</button>
          </Link>
        ))}
      </div>
    </main>
  );
}
