"use client";

import { useState } from "react";
import { Button, Input, LoadingSpinner } from "@/shared/components/Ui";

export default function TestPage() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleTest = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (!email) {
        setError("Email is required");
      } else {
        setError("");
        alert("Test successful!");
      }
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Component Test</h1>

        <div className="space-y-4">
          <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={error}
          />

          <Button onClick={handleTest} isLoading={loading} fullWidth>
            Test Components
          </Button>

          <div className="flex justify-center">
            <LoadingSpinner size="md" />
          </div>
        </div>
      </div>
    </div>
  );
}
