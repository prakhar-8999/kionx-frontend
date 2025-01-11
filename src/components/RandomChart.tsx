import {useMemo} from "react";

interface RandomChartProps {
  width?: number;
  height?: number;
  points?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
}

export default function RandomChart({
  width = 200,
  height = 100,
  points = 50,
  color = "#22C55E",
  strokeWidth = 2,
  className = "",
}: RandomChartProps) {
  const path = useMemo(() => {
    const generatePoints = () => {
      const randomPoints: number[][] = [];
      for (let i = 0; i < points; i++) {
        randomPoints.push([
          (i / (points - 1)) * width,
          (0.3 + Math.random() * 0.4) * height,
        ]);
      }
      return randomPoints;
    };

    const smoothLine = (points: number[][]) => {
      if (points.length < 2) return "";

      const firstPoint = points[0];
      let path = `M ${firstPoint[0]},${firstPoint[1]}`;

      for (let i = 0; i < points.length - 1; i++) {
        const current = points[i];
        const next = points[i + 1];
        const controlX = (current[0] + next[0]) / 2;
        path += ` C ${controlX},${current[1]} ${controlX},${next[1]} ${next[0]},${next[1]}`;
      }

      return path;
    };

    const randomPoints = generatePoints();
    const generatedPath = smoothLine(randomPoints);
    return generatedPath;
  }, [width, height, points]);

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      preserveAspectRatio="none"
    >
      <path d={path} stroke={color} strokeWidth={strokeWidth} fill="none" />
    </svg>
  );
}
