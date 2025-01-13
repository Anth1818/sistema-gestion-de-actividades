"use client"

import { Bar, BarChart, CartesianGrid, XAxis, Legend, LabelList } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A multiple bar chart"

interface ChartData {
  chartData: {

    month: string,

    completado: number,

    no_completado: number

  }[]
  id?: string
}

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function StatisticsFull({ chartData, id }: ChartData) {
  return (
    <Card className="w-full" id={id}>
      <CardHeader>
        <CardTitle>Estadística de barra - Logros por meses</CardTitle>
        <CardDescription>Enero - Diciembre 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[250px] w-full">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed"
              />}
            />
            <Bar dataKey="completado" fill="var(--success)" radius={4}>
              <LabelList dataKey="completado" position="top" />
            </Bar>
            <Bar dataKey="no_completado" fill="var(--warning)" radius={4}>
              <LabelList dataKey="no_completado" position="top" />
            </Bar>
            <Legend />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
      </CardFooter>
    </Card>
  )
}

export function Statistics({ chartData }: ChartData) {
  return (
    <Card className="w-full md:w-[350px] ">
      <CardHeader>
        <CardTitle>Bar Chart - Multiple</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="completado" fill="var(--color-desktop)" radius={4} />
            <Bar dataKey="no_completado" fill="var(--color-mobile)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
      </CardFooter>
    </Card>
  )
}