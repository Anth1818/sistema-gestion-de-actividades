"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { date, z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { Textarea } from "@/components/ui/textarea";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { cn } from "@/lib/utils";
import { format, set } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "./ui/toast";
import { Calendar } from "./ui/calendar";
import { useUpdateActivitie } from "@/context/updateActivitie";
import DynamicForm from "./dynamic-form-mobile-unit";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface completeScheduleModalProps {
  id: number;
}

// Esquema base
const Schema = z.object({
  poblationServed: z.string().min(1, { message: "Seleccione un aprox." }),
  typeOfAttention: z
    .string()
    .min(1, { message: "Seleccione un tipo de atención." }),
  rangeOfAgeAttended: z
    .string()
    .min(1, { message: "Seleccione un rango de edad." }),
  quantityWomenAttended: z.coerce
    .number()
    .int()
    .positive("Ingrese una cantidad válida")
    .min(1, "Ingrese una cantidad válida"),
  quantityMenAttended: z.coerce
    .number()
    .int()
    .positive("Ingrese una cantidad válida")
    .min(1, "Ingrese una cantidad válida"),
  disability: z.string().min(1, { message: "Seleccione una discapacidad." }),
  rangeOfAgeDisability: z
    .string()
    .min(1, { message: "Seleccione un rango de edad." }),
  quantityWomenDisability: z.coerce
    .number()
    .int()
    .positive("Ingrese una cantidad válida")
    .min(1, "Ingrese una cantidad válida"),
  quantityMenDisability: z.coerce
    .number()
    .int()
    .positive("Ingrese una cantidad válida")
    .min(1, "Ingrese una cantidad válida"),
  ethnicity: z.string().min(1, { message: "Seleccione una etnia." }),
  rangeOfAgeEthnicity: z
    .string()
    .min(1, { message: "Seleccione un rango de edad." }),
  quantityWomenEthnicity: z.coerce
    .number()
    .int()
    .positive("Ingrese una cantidad válida")
    .min(1, "Ingrese una cantidad válida"),
  quantityMenEthnicity: z.coerce
    .number()
    .int()
    .positive("Ingrese una cantidad válida")
    .min(1, "Ingrese una cantidad válida"),
  obs2: z.string().max(1000, "Máximo 1000 caracteres."),
  dateFinished: z.date({
    required_error: "Ingrese la fecha de ejecución.",
  }),
});

const defaultValues = {
  quantityWomen: 0,
  quantityMen: 0,
  obs2: "",
};

