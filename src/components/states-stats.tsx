"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"

const stateData = [
  { id: 1, name: "Estado 1", total: 500, percentage: "20.2%", activities: [
    { name: "Actividad 1", total: 200 },
    { name: "Actividad 2", total: 300 },
  ]},
  { id: 2, name: "Estado 2", total: 294, percentage: "15.2%", activities: [
    { name: "Actividad 1", total: 150 },
    { name: "Actividad 2", total: 144 },
  ]},
  { id: 3, name: "Estado 3", total: 423, percentage: "18.5%", activities: [
    { name: "Actividad 1", total: 200 },
    { name: "Actividad 2", total: 223 },
  ]},
  { id: 4, name: "Estado 4", total: 533, percentage: "21.3%", activities: [
    { name: "Actividad 1", total: 250 },
    { name: "Actividad 2", total: 283 },
  ]},
  { id: 5, name: "Estado 5", total: 1212, percentage: "40.3%", activities: [
    { name: "Actividad 1", total: 600 },
    { name: "Actividad 2", total: 612 },
  ]},
  { id: 6, name: "Estado 6", total: 234, percentage: "12.3%", activities: [
    { name: "Actividad 1", total: 100 },
    { name: "Actividad 2", total: 134 },
  ]},
]

export default function ExpandableStateTable() {
  const [expandedRows, setExpandedRows] = useState<number[]>([])

  const toggleRow = (id: number) => {
    setExpandedRows(prev =>
      prev.includes(id) ? prev.filter(rowId => rowId !== id) : [...prev, id]
    )
  }

  const totalSum = stateData.reduce((sum, state) => sum + state.total, 0)

  return (
    <div className="container mx-auto p-4">
      <Table>
        <TableHeader>
          <TableRow className="bg-pink-200 text-black font-bold">
            <TableHead className="w-[100px]">Estados</TableHead>
            <TableHead>Total acumulado</TableHead>
            <TableHead>%</TableHead>
            <TableHead className="w-[100px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {stateData.map((state) => (
            <>
              <TableRow key={state.id} className={`bg-pink-100 text-black transition-max-height duration-500 ease-in-out overflow-hidden ${expandedRows.includes(state.id) ? 'max-h-96' : 'max-h-0'}`} onClick={() => toggleRow(state.id)}>
                <TableCell>{state.name}</TableCell>
                <TableCell>{state.total}</TableCell>
                <TableCell>{state.percentage}</TableCell>
                <TableCell>
                  <Button
                    variant="ghost"
                    size="sm"
                    // onClick={() => toggleRow(state.id)}
                    className="p-0"
                  >
                    {expandedRows.includes(state.id) ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </Button>
                </TableCell>
              </TableRow>
              {expandedRows.includes(state.id) && (
                <TableRow>
                  <TableCell colSpan={4}>
                    <div className="p-4">
                      <h4 className="font-bold mb-2 text-black">Actividades:</h4>
                      <ul className="list-disc list-inside text-black">
                        {state.activities.map((activity, index) => (
                          <li key={index}>
                            {activity.name}: {activity.total}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </TableCell>
                </TableRow>
              )}
            </>
          ))}
          <TableRow className="bg-pink-100 text-black font-bold">
            <TableCell>Total</TableCell>
            <TableCell>{totalSum}</TableCell>
            <TableCell>100%</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}