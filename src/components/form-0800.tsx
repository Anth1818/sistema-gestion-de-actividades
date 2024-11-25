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
import { Input } from "./ui/input"

interface form0800Props {
    gerencia: string,
    actions: string,
    activitieType: string
}


const Schema = z.object({
    state: z.string().min(1, "Seleccione un estado"),
    careProvided: z.string().min(1, "Seleccione un tipo de atención"),
    gmvw: z.string().min(1, "especifique"),
    obs: z.string().max(1000, "Máximo 1000 caracteres."),
})

const defaultValues = {
    state: "",
    careProvided: "",
    gmvw: "",
    obs: "",
}

export default function Form0800({ gerencia, actions, activitieType }: form0800Props) {

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
                <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-2 lg:grid-cols-3 lg:gap-4">

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


                    {/* --------Atencion brindada-------- */}
                    <FormField
                        control={form.control}
                        name="careProvided"
                        render={({ field }) => (
                            <FormItem className="col-span-12 md:col-span-1 ">
                                <FormLabel>Atencion brindada</FormLabel>
                                <Select onValueChange={field.onChange} value={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Seleccione" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="atencion 1">atencion 1</SelectItem>
                                        <SelectItem value="atencion 2">atencion 2</SelectItem>
                                        <SelectItem value="atencion 3">atencion 3</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* --------Gran mision venezuela mujer-------- */}
                    <FormField
                    control={form.control}
                    name="gmvw"
                    render={({ field }) => (
                        <FormItem className="col-span-12 md:col-span-1 ">
                            <FormLabel>Gran misión venezuela mujer</FormLabel>
                            <FormControl>
                                <Input placeholder="..." {...field} />
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