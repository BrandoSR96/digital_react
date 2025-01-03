import React from "react";

interface BaseProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className }: BaseProps) {
  return <div className={`border rounded-lg p-4 ${className || ""}`}>{children}</div>;
}

export function CardHeader({ children, className }: BaseProps) {
  return <div className={`mb-4 ${className || ""}`}>{children}</div>;
}

export function CardTitle({ children, className }: BaseProps) {
  return <h3 className={`text-xl font-bold ${className || ""}`}>{children}</h3>;
}

export function CardContent({ children, className }: BaseProps) {
  return <div className={`${className || ""}`}>{children}</div>;
}

export function CardDescription({ children, className }: BaseProps) {
  return <p className={`text-gray-600 ${className || ""}`}>{children}</p>;
}