export default function CompleteMobileUnitSchedule({
  id,
}: completeScheduleModalProps) {
  const { toast } = useToast();
  const { isUpdated, setIsUpdated } = useUpdateActivitie();
  const disabledBtn = isUpdated;

  const notification = (message: string) => {
    toast({
      title: "Notificación",
      description: message,
      variant: "success",
      action: <ToastAction altText="Cerrar">Cerrar</ToastAction>,
    });
  };

  const form = useForm<z.infer<typeof Schema>>({
    resolver: zodResolver(Schema),
    defaultValues,
  });

  function onSubmit(data: z.infer<typeof Schema>) {
    form.reset(defaultValues);
    const localData = localStorage.getItem("sheduleMobileUnits");
    const schedule = localData ? JSON.parse(localData) : [];
    const newSchedule = schedule.map((item: any) => {
      if (item.id === id) {
        return {
          ...item,
          ...data,
          dateUpdated: format(new Date(), "dd/MM/yyyy"),
          dateFinished: format(data.dateFinished, "dd/MM/yyyy"),
          status: "Completada",
        };
      }
      return item;
    });
    localStorage.setItem("scheduleMobileUnits", JSON.stringify(newSchedule));
    if (data) {
      setIsUpdated(true);
      return notification("Se ha completado la actividad.");
    } else {
      return notification("No se ha podido completar la actividad.");
    }
  }
  return (

    <DynamicForm ></DynamicForm>
    // <Form {...form}>
    //   <form
    //     onSubmit={form.handleSubmit(onSubmit)}
    //     className="grid gap-2 md:grid-cols-4 lg:gap-4"
    //   >
    //     <FormField
    //       control={form.control}
    //       name="poblationServed"
    //       render={({ field }) => (
    //         <FormItem className="col-span-12 md:col-span-4">
    //           <FormLabel>Pobalción aprox a ser atendida</FormLabel>
    //           <Select onValueChange={field.onChange} value={field.value}>
    //             <FormControl>
    //               <SelectTrigger>
    //                 <SelectValue placeholder="Seleccione" />
    //               </SelectTrigger>
    //             </FormControl>
    //             <SelectContent>
    //               <SelectItem value="1-50">1-50</SelectItem>
    //               <SelectItem value="50-250">50-250</SelectItem>
    //               <SelectItem value="250+">250+</SelectItem>
    //             </SelectContent>
    //           </Select>
    //           <FormMessage />
    //         </FormItem>
    //       )}
    //     />

    //     <FormField
    //       control={form.control}
    //       name="typeOfAttention"
    //       render={({ field }) => (
    //         <FormItem className="col-span-12 md:col-span-1 ">
    //           <FormLabel>Tipo de atención</FormLabel>
    //           <Select onValueChange={field.onChange} value={field.value}>
    //             <FormControl>
    //               <SelectTrigger>
    //                 <SelectValue placeholder="Seleccione" />
    //               </SelectTrigger>
    //             </FormControl>
    //             <SelectContent>
    //               <SelectItem value="Atencion 1">Atencion 1</SelectItem>
    //               <SelectItem value="Atencion 2">Atencion 2</SelectItem>
    //               <SelectItem value="Atencion 3">Atencion 3</SelectItem>
    //             </SelectContent>
    //           </Select>
    //           <FormMessage />
    //         </FormItem>
    //       )}
    //     />

    //     <FormField
    //       control={form.control}
    //       name="rangeOfAgeAttended"
    //       render={({ field }) => (
    //         <FormItem className="col-span-12 md:col-span-1 ">
    //           <FormLabel>Rango de edad</FormLabel>
    //           <Select onValueChange={field.onChange} value={field.value}>
    //             <FormControl>
    //               <SelectTrigger>
    //                 <SelectValue placeholder="Seleccione" />
    //               </SelectTrigger>
    //             </FormControl>
    //             <SelectContent>
    //               <SelectItem value="1-17">1-17</SelectItem>
    //               <SelectItem value="18-30">18-30</SelectItem>
    //               <SelectItem value="31-45">31-45</SelectItem>
    //               <SelectItem value="46-85">46-85</SelectItem>
    //             </SelectContent>
    //           </Select>
    //           <FormMessage />
    //         </FormItem>
    //       )}
    //     />

    //     <FormField
    //       control={form.control}
    //       name="quantityWomenAttended"
    //       render={({ field }) => (
    //         <FormItem className="col-span-12 md:col-span-1 ">
    //           <FormLabel>Número de mujeres</FormLabel>
    //           <FormControl>
    //             <Input placeholder="..." type="number" {...field} />
    //           </FormControl>
    //           <FormMessage />
    //         </FormItem>
    //       )}
    //     />
    //     <FormField
    //       control={form.control}
    //       name="quantityMenAttended"
    //       render={({ field }) => (
    //         <FormItem className="col-span-12 md:col-span-1 ">
    //           <FormLabel>Número de hombres</FormLabel>
    //           <FormControl>
    //             <Input placeholder="..." type="number" {...field} />
    //           </FormControl>
    //           <FormMessage />
    //         </FormItem>
    //       )}
    //     />

    //     {/* -------Discapacidad------- */}
    //     <FormField
    //       control={form.control}
    //       name="disability"
    //       render={({ field }) => (
    //         <FormItem className="col-span-12 md:col-span-1 ">
    //           <FormLabel>Discapacidad</FormLabel>
    //           <Select onValueChange={field.onChange} value={field.value}>
    //             <FormControl>
    //               <SelectTrigger>
    //                 <SelectValue placeholder="Seleccione" />
    //               </SelectTrigger>
    //             </FormControl>
    //             <SelectContent>
    //               <SelectItem value="Discapacidad 1">Discapacidad 1</SelectItem>
    //               <SelectItem value="Discapacidad 2">Discapacidad 2</SelectItem>
    //               <SelectItem value="Discapacidad 3">Discapacidad 3</SelectItem>
    //             </SelectContent>
    //           </Select>
    //           <FormMessage />
    //         </FormItem>
    //       )}
    //     />

    //     <FormField
    //       control={form.control}
    //       name="rangeOfAgeDisability"
    //       render={({ field }) => (
    //         <FormItem className="col-span-12 md:col-span-1 ">
    //           <FormLabel>Rango de edad</FormLabel>
    //           <Select onValueChange={field.onChange} value={field.value}>
    //             <FormControl>
    //               <SelectTrigger>
    //                 <SelectValue placeholder="Seleccione" />
    //               </SelectTrigger>
    //             </FormControl>
    //             <SelectContent>
    //               <SelectItem value="1-17">1-17</SelectItem>
    //               <SelectItem value="18-30">18-30</SelectItem>
    //               <SelectItem value="31-45">31-45</SelectItem>
    //               <SelectItem value="46-85">46-85</SelectItem>
    //             </SelectContent>
    //           </Select>
    //           <FormMessage />
    //         </FormItem>
    //       )}
    //     />

    //     <FormField
    //       control={form.control}
    //       name="quantityWomenDisability"
    //       render={({ field }) => (
    //         <FormItem className="col-span-12 md:col-span-1 ">
    //           <FormLabel>Número de mujeres</FormLabel>
    //           <FormControl>
    //             <Input placeholder="..." type="number" {...field} />
    //           </FormControl>
    //           <FormMessage />
    //         </FormItem>
    //       )}
    //     />

    //     <FormField
    //       control={form.control}
    //       name="quantityMenDisability"
    //       render={({ field }) => (
    //         <FormItem className="col-span-12 md:col-span-1 ">
    //           <FormLabel>Número de hombres</FormLabel>
    //           <FormControl>
    //             <Input placeholder="..." type="number" {...field} />
    //           </FormControl>
    //           <FormMessage />
    //         </FormItem>
    //       )}
    //     />

    //     {/* -------Etnia------- */}

    //     <FormField
    //       control={form.control}
    //       name="ethnicity"
    //       render={({ field }) => (
    //         <FormItem className="col-span-12 md:col-span-1 ">
    //           <FormLabel>Etnia</FormLabel>
    //           <Select onValueChange={field.onChange} value={field.value}>
    //             <FormControl>
    //               <SelectTrigger>
    //                 <SelectValue placeholder="Seleccione" />
    //               </SelectTrigger>
    //             </FormControl>
    //             <SelectContent>
    //               <SelectItem value="etnia 1">etnia 1</SelectItem>
    //               <SelectItem value="etnia 2">etnia 2</SelectItem>
    //               <SelectItem value="etnia 3">etnia 3</SelectItem>
    //             </SelectContent>
    //           </Select>
    //           <FormMessage />
    //         </FormItem>
    //       )}
    //     />

    //     <FormField
    //       control={form.control}
    //       name="rangeOfAgeEthnicity"
    //       render={({ field }) => (
    //         <FormItem className="col-span-12 md:col-span-1 ">
    //           <FormLabel>Rango de edad</FormLabel>
    //           <Select onValueChange={field.onChange} value={field.value}>
    //             <FormControl>
    //               <SelectTrigger>
    //                 <SelectValue placeholder="Seleccione" />
    //               </SelectTrigger>
    //             </FormControl>
    //             <SelectContent>
    //               <SelectItem value="1-17">1-17</SelectItem>
    //               <SelectItem value="18-30">18-30</SelectItem>
    //               <SelectItem value="31-45">31-45</SelectItem>
    //               <SelectItem value="46-85">46-85</SelectItem>
    //             </SelectContent>
    //           </Select>
    //           <FormMessage />
    //         </FormItem>
    //       )}
    //     />

    //     <FormField
    //       control={form.control}
    //       name="quantityWomenEthnicity"
    //       render={({ field }) => (
    //         <FormItem className="col-span-12 md:col-span-1 ">
    //           <FormLabel>Número de mujeres</FormLabel>
    //           <FormControl>
    //             <Input placeholder="..." type="number" {...field} />
    //           </FormControl>
    //           <FormMessage />
    //         </FormItem>
    //       )}
    //     />

    //     <FormField
    //       control={form.control}
    //       name="quantityMenEthnicity"
    //       render={({ field }) => (
    //         <FormItem className="col-span-12 md:col-span-1 ">
    //           <FormLabel>Número de hombres</FormLabel>
    //           <FormControl>
    //             <Input placeholder="..." type="number" {...field} />
    //           </FormControl>
    //           <FormMessage />
    //         </FormItem>
    //       )}
    //     />

    //     {/* -------Fecha------- */}
    //     <FormField
    //       control={form.control}
    //       name="dateFinished"
    //       render={({ field }) => (
    //         <FormItem className="col-span-12 md:col-span-4 ">
    //           <FormLabel>Fecha de ejecución</FormLabel>
    //           <Popover>
    //             <PopoverTrigger asChild>
    //               <FormControl>
    //                 <Button
    //                   variant={"outline"}
    //                   className={cn(
    //                     "w-full pl-3 text-left font-normal",
    //                     !field.value &&
    //                       "text-black dark:text-dark-foreground dark:border-dark-foreground"
    //                   )}
    //                 >
    //                   {field.value ? (
    //                     format(field.value, "dd/MM/yyyy")
    //                   ) : (
    //                     <span>Seleccion una fecha</span>
    //                   )}
    //                   <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
    //                 </Button>
    //               </FormControl>
    //             </PopoverTrigger>
    //             <PopoverContent className="w-auto p-0" align="start">
    //               <Calendar
    //                 mode="single"
    //                 selected={field.value}
    //                 onSelect={field.onChange}
    //                 disabled={(date) => {
    //                   const today = new Date();
    //                   const endOfYear = new Date(today.getFullYear(), 11, 31); // 31 de diciembre del año actual
    //                   return date < today || date > endOfYear;
    //                 }}
    //               />
    //             </PopoverContent>
    //           </Popover>
    //           <FormMessage />
    //         </FormItem>
    //       )}
    //     />

    //     <FormField
    //       control={form.control}
    //       name="obs2"
    //       render={({ field }) => (
    //         <FormItem className="col-span-12 md:col-span-4 ">
    //           <FormLabel>Observaciones</FormLabel>
    //           <FormControl>
    //             <Textarea
    //               placeholder="Escriba sus observaciones aquí..."
    //               className="resize w-full h-24"
    //               {...field}
    //             />
    //           </FormControl>
    //           <FormMessage />
    //         </FormItem>
    //       )}
    //     />

    //     <Button
    //       type="submit"
    //       className="col-span-12 md:col-span-4 justify-self-center w-full md:w-2/4 mt-2"
    //       disabled={disabledBtn}
    //     >
    //       Enviar
    //     </Button>
    //   </form>
    // </Form>
  );
}
