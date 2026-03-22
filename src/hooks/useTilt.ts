"use client";

import { useState, useRef, RefObject, MouseEvent } from "react";

interface TiltOptions {
  max?: number;
  perspective?: number;
  scale?: number;
  speed?: number;
  glare?: boolean;
  glareAngle?: number;
  glareColor?: string;
}

interface TiltValues {
  rotateX: number;
  rotateY: number;
  scale: number;
  glareX: number;
  glareY: number;
}

export function useTilt<T extends HTMLElement = HTMLElement>(
  options: TiltOptions = {}
) {
  const {
    max = 10,
    perspective = 1000,
    scale = 1.05,
    speed = 300,
    glare = true,
    glareAngle = 360,
    glareColor = "rgba(255, 255, 255, 0.2)",
  } = options;

  const ref = useRef<T | null>(null);
  const [tiltValues, setTiltValues] = useState<TiltValues>({
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    glareX: 0,
    glareY: 0,
  });

  const handleMouseMove = (e: React.MouseEvent<T | HTMLDivElement>) => {
    const element = ref.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const width = rect.width;
    const height = rect.height;

    const centerX = width / 2;
    const centerY = height / 2;

    const rotateXValue = ((y - centerY) / centerY) * -max;
    const rotateYValue = ((x - centerX) / centerX) * max;

    const glareXPercent = (x / width) * 100;
    const glareYPercent = (y / height) * 100;

    setTiltValues({
      rotateX: rotateXValue,
      rotateY: rotateYValue,
      scale: scale,
      glareX: glareXPercent,
      glareY: glareYPercent,
    });

    element.style.setProperty("--rotateX", `${rotateXValue}deg`);
    element.style.setProperty("--rotateY", `${rotateYValue}deg`);
    element.style.setProperty("--glare-x", `${glareXPercent}%`);
    element.style.setProperty("--glare-y", `${glareYPercent}%`);
  };

  const handleMouseLeave = () => {
    setTiltValues({
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      glareX: 0,
      glareY: 0,
    });

    const element = ref.current;
    if (element) {
      element.style.setProperty("--rotateX", "0deg");
      element.style.setProperty("--rotateY", "0deg");
      element.style.setProperty("--glare-x", "0%");
      element.style.setProperty("--glare-y", "0%");
    }
  };

  return [ref, tiltValues, handleMouseMove, handleMouseLeave] as const;
}
