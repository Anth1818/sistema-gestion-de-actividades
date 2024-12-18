"use client";
import api from "@/api/api_regiones";
import { DatePickerWithRange } from "@/components/date-picker";
import FiltersDataGeneral from "@/components/filters-for-data-general";
import ProtectedRoute from "@/components/protected-route";
import { TableUI as ScheduleTable } from "@/components/schedule-table";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { DateRange } from "react-day-picker";
import { Agenda } from "@/lib/types";
import CookieS from 'js-cookie';

export default function SchedulePage() {
  const user = CookieS.get('user')
  const userLoggin = user ? JSON.parse(user) : null;
  const userLogged = userLoggin.role_id === 2 ;
  const adminLogged = userLoggin.role_id === 1;

  const [actividad, setActividad] = useState<Agenda[]>([]);
  const [initialData, setInitialData] = useState<Agenda[]>([]);

  const [date, setDate] = useState<DateRange | undefined>({
    from: undefined,
    to: undefined,
  });
  // console.log(date);

  // const handleResetFilter = () => {
  //     setDate({
  //         from: undefined,
  //         to: undefined
  //     })
  // }

  const { isLoading, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () => api.get("/schedule").then((res) => res.data.data),
  });

  useEffect(() => {
    if (!data) {
      return;
    } else {
      setActividad(data);
      setInitialData(data);
    }
  }, [data]);

  console.log(data)

  const columnas = [
    {
      label: "ID",
      campo: "id",
    },
    {
      label: "Usuario",
      campo: "user",
    },
    {
      label: "Actividad agendada",
      campo: "activitie",
    },
    {
      label: "Fecha agendada",
      campo: "date",
    },
    {
      label: "Estatus",
      campo: "status",
    },
  ];

  return (
    <ProtectedRoute>
      <div>
        <h1 className="text-3xl font-bold text-center mb-8">
          Agenda de actividades
        </h1>
        {/* <div className="flex flex-col md:flex-row justify-center gap-4 w-full">
                    <DatePickerWithRange date={date} setDate={setDate} />
                    <Button className="mb-4 lg:w-[200px]" onClick={handleResetFilter}>Limpiar filtro</Button>
                </div> */}


        {adminLogged && (
          <div className="mt-8">
            <p>Tabla para admin</p>
            <ScheduleTable
              columnas={columnas}
              dateFilter={date}
              viewUser
              setData={() => {}}
              data={data}
            />
          </div>
        )}

        {userLogged && (
          <div className="mt-8">
            <p>Tabla para usuario</p>
            <ScheduleTable
              viewUser
              columnas={columnas}
              dateFilter={date}
              setData={() => {}}
              data={data}
            />
          </div>
        )}
      </div>
    </ProtectedRoute>
  );
}
