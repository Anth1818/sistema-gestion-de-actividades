
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import React from 'react';

const mockData = [
  {
    action: "1. Atención Jurídica",
    details: [
      { no: "1.1", description: "Asesoramiento inicial", total: "15,442", percentage: "14.2%" },
      { no: "1.2", description: "Asistencia Legal", total: "1,351", percentage: "1.3%" },
      { no: "1.3", description: "Representación Legal", total: "2,123", percentage: "2.0%" },
      { no: "1.4", description: "Mediación", total: "987", percentage: "0.9%" },
      { no: "1.5", description: "Otros", total: "543", percentage: "0.5%" },
    ],
    subTotal: { total: "18,189", percentage: "16.7%" },
  },
  {
    action: "2. Atención Preventiva",
    details: [
      { no: "2.1", description: "Atención psicológica", total: "3,614", percentage: "3.3%" },
      { no: "2.2", description: "Atención social", total: "8,227", percentage: "7.6%" },
      { no: "2.3", description: "Contenciones \"violencia de género\"", total: "42,410", percentage: "39.0%" },
      { no: "2.4", description: "Derivaciones \"violencia de género\"", total: "25,209", percentage: "23.2%" },
      { no: "2.5", description: "Toma de espacios \"violencia de género\"", total: "8,584", percentage: "7.9%" },
    ],
    subTotal: { total: "90,029", percentage: "82.8%" },
  },
  {
    action: "3. Capacitación",
    details: [
      { no: "3.1", description: "Asistentes Comunitarios", total: "464", percentage: "0.4%" },
    ],
    subTotal: { total: "464", percentage: "0.4%" },
  },
];

const total = { total: "108,682", percentage: "100%" };

export default function ActivitiesStatsTable() {
  return (
    <div className="container mx-auto p-4">
      <Table className="h-fit max-h-80 overflow-y-auto relative">
        <TableHeader>
          <TableRow>
            <TableHead className="bg-primary text-white font-bold">Acción</TableHead>
            <TableHead className="bg-primary text-white font-bold">No</TableHead>
            <TableHead className="bg-primary text-white font-bold">Descripción</TableHead>
            <TableHead className="bg-primary text-white font-bold">Total</TableHead>
            <TableHead className="bg-primary text-white font-bold">%/</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockData.map((activity, index) => (
            <React.Fragment key={index}>
              {activity.details.map((detail, detailIndex) => (
                <TableRow key={detailIndex}>
                  {detailIndex === 0 && (
                    <TableCell rowSpan={activity.details.length} className="bg-pink-100 dark:bg-dark">
                      {activity.action}
                    </TableCell>
                  )}
                  <TableCell>{detail.no}</TableCell>
                  <TableCell>{detail.description}</TableCell>
                  <TableCell>{detail.total}</TableCell>
                  <TableCell>{detail.percentage}</TableCell>
                </TableRow>
              ))}
              <TableRow className="bg-pink-200 font-bold dark:bg-dark">
                <TableCell colSpan={3}>Sub - Total</TableCell>
                <TableCell>{activity.subTotal.total}</TableCell>
                <TableCell>{activity.subTotal.percentage}</TableCell>
              </TableRow>
            </React.Fragment>
          ))}
          <TableRow className="bg-pink-300 font-bold dark:bg-dark">
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell>{total.total}</TableCell>
            <TableCell>{total.percentage}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}