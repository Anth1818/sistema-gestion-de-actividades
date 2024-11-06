"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

const stateData = [
  {
    id: 1, name: "Estado 1", total: 500, percentage: "20.2%", activities: [
      { name: "Actividad 1", total: 200 },
      { name: "Actividad 2", total: 300 },
    ]
  },
  {
    id: 2, name: "Estado 2", total: 294, percentage: "15.2%", activities: [
      { name: "Actividad 1", total: 150 },
      { name: "Actividad 2", total: 144 },
    ]
  },
  {
    id: 3, name: "Estado 3", total: 423, percentage: "18.5%", activities: [
      { name: "Actividad 1", total: 200 },
      { name: "Actividad 2", total: 223 },
    ]
  },
  {
    id: 4, name: "Estado 4", total: 533, percentage: "21.3%", activities: [
      { name: "Actividad 1", total: 250 },
      { name: "Actividad 2", total: 283 },
    ]
  },
  {
    id: 5, name: "Estado 5", total: 1212, percentage: "40.3%", activities: [
      { name: "Actividad 1", total: 600 },
      { name: "Actividad 2", total: 612 },
    ]
  },
  {
    id: 6, name: "Estado 6", total: 234, percentage: "12.3%", activities: [
      { name: "Actividad 1", total: 100 },
      { name: "Actividad 2", total: 134 },
    ]
  },
  {
    id: 7, name: "Estado 7", total: 345, percentage: "14.5%", activities: [
      { name: "Actividad 1", total: 150 },
      { name: "Actividad 2", total: 195 },
    ]
  },
  {
    id: 8, name: "Estado 8", total: 678, percentage: "25.6%", activities: [
      { name: "Actividad 1", total: 300 },
      { name: "Actividad 2", total: 378 },
    ]
  },
  {
    id: 9, name: "Estado 9", total: 789, percentage: "30.1%", activities: [
      { name: "Actividad 1", total: 400 },
      { name: "Actividad 2", total: 389 },
    ]
  },
  {
    id: 10, name: "Estado 10", total: 456, percentage: "19.8%", activities: [
      { name: "Actividad 1", total: 200 },
      { name: "Actividad 2", total: 256 },
    ]
  },
  {
    id: 11, name: "Estado 11", total: 567, percentage: "22.4%", activities: [
      { name: "Actividad 1", total: 250 },
      { name: "Actividad 2", total: 317 },
    ]
  },
  {
    id: 12, name: "Estado 12", total: 678, percentage: "26.7%", activities: [
      { name: "Actividad 1", total: 300 },
      { name: "Actividad 2", total: 378 },
    ]
  },
  {
    id: 13, name: "Estado 13", total: 789, percentage: "29.9%", activities: [
      { name: "Actividad 1", total: 350 },
      { name: "Actividad 2", total: 439 },
    ]
  },
  {
    id: 14, name: "Estado 14", total: 890, percentage: "33.2%", activities: [
      { name: "Actividad 1", total: 400 },
      { name: "Actividad 2", total: 490 },
    ]
  },
  {
    id: 15, name: "Estado 15", total: 901, percentage: "35.1%", activities: [
      { name: "Actividad 1", total: 450 },
      { name: "Actividad 2", total: 451 },
    ]
  },
  {
    id: 16, name: "Estado 16", total: 1012, percentage: "38.5%", activities: [
      { name: "Actividad 1", total: 500 },
      { name: "Actividad 2", total: 512 },
    ]
  },
  {
    id: 17, name: "Estado 17", total: 1123, percentage: "41.7%", activities: [
      { name: "Actividad 1", total: 550 },
      { name: "Actividad 2", total: 573 },
    ]
  },
  {
    id: 18, name: "Estado 18", total: 1234, percentage: "45.0%", activities: [
      { name: "Actividad 1", total: 600 },
      { name: "Actividad 2", total: 634 },
    ]
  },
  {
    id: 19, name: "Estado 19", total: 1345, percentage: "48.3%", activities: [
      { name: "Actividad 1", total: 650 },
      { name: "Actividad 2", total: 695 },
    ]
  },
  {
    id: 20, name: "Estado 20", total: 1456, percentage: "51.6%", activities: [
      { name: "Actividad 1", total: 700 },
      { name: "Actividad 2", total: 756 },
    ]
  },
  {
    id: 21, name: "Estado 21", total: 1567, percentage: "54.9%", activities: [
      { name: "Actividad 1", total: 750 },
      { name: "Actividad 2", total: 817 },
    ]
  },
  {
    id: 22, name: "Estado 22", total: 1678, percentage: "58.2%", activities: [
      { name: "Actividad 1", total: 800 },
      { name: "Actividad 2", total: 878 },
    ]
  },
];

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
          <TableRow >
            <TableHead className="w-[100px] bg-primary text-white font-bold">Estados</TableHead>
            <TableHead className="bg-primary text-white font-bold">Total acumulado</TableHead>
            <TableHead className="bg-primary text-white font-bold">%</TableHead>
            <TableHead className="w-[100px] bg-primary text-white font-bold"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {stateData.map((state) => (
            <>
              <TableRow key={state.id} className={`bg-pink-100 dark:bg-dark dark:text-dark-foreground text-black transition-max-height duration-500 ease-in-out overflow-hidden ${expandedRows.includes(state.id) ? 'max-h-96' : 'max-h-0'}`} onClick={() => toggleRow(state.id)}>
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
              <AnimatePresence>
                {expandedRows.includes(state.id) && (
                  <TableRow>
                    <TableCell colSpan={4}>
                      <motion.div
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                          open: { opacity: 1, height: "auto" },
                          collapsed: { opacity: 0, height: 0 }
                        }}
                        transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                      >
                        <div className="p-4">
                          <h4 className="font-bold mb-2 text-black dark:text-white">Actividades:</h4>
                          <ul className="list-disc list-inside text-black dark:text-white">
                            {state.activities.map((activity, index) => (
                              <li key={index}>
                                {activity.name}: {activity.total}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    </TableCell>
                  </TableRow>
                )}
              </AnimatePresence>
            </>
          ))}
          <TableRow className="bg-pink-100 text-black font-bold dark:bg-dark dark:text-dark-foreground">
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