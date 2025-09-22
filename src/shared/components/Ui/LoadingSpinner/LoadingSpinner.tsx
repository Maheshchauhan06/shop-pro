"use client";

import React from "react";

interface LoadingSpinnerProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  color?: "primary" | "white" | "gray";
  className?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = "md",
  color = "primary",
  className = "",
}) => {
  // Size styles
  const sizes = {
    xs: "h-3 w-3",
    sm: "h-4 w-4",
    md: "h-6 w-6",
    lg: "h-8 w-8",
    xl: "h-12 w-12",
  };

  // Color styles
  const colors = {
    primary: "border-gray-300 border-t-red-500",
    white: "border-white/30 border-t-white",
    gray: "border-gray-300 border-t-gray-600",
  };

  // Combine classes
  const spinnerClasses = [
    "animate-spin rounded-full border-2",
    sizes[size],
    colors[color],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <div className={spinnerClasses} />;
};

// Alternative loading dots component
export const LoadingDots: React.FC<{ className?: string }> = ({
  className = "",
}) => {
  return (
    <div className={`flex space-x-1 ${className}`}>
      <div
        className="w-2 h-2 bg-red-500 rounded-full animate-bounce"
        style={{ animationDelay: "0ms" }}
      ></div>
      <div
        className="w-2 h-2 bg-red-500 rounded-full animate-bounce"
        style={{ animationDelay: "150ms" }}
      ></div>
      <div
        className="w-2 h-2 bg-red-500 rounded-full animate-bounce"
        style={{ animationDelay: "300ms" }}
      ></div>
    </div>
  );
};
