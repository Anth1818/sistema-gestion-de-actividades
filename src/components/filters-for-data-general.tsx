"use client";
import { DatePickerWithRange } from "./date-picker"
import { Button } from "./ui/button"
import { useState } from "react";

export default function FiltersDataGeneral() {
    const [date, setDate] = useState<string | undefined>(undefined)

    const handleDateChange = (date: string) => {
        setDate(date)
    }
    console.log(date)

    return (
        <div className="flex flex-col md:flex-row justify-center gap-4 w-full">
            <DatePickerWithRange />
            <Button className="mb-4 lg:w-[200px]">Buscar</Button>
        </div>
    )
}