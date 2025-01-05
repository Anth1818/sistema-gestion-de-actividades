"use client";
import { DateRange } from "react-day-picker";
import { DatePickerWithRange } from "./date-picker"
import { Button } from "./ui/button"
import { useEffect, useState } from "react";
import { Agenda, MobileUnit } from "@/lib/types";
import handleExportPDF from "@/lib/exportPDF";
import { Input } from "./ui/input";
import { Search } from "lucide-react";

interface FiltersProps {
    initialData: Agenda[] | MobileUnit[];
    setActividad?: React.Dispatch<React.SetStateAction<Agenda[]>>;
    setActividadMobile?: React.Dispatch<React.SetStateAction<MobileUnit[]>>;
    actividad: Agenda[] | MobileUnit[];
    data: any;
    labelPDF?: string;
}

export default function Filters({ initialData, setActividad, setActividadMobile, actividad, data, labelPDF="Reporte de logros" }: FiltersProps) {

    const [date, setDate] = useState<DateRange | undefined>({
        from: undefined,
        to: undefined
    });
    const [search, setSearch] = useState<string>("");

    const handleResetFilter = () => {
        setDate({
            from: undefined,
            to: undefined
        })
        setSearch("")
    }

    useEffect(() => {
        let filteredData: (Agenda | MobileUnit)[] = initialData;

        // Filtra los datos por búsqueda
        if (search) {
            filteredData = filteredData.filter((actividad: Agenda | MobileUnit) => {
                return (
                    actividad.username.toLowerCase().includes(search.toLowerCase()) ||
                    (actividad as Agenda).type_activity?.toLowerCase().includes(search.toLowerCase())
                );
            });
        }

        // Filtra los datos por fecha
        if (date?.from !== undefined && date?.to !== undefined) {
            const dateFrom = date.from.toLocaleDateString();
            const dateTo = date.to.toLocaleDateString();
            filteredData = filteredData.filter((actividad: Agenda | MobileUnit) => {
                if ('date' in actividad) {
                    const actividadDate = new Date(actividad.date).toLocaleDateString();
                    console.log("actividadDate", actividadDate, dateFrom, dateTo)
                    return actividadDate >= dateFrom && actividadDate <= dateTo;
                }
                return false;
            });
            // console.log("filteredData", filteredData)
        }

        if (setActividad) {
            setActividad(filteredData.filter((item): item is Agenda => 'type_activity' in item) as Agenda[]);
        }
        if (setActividadMobile) {
            setActividadMobile(filteredData.filter((item): item is MobileUnit => 'username' in item) as MobileUnit[]);
        }
    }, [date?.from, date?.to, search, initialData]);

   

    const exportPDF = () => {
        handleExportPDF(date?.from?.toLocaleDateString(), date?.to?.toLocaleDateString(), actividad as Agenda[], data, labelPDF,  );
    }

    return (
        <>
            <div className="relative">
                <Input className="mb-4 " placeholder="Buscar" value={search} onChange={(e) => setSearch(e.target.value)} />
                <div className="absolute bottom-2 right-0 pr-3 flex items-center text-gray-500 dark:text-white">
                    <Search />
                </div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <div className="flex flex-col md:flex-row justify-center gap-4 w-full">
                    <DatePickerWithRange date={date} setDate={setDate} />
                    <Button className="mb-4 lg:w-[200px]" onClick={handleResetFilter}>Limpiar filtro</Button>
                    <Button className="mb-4 lg:w-[200px]" onClick={exportPDF}>Exportar PDF</Button>
                </div>
            </div>
        </>
    )
}