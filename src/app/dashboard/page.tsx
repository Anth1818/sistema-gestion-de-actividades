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
import { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
// import { printGraphics } from "@/lib/exportPDFGraphics";
import { useQuery } from "@tanstack/react-query";
import api from "@/api/api_regiones";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import SummaryTable from "@/components/summaryTable";
import { formatDataActivities, getMonth, getMonths, getYears, transformDataState } from "@/lib/utils";
import GenderDataTable from "@/components/GenderDataTable";

export default function Page() {
  const yearActual = new Date().getFullYear();
  const monthActual = new Date().getMonth();
  const startYear = 2025; // Año inicial
  const startMonth = 0; // Mes inicial
  const [yearGraphics, setYearGraphics,] = useState(yearActual);
  const [yearCard, setYearCard] = useState(yearActual) // Año seleccionado
  const [monthCard, setMonthCard] = useState(monthActual) // Mes seleccionado
  const years = getYears(startYear); // Años disponibles
  const months = getMonths(startMonth, yearActual, yearCard);
  const [yearTables, setYearTables] = useState(yearActual) // Año seleccionado para las tablas



  // Llamada a la API para obtener los datos de las gráficas
  const { data: chartDataFullMonths, refetch: refetchBar } = useQuery({
    queryKey: ['dataBar', yearGraphics],
    queryFn: () =>
      api.get(`/archievement/statistics/annual/year/${yearGraphics}`).then((res) => res.data.data),
    // enabled: !!yearGraphics,
  })

  const { data: chartDataPieFull, refetch: refetchPie } = useQuery({
    queryKey: ['dataPie', yearGraphics],
    queryFn: () =>
      api.get(`/archievement/statistics/activity/year/${yearGraphics}`).then((res) => res.data.data),
    // enabled: !!yearGraphics,
  })

  // Llamada a la api para obtener datos para las cards
  const { data: dataCardAchievement, refetch: refetchCardAchievement } = useQuery({
    queryKey: ['dataCardAchievement', yearCard, monthCard],
    queryFn: () =>
      api.get(`archievement/total/month/${monthCard + 1}/year/${yearCard}`).then((res) => res.data.data),
    // enabled: !!yearCard && !!monthCard,
  })

  const { data: dataCardActivities, refetch: refetchCardActivities } = useQuery({
    queryKey: ['dataCardActivities', yearCard, monthCard],
    queryFn: () =>
      api.get(`schedule/all/total/month/${monthCard + 1}/year/${yearCard}`).then((res) => res.data.data),
    // enabled: !!yearCard && !!monthCard,
  })

  const { data: dataCardMobileUnits, refetch: refetchCardMobileUnits } = useQuery({
    queryKey: ['dataCardMobileUnits', yearCard, monthCard],
    queryFn: () =>
      api.get(`/mobile_units/scheduled/total/month/${monthCard + 1}/year/${yearCard}`).then((res) => res.data.data),
    // enabled: !!yearCard && !!monthCard,
  })

  // Llamada a la api para obtener datos de las tablas
  const { data: dataTableState, refetch: refetchTableState } = useQuery({
    queryKey: ['dataTableState', yearTables],
    queryFn: () =>
      api.get(`/archievement/statistics/table_state/year/${yearTables}`).then((res) => res.data.data),
    // enabled: !!yearTableState,
  })

  const { data: dataTableActivities, refetch: refetchTableActivities } = useQuery({
    queryKey: ['dataTableActivities', yearTables],
    queryFn: () =>
      api.get(`/archievement/statistics/table_activity/year/${yearTables}`).then((res) => res.data.data),
    // enabled: !!yearTableActivities,
  })

  const { data: dataTableGender, refetch: refetchTableGender } = useQuery({
    queryKey: ['dataTableGender', yearTables],
    queryFn: () =>
      api.get(`/archievement/statistics/table_gender/year/${yearTables}`).then((res) => res.data.data),
    // enabled: !!yearTableActivities,
  })

  const stateData = transformDataState(dataTableState);
  const activityData = formatDataActivities(dataTableActivities);
  console.log(activityData)

  // console.log(dataTableState)

  //Refecth de las gráficas
  useEffect(() => {
    if (yearGraphics) {
      refetchBar();
      refetchPie();
    }

  }, [yearGraphics, refetchBar, refetchPie,]);


  //Refecth de las cards
  useEffect(() => {
    if (yearCard && monthCard) {
      refetchCardAchievement();
      refetchCardActivities();
      refetchCardMobileUnits();
    }
  }, [yearCard, monthCard, refetchCardAchievement, refetchCardActivities, refetchCardMobileUnits]);

  //Refecth de las tablas
  useEffect(() => {
    if (yearTables) {
      refetchTableState();
      refetchTableActivities();
      refetchTableGender();
    }
  }, [yearTables, refetchTableState, refetchTableActivities, refetchTableGender]);
  // const chartDataFullMonths = [
  //   { month: "Enero", finished: 186, unfinished: 45 },
  //   { month: "Febrero", finished: 305, unfinished: 21 },
  //   { month: "Marzo", finished: 237, unfinished: 22 },
  //   { month: "Abril", finished: 173, unfinished: 19 },
  //   { month: "Mayo", finished: 209, unfinished: 23 },
  //   { month: "Junio", finished: 214, unfinished: 14 },
  //   { month: "Julio", finished: 186, unfinished: 28 },
  //   { month: "Agosto", finished: 305, unfinished: 26 },
  //   { month: "Septiembre", finished: 237, unfinished: 22 },
  //   { month: "Octubre", finished: 273, unfinished: 23 },
  //   { month: "Noviembre", finished: 209, unfinished: 23 },
  //   { month: "Diciembre", finished: 214, unfinished: 24 },
  // ]

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

  const chartDataPie = chartDataPieFull
    ?.filter((element: any) => element.done > 0)
    ?.sort((a: any, b: any) => b.done - a.done) // Ordenar por 'done' en orden descendente
    ?.slice(0, 5); // Tomar los primeros 5 elementos

  let i = 1

  chartDataPie?.forEach((element: any, index: number) => {
    element.activity = element.activity
    element.fill = `hsl(var(--chart-${(i++)}))`
    element.done = Number(element.done)

  })

  const items = [
    {
      id: 1,
      title: 'Ver estados',
      content: <ExpandableStateTable stateData={stateData} yearTables={yearTables} />
    },
    {
      id: 2,
      title: 'Ver actividades',
      content: <ActivitiesStatsTable data={activityData.data} grandTotal={activityData.grandTotal} yearTables={yearTables} />,
    },
    // {
    //   id: 3,
    //   title: 'Ver meses',
    //   content: <MonthlyStatisticsTable />,
    // }
    {
      id: 3,
      title: 'Ver por genero',
      content: <GenderDataTable data={dataTableGender} yearTables={yearTables}/>,
    }

  ]

  return (
    <ProtectedRoute requiredRole={1}>
      <h1 className="text-2xl mb-2">Métricas</h1>


      {/* Filtros para las cards */}
      <div className="flex flex-col md:flex-row justify-center mt-4">
        {yearActual > startYear && (
          <div className="mb-2">
            <Select onValueChange={(value) => setYearCard(Number(value))} >
              <SelectTrigger className="w-auto ml-4">
                <SelectValue placeholder="Seleccionar año" />
              </SelectTrigger>
              <SelectContent>
                {years.map((year) => (
                  <SelectItem key={year} value={year.toString()}>
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}

        <div className="mb-2">
          <Select onValueChange={(value) => setMonthCard(Number(value))}>
            <SelectTrigger className="w-auto ml-4">
              <SelectValue placeholder="Seleccionar mes" />
            </SelectTrigger>
            <SelectContent>
              {months.map((month) => (
                <SelectItem key={month.number} value={month.number.toString()}>
                  {month.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>


      {/* Cards */}
      <div className="flex flex-col gap-4 md:flex-row justify-around mt-2 mb-4 ">
        <CardDashboard title={`Logros completados del mes de ${getMonth(monthCard)}`} content={`+${dataCardAchievement?.count}`} footer={``} Icon={Award} />
        <CardDashboard title={`Actividades agendadas del mes de ${getMonth(monthCard)}`} content={`+${dataCardActivities?.count}`} footer={``} Icon={CalendarCheck} />
        <CardDashboard title={`Unidades móviles agendadas del mes de ${getMonth(monthCard)}`} content={`+${dataCardMobileUnits?.count}`} footer={``} Icon={Ambulance} />
      </div>

      {/* Filtros */}
      {yearActual > startYear &&
        <div className="w-full flex justify-center">
          <Select onValueChange={(value) => setYearGraphics(Number(value))}>
            <SelectTrigger className="w-auto ml-4">
              <SelectValue placeholder="Seleccionar año" />
            </SelectTrigger>
            <SelectContent>
              {years.map((year) => (
                <SelectItem key={year} value={year.toString()}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>}

      {/* Gráficas */}
      <div className="flex flex-col gap-4 md:flex-row justify-around mt-4 h-[380px]" id="charts">
        <div className="hidden md:block w-full h-[50px]">
          <StatisticsFull chartData={chartDataFullMonths} id="bar-chart" year={yearGraphics} />
        </div>
        <div >
          <ChartDataPie chartDataPie={chartDataPie} id="pie-chart" year={yearGraphics} />
        </div>
      </div>
      {/* <div className="flex flex-col gap-4 md:hidden ">
        <Statistics chartData={chartData1} />
        <Statistics chartData={chartData2} />
      </div> */}
      <div />

      {/* <Button className="mt-4" onClick={printGraphics}>Exportar gráficas</Button> */}

      {/* Datos desglozados */}
      <div className="mt-6">
        <h2 className="text-xl" id="desglozado">Datos desglozados</h2>
        {yearActual > startYear && (
          <div className="mt-2 flex justify-center">
            <Select onValueChange={(value) => setYearTables(Number(value))} >
              <SelectTrigger className="w-auto ml-4">
                <SelectValue placeholder="Seleccionar año" />
              </SelectTrigger>
              <SelectContent>
                {years.map((year) => (
                  <SelectItem key={year} value={year.toString()}>
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}

        <Accordion type="single" collapsible >
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
