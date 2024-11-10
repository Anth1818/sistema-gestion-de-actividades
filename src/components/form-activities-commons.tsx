"use client"

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
import { Textarea } from "@/components/ui/textarea"

interface ActivitiesCommonsFormProps {
    gerencia: string,
    actions: string,
    activitieType: string
}

// Esquema base
const Schema = z.object({
    specify: z.string().min(1, { message: "Por favor escribe algo." }).max(100, "Máximo 100 caracteres."),
    state: z.string().min(1, { message: "Seleccione un estado." }),
    municipality: z.string().min(1, { message: "Seleccione un municipio." }),
    parish: z.string().min(1, { message: "Seleccione una parroquia." }),
    place: z.string().min(1, { message: "Seleccione un lugar." }),
    quantityWomen: z.coerce.number().int().positive("Ingrese una cantidad válida").min(1, "Ingrese una cantidad válida"),
    quantityMen: z.coerce.number().int().positive("Ingrese una cantidad válida").min(1, "Ingrese una cantidad válida"),
    responsible: z.string({ required_error: "Por favor indique un responsable." }).min(1, { message: "Este campo no puede estar vacío." }).max(30, "Máximo 30 caracteres."),
    phone: z.string().regex(/^(0414|0424|0416|0426|0412|0212)\d{7}$/, "Por favor ingrese un número de teléfono válido."),
    obs: z
        .string()
        .min(10, {
            message: "Observaciones debe tener minimo 10 caracteres.",
        })
        .max(500, {
            message: "Observaciones no debe tener más de 10 caracteres.",
        }),
})


const defaultValues = {
    state: "",
    municipality: "",
    parish: "",
    place: "",
    specify: "",
    quantityWomen: 0,
    quantityMen: 0,
    responsible: "",
    phone: "",
    obs: "",
}

export default function ActivitiesCommonsForm({ gerencia, actions, activitieType }: ActivitiesCommonsFormProps) {

    const form = useForm({
        resolver: zodResolver(Schema),
        defaultValues
    })

    function onSubmit(data: z.infer<typeof Schema>) {
        form.reset(defaultValues)
        alert("Submitted data: " + JSON.stringify({ ...data, gerencia, actions, activitieType }, null, 2))
    }


    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-2 lg:grid-cols-4 lg:gap-4">
                {/* ------Estado------- */}
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
                                    <SelectItem value="state 1">Estado 1</SelectItem>
                                    <SelectItem value="state 2">Estado 2</SelectItem>
                                    <SelectItem value="state 3">Estado 3</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* ------Municipio------- */}

                <FormField
                    control={form.control}
                    name="municipality"
                    render={({ field }) => (
                        <FormItem className="col-span-12 md:col-span-1 ">
                            <FormLabel>Municipio</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Seleccione" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="municipality 1">Municipio 1</SelectItem>
                                    <SelectItem value="municipality 2">Municipio 2</SelectItem>
                                    <SelectItem value="municipality 3">Municipio 3</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* ------Parroquia------- */}

                <FormField
                    control={form.control}
                    name="parish"
                    render={({ field }) => (
                        <FormItem className="col-span-12 md:col-span-1 ">
                            <FormLabel>Parroquia</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Seleccione" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="parish 1">Parroquia 1</SelectItem>
                                    <SelectItem value="parish 2">Parroquia 2</SelectItem>
                                    <SelectItem value="parish 3">Parroquia 3</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* ------Lugar------- */}
                <FormField
                    control={form.control}
                    name="place"
                    render={({ field }) => (
                        <FormItem className="col-span-12 md:col-span-1 ">
                            <FormLabel>Lugar</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Seleccione" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="place 1">Lugar 1</SelectItem>
                                    <SelectItem value="place 2">Lugar 2</SelectItem>
                                    <SelectItem value="place 3">Lugar 3</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* ------Especifique------- */}
                <FormField
                    control={form.control}
                    name="specify"
                    render={({ field }) => (
                        <FormItem className="col-span-12 md:col-span-1 ">
                            <FormLabel>Especifique</FormLabel>
                            <FormControl>
                                <Input placeholder="..." {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* ------N° de mujeres------- */}
                <FormField
                    control={form.control}
                    name="quantityWomen"
                    render={({ field }) => (
                        <FormItem className="col-span-12 md:col-span-1 ">
                            <FormLabel>Número de mujeres</FormLabel>
                            <FormControl>
                                <Input placeholder="..." type="number" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* ------------N° de hombres------- */}
                <FormField
                    control={form.control}
                    name="quantityMen"
                    render={({ field }) => (
                        <FormItem className="col-span-12 md:col-span-1 ">
                            <FormLabel>Número de hombres</FormLabel>
                            <FormControl>
                                <Input placeholder="..." type="number" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* --------Responsable------- */}
                <FormField
                    control={form.control}
                    name="responsible"
                    render={({ field }) => (
                        <FormItem className="col-span-12 md:col-span-1 ">
                            <FormLabel>Responsable</FormLabel>
                            <FormControl>
                                <Input placeholder="..." {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* -------Telefono------- */}
                <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                        <FormItem className="col-span-12 md:col-span-1 ">
                            <FormLabel>Teléfono</FormLabel>
                            <FormControl>
                                <Input placeholder="..." {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
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
    )
}