"use client"

import * as React from "react"
import { format} from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { DateRange } from "react-day-picker"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { es } from 'date-fns/locale';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export function DatePickerWithRange({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(new Date().getFullYear(), 0, 1),
    to: new Date(),
  })

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-auto justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon />
            {date?.from ? (
  date.to ? (
    <>
      {format(date.from, "dd 'de' MMMM 'de' yyyy", { locale: es })} -{" "}
      {format(date.to, "dd 'de' MMMM 'de' yyyy", { locale: es })}
    </>
  ) : (
    format(date.from, "dd 'de' MMMM 'de' yyyy", { locale: es })
  )
) : (
  <span>Selecciona una fecha</span>
)}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            // lang="es"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
            disabled={(date)=>{
              const today = new Date()
              const endOfYear = new Date(today.getFullYear(), 11, 31)
              return date > endOfYear
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
