"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { zodResolver } from "@hookform/resolvers/zod"
import { EyeIcon, EyeOff, User2 } from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

import React from "react";

import { useRouter } from "next/navigation"

export default function LoginForm({ children }: { children: React.ReactNode }) {

    const router = useRouter()

    const [showPassword, setShowPassword] = useState(false)

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }

    const formLoginSchema = z.object({
        username: z.string({
            required_error: "Por favor ingrese su usuario.",
        }).min(1).max(30, "Máximo 30 caracteres."),

        password: z.string({
            required_error: "Por favor ingrese su contraseña.",
        }).min(1).max(30, "Máximo 30 caracteres."),

    })

    const form = useForm<z.infer<typeof formLoginSchema>>({
        resolver: zodResolver(formLoginSchema),
    })

    // 2. Define a submit handler.
    function onSubmit(data: z.infer<typeof formLoginSchema>) {
        console.log(data)
        // alert("Submitted data: " + JSON.stringify(data, null, 2))
        router.push("/dashboard/register-activities")
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-3">
                        {/* ---------Username--------- */}
                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem className="col-span-12 lg:col-span-1 ">
                                    <FormLabel>Usuario</FormLabel>
                                    <FormControl>
                                        <div className="relative">
                                            <Input id="user" placeholder="Mariaperez123" {...field} />
                                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500">
                                                <User2 />
                                            </div>
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        {/* --------Password-------- */}
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem className="col-span-12 lg:col-span-1 ">
                                    <FormLabel>Contraseña</FormLabel>
                                    <FormControl>
                                        <div className="relative">
                                            <Input
                                                id="password"
                                                type={showPassword ? "text" : "password"}
                                                placeholder="*********"
                                                className="pr-10"
                                                {...field}
                                            />
                                            <button
                                                type="button"
                                                onClick={togglePasswordVisibility}
                                                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
                                            >
                                                {showPassword ? <EyeIcon /> : <EyeOff />}
                                            </button>
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                </div>
                <div className="flex justify-center mt-4">
                    {children}
                </div>
            </form>
        </Form>
    )
}