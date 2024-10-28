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

const formSchema = z.object({
  actions: z.string({
    required_error: "Por favor selecciona una acción.",
  }),
  gerencia: z.string({
    required_error: "Por favor selecciona una gerencia.",
  }),
  activityType: z.string({
    required_error: "Por favor selecciona un tipo de actividad.",
  }),
  state: z.string({
    required_error: "Por favor selecciona un estado.",
  }),
  municipality: z.string({
    required_error: "Por favor selecciona un municipio.",
  }),
  parish: z.string({
    required_error: "Por favor selecciona una parroquia.",
  }),
  place: z.string({
    required_error: "Por favor selecciona un lugar.",
  }),
  specify: z.string().min(1,{
    message: "Por favor escribe algo.",
  }).max(100, "Máximo 100 caracteres."),
})

export default function FormActivities() {

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  // 2. Define a submit handler.
  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data)
    alert("Submitted data: " + JSON.stringify(data, null, 2))
  }

  return (
    <>
    <h1 className="text-3xl font-bold text-center mb-8">Registro de actividad</h1>

    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-y-2 gap-x-4 lg:grid-cols-4  ">

        {/* <div className="col-span-12 lg:col-span-4 space-y-2"> */}
          {/* ------Acciones------- */}
          <FormField
            control={form.control}
            name="actions"
            render={({ field }) => (
              <FormItem className="col-span-12 lg:col-span-1 ">
                <FormLabel>Acciones</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccione" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="action 1">Atención jurídica</SelectItem>
                    <SelectItem value="action 2">Prevención</SelectItem>
                    <SelectItem value="action 3">Capacitación</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* ------Gerencia------- */}
          <FormField
            control={form.control}
            name="gerencia"
            render={({ field }) => (
              <FormItem className="col-span-12 lg:col-span-1 ">
                <FormLabel>Gerencia</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccione" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Gerencia 1">Gerencia 1</SelectItem>
                    <SelectItem value="Gerencia 2">Gerencia 2</SelectItem>
                    <SelectItem value="Gerencia 3">Gerencia 3</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* ------Tipo de Actividad------- */}
          <FormField
            control={form.control}
            name="activityType"
            render={({ field }) => (
              <FormItem className="col-span-12 lg:col-span-1 ">
                <FormLabel>Actividad</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccione" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="activitie 1">Actividad 1</SelectItem>
                    <SelectItem value="activitie 2">Actividad 2</SelectItem>
                    <SelectItem value="activitie 3">Actividad 3</SelectItem>
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
              <FormItem className="col-span-12 lg:col-span-1 ">
                <FormLabel>Estado</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
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
              <FormItem className="col-span-12 lg:col-span-1 ">
                <FormLabel>Municipio</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
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
              <FormItem className="col-span-12 lg:col-span-1 ">
                <FormLabel>Parroquia</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
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
              <FormItem className="col-span-12 lg:col-span-1 ">
                <FormLabel>Lugar</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
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
              <FormItem className="col-span-12 lg:col-span-1 ">
                <FormLabel>Especifique</FormLabel>
                <FormControl>
                  <Input placeholder="..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="col-span-12 lg:col-span-4 justify-self-center w-full lg:w-2/4 mt-2">Enviar</Button>
        {/* </div> */}
      </form>
    </Form>
    </>
  )
}