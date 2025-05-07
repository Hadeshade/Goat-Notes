"use client";

import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { CardContent, CardFooter } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useTransition } from "react";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import Link from "next/link";

type Props = {
  type: "login" | "signup";
};

function AuthForm({ type }: Props) {
  const isLoginForm = type === "login";

  const router = useRouter();
  // toast("Deu certo");

  const [isPending, startTransition] = useTransition();

  const handleSubmit = (formData: FormData) => {
    console.log("form submitted");
  };
  return (
    <form action={handleSubmit}>
      <CardContent className="grid w-full items-center gap-4">
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            placeholder="Seu email"
            type="email"
            required
            disabled={isPending}
          ></Input>
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="senha">Senha</Label>
          <Input
            id="senha"
            name="senha"
            placeholder="Sua senha"
            type="senha"
            required
            disabled={isPending}
          ></Input>
        </div>
      </CardContent>
      <CardFooter className="mt-4 flex flex-col gap-6">
        <Button className="w-full">
          {isPending ? (
            <Loader2 className="animate-spin" />
          ) : isLoginForm ? (
            "Logar"
          ) : (
            "Cadastrar"
          )}
        </Button>
        <p className="text-xs">
          {isLoginForm ? "Não possui uma conta?" : "Já possui uma conta?"}{" "}
          <Link
            href={isLoginForm ? "/sign-up" : "/login"}
            className={`text-blue-500 underline ${isPending ? "pointer-events-none opacity-50" : ""}`}
          >
            {isLoginForm ? "Cadastrar-se" : "Login"}
          </Link>
        </p>
      </CardFooter>
    </form>
  );
}

export default AuthForm;
