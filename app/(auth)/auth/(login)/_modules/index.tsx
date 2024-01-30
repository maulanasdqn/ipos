"use client";

import { IconGithub } from "@/components/icon/github";
import { IconGoogle } from "@/components/icon/google";
import { Button } from "@/components/ui/button";
import { AuthLoginGithub, AuthLoginGoogle } from "../_actions";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formLogin = z.object({
  email: z.string().email({ message: "Email tidak valid" }).min(1, {
    message: "Email tidak boleh kosong",
  }),
  password: z.string().min(1, { message: "Password tidak boleh kosong" }),
});

export function AuthLoginModule() {
  return (
    <section className="flex flex-col bg-primary h-screen items-center justify-center">
      <h1 className="text-3xl font-bold text-primary-foreground mb-4">
        iPOS UMKM
      </h1>
      <div className="flex flex-col gap-y-4 items-center w-1/4 p-4">
        <Button
          onClick={async () => await AuthLoginGoogle()}
          className="cursor-pointer w-full"
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
          className="cursor-pointer w-full"
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

export function AuthLoginAdminModule() {
  const form = useForm<z.infer<typeof formLogin>>({
    resolver: zodResolver(formLogin),
    mode: "all",
  });

  const onSubmit = form.handleSubmit((data) => {
    console.log(data);
  });

  return (
    <section className="flex flex-col bg-primary h-screen items-center justify-center">
      <h1 className="text-3xl font-bold text-primary-foreground mb-4">
        iPOS UMKM Admin
      </h1>
      <div className="flex flex-col gap-y-4 items-center w-1/4 p-4">
        <Form {...form}>
          <form onSubmit={onSubmit} className="w-full flex flex-col gap-y-4">
            <div className="flex flex-col gap-y-2">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input type="email" placeholder="Email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button
              disabled={!form.formState.isValid}
              variant="secondary"
              type="submit"
            >
              Masuk sekarang
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
}
