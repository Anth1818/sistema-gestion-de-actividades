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
import { Calendar } from "./ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { ToastAction } from "./ui/toast"
import { Textarea } from "./ui/textarea"
import { da } from "date-fns/locale"


// Esquema base
const Schema = z.object({
    cantMobileUnitsRequired: z.coerce.number().min(1, { message: "Indique cantidad" }),
    cantUltrasoundRequired: z.coerce.number().min(1, { message: "Indique cantidad" }),
    logisticalSupport: z.string().min(1, { message: "Seleccione una actividad." }),
    state: z.string().min(1, { message: "Seleccione un estado." }),
    municipality: z.string().min(1, { message: "Seleccione un municipio." }),
    parish: z.string().min(1, { message: "Seleccione una parroquia." }),
    place: z.string().min(1, { message: "Seleccione un lugar." }),
    responsible: z.string({ required_error: "Por favor indique un responsable." }).min(1, { message: "Este campo no puede estar vacío." }).max(30, "Máximo 30 caracteres."),
    obs: z.string().max(300, "Máximo 300 caracteres."),
    date: z.date({
        required_error: "Ingrese una fecha para agendar.",
    }),
})


const defaultValues = {
    cantMobileUnitsRequired: 0,
    cantUltrasoundRequired: 0,
    logisticalSupport: "",
    state: "",
    municipality: "",
    parish: "",
    place: "",
    responsible: "",
    obs: "",

}

export default function ScheduleMobileUnitsForm() {

    const { toast } = useToast()

    const notification = (message: string) => {
        toast({
            title: "Notificación",
            description: message,
            variant: "success",
            action: (
                <ToastAction altText="Cerrar">Cerrar</ToastAction>
            ),
        })
    }

    const users = ["ARuiz", "NZapata", "JSalazar", "JGonzalez", "JGarcia", "JLopez",]
    const userRandom = Math.floor(Math.random() * users.length)

    const form = useForm<z.infer<typeof Schema>>({
        resolver: zodResolver(Schema),
        defaultValues
    })

    function onSubmit(data: z.infer<typeof Schema>) {
        // form.reset(defaultValues)
        // alert("Submitted data: " + JSON.stringify({ id: Math.floor(Math.random() * 100), user: "ARuiz", ...data }, null, 2))

        // Verifica si hay datos existentes en localStorage
        // const existingData = localStorage.getItem('scheduleMobileUnits')
        // let dataLocal = existingData ? JSON.parse(existingData) : []

        // Añade el nuevo dato al array
        // dataLocal.push({ id: Math.floor(Math.random() * 100), user: users[userRandom], status: "Por completar", dateFormatted: format(data.date, "dd/MM/yyyy"), activitie: "Unidad móvil", ...data })

        // Guarda el array actualizado en localStorage
        // localStorage.setItem('scheduleMobileUnits', JSON.stringify(dataLocal))


        // const tempo = setTimeout(() => {

        //     notification("La actividad fue agendada correctamente.")

        //     clearTimeout(tempo)

        // }, 500)


        // form.reset(defaultValues)

    }


    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-2 lg:grid-cols-4 lg:gap-4">

                {/* ------Unidades moviles solicitadas------ */}
                <FormField
                    control={form.control}
                    name="cantMobileUnitsRequired"
                    render={({ field }) => (
                        <FormItem className="col-span-12 md:col-span-1 ">
                            <FormLabel>Cantidad de unidades móviles solicitadas</FormLabel>
                            <FormControl>
                                <Input placeholder="..." type="number" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {/* ------Cantidad ecografos solicitados------- */}
                <FormField
                    control={form.control}
                    name="cantUltrasoundRequired"
                    render={({ field }) => (
                        <FormItem className="col-span-12 md:col-span-1 ">
                            <FormLabel>Cantidad de ecografos solicitados</FormLabel>
                            <FormControl>
                                <Input placeholder="..." type="number" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* ------Apoyo logistico------- */}
                <FormField
                    control={form.control}
                    name="logisticalSupport"
                    render={({ field }) => (
                        <FormItem className="col-span-12 md:col-span-1 ">
                            <FormLabel>Apoyo logistico del estado o municipio</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Seleccione" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="Viáticos">Viáticos</SelectItem>
                                    <SelectItem value="Combustible">Combustible</SelectItem>
                                    <SelectItem value="Hospedaje">Hospedaje</SelectItem>
                                    <SelectItem value="Alimentación del chofer asignado">Alimentación del chofer asignado</SelectItem>
                                    <SelectItem value="Traslado de la unidad">Traslado de la unidad</SelectItem>
                                    <SelectItem value="Todas las anteriores">Todas las anteriores</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />

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

                {/* --------Fecha------- */}
                <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                        <FormItem className="col-span-12 md:col-span-1 ">
                            <FormLabel>Fecha a agendar</FormLabel>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <FormControl>
                                        <Button
                                            variant={"outline"}
                                            className={cn(
                                                "w-full pl-3 text-left font-normal",
                                                !field.value &&
                                                "text-black dark:text-dark-foreground dark:border-dark-foreground",
                                            )}
                                        >
                                            {field.value ? (
                                                format(field.value, "dd/MM/yyyy")
                                            ) : (
                                                <span>Seleccion una fecha</span>
                                            )}
                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                        </Button>
                                    </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="" align="start">
                                    <Calendar
                                        mode="single"
                                        selected={field.value}
                                        onSelect={field.onChange}
                                        disabled={(date) => {
                                            const today = new Date();
                                            const endOfYear = new Date(today.getFullYear(), 11, 31); // 31 de diciembre del año actual
                                            return date < today || date > endOfYear;
                                          }
                                        }
                                    />
                                </PopoverContent>
                            </Popover>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* --------Observaciones------- */}
                <FormField
                    control={form.control}
                    name="obs"
                    render={({ field }) => (
                        <FormItem className="col-span-12 md:col-span-3 ">
                            <FormLabel>Observaciones</FormLabel>
                            <FormControl>
                                <Textarea placeholder="..." {...field} className="h-40" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* <Button type="submit" className="col-span-12 md:col-span-4 justify-self-center w-full md:w-2/4 mt-2">Enviar</Button> */}

            </form>
        </Form>
    )
}  