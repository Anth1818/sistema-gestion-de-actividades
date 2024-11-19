import { Statistics, StatisticsFull } from "@/components/chartBar";
import { ChartDataPie } from "@/components/chartPie";
import CardDashboard from "@/components/card-dashboard";
import { Award, CalendarCheck, Users } from "lucide-react"
import FiltersDataGeneral from "@/components/filters-for-data-general";

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
    { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
    { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
    { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
    { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
    { browser: "other", visitors: 90, fill: "var(--color-other¿)" },
  ]

  const firstDayOfMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1).toLocaleDateString('es-ES');
  const today = new Date().toLocaleDateString('es-ES');

  return (
    <div className="lg:h-[400px]">
      <h2 className="mb-4">Datos del {firstDayOfMonth} al {today}</h2>
      <FiltersDataGeneral />
      <div className="flex flex-col gap-4 md:flex-row justify-around mt-2 ">
        <CardDashboard title="Logros completados" content="+250" footer="+45% más que el mes pasado" Icon={Award} />
        <CardDashboard title="Actividades agendadas" content="+124" footer="+36% más que el mes pasado" Icon={CalendarCheck} />
        <CardDashboard title="Usuarios registrados" content="+10" footer="Total de usuarios 60" Icon={Users} />
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
    </div>
  );
}
