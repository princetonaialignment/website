"use client";

import { FC, useState, useEffect } from "react";

type CountdownProps = {
  deadline: string;
  onExpire: () => void; // New prop to handle when the countdown expires
};

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const Countdown: FC<CountdownProps> = ({ deadline, onExpire }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [isClient, setIsClient] = useState(false); // Track client-side rendering

  useEffect(() => {
    setIsClient(true); // Mark as client once hydrated
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const calculateTimeLeft = (): TimeLeft | null => {
      const difference = new Date(deadline).getTime() - new Date().getTime();

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      return null;
    };

    const timer = setInterval(() => {
      const timeLeft = calculateTimeLeft();
      setTimeLeft(timeLeft);

      // Call the onExpire callback when time runs out
      if (!timeLeft) {
        onExpire();
      }
    }, 1000);

    // Run initial calculation when component is mounted
    setTimeLeft(calculateTimeLeft());

    return () => clearInterval(timer);
  }, [deadline, isClient, onExpire]);

  // Optimistic rendering: avoid showing anything until client-side calculation
  if (!isClient || !timeLeft) {
    return null; // Optimistically render nothing until the client is ready
  }

  return (
    <div className="text-xl mt-6 text-center font-semibold">
      Application deadline in:
      <strong className="text-blue-800 ml-2">
        {timeLeft.days} days, {timeLeft.hours} hours, {timeLeft.minutes} minutes, {timeLeft.seconds} seconds
      </strong>
    </div>
  );
};

export default Countdown;
