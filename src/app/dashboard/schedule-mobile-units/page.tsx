"use client";
import FiltersDataGeneral from "@/components/filters-for-data-general";
import ProtectedRoute from "@/components/protected-route";
import {TableUI as UnitMobileTable} from "@/components/schedule-table";


export default function ScheduleMobileUnitsPage() {
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
                <h1 className="text-3xl font-bold text-center mb-8">Agenda de actividades móviles</h1>
                <FiltersDataGeneral />
                {adminLogged && <div>
                    <p>Tabla para admin</p>
                   <UnitMobileTable columnas={columnas} mobileUnits/>
                </div>}

                {userLogged && <div className="mt-8">
                    <p>Tabla para usuario</p>
                    <UnitMobileTable viewUser columnas={columnas} mobileUnits/>
                </div>}
            </div>
        </ProtectedRoute>
    );
}