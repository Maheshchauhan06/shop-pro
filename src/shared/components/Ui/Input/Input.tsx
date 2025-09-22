"use client";

import React, { forwardRef, InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string;
  helperText?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", error, label, helperText, id, ...props }, ref) => {
    // Generate unique ID if not provided
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

    // Base input styles
    const baseStyles =
      "w-full px-4 py-3 text-base border rounded-lg transition-all duration-200 placeholder:text-gray-400 text-black";

    // State styles
    const stateStyles = error
      ? "border-red-500 bg-red-50 focus:border-red-500 focus:ring-2 focus:ring-red-200"
      : "border-gray-300 bg-white hover:border-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-200";

    // Disabled styles
    const disabledStyles =
      "disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-100";

    // Focus styles
    const focusStyles = "focus:outline-none";

    // Combine all classes
    const inputClasses = [
      baseStyles,
      stateStyles,
      disabledStyles,
      focusStyles,
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-gray-700  mb-1"
          >
            {label}
            {props.required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}

        <input ref={ref} id={inputId} className={inputClasses} {...props} />

        {helperText && !error && (
          <p className="text-gray-500 text-sm mt-1">{helperText}</p>
        )}

        {error && (
          <p className="text-red-500 text-sm mt-1 flex items-center">
            <svg
              className="w-4 h-4 mr-1 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
