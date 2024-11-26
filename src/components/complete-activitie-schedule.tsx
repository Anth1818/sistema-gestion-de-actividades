"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { date, z } from "zod"

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

import { Textarea } from "@/components/ui/textarea"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { cn } from "@/lib/utils"
import { format, set } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { ToastAction } from "./ui/toast"
import { Calendar } from "./ui/calendar"
import { useUpdateActivitie } from "@/context/updateActivitie"

interface completeScheduleModalProps {
    id: number;
}

// Esquema base
const Schema = z.object({

    quantityWomen: z.coerce.number().int().positive("Ingrese una cantidad válida").min(1, "Ingrese una cantidad válida"),
    quantityMen: z.coerce.number().int().positive("Ingrese una cantidad válida").min(1, "Ingrese una cantidad válida"),
    obs2: z.string().max(1000, "Máximo 1000 caracteres."),
    dateFinished: z.date({
        required_error: "Ingrese la fecha de ejecución.",
    }),
})


const defaultValues = {
    quantityWomen: 0,
    quantityMen: 0,
    obs2: "",
}

export default function CompleteActivitieSchedule({ id}: completeScheduleModalProps) {
    const { toast } = useToast()
    const { isUpdated, setIsUpdated} = useUpdateActivitie()
    const disabledBtn = isUpdated

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

    const form = useForm<z.infer<typeof Schema>>({
        resolver: zodResolver(Schema),
        defaultValues
    })

    function onSubmit(data: z.infer<typeof Schema>, ) {
        form.reset(defaultValues)
        const localData = localStorage.getItem("schedule")
        const schedule = localData ? JSON.parse(localData) : []
        const newSchedule = schedule.map((item: any) => {
            if (item.id === id) {
                return {
                    ...item,
                    ...data,
                    dateUpdated: new Date(),
                    status: "Completada",
                }
            }
            return item
        })
        localStorage.setItem("schedule", JSON.stringify(newSchedule))
        if (data) {
            setIsUpdated(true)
            return notification("Se ha completado la actividad.")
        } else {
            return notification("No se ha podido completar la actividad.")
        }
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-2 lg:grid-cols-4 lg:gap-4">

                {/* ------N° de mujeres------- */}
                <FormField
                    control={form.control}
                    name="quantityWomen"
                    render={({ field }) => (
                        <FormItem className="col-span-12 md:col-span-4 ">
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
                        <FormItem className="col-span-12 md:col-span-4 ">
                            <FormLabel>Número de hombres</FormLabel>
                            <FormControl>
                                <Input placeholder="..." type="number" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* -------Fecha------- */}
                <FormField
                    control={form.control}
                    name="dateFinished"
                    render={({ field }) => (
                        <FormItem className="col-span-12 md:col-span-4 ">
                            <FormLabel>Fecha de ejecución</FormLabel>
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
                                                format(field.value, "PPP")
                                            ) : (
                                                <span>Seleccion una fecha</span>
                                            )}
                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                        </Button>
                                    </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                    <Calendar
                                        mode="single"
                                        selected={field.value}
                                        onSelect={field.onChange}
                                        disabled={(date) => {
                                            const today = new Date();
                                            const endOfYear = new Date(today.getFullYear(), 11, 31); // 31 de diciembre del año actual
                                            return date < today || date > endOfYear;
                                        }}
                                    />
                                </PopoverContent>
                            </Popover>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="obs2"
                    render={({ field }) => (
                        <FormItem className="col-span-12 md:col-span-4 ">
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

                <Button type="submit" className="col-span-12 md:col-span-4 justify-self-center w-full md:w-2/4 mt-2" disabled={disabledBtn}>Enviar</Button>

            </form>
        </Form>
    )
}