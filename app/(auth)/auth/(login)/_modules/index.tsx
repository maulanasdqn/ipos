"use client";

import { IconGithub } from "@/components/icon/github";
import { IconGoogle } from "@/components/icon/google";
import { Button } from "@/components/ui/button";
import { AuthLoginGithub, AuthLoginGoogle } from "../_actions";

export function AuthLoginModule() {
  return (
    <section className="flex flex-col bg-primary h-screen items-center justify-center">
      <h1 className="text-3xl font-bold text-primary-foreground  mb-10">
        Selemat Datang, Silahkan masuk
      </h1>
      <div className="flex flex-col gap-y-4 items-center">
        <Button
          onClick={async () => await AuthLoginGoogle()}
          className="cursor-pointer"
          variant="secondary"
          type="submit"
        >
          <div className="flex gap-x-3 items-center">
            Masuk Dengan Google
            <IconGoogle />
          </div>
        </Button>

        <Button
          onClick={async () => await AuthLoginGithub()}
          className="cursor-pointer"
          variant="secondary"
          type="submit"
        >
          <div className="flex gap-x-3 items-center">
            Masuk Dengan Github
            <IconGithub />
          </div>
        </Button>
      </div>
    </section>
  );
}
