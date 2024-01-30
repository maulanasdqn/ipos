"use server";
import { signIn, signOut } from "@/lib/auth";
import { AuthError } from "next-auth";

export const AuthLoginCreadentials = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: "/dashboard",
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Email atau kata sandi tidak valid" };
        default:
          return { error: "Terjadi kesalahan" };
      }
    }

    throw error;
  }
};

export const AuthLoginGoogle = async () => {
  try {
    await signIn("google", {
      redirectTo: "/dashboard",
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Email atau kata sandi tidak valid" };
        default:
          return { error: "Terjadi kesalahan" };
      }
    }

    throw error;
  }
};

export const AuthLoginGithub = async () => {
  try {
    await signIn("github", {
      redirectTo: "/dashboard",
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Email atau kata sandi tidak valid" };
        default:
          return { error: "Terjadi kesalahan" };
      }
    }

    throw error;
  }
};

export const AuthLogout = async () => {
  await signOut();
};
