import Signin from "@/components/features/Auth/Signin";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In | Construction Material Shop",
  description: "Sign in to your account to access exclusive features and manage your orders",
};

export default function SignInPage() {
  return <Signin />;
}
