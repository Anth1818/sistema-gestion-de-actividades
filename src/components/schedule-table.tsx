"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  ChevronUp,
  ArrowUpDown,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion, AnimatePresence } from "framer-motion";
import CompleteActivitieSchedule from "./complete-activitie-schedule";
import CompleteMobileUnitSchedule from "./complete-mobile-unit-schedule";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
  AlertDialogOverlay,
} from "./ui/alert-dialog";
import { useUpdateActivitie } from "@/context/updateActivitie";

type Agenda = {
  id: number;
  user: string;
  activitie: string;
  date: string;
  dateFormatted: string;
  status: "Por completar" | "Completada" | "No completada";
  action: string;
  gerency: string;
  state: string;
  municipality: string;
  parish: string;
  responsible: string;
  place: string;
  obs: string;
  quantityWomen: number;
  quantityMen: number;
  obs2: string;
  dateFinished: string;
};

type OrdenColumna = {
  columna: keyof Agenda | "id";
  direccion: "asc" | "desc";
} | null;

const FilaExpandible = ({
  actividad,
  expandida,
  onToggle,
  viewUser,
  achievements,
  mobileUnits,
}: {
  actividad: Agenda;
  expandida: boolean;
  onToggle: () => void;
  viewUser?: boolean;
  mobileUnits?: boolean;
  achievements?: boolean;
  // onComplete: () => void
}) => {
  // const status = actividad.date < new Date().toISOString() && actividad.status === 'Por completar' ? 'No completada' : actividad.status
  const colorStatus =
    actividad.status === "Por completar"
      ? "text-orange-600"
      : actividad.status === "No completada"
        ? "text-red-700"
        : "text-success";
  const disabled =
    actividad.status === "Completada" || actividad.status === "No completada";
  const cursorPointer = disabled ? "cursor-not-allowed" : "cursor-pointer";
  const { isUpdated, setIsUpdated } = useUpdateActivitie();

  return (
    <>
      <TableRow onClick={onToggle}>
        <TableCell>{actividad.id}</TableCell>
        <TableCell>{actividad.user}</TableCell>
        <TableCell>{actividad.activitie}</TableCell>
        <TableCell>{actividad.dateFormatted}</TableCell>
        {<TableCell className={colorStatus}>{actividad.status}</TableCell>}
        {viewUser && (
          <TableCell>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  size="sm"
                  className={cursorPointer}
                  disabled={disabled}
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  {actividad.status === "Por completar"
                    ? "Completar"
                    : actividad.status === "No completada"
                      ? "No completada"
                      : "Completado"}
                </Button>
              </AlertDialogTrigger>
              {/* <AlertDialogOverlay onClick={(e) => e.stopPropagation()}></AlertDialogOverlay> */}
              <AlertDialogContent onClick={(e) => e.stopPropagation()}>
                <AlertDialogHeader>
                  <AlertDialogTitle className="text-2xl text-center">
                    {mobileUnits
                      ? "Completar unidad móvil agendada"
                      : "Completar actividad agendada"}
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    Llene los campos correspondientes para completar la unidad móvil agendada
                    </AlertDialogDescription>
                  <div  className="h-[400px] md:h-[550px] w-full overflow-y-auto">
                    {mobileUnits && (
                      <CompleteMobileUnitSchedule id={actividad.id} />
                    )}
                    {!mobileUnits && (
                      <CompleteActivitieSchedule id={actividad.id} />
                    )}
                  </div>

                  {/* </AlertDialogDescription> */}
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel
                    onClick={() => {
                      setIsUpdated(false);
                    }}
                  >
                    Cerrar
                  </AlertDialogCancel>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </TableCell>
        )}
        <TableCell>
          {expandida ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </TableCell>
      </TableRow>
      <AnimatePresence initial={false}>
        {expandida && (
          <TableRow>
            <TableCell colSpan={7} className="p-0">
              <motion.div
                initial="collapsed"
                animate="open"
                exit="collapsed"
                variants={{
                  open: { opacity: 1, height: "auto" },
                  collapsed: { opacity: 0, height: 0 },
                }}
                transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
              >
                <div className="p-4 bg-muted">
                  <h3 className="font-semibold mb-2">Información adicional:</h3>
                  <div
                    className={`flex flex-col md:flex-row gap-4 justify-between`}
                  >
                    <p>
                      <b>Gerencia:</b> {actividad.gerency}
                    </p>
                    <p>
                      <b>Tipo de acción:</b> {actividad.action}
                    </p>
                    <p>
                      <b>Estado:</b> {actividad.state}
                    </p>
                    <p>
                      <b>Municipio:</b> {actividad.municipality}
                    </p>
                    <p>
                      <b>Parroquia:</b> {actividad.parish}
                    </p>
                    <p>
                      <b>Responsable:</b> {actividad.responsible}
                    </p>
                    <p>
                      <b>Lugar:</b> {actividad.place}
                    </p>
                    <p>
                      <b>N° de mujeres:</b> {actividad.quantityWomen}
                    </p>
                    <p>
                      <b>N° de hombres:</b> {actividad.quantityMen}
                    </p>
                    <p>
                      <b>Fecha de ejecución:</b> {actividad.dateFinished}
                    </p>
                  </div>
                  {!achievements && (
                    <p className="break-words whitespace-pre-wrap lg:max-w-screen-lg xl:max-w-screen-2xl mt-4">
                      <b>Observaciones de agenda: </b>
                      {actividad.obs}
                    </p>
                  )}
                  <p className="break-words whitespace-pre-wrap lg:max-w-screen-lg xl:max-w-screen-2xl mt-4">
                    <b>Observaciones de ejecución: </b>
                    {actividad.obs2}
                  </p>
                </div>
              </motion.div>
            </TableCell>
          </TableRow>
        )}
      </AnimatePresence>
    </>
  );
};

interface TableProps {
  viewUser?: boolean;
  achievements?: boolean;
  mobileUnits?: boolean;
  columnas: { campo: string; label: string }[];
}

export function TableUI({
  viewUser,
  columnas,
  achievements,
  mobileUnits,
}: TableProps) {
  const [actividad, setActividad] = useState<Agenda[]>([]);
  const { isUpdated } = useUpdateActivitie();

  useEffect(() => {
    const dataFromLocalStorage = localStorage?.getItem("schedule");
    const dataFromLocalStorageCompleted = localStorage?.getItem("achievements");
    const dataFromLocalStorageMobileUnits = localStorage?.getItem(
      "scheduleMobileUnits"
    );
    let parsedData = [];

    if (dataFromLocalStorage) {
      parsedData = JSON.parse(dataFromLocalStorage);
      setActividad(parsedData);
    }

    if (dataFromLocalStorageMobileUnits && mobileUnits) {
      parsedData = JSON.parse(dataFromLocalStorageMobileUnits);
      setActividad(parsedData);
    }

    if (dataFromLocalStorageCompleted && achievements) {
      const completedData = JSON.parse(dataFromLocalStorageCompleted);
      setActividad(
        parsedData.filter(
          (actividad: Agenda) => actividad.status === "Completada"
        )
      );
      setActividad((prev) => [...prev, ...completedData]);
    }
  }, [isUpdated]);

  const [expandido, setExpandido] = useState<number | null>(null);
  const [ordenActual, setOrdenActual] = useState<OrdenColumna>(null);
  const [paginaActual, setPaginaActual] = useState(1);
  const [elementosPorPagina, setElementosPorPagina] = useState(5);

  const toggleExpansion = (id: number) => {
    setExpandido(expandido === id ? null : id);
  };
  const ordenarActividades = (columna: keyof Agenda | "id") => {
    const nuevaDireccion =
      ordenActual?.columna === columna && ordenActual.direccion === "asc"
        ? "desc"
        : "asc";
    setOrdenActual({ columna, direccion: nuevaDireccion });

    const actividadesOrdenados = [...actividad].sort((a, b) => {
      if (columna === "id") {
        return nuevaDireccion === "asc" ? a.id - b.id : b.id - a.id;
      }
      let valorA: string, valorB: string;

      valorA = a[columna].toString().trim();
      valorB = b[columna].toString().trim();

      if (valorA < valorB) return nuevaDireccion === "asc" ? -1 : 1;
      if (valorA > valorB) return nuevaDireccion === "asc" ? 1 : -1;

      return 0;
    });

    setActividad(actividadesOrdenados);
  };

  const renderIconoOrden = (columna: keyof Agenda) => {
    if (ordenActual?.columna !== columna) {
      return <ArrowUpDown size={16} />;
    }
    return ordenActual.direccion === "asc" ? (
      <ChevronUp size={16} />
    ) : (
      <ChevronDown size={16} />
    );
  };

  const actividadesPaginados = useMemo(() => {
    const indiceInicio = (paginaActual - 1) * elementosPorPagina;
    const indiceFin = indiceInicio + elementosPorPagina;
    return actividad.slice(indiceInicio, indiceFin);
  }, [actividad, paginaActual, elementosPorPagina]);

  const totalPaginas = Math.ceil(actividad.length / elementosPorPagina);

  const cambiarPagina = (nuevaPagina: number) => {
    setPaginaActual(nuevaPagina);
  };

  return (
    <div className="container mx-auto py-1">
      <Table>
        <TableHeader>
          <TableRow>
            {columnas.map((columna) => (
              <TableHead
                key={columna.campo}
                onClick={() =>
                  ordenarActividades(columna.campo as keyof Agenda)
                }
                className="cursor-pointer bg-primary text-white p-2"
              >
                {columna.label}
                {renderIconoOrden(columna.campo as keyof Agenda)}
              </TableHead>
            ))}
            {viewUser && (
              <TableHead className="bg-primary text-white p-2">
                Acciones
              </TableHead>
            )}
            <TableHead className="bg-primary text-white p-2"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {actividadesPaginados.map((actividad) => (
            <FilaExpandible
              key={actividad.id}
              actividad={actividad}
              expandida={expandido === actividad.id}
              onToggle={() => toggleExpansion(actividad.id)}
              viewUser={viewUser}
              achievements={achievements}
              mobileUnits={mobileUnits}
            // onComplete={() => completeSchedule(actividad.id)}
            />
          ))}
          {actividad.length === 0 && (
            <TableRow>
              <TableCell colSpan={7} className="text-center">
                No hay actividades agendadas
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      {/* Paginación */}

      {actividad.length !== 0 && (
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center space-x-2">
            <p className="text-sm font-medium">Filas por página</p>
            <Select
              value={elementosPorPagina.toString()}
              onValueChange={(value) => {
                setElementosPorPagina(Number(value));
                setPaginaActual(1);
              }}
            >
              <SelectTrigger className="h-8 w-[70px]">
                <SelectValue placeholder={elementosPorPagina.toString()} />
              </SelectTrigger>
              <SelectContent side="top">
                {[5, 10, 20].map((pageSize) => (
                  <SelectItem key={pageSize} value={pageSize.toString()}>
                    {pageSize}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => cambiarPagina(paginaActual - 1)}
              disabled={paginaActual === 1}
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Página anterior</span>
            </Button>
            <div className="text-sm font-medium">
              Página {paginaActual} de {totalPaginas}
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => cambiarPagina(paginaActual + 1)}
              disabled={paginaActual === totalPaginas}
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Página siguiente</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
