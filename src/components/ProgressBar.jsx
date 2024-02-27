import { useState, useEffect } from "react";

export default function ProgressBar({ timer }) {
  const [reaminingTime, setRemainingTime] = useState(timer);
  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return <progress value={reaminingTime} max={timer} />;
}
