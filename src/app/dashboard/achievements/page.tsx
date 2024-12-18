"use client"

import api from "@/api/api_regiones";
import ActivitiesStatsTable from "@/components/activities-stats";
import { DatePickerWithRange } from "@/components/date-picker";
import FiltersDataGeneral from "@/components/filters-for-data-general";
import MonthlyStatisticsTable from "@/components/monthly-stats";
import ProtectedRoute from "@/components/protected-route";
import { TableUI as AchievementsTable } from "@/components/schedule-table";
import ExpandableStateTable from "@/components/states-stats";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { DateRange } from "react-day-picker";
import handleExportPDF from "@/lib/exportPDF";
import { Agenda } from "@/lib/types";

export default function Page() {
  const [date, setDate] = useState<DateRange | undefined>({
    from: undefined,
    to: undefined
  });
   const [actividad, setActividad] = useState<Agenda[]>([]);
   const [initialData, setInitialData] = useState<Agenda[]>([]);
  // console.log(date);

  const handleResetFilter = () => {
    setDate({
      from: undefined,
      to: undefined
    })
  }

  const { isLoading, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      api.get("/archievement").then((res) => res.data.data),
  })

    useEffect(() => {
      if(!data){
       return
      }else{
        setActividad(data);
        setInitialData(data);
      }
      
    }, [data]);

    // console.log(actividad);

  useEffect(() => {
      if (date && date.from !== undefined && date.to !== undefined) {
        // Restablece `actividad` al valor inicial
        setActividad(initialData);
        const dateFrom = date.from;
        const dateTo = date.to;
        const filteredData = data.filter((actividad: Agenda) => {
          const date = new Date(actividad.date);
          return date >= dateFrom && date <= dateTo;
        });
  
        setActividad(filteredData);
      } else {
        setActividad(initialData);
      }
    }, [date?.from, date?.to, initialData]);

  const exportPDF = () => {
    handleExportPDF(date?.from?.toLocaleDateString(), date?.to?.toLocaleDateString(), actividad, data, "Reporte de logros");
  }

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

  const columnas = [{
    label: 'ID',
    campo: 'id'
  },
  {
    label: 'Usuario',
    campo: 'username'
  },
  {
    label: 'Actividad',
    campo: 'type_activity'
  },
  {
    label: 'Fecha',
    campo: 'date'
  },
  {
    label: 'Estatus',
    campo: 'status_id'
  }
  ]

  return (
    <ProtectedRoute>
      <>
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold text-center mb-2">Logros</h1>
          <div className="flex flex-col md:flex-row justify-center gap-4 w-full">
            <DatePickerWithRange date={date} setDate={setDate} />
            <Button className="mb-4 lg:w-[200px]" onClick={handleResetFilter}>Limpiar filtro</Button>
            <Button className="mb-4 lg:w-[200px]" onClick={exportPDF}>Exportar PDF</Button>
          </div>
        </div>

        <AchievementsTable columnas={columnas} achievements data={actividad} errorData={error} isLoading={isLoading} dateFilter={date} setData={setActividad} />

        {/* <Accordion type="single" collapsible>
          {items.map((item) => (
            <AccordionItem key={item.id} value={`item-${item.id}`}>
              <AccordionTrigger>{item.title}</AccordionTrigger>
              <AccordionContent>{item.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion> */}
      </>
    </ProtectedRoute>
  );
}
