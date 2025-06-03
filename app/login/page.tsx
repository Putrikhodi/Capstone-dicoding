"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <div className="grid lg:grid-cols-2 min-h-[calc(100vh-0px)]">
        {/* Left side - Illustration */}
        <div className="hidden lg:block bg-gradient-to-br from-purple-200 via-green-200 to-cyan-300 relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <div className="w-full h-full relative">
              <div className="w-full h-full flex items-center justify-center">
                <Image
                  src="/images/width_1440.png"
                  alt="Mother and child illustration"
                  width={500}
                  height={500}
                  className="object-contain max-w-full max-h-full"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Login form */}
        <div className="flex items-center justify-center p-8">
          <div className="w-full max-w-md space-y-6">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Sign in</h1>
            </div>

            <form className="space-y-6">
              <div>
                <Label htmlFor="email" className="text-gray-700">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  className="mt-1 border-gray-300 focus:border-cyan-500 focus:ring-cyan-500"
                />
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-gray-700">
                    Password
                  </Label>
                  <Link
                    href="/forgot-password"
                    className="underline transition-colors duration-200 hover:bg-[#FFFFFF] hover:opacity-90 px-1"
                    style={{ color: '#00FC93' }}
                  >
                    Forget Password ?
                  </Link>
                </div>
                <div className="relative mt-1">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    className="border-gray-300 focus:border-cyan-500 focus:ring-cyan-500 pr-10"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-400" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-400" />
                    )}
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Use 8 or more characters with a mix of letters, numbers &
                  symbols
                </p>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Checkbox id="remember" />
                  <Label
                    htmlFor="remember"
                    className="ml-2 text-sm text-gray-700"
                  >
                    Remember me
                  </Label>
                </div>
              </div>

              <Button className="w-full bg-gradient-to-r from-cyan-400 to-green-400 hover:from-cyan-500 rounded-md hover:to-green-500 text-white py-3 text-lg">
                Sign in
              </Button>

              <p className="text-center text-sm text-gray-600">
                Don't have an account?{" "}
                <Link
                  href="/register"
                  className="underline transition-colors duration-200 hover:bg-[#FFFFFF] hover:opacity-90 px-1"
                  style={{ color: '#00FC93' }}
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
