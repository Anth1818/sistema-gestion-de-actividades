
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function ActivitiesStatsTable() {
  return (
    <div className="container mx-auto p-4">
      <Table className="h-fit max-h-80 overflow-y-auto relative">
        <TableHeader>
          <TableRow>
            <TableHead className="bg-pink-200 text-black">Acción</TableHead>
            <TableHead className="bg-pink-200 text-black">No</TableHead>
            <TableHead className="bg-pink-200 text-black">Descripción</TableHead>
            <TableHead className="bg-pink-200 text-black">Total</TableHead>
            <TableHead className="bg-pink-200 text-black">%</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell rowSpan={5} className="bg-pink-100">1. Atención Jurídica</TableCell>
            <TableCell>1.1</TableCell>
            <TableCell>Asesoramiento inicial</TableCell>
            <TableCell>15,442</TableCell>
            <TableCell>14.2%</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>1.2</TableCell>
            <TableCell>Asistencia Legal</TableCell>
            <TableCell>1,351</TableCell>
            <TableCell>1.3%</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>1.3</TableCell>
            <TableCell>Patrocinio (Delegaciones)</TableCell>
            <TableCell>1,022</TableCell>
            <TableCell>0.9%</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>1.4</TableCell>
            <TableCell>Representación en trámite judiciales (por designaciones)</TableCell>
            <TableCell>330</TableCell>
            <TableCell>0.3%</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>1.5</TableCell>
            <TableCell>Informe de Tesis</TableCell>
            <TableCell>44</TableCell>
            <TableCell>0.0%</TableCell>
          </TableRow>
          <TableRow className="bg-pink-200 font-bold">
            <TableCell colSpan={3}>Sub - Total</TableCell>
            <TableCell>18,189</TableCell>
            <TableCell>16.7%</TableCell>
          </TableRow>
          <TableRow>
            <TableCell rowSpan={5} className="bg-pink-100">2. Atención Preventiva</TableCell>
            <TableCell>2.1</TableCell>
            <TableCell>Atención psicológica</TableCell>
            <TableCell>3,614</TableCell>
            <TableCell>3.3%</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>2.2</TableCell>
            <TableCell>Atención social</TableCell>
            <TableCell>8,227</TableCell>
            <TableCell>7.6%</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>2.3</TableCell>
            <TableCell>Contenciones &quot;violencia de género&quot;</TableCell>
            <TableCell>42,410</TableCell>
            <TableCell>39.0%</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>2.4</TableCell>
            <TableCell>Derivaciones &quot;violencia de género&quot;</TableCell>
            <TableCell>25,209</TableCell>
            <TableCell>23.2%</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>2.5</TableCell>
            <TableCell>Toma de espacios &quot;violencia de género&quot;</TableCell>
            <TableCell>8,584</TableCell>
            <TableCell>7.9%</TableCell>
          </TableRow>
          <TableRow className="bg-pink-200 font-bold">
            <TableCell colSpan={3}>Sub - Total</TableCell>
            <TableCell>90,029</TableCell>
            <TableCell>82.8%</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="bg-pink-100">3. Capacitación</TableCell>
            <TableCell>3.1</TableCell>
            <TableCell>Asistentes Comunitarios</TableCell>
            <TableCell>464</TableCell>
            <TableCell>0.4%</TableCell>
          </TableRow>
          <TableRow className="bg-pink-200 font-bold">
            <TableCell colSpan={3}>Sub - Total</TableCell>
            <TableCell>464</TableCell>
            <TableCell>0.4%</TableCell>
          </TableRow>
          <TableRow className="bg-pink-300 font-bold">
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell>108,682</TableCell>
            <TableCell>100%</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}