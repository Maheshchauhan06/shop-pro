import { Metadata } from "next";
import { LoginForm } from "../../features/authentication";
import LoginBannerImg from "../../Assets/login-page.png";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Login - Shop kero",
  description:
    "Sign in to your account to access your personalized shopping experience",
  robots: "noindex", // Don't index login page
};

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Branding/Illustration */}
        <div className="hidden lg:block">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Welcome to Shop Kero
            </h2>
            <p className="text-gray-600 text-xl">
              Discover amazing products and enjoy seamless shopping experience
            </p>
            <Image
              src={LoginBannerImg}
              alt="Shopping experience illustration"
              className="w-full max-w-lg mx-auto mb-8 rounded-3xl m-1"
            />
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="flex justify-center lg:justify-start">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
