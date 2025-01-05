"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Textarea } from "@/components/ui/textarea";
import { format } from "date-fns";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "./ui/toast";
import { useUpdateActivitie } from "@/context/updateActivitie";
import DynamicForm from "./dynamic-form-mobile-unit";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import type { FormData } from "@/lib/types";
import { useState } from "react";

interface completeScheduleModalProps {
  id: number;
}

// Esquema base
const Schema = z.object({
  poblationServed: z.string().min(1, { message: "Seleccione un aprox." }),
  status: z.string().min(1, { message: "Seleccione un acción." }),
  obs2: z.string().max(1000, "Máximo 1000 caracteres."),
  dateFinished: z.date({
    required_error: "Ingrese la fecha de ejecución.",
  }),
});

const defaultValues = {
  obs2: "",
  poblationServed: "",
};

export default function CompleteMobileUnitSchedule({
  id,
}: completeScheduleModalProps) {
  const { toast } = useToast();
  const { isUpdated, setIsUpdated } = useUpdateActivitie();
  let disabledBtn = isUpdated;
  const [formData, setFormData] = useState<FormData>({
    attentionTypes: [],
  })

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

  const disable = () => {
    if (formData.attentionTypes.length === 0) {
      return true;
    }
    if (formData.attentionTypes.some((attentionType) => attentionType.type === "" || attentionType.ageRanges.length === 0 || attentionType.ageRanges.some((ageRange) => ageRange.range === "" || ageRange.women === 0 || ageRange.men === 0))) {
      return true;
    }
    return false;
  }

  disabledBtn = disable();

  function onSubmit(data: z.infer<typeof Schema>) {
    form.reset(defaultValues);
    setFormData({ attentionTypes: [] });

    const localData = localStorage.getItem("scheduleMobileUnits");
    const schedule = localData ? JSON.parse(localData) : [];
    const newSchedule = schedule.map((item: any) => {
      if (item.id === id) {
        return {
          ...item,
          ...data,
          ...formData,
          dateUpdated: format(new Date(), "dd/MM/yyyy"),
          dateFinished: format(data.dateFinished, "dd/MM/yyyy"),
          status: "Completada",
        };
      }
      return item;
    });
    alert(JSON.stringify(newSchedule));
    console.log(newSchedule);
    localStorage.setItem("scheduleMobileUnits", JSON.stringify(newSchedule));
    if (data) {
      setIsUpdated(true);
      return notification("Se ha completado la actividad.");
    } else {
      return notification("No se ha podido completar la actividad.");
    }
  }
  return (

    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid gap-2 md:grid-cols-4 lg:gap-4"
      >


        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem className="col-span-12 md:col-span-4 ">
              <FormLabel>Estatus</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccione" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Completada">Completada</SelectItem>
                  <SelectItem value="No completada">No completada</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* -------Fecha------- */}
        {/* <FormField
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
                        "text-black dark:text-dark-foreground dark:border-dark-foreground"
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
        /> */}

        <div className="col-span-12 md:col-span-4">
          <DynamicForm formData={formData} setFormData={setFormData}></DynamicForm>
        </div>

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

        <Button
          type="submit"
          className="col-span-12 md:col-span-4 justify-self-center w-full md:w-2/4 mt-2"
          disabled={disabledBtn}
        >
          Enviar
        </Button>
      </form>
    </Form>
  );
}
