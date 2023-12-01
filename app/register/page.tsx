"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RegisterForm } from "./register-form";

export default function Register() {
  return (
    <div className="hidden items-start justify-center gap-6 rounded-lg p-8 md:grid">
      <div className="col-span-2 grid items-start gap-6 lg:col-span-1">
        <div className="flex items-center justify-center [&>div]:w-full">
          <Card>
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl">Create an account</CardTitle>
              <CardDescription>
                Enter your email below to create your account
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <RegisterForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
