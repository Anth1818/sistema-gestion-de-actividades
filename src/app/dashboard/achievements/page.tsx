import ActivitiesStatsTable from "@/components/activities-stats";
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
    <div className="w-full">
      <h1 className="text-center text-4xl">Visualización de logros</h1>
      <Accordion type="single" collapsible className="w-full">
        {/* <AccordionItem value="item-1">
          <AccordionTrigger>Ver Actividades</AccordionTrigger>
            <AccordionContent>
              <ActivitiesStatsTable />
            </AccordionContent>
        </AccordionItem> */}
        {items.map((item) => (
          <AccordionItem key={item.id} value={`item-${item.id}`}>
            <AccordionTrigger>{item.title}</AccordionTrigger>
            <AccordionContent>{item.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div >
  );
}
