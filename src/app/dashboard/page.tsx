"use client"
import { Statistics, StatisticsFull } from "@/components/chartBar";
import { ChartDataPie } from "@/components/chartPie";
import CardDashboard from "@/components/card-dashboard";
import { Award, CalendarCheck, Ambulance } from "lucide-react"
import ProtectedRoute from '../../components/protected-route';
import ActivitiesStatsTable from "@/components/activities-stats";
import MonthlyStatisticsTable from "@/components/monthly-stats";
import ExpandableStateTable from "@/components/states-stats";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { DatePickerWithRange } from "@/components/date-picker";
import { DateRange } from "react-day-picker";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { printGraphics } from "@/lib/exportPDFGraphics";


export default function Page() {

  const FirtsDayOfMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
  const LastDayOfMonth = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0);

  const [date, setDate] = useState<DateRange | undefined>({
    from: FirtsDayOfMonth,
    to: LastDayOfMonth
  });

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
    { month: "Enero", completado: 186, no_completado: 45 },
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

  const items = [
    {
      id: 1,
      title: 'Ver estados',
      content: <ExpandableStateTable />
    },
    {
      id: 2,
      title: 'Ver actividades',
      content: <ActivitiesStatsTable />,
    },
    {
      id: 3,
      title: 'Ver meses',
      content: <MonthlyStatisticsTable />,
    }

  ]

  return (
    <ProtectedRoute requiredRole={1}>
      <h1 className="text-2xl mb-2">Métricas</h1>
      <div className="flex justify-center">
        <DatePickerWithRange date={date} setDate={setDate} />
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-4 md:flex-row justify-around mt-2 ">
        <CardDashboard title="Logros completados" content="+250" footer="+45% más que el mes pasado" date={date} Icon={Award} />
        <CardDashboard title="Actividades agendadas " content="+124" footer="+36% más que el mes pasado" date={date} Icon={CalendarCheck} />
        <CardDashboard title="Unidades móviles agendadas " content="+50" footer="+43% más que el mes pasado" date={date} Icon={Ambulance} />
      </div>

      {/* Gráficas */}
      <div className="flex flex-col gap-4 md:flex-row justify-around mt-4 h-[380px]" id="charts">
        <div className="hidden md:block w-full h-[50px]">
          <StatisticsFull chartData={chartDataFullMonths} id="bar-chart" />
        </div>
        <div >
          <ChartDataPie chartDataPie={chartDataPie} id="pie-chart"/>
        </div>
      </div>
      <div className="flex flex-col gap-4 md:hidden ">
        <Statistics chartData={chartData1} />
        <Statistics chartData={chartData2} />
      </div>
      <div />

      <Button className="mt-4" onClick={printGraphics}>Exportar gráficas</Button>

      {/* Datos desglozados */}
      <div className="mt-6">
        <h2 className="text-xl" id="desglozado">Datos desglozados</h2>
        <Accordion type="single" collapsible className="mt-4">
          {items.map((item) => (
            <AccordionItem key={item.id} value={`item-${item.id}`}>
              <AccordionTrigger>{item.title}</AccordionTrigger>
              <AccordionContent>{item.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </ProtectedRoute >
  );
}
