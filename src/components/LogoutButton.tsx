"use client";

import { Loader2 } from "lucide-react"
import { Button } from "./ui/button"
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

function LogoutButton() {
    const router = useRouter()
    const [loading, setLoading] = useState(false);

    const handleLogOut = async () => {
        setLoading(true)
        await new Promise((resolve) => setTimeout(resolve,2000));

        const errorMessage = null;

        if(!errorMessage) {
            toast.success("Deslogado" , {
                description:"Você conseguiu deslogar com sucesso"
            })
            router.push("/")
        } else{
            toast.error("Erro",{
                description: errorMessage
            });
        }
        setLoading(false);
    }

    return(
        <Button
        variant="outline" 
        onClick={handleLogOut}
        disabled={loading}
        className="w-24">
            {loading ? <Loader2 className="animate-spin" /> : "Deslogar"}
        </Button>
    )
}

export default LogoutButton