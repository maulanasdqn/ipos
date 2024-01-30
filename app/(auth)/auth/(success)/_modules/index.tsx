"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export function AuthSuccessModule() {
  return (
    <section className="flex flex-col bg-primary h-screen items-center justify-center">
      <h1 className="text-3xl font-bold text-primary-foreground  mb-10">
        Akun anda berhasil terverifikasi
      </h1>
      <div className="flex gap-x-4 items-center">
        <Button variant="secondary" type="submit">
          <div className="flex gap-x-3 items-center">
            <Label>Klik disini untuk lanjut</Label>
          </div>
        </Button>
      </div>
    </section>
  );
}
