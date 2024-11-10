import FiltersDataGeneral from "@/components/filters-for-data-general";
import ScheduleTable from "@/components/schedule-table";


export default function SchedulePage() {
    return (
        <div>
            <h1 className="text-3xl font-bold text-center mb-8">Agenda de actividades</h1>
            <FiltersDataGeneral />
            <ScheduleTable  />
        </div>
    );
}