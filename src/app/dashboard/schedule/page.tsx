"use client";
import FiltersDataGeneral from "@/components/filters-for-data-general";
import ProtectedRoute from "@/components/protected-route";
import {TableUI as ScheduleTable} from "@/components/schedule-table";


export default function SchedulePage() {
    const userLogged = true;
    const adminLogged = false;

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
                <FiltersDataGeneral />
                {adminLogged && <div>
                    <p>Tabla para admin</p>
                    <ScheduleTable columnas={columnas} />
                </div>}

                {userLogged && <div className="mt-8">
                    <p>Tabla para usuario</p>
                    <ScheduleTable viewUser columnas={columnas} />
                </div>}
            </div>
        </ProtectedRoute>
    );
}