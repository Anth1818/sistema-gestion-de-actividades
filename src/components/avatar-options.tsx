"use client"

import { LogOut, User, Settings } from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

export const AvatarOptions = () => {

    const router = useRouter()

    const handleLogOut = () => {
        router.push("/login")
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button className="border-[1px] lg:border-2">
                    <Settings className=" h-[1.2rem] w-[1.2rem] transition-all dark:rotate-0 dark:scale-100 hover:border-white " />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mr-4">
                <DropdownMenuLabel>Opciones</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <User />
                    <span>Perfil</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <LogOut />
                    <span onClick={handleLogOut}>Cerrar sesión</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}