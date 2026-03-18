import React, { useEffect, useState } from "react";
import "./DigitalClock.css";

const DigitalClock: React.FC = () => {
  const [time, setTime] = useState<string>("00:00:00");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      setTime(`${hours}:${minutes}:${seconds}`);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="container">
      <section className="clock-card">
        <h1 id="clock">{time}</h1>
      </section>
    </main>
  );
};

export default DigitalClock;