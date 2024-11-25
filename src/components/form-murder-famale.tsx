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

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Textarea } from "./ui/textarea"

interface MurderFemaleProps {
    gerencia: string,
    actions: string,
    activitieType: string
}


const Schema = z.object({
    state: z.string().min(1, "Seleccione un estado"),
    rangeOfAge: z.string().min(1, "Seleccione un rango de edad"),
    kindOFWeapon: z.string().min(1, "Seleccione un tipo de arma"),
    kindOfMurder: z.string().min(1, "Seleccione un tipo de femicidio"),
    status: z.string().min(1, "Seleccione un estatus"),
    obs: z.string().max(1000, "Máximo 1000 caracteres."),
})

const defaultValues = {
    state: "",
    rangeOfAge: "",
    kindOFWeapon: "",
    kindOfMurder: "",
    status: "",
    obs: "",
}

export default function MurderFemaleForm({ gerencia, actions, activitieType }: MurderFemaleProps) {

    const form = useForm({
        resolver: zodResolver(Schema),
        defaultValues
    })

    function onSubmit(data: z.infer<typeof Schema>) {
        form.reset(defaultValues)
        alert("Submitted data: " + JSON.stringify({ ...data, gerencia, actions, activitieType }, null, 2))
    }
    return (
        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-2 lg:grid-cols-4 lg:gap-4">

                    {/* --------Estado-------- */}
                    <FormField
                        control={form.control}
                        name="state"
                        render={({ field }) => (
                            <FormItem className="col-span-12 md:col-span-1 ">
                                <FormLabel>Estado</FormLabel>
                                <Select onValueChange={field.onChange} value={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Seleccione" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="estado 1">estado 1</SelectItem>
                                        <SelectItem value="estado 2">estado 2</SelectItem>
                                        <SelectItem value="estado 3">estado 3</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />


                    {/* --------Rango de edad-------- */}
                    <FormField
                        control={form.control}
                        name="rangeOfAge"
                        render={({ field }) => (
                            <FormItem className="col-span-12 md:col-span-1 ">
                                <FormLabel>Rango de edad</FormLabel>
                                <Select onValueChange={field.onChange} value={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Seleccione" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="rango 1">rango 1</SelectItem>
                                        <SelectItem value="rango 2">rango 2</SelectItem>
                                        <SelectItem value="rango 3">rango 3</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* --------Tipo de arma-------- */}
                    <FormField
                        control={form.control}
                        name="kindOFWeapon"
                        render={({ field }) => (
                            <FormItem className="col-span-12 md:col-span-1 ">
                                <FormLabel>Tipo de arma</FormLabel>
                                <Select onValueChange={field.onChange} value={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Seleccione" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="tipo de arma 1">tipo de arma 1</SelectItem>
                                        <SelectItem value="tipo de arma 2">tipo de arma 2</SelectItem>
                                        <SelectItem value="tipo de arma 3">tipo de arma 3</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* ------Tipo de femicidio------ */}
                    <FormField
                        control={form.control}
                        name="kindOfMurder"
                        render={({ field }) => (
                            <FormItem className="col-span-12 md:col-span-1 ">
                                <FormLabel>Tipo de femicidio</FormLabel>
                                <Select onValueChange={field.onChange} value={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Seleccione" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="tipo de femicidio 1">tipo de femicidio 1</SelectItem>
                                        <SelectItem value="tipo de femicidio 2">tipo de femicidio 2</SelectItem>
                                        <SelectItem value="tipo de femicidio 3">tipo de femicidio 3</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* --------Estatus-------- */}
                    <FormField
                        control={form.control}
                        name="status"
                        render={({ field }) => (
                            <FormItem className="col-span-12 md:col-span-1 ">
                                <FormLabel>Estatus</FormLabel>
                                <Select onValueChange={field.onChange} value={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Seleccione" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="estatus 1">estatus 1</SelectItem>
                                        <SelectItem value="estatus 2">estatus 2</SelectItem>
                                        <SelectItem value="estatus 3">estatus 3</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                        
                        {/* --------Observaciones-------- */}
                    <FormField
                        control={form.control}
                        name="obs"
                        render={({ field }) => (
                            <FormItem className="col-span-12 md:col-span-3 ">
                                <FormLabel>Observaciones</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="Escriba sus observaciones aquí..."
                                        className="resize w-full h-24"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button type="submit" className="col-span-12 md:col-span-4 justify-self-center w-full md:w-2/4 mt-2">Enviar</Button>
                </form>
            </Form>
        </>
    )
}