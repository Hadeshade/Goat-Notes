import Link from "next/link"
import Image from "next/image"
import { shadow } from "@/styles/utils"
import { Button } from "./ui/button";
import DarkModeToggle from "./DarkModeToggle";
import LogoutButton from "./LogoutButton";

function Header() {
    const user = 1;

  return (
    <header className="relative flex h-24 w-full items-center justify-between bg-popover px-3 sm:px-8"
    style={{
       boxShadow: shadow
    }}>
        <Link className="flex items-center gap-2" href="/">
        <Image src="/image.png" height={80} width={80} alt="logo" className="rounded-full priority" /> 
        
        <h1 className="flex flex-col pb-1 text-2xl font-semibold leading-6">
            GOAT <span> Notes</span>
        </h1>
        </Link > 

        <div className="flex gap-4">
        {user ? (
            <LogoutButton></LogoutButton>
        ):(
           <>
            <Button asChild>
                <Link href="/registrar-se" className="hidden sm:block">Registrar se</Link>
            </Button>

            <Button asChild variant="outline">
                <Link href="/login">Login</Link>
            </Button>
           </> 
        )}

        <DarkModeToggle></DarkModeToggle>
        </div>
    </header>
  )
}

export default Header