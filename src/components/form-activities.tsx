"use client"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { useState } from "react"
import ActivitiesCommonsForm from "./form-activities-commons"
import { Separator } from "@radix-ui/react-select"
import VictimsForm from "./victims-form"
import MurderFemaleForm from "./form-murder-famale"
import Form0800 from "./form-0800"
import { gerency, actionsOptions} from "@/lib/utils"
import useActivitieOptions from "@/hooks/useActivitieOptions"

type Activity = {
  id: number;
  name: string;
  label: string;
};


export default function FormActivities() {
  const [activitieType, setActivitieType] = useState<Activity[] | string>("");
  const [actions, setActions] = useState("")
  const [gerencia, setGerencia] = useState("")

  const {activitieOption} = useActivitieOptions(actions)

  const renderFormCommons = activitieType !== "" && activitieType !== "victimOfTrafficking" && activitieType !== "femicide" && activitieType !== "telephone service"
  const renderFormVictims = activitieType === "victimOfTrafficking"
  const renderFormMurderFemale = activitieType === "femicide"
  const renderForm0800 = activitieType === "telephone service"

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-4 w-full ">
        {/* -----Gerencia----- */}
        <div className="flex flex-col flex-1">
          <label htmlFor="gerencia-select" className="mb-2 text-sm font-semibold">Gerencia</label>
          <Select value={gerencia} onValueChange={(value) => setGerencia(value)}>
            <SelectTrigger>
              <SelectValue placeholder="Seleccione" />
            </SelectTrigger>
            <SelectContent>
              {gerency.map((gerencia) => (
                <SelectItem key={gerencia.id} value={gerencia.name}>{gerencia.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        {/* -----Actions----- */}
        <div className="flex flex-col flex-1">
          <label htmlFor="actions-select" className="mb-2 text-sm font-semibold">Acciones</label>
          <Select value={actions} onValueChange={(value) => setActions(value)}>
            <SelectTrigger>
              <SelectValue placeholder="Seleccione" />
            </SelectTrigger>
            <SelectContent>
              {actionsOptions.map((action) => (
                <SelectItem key={action.id} value={action.name}>{action.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* -----Actividades----- */}
        <div className="flex flex-col flex-1">
          <label htmlFor="activitie-select" className="mb-2 text-sm font-semibold">Actividades</label>
          <Select value={typeof activitieType === 'string' ? activitieType : undefined} onValueChange={(value) => setActivitieType(value)}>
            <SelectTrigger>
              <SelectValue placeholder="Seleccione" />
            </SelectTrigger>

            <SelectContent>
              {activitieOption?.map((activity: Activity) => (
                <SelectItem key={activity.id} value={activity.name}>{activity.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>


      {renderFormCommons &&

        <div className="lg:h-[400px]">
          <Separator className="my-4 border" />
          <ActivitiesCommonsForm gerencia={gerencia} actions={actions} activitieType={typeof activitieType === 'string' ? activitieType : ''} />
        </div>}

      {renderFormVictims &&
        <div className="lg:h-[300px]">
          <Separator className="my-4 border" />
          <VictimsForm gerencia={gerencia} actions={actions} activitieType={activitieType} />
        </div>}

      {renderFormMurderFemale &&
        <div className="lg:h-[300px]">
          <Separator className="my-4 border" />
          <MurderFemaleForm gerencia={gerencia} actions={actions} activitieType={activitieType} />
        </div>}

      {renderForm0800 &&
        <div className="lg:h-[300px]">
          <Separator className="my-4 border" />
          <Form0800 gerencia={gerencia} actions={actions} activitieType={activitieType} />
        </div>}

    </>
  )
}