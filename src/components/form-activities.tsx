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


export default function FormActivities() {
  const [activitieType, setActivitieType] = useState("")
  const [actions, setActions] = useState("")
  const [gerencia, setGerencia] = useState("")

  const renderFormCommons = activitieType !== "" && activitieType !== "victimOfTrafficking" && activitieType !== "murderFemale" && activitieType !== "service0800"
  const renderFormVictims = activitieType === "victimOfTrafficking"
  const renderFormMurderFemale = activitieType === "murderFemale"
  const renderForm0800 = activitieType === "service0800"

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-4 w-full">
        {/* -----Gerencia----- */}
        <div className="flex flex-col flex-1">
          <label htmlFor="gerencia-select" className="mb-2 text-sm font-semibold">Gerencia</label>
          <Select value={gerencia} onValueChange={(value) => setGerencia(value)}>
            <SelectTrigger>
              <SelectValue placeholder="Seleccione" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="gerencia 1">gerencia 1</SelectItem>
              <SelectItem value="gerencia 2">gerencia 2</SelectItem>
              <SelectItem value="gerencia 3">gerencia 3</SelectItem>
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
              <SelectItem value="action 1">Atención jurídica</SelectItem>
              <SelectItem value="action 2">Prevención</SelectItem>
              <SelectItem value="action 3">Capacitación</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* -----Actividades----- */}
        <div className="flex flex-col flex-1">
          <label htmlFor="activitie-select" className="mb-2 text-sm font-semibold">Actividades</label>
          <Select value={activitieType} onValueChange={(value) => setActivitieType(value)}>
            <SelectTrigger>
              <SelectValue placeholder="Seleccione" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="activitie 1">actividad 1</SelectItem>
              <SelectItem value="activitie 2">actividad 2</SelectItem>
              <SelectItem value="activitie 3">actividad 3</SelectItem>
              <SelectItem value="victimOfTrafficking">Victima de trata</SelectItem>
              <SelectItem value="murderFemale">Femicidio</SelectItem>
              <SelectItem value="service0800">Atención telefónica 0800</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {renderFormCommons && <Separator className="my-4 border" />}

      {renderFormCommons ? <ActivitiesCommonsForm gerencia={gerencia} actions={actions} activitieType={activitieType} /> : null}

      {renderFormVictims && <Separator className="my-4 border" />}

      {renderFormVictims ? <VictimsForm gerencia={gerencia} actions={actions} activitieType={activitieType}/> : null}

      {renderFormMurderFemale && <Separator className="my-4 border" />}

      {renderFormMurderFemale ? <MurderFemaleForm gerencia={gerencia} actions={actions} activitieType={activitieType}/> : null}

      {renderForm0800 && <Separator className="my-4 border" />}

      {renderForm0800 ? <Form0800 gerencia={gerencia} actions={actions} activitieType={activitieType}/> : null}
    </>
  )
}