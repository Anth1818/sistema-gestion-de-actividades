import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

import { Input } from "@/components/ui/input"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { EyeIcon, EyeOff, User2 } from "lucide-react"
import { useState } from "react"

interface formAddUserProps {
    dataWorker: {
        id: string,
        name: string,
        lastname: string,
        phone: string,
        email: string,
        address: string,
        department: string,

    }[]
}

const Schema = z.object({
    username: z.string().min(1, "Ingrese un nombre de usuario"),
    password: z.string().min(1, "Ingrese una contraseña"),
    accesslevel: z.string().min(1, "Seleccione un nivel de acceso"),
})

export default function FormAddUser({ dataWorker }: formAddUserProps) {

    const [showPassword, setShowPassword] = useState(false)

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }

    const defaultValues = {
        username: "",
        password: "",
        accesslevel: "",
    }

    const form = useForm({
        resolver: zodResolver(Schema),
        defaultValues
    })

    function onSubmit(data: z.infer<typeof Schema>) {
        form.reset(defaultValues)
        alert("Submitted data: " + JSON.stringify({ ...data, ...dataWorker[0] }, null, 2))
    }
    return (
        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-2 lg:grid-cols-3 lg:gap-4">
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem className="col-span-12 lg:col-span-1 ">
                                <FormLabel>Usuario</FormLabel>
                                <FormControl>
                                    <div className="relative">
                                        <Input placeholder="Mariaperez123" {...field} />
                                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 dark:text-white">
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
                                            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 dark:text-white"
                                        >
                                            {showPassword ? <EyeIcon /> : <EyeOff />}
                                        </button>
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                    control={form.control}
                    name="accesslevel"
                    render={({ field }) => (
                        <FormItem className="col-span-12 md:col-span-1 ">
                            <FormLabel>Nivel de acceso</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Seleccione" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="accesslevel 1">Nivel de acceso 1</SelectItem>
                                    <SelectItem value="accesslevel 2">Nivel de acceso 2</SelectItem>
                                    <SelectItem value="accesslevel 3">Nivel de acceso 3</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                    <Button type="submit" className="col-span-12 md:col-span-4 justify-self-center w-full md:w-2/4 mt-2">Crear</Button>
                </form>
            </Form>
        </>
    )
}