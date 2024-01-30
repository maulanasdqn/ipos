"use client";

import Otp from "@/components/ui/otp";

export function AuthVerifyModule() {
  return (
    <section className="flex flex-col bg-primary h-screen items-center justify-center">
      <h1 className="text-3xl font-bold text-primary-foreground  mb-10">
        Masukan 6 Digit Angka
      </h1>
      <div className="flex gap-x-4 items-center">
        <Otp
          length={6}
          otp={0}
          onOtpChange={function (otp: number): void {
            console.log(otp);
          }}
        />
      </div>
    </section>
  );
}
