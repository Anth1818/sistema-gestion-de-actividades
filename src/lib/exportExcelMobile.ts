import * as XLSX from "xlsx";
import { MobileUnit } from "./types";

const columnMapping: { [key: string]: string } = {
    status: "Estatus",
    username: "Usuario",
    num_mobile_units: "N° de unidades móviles",
    num_ultrasounds: "N° de ultrasonidos",
    responsible: "Responsable",
    state: "Estado",
    municipality: "Municipio",
    parish: "Parroquia",
    aproximmate: "Pobladión atendida",
    place: "Lugar",
    logistical_support: "Apoyo logístico",
    observation1: "Observaciones 1",
    observation2: "Observaciones 2",
    date: "Fecha",
};

const propsIgnore = ['status_id','user_id','created_on','state_id', 'municipality_id', 'parish_id', 'dateFormatted'];

export function handleExportExcelMobile(data: MobileUnit[], label: string) {
    // Obtener las claves de los datos, ignorando algunos campos
    const keys = Object.keys(data[0]).filter(key => !propsIgnore.includes(key));

    // Crear los encabezados en español
    const headers = keys.map(key => columnMapping[key] || key);

    // Crear los datos de la hoja de cálculo
    const wsData = [
        headers,
        ...data.map((item: MobileUnit) => keys.map((key: string) => item[key]))
    ];

    console.log(data)

    const ws = XLSX.utils.aoa_to_sheet(wsData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, label);
    XLSX.writeFile(wb, `${label}.xlsx`);
}