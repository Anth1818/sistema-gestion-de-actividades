"use client"

import { TrendingUp } from "lucide-react"
import { Pie, PieChart } from "recharts"

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

export const description = "A pie chart with a label"


interface ChartDataPie {
    chartDataPie: {

        activitie: string,

        done: number,

        fill: string

    }[]
}

const chartConfig = {
  done: {
    label: "Completado",
  },
  activitie1: {
    label: "Actividad 1",
    color: "hsl(var(--chart-1))",
  },
  activitie2: {
    label: "Actividad 2",
    color: "hsl(var(--chart-2))",
  },
  activitie3: {
    label: "Actividad 3",
    color: "hsl(var(--chart-3))",
  },
  activitie4: {
    label: "Actividad 4",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig

export function ChartDataPie({ chartDataPie }: ChartDataPie) {
  return (
    <Card className="flex flex-col w-full md:w-[600px] ">
      <CardHeader className="items-center pb-0">
        <CardTitle className="text-center">Mayor cantidades de actividades completadas</CardTitle>
        <CardDescription>Enero - Diciembre 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px] pb-0 [&_.recharts-pie-label-text]:fill-foreground"
        >
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Pie data={chartDataPie} dataKey="done" label nameKey="activitie" />
          </PieChart>
        </ChartContainer>
      </CardContent>
      {/* <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter> */}
    </Card>
  )
}
