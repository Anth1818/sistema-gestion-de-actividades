import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface MonthlyData {
  id: number;
  category: string;
  subCategory: string;
  jan: number;
  feb: number;
  mar: number;
  apr: number;
  may: number;
  jun: number;
  jul: number;
  aug: number;
  sep: number;
  oct: number;
  nov: number;
  dec: number;
  total: number;
  percentage: string;
}

function calculateSubtotal(data: MonthlyData[], category: string): MonthlyData {
  return data
    .filter(row => row.category === category)
    .reduce((acc, row) => ({
      id: 0, // Placeholder value
      category: category,
      subCategory: "Subtotal",
      jan: acc.jan + row.jan,
      feb: acc.feb + row.feb,
      mar: acc.mar + row.mar,
      apr: acc.apr + row.apr,
      may: acc.may + row.may,
      jun: acc.jun + row.jun,
      jul: acc.jul + row.jul,
      aug: acc.aug + row.aug,
      sep: acc.sep + row.sep,
      oct: acc.oct + row.oct,
      nov: acc.nov + row.nov,
      dec: acc.dec + row.dec,
      total: acc.total + row.total,
      percentage: "" // Placeholder value
    }), { id: 0, category: category, subCategory: "Subtotal", jan: 0, feb: 0, mar: 0, apr: 0, may: 0, jun: 0, jul: 0, aug: 0, sep: 0, oct: 0, nov: 0, dec: 0, total: 0, percentage: "" });
}

const monthlyData = [
  { id: 1, category: "Atención Jurídica", subCategory: "Asesoramiento inicial", jan: 272, feb: 540, mar: 834, apr: 915, may: 1954, jun: 140, jul: 1147, aug: 2715, sep: 5925, oct: 1, nov: 3, dec: 10, total: 15442, percentage: "14.2%" },
  { id: 2, category: "Atención Jurídica", subCategory: "Asistencia Legal (Sede Central)", jan: 61, feb: 113, mar: 151, apr: 172, may: 180, jun: 267, jul: 95, aug: 177, sep: 148, oct: 1, nov: 3, dec: 10, total: 1353, percentage: "1.3%" },
  { id: 3, category: "Atención Jurídica", subCategory: "Patrocinio (Delegaciones)", jan: 47, feb: 38, mar: 38, apr: 70, may: 182, jun: 127, jul: 132, aug: 111, sep: 156, oct: 1, nov: 3, dec: 10, total: 881, percentage: "0.8%" },
  { id: 4, category: "Atención Jurídica", subCategory: "Representación en trámites judiciales (por designaciones)", jan: 3, feb: 118, mar: 12, apr: 18, may: 10, jun: 120, jul: 31, aug: 6, sep: 34, oct: 1, nov: 3, dec: 10, total: 335, percentage: "0.3%" },
  { id: 5, category: "Atención Jurídica", subCategory: "Informe de Tesis", jan: 16, feb: 8, mar: 8, apr: 12, may: 3, jun: 0, jul: 0, aug: 2, sep: 18, oct: 1, nov: 3, dec: 10, total: 50, percentage: "0.1%" },
  { id: 6, category: "Atención Preventiva", subCategory: "Atención psicológica", jan: 26, feb: 105, mar: 147, apr: 142, may: 1143, jun: 407, jul: 399, aug: 668, sep: 608, oct: 1, nov: 3, dec: 10, total: 3614, percentage: "3.3%" },
  { id: 7, category: "Atención Preventiva", subCategory: "Casa a casa", jan: 48, feb: 234, mar: 348, apr: 408, may: 1166, jun: 1212, jul: 1192, aug: 2021, sep: 1598, oct: 1, nov: 3, dec: 10, total: 8227, percentage: "7.6%" },
  { id: 8, category: "Atención Preventiva", subCategory: 'Puntos violeta "violencia de género"', jan: 428, feb: 1494, mar: 2058, apr: 2241, may: 9181, jun: 7292, jul: 5186, aug: 5788, sep: 8771, oct: 1, nov: 3, dec: 10, total: 42410, percentage: "39.0%" },
  { id: 9, category: "Atención Preventiva", subCategory: 'Conversatorios "violencia de género"', jan: 100, feb: 343, mar: 467, apr: 364, may: 3778, jun: 3045, jul: 3448, aug: 3188, sep: 9809, oct: 1, nov: 3, dec: 10, total: 25209, percentage: "23.2%" },
  { id: 10, category: "Atención Preventiva", subCategory: 'Toma de espacios "violencia de género"', jan: 475, feb: 213, mar: 305, apr: 227, may: 1249, jun: 968, jul: 1139, aug: 891, sep: 3330, oct: 1, nov: 3, dec: 10, total: 8584, percentage: "7.9%" },
  { id: 11, category: "Atención Preventiva", subCategory: "Atención Telefónica", jan: 5, feb: 410, mar: 315, apr: 541, may: 82, jun: 85, jul: 4, aug: 57, sep: 896, oct: 1, nov: 3, dec: 10, total: 1985, percentage: "1.8%" },
  { id: 12, category: "Capacitación", subCategory: "Defensoras comunales", jan: 0, feb: 0, mar: 0, apr: 0, may: 0, jun: 264, jul: 110, aug: 21, sep: 69, oct: 1, nov: 3, dec: 10, total: 464, percentage: "0.4%" },
]

export default function MonthlyStatisticsTable() {
  return (
    <div className="container mx-auto p-4 overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="bg-primary text-white font-bold" rowSpan={2}>Acciones</TableHead>
            <TableHead className="bg-primary text-white font-bold" rowSpan={2}>Actividades</TableHead>
            <TableHead className="bg-primary text-white font-bold" colSpan={12}>Logros acumulados por Mes</TableHead>
            <TableHead className="bg-primary text-white font-bold" rowSpan={2}>Acumulado Enero a Diciembre</TableHead>
            <TableHead className="bg-primary text-white font-bold" rowSpan={2}>Variación</TableHead>
          </TableRow>
          <TableRow>
            {['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'].map((month) => (
              <TableHead key={month} className="bg-primary text-white font-bold">{month}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {monthlyData.map((row, index) => (
            <TableRow key={row.id} className={index % 2 === 0 ? "bg-pink-50 dark:bg-dark" : "bg-white dark:bg-dark"}>
              <TableCell>{row.category}</TableCell>
              <TableCell>{row.subCategory}</TableCell>
              <TableCell>{row.jan}</TableCell>
              <TableCell>{row.feb}</TableCell>
              <TableCell>{row.mar}</TableCell>
              <TableCell>{row.apr}</TableCell>
              <TableCell>{row.may}</TableCell>
              <TableCell>{row.jun}</TableCell>
              <TableCell>{row.jul}</TableCell>
              <TableCell>{row.aug}</TableCell>
              <TableCell>{row.sep}</TableCell>
              <TableCell>{row.oct}</TableCell>
              <TableCell>{row.nov}</TableCell>
              <TableCell>{row.dec}</TableCell>
              <TableCell className="font-bold">{row.total}</TableCell>
              <TableCell>{row.percentage}</TableCell>
            </TableRow>
          ))}
          {["Atención Jurídica", "Atención Preventiva", "Capacitación"].map(category => {
            const subtotal = calculateSubtotal(monthlyData, category);
            const percentage = ((subtotal.total / 108682) * 100).toFixed(1) + "%";
            return (
              <TableRow key={`${category}-subtotal`} className="bg-pink-200 font-bold dark:bg-dark">
                <TableCell colSpan={2}>Subtotal {category}</TableCell>
                <TableCell>{subtotal.jan}</TableCell>
                <TableCell>{subtotal.feb}</TableCell>
                <TableCell>{subtotal.mar}</TableCell>
                <TableCell>{subtotal.apr}</TableCell>
                <TableCell>{subtotal.may}</TableCell>
                <TableCell>{subtotal.jun}</TableCell>
                <TableCell>{subtotal.jul}</TableCell>
                <TableCell>{subtotal.aug}</TableCell>
                <TableCell>{subtotal.sep}</TableCell>
                <TableCell>{subtotal.oct}</TableCell>
                <TableCell>{subtotal.nov}</TableCell>
                <TableCell>{subtotal.dec}</TableCell>
                <TableCell>{subtotal.total}</TableCell>
                <TableCell>{percentage}</TableCell>
              </TableRow>
            );
          })}
          <TableRow className="bg-pink-300 font-bold dark:bg-dark">
            <TableCell colSpan={2}>Total General</TableCell>
            <TableCell>1,481</TableCell>
            <TableCell>3,638</TableCell>
            <TableCell>4,689</TableCell>
            <TableCell>5,110</TableCell>
            <TableCell>18,876</TableCell>
            <TableCell>16,677</TableCell>
            <TableCell>13,199</TableCell>
            <TableCell>14,650</TableCell>
            <TableCell>30,362</TableCell>
            <TableCell>31,546</TableCell>
            <TableCell>33,745</TableCell>
            <TableCell>35,362</TableCell>
            <TableCell>109,682</TableCell>
            <TableCell>100%</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}