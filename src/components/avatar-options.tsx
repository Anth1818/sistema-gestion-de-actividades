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

import { useRouter} from "next/navigation"

export const AvatarOptions = () => {

    const router = useRouter()

    const handleLogOut = () => {
        router.push("/login")
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Settings className="w-6 h-6 md:w-10 md:h-10 text-white" />
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