"use client";
import { useState } from "react";
import styles from "@/app/HomePage.module.css";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", email, password);
  };

  return (
    <div className="h-screen">
      <div className={styles.container}>
        <div className={styles.mainHeadingContainer}>
          <h1 className={styles.mainHeading}>My Footy App</h1>
          <h3>Players & Team Stats</h3>
          <div className={styles.formContainer}>
            <form onSubmit={handleSubmit}>
              <input
                type="email" // Corrected input type
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="*********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit">Send It</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
