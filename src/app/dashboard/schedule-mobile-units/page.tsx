"use client";
import FiltersDataGeneral from "@/components/filters-for-data-general";
import ProtectedRoute from "@/components/protected-route";
// import ScheduleTable from "@/components/schedule-table";


export default function ScheduleMobileUnitsPage() {
    const userLogged = true;
    const adminLogged = false;
    return (
        <ProtectedRoute>
            <div>
                <h1 className="text-3xl font-bold text-center mb-8">Agenda de actividades móviles</h1>
                <FiltersDataGeneral />
                {/* {adminLogged && <div>
                    <p>Tabla para admin</p>
                    <ScheduleTable />
                </div>}

                {userLogged && <div className="mt-8">
                    <p>Tabla para usuario</p>
                    <ScheduleTable viewUser />
                </div>} */}
            </div>
        </ProtectedRoute>
    );
}