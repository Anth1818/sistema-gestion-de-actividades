"use client";
import { DatePickerWithRange } from "@/components/date-picker";
import FiltersDataGeneral from "@/components/filters-for-data-general";
import ProtectedRoute from "@/components/protected-route";
import { TableUI as ScheduleTable } from "@/components/schedule-table";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { DateRange } from "react-day-picker";


export default function SchedulePage() {
    const userLogged = true;
    const adminLogged = false;
    const [date, setDate] = useState<DateRange | undefined>({
      from: undefined,
      to: undefined
    });
    console.log(date);

    const handleResetFilter = () => {
        setDate({
            from: undefined,
            to: undefined
        })
    }

    const columnas = [{
        label: 'ID',
        campo: 'id'
    },
    {
        label: 'Usuario',
        campo: 'user'
    },
    {
        label: 'Actividad agendada',
        campo: 'activitie'
    },
    {
        label: 'Fecha agendada',
        campo: 'date'
    },
    {
        label: 'Estatus',
        campo: 'status'
    }]

    return (
        <ProtectedRoute>
            <div>
                <h1 className="text-3xl font-bold text-center mb-8">Agenda de actividades</h1>
                <div className="flex flex-col md:flex-row justify-center gap-4 w-full">
                    <DatePickerWithRange date={date} setDate={setDate} />
                    <Button className="mb-4 lg:w-[200px]" onClick={handleResetFilter}>Limpiar filtro</Button>
                </div>
                {adminLogged && <div>
                    <p>Tabla para admin</p>
                    <ScheduleTable columnas={columnas} />
                </div>}

                {userLogged && <div className="mt-8">
                    <p>Tabla para usuario</p>
                    <ScheduleTable viewUser columnas={columnas} dateFilter={date} />
                </div>}
            </div>
        </ProtectedRoute>
    );
}