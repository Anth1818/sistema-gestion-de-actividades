"use client";
import { Statistics, StatisticsFull } from "@/components/chartBar";
import { ChartDataPie } from "@/components/chartPie";
import CardDashboard from "@/components/card-dashboard";
import { Award, CalendarCheck, Ambulance } from "lucide-react"
import FiltersDataGeneral from "@/components/filters-for-data-general";
import ProtectedRoute from '../../components/protected-route';

export default function Page() {

  const chartDataFullMonths = [
    { month: "Enero", completado: 186, no_completado: 45 },
    { month: "Febrero", completado: 305, no_completado: 21 },
    { month: "Marzo", completado: 237, no_completado: 22 },
    { month: "Abril", completado: 173, no_completado: 19 },
    { month: "Mayo", completado: 209, no_completado: 23 },
    { month: "Junio", completado: 214, no_completado: 14 },
    { month: "Julio", completado: 186, no_completado: 28 },
    { month: "Agosto", completado: 305, no_completado: 26 },
    { month: "Septiembre", completado: 237, no_completado: 22 },
    { month: "Octubre", completado: 273, no_completado: 23 },
    { month: "Noviembre", completado: 209, no_completado: 23 },
    { month: "Diciembre", completado: 214, no_completado: 24 },
  ]

  const chartData1 = [
    { month: "January", completado: 186, no_completado: 45 },
    { month: "Febrero", completado: 305, no_completado: 21 },
    { month: "Marzo", completado: 237, no_completado: 32 },
    { month: "Abril", completado: 173, no_completado: 19 },
    { month: "Mayo", completado: 209, no_completado: 33 },
    { month: "Junio", completado: 214, no_completado: 14 },
  ]

  const chartData2 = [
    { month: "Julio", completado: 186, no_completado: 28 },
    { month: "Agosto", completado: 305, no_completado: 26 },
    { month: "Septiembre", completado: 237, no_completado: 22 },
    { month: "Octubre", completado: 273, no_completado: 23 },
    { month: "Noviembre", completado: 209, no_completado: 23 },
    { month: "Diciembre", completado: 214, no_completado: 24 },
  ]

  const chartDataPie = [
    { activitie: "activitie1", done: 275, fill: "hsl(var(--chart-1))" },
    { activitie: "activitie2", done: 90, fill: "hsl(var(--chart-2))" },
    { activitie: "activitie3", done: 187, fill: "hsl(var(--chart-3))" },
    { activitie: "activitie4", done: 173, fill: "hsl(var(--chart-4))" },
  ]

  const firstDayOfMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1).toLocaleDateString('es-ES');
  const today = new Date().toLocaleDateString('es-ES');

  return (
    <ProtectedRoute>
      <div>
        {/* <h2 className="mb-4">Datos del {firstDayOfMonth} al {today}</h2> */}

        <div className="flex flex-col gap-4 md:flex-row justify-around mt-2 ">
          <CardDashboard title="Logros completados" content="+250" footer="+45% más que el mes pasado" Icon={Award} />
          <CardDashboard title="Actividades agendadas" content="+124" footer="+36% más que el mes pasado" Icon={CalendarCheck} />
          <CardDashboard title="Unidades móviles agendadas" content="+50" footer="+43% más que el mes pasado" Icon={Ambulance} />
        </div>
        <div className="flex flex-col gap-4 md:flex-row justify-around mt-4 h-[380px]">
          <div className="hidden md:block w-full h-[50px]">
            <StatisticsFull chartData={chartDataFullMonths} />
          </div>
          <div className="block md:hidden">
            <Statistics chartData={chartData1} />
            <Statistics chartData={chartData2} />
          </div>
          <ChartDataPie chartDataPie={chartDataPie} />
        </div>
        <div />
      </div >
    </ProtectedRoute >
  );
}
