"use client"

import ActivitiesStatsTable from "@/components/activities-stats";
import FiltersDataGeneral from "@/components/filters-for-data-general";
import MonthlyStatisticsTable from "@/components/monthly-stats";
import ExpandableStateTable from "@/components/states-stats";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Page() {

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
    <>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold text-center mb-2">Datos generales enero-noviembre 2024</h1>
        <FiltersDataGeneral />
      </div>

      <Accordion type="single" collapsible>
        {items.map((item) => (
          <AccordionItem key={item.id} value={`item-${item.id}`}>
            <AccordionTrigger>{item.title}</AccordionTrigger>
            <AccordionContent>{item.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

    </>
  );
}
