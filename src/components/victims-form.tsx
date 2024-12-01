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
import { Textarea } from "./ui/textarea"

interface VictimsFormProps {
    gerency: string,
    action: string,
    activitie: string
}


const Schema = z.object({
    originCountry: z.string().min(1, "Seleccione un país"),
    stateResidence: z.string().min(1, "Seleccione un estado"),
    methodOfRecruitment: z.string().min(1, "Seleccione un método de captación"),
    receivedBy: z.string().min(1, "Seleccione un recibidor"),
    age: z.coerce.number().int().positive("Ingrese una edad válida").min(1, "Ingrese una edad válida").max(120, "Ingrese una edad válida"),
    obs: z.string().max(1000, "Máximo 1000 caracteres."),
})

const defaultValues = {
    originCountry: "",
    stateResidence: "",
    methodOfRecruitment: "",
    receivedBy: "",
    age: 0,
    obs: "",
}

export default function VictimsForm({ gerency, action, activitie }: VictimsFormProps) {

    const form = useForm({
        resolver: zodResolver(Schema),
        defaultValues
    })

    function onSubmit(data: z.infer<typeof Schema>) {
        form.reset(defaultValues)
        alert("Submitted data: " + JSON.stringify({ ...data, gerency, action, activitie }, null, 2))
    }
    return (
        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-2 lg:grid-cols-4 lg:gap-4">

                    {/* --------Pais de procedencia-------- */}
                    <FormField
                        control={form.control}
                        name="originCountry"
                        render={({ field }) => (
                            <FormItem className="col-span-12 md:col-span-1 ">
                                <FormLabel>Pais de procedencia</FormLabel>
                                <Select onValueChange={field.onChange} value={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Seleccione" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="Pais 1">Pais 1</SelectItem>
                                        <SelectItem value="Pais 2">Pais 2</SelectItem>
                                        <SelectItem value="Pais 3">Pais 3</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />


                    {/* --------Estado de residencia-------- */}
                    <FormField
                        control={form.control}
                        name="stateResidence"
                        render={({ field }) => (
                            <FormItem className="col-span-12 md:col-span-1 ">
                                <FormLabel>Estado donde reside</FormLabel>
                                <Select onValueChange={field.onChange} value={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Seleccione" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="estado 1">Estado 1</SelectItem>
                                        <SelectItem value="estado 2">Estado 2</SelectItem>
                                        <SelectItem value="estado 3">Estado 3</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* -------Sexo------- */}
                    {/* <FormField
                control={form.control}
                name="originCountry"
                render={({ field }) => (
                    <FormItem className="col-span-12 md:col-span-1 ">
                        <FormLabel>Pais de procedencia</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                                <SelectTrigger>
                                    <SelectValue placeholder="Seleccione" />
                                </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                <SelectItem value="Pais 1">Pais 1</SelectItem>
                                <SelectItem value="Pais 2">Pais 2</SelectItem>
                                <SelectItem value="Pais 3">Pais 3</SelectItem>
                            </SelectContent>
                        </Select>
                        <FormMessage />
                    </FormItem>
                )}
            /> */}


                    {/* --------Forma de captación-------- */}
                    <FormField
                        control={form.control}
                        name="methodOfRecruitment"
                        render={({ field }) => (
                            <FormItem className="col-span-12 md:col-span-1 ">
                                <FormLabel>Método de captación</FormLabel>
                                <Select onValueChange={field.onChange} value={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Seleccione" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="Metodo de captacion 1">Metodo de captacion 1</SelectItem>
                                        <SelectItem value="Metodo de captacion 2">Metodo de captacion 2</SelectItem>
                                        <SelectItem value="Metodo de captacion 3">Metodo de captacion 3</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* ------Recibida por------ */}
                    <FormField
                        control={form.control}
                        name="receivedBy"
                        render={({ field }) => (
                            <FormItem className="col-span-12 md:col-span-1 ">
                                <FormLabel>Recibida por</FormLabel>
                                <Select onValueChange={field.onChange} value={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Seleccione" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="Recibida 1">Recibida 1</SelectItem>
                                        <SelectItem value="Recibida 2">Recibida 2</SelectItem>
                                        <SelectItem value="Recibida 3">Recibida 3</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* --------Edad-------- */}
                    <FormField
                        control={form.control}
                        name="age"
                        render={({ field }) => (
                            <FormItem className="col-span-12 md:col-span-1 ">
                                <FormLabel>Edad</FormLabel>
                                <FormControl>
                                    <Input placeholder="..." type="number" {...field} />
                                </FormControl>
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