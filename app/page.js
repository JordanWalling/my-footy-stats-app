"use client";
import HomePageForm from "@/components/HomePageForm";
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
            {/* Login Form */}
            <HomePageForm
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              handleSubmit={handleSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
