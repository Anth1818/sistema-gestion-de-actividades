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
import { useState } from "react";
import { DateRange } from "react-day-picker";

export default function Page() {
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

  const { isLoading, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      api.get("/archievement").then((res) =>
        res.data.data,
      ),
  })

  // console.log(data);

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
          {/* <div className="flex flex-col md:flex-row justify-center gap-4 w-full">
            <DatePickerWithRange date={date} setDate={setDate} />
            <Button className="mb-4 lg:w-[200px]" onClick={handleResetFilter}>Limpiar filtro</Button>
          </div> */}
        </div>

        <AchievementsTable columnas={columnas} achievements data={data} errorData={error} isLoading={isLoading} />

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
