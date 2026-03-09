'use client';

import { useState, useEffect } from 'react';

interface TimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
}

export function useCountdown(endTime: string): TimeLeft {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => calc(endTime));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calc(endTime));
    }, 1000);
    return () => clearInterval(timer);
  }, [endTime]);

  return timeLeft;
}

function calc(endTime: string): TimeLeft {
  const diff = new Date(endTime).getTime() - Date.now();
  if (diff <= 0) return { hours: 0, minutes: 0, seconds: 0, isExpired: true };
  return {
    hours: Math.floor(diff / (1000 * 60 * 60)),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    isExpired: false,
  };
}
