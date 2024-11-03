import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { DatePickerWithRange } from "./date-picker"
import { useState } from "react"
import { Button } from "./ui/button"

export default function FiltersDataGeneral() {
    const [date, setDate] = useState<string | undefined>(undefined)

    const handleDateChange = (date: string) => {
        setDate(date)
    }
    console.log(date)

    return (
        <div className="flex flex-col lg:flex-row justify-center gap-4 w-full"> 
        <Select onValueChange={handleDateChange}>
            <SelectTrigger className="lg:w-[200px]">
                <SelectValue placeholder="Seleccione una fecha" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectItem value="semanal">1 Semana</SelectItem>
                    <SelectItem value="quincenal">15 Días</SelectItem>
                    <SelectItem value="mensual">1 Mes</SelectItem>
                    <SelectItem value="anual">1 Año</SelectItem>
                    <SelectItem value="custom">Personalizado</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
        {date === "custom" && <DatePickerWithRange />}
        <Button className="mb-4 lg:w-[200px]">Buscar</Button>
        </div>
    )
}