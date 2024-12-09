"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Plus, Trash2 } from 'lucide-react'
import type { FormData } from "@/lib/types"

const AGE_RANGES = [
  "1-7 años",
  "18-30 años",
  "31-45 años",
  "46-85 años",
]

const ATTENTION_TYPES = [
  "Atención Primaria",
  "Atención Especializada",
  "Atención de Emergencia",
]

const DISABILITIES = [
  "Física",
  "Visual",
  "Auditiva",
  "Intelectual",
  "Psicosocial",
]

const ETHNICITIES = [
  "Indígena",
  "Afrodescendiente",
  "Mestizo",
  "Blanco",
]

interface DynamicFormProps {
  formData: FormData
  setFormData: (data: FormData) => void
}

export default function DynamicForm({ formData, setFormData }: DynamicFormProps) {

  const addAttentionType = () => {
    setFormData({
      ...formData,
      attentionTypes: [
        ...formData.attentionTypes,
        { type: "", ageRanges: [], disabilities: [], ethnicities: [] },
      ],
    })
  }

  const addAttentionAgeRange = (attentionIndex: number) => {
    if (formData.attentionTypes[attentionIndex].ageRanges.length < 4) {
      const newAttentionTypes = [...formData.attentionTypes]
      newAttentionTypes[attentionIndex].ageRanges.push({ range: "", women: 0, men: 0 })
      setFormData({ ...formData, attentionTypes: newAttentionTypes })
    }
  }

  const addDisability = (attentionIndex: number) => {
    const newAttentionTypes = [...formData.attentionTypes]
    newAttentionTypes[attentionIndex].disabilities.push({ type: "", ageRanges: [] })
    setFormData({ ...formData, attentionTypes: newAttentionTypes })
  }

  const addDisabilityAgeRange = (attentionIndex: number, disabilityIndex: number) => {
    if (formData.attentionTypes[attentionIndex].disabilities[disabilityIndex].ageRanges.length < 4) {
      const newAttentionTypes = [...formData.attentionTypes]
      newAttentionTypes[attentionIndex].disabilities[disabilityIndex].ageRanges.push({ range: "", women: 0, men: 0 })
      setFormData({ ...formData, attentionTypes: newAttentionTypes })
    }
  }

  const addEthnicity = (attentionIndex: number) => {
    const newAttentionTypes = [...formData.attentionTypes]
    newAttentionTypes[attentionIndex].ethnicities.push({ type: "", ageRanges: [] })
    setFormData({ ...formData, attentionTypes: newAttentionTypes })
  }

  const addEthnicityAgeRange = (attentionIndex: number, ethnicityIndex: number) => {
    if (formData.attentionTypes[attentionIndex].ethnicities[ethnicityIndex].ageRanges.length < 4) {
      const newAttentionTypes = [...formData.attentionTypes]
      newAttentionTypes[attentionIndex].ethnicities[ethnicityIndex].ageRanges.push({ range: "", women: 0, men: 0 })
      setFormData({ ...formData, attentionTypes: newAttentionTypes })
    }
  }

  const removeAttentionType = (index: number) => {
    const newAttentionTypes = formData.attentionTypes.filter((_, i) => i !== index)
    setFormData({ ...formData, attentionTypes: newAttentionTypes })
  }

  const removeDisability = (attentionIndex: number, disabilityIndex: number) => {
    const newAttentionTypes = [...formData.attentionTypes]
    newAttentionTypes[attentionIndex].disabilities = newAttentionTypes[attentionIndex].disabilities.filter((_, i) => i !== disabilityIndex)
    setFormData({ ...formData, attentionTypes: newAttentionTypes })
  }

  const removeEthnicity = (attentionIndex: number, ethnicityIndex: number) => {
    const newAttentionTypes = [...formData.attentionTypes]
    newAttentionTypes[attentionIndex].ethnicities = newAttentionTypes[attentionIndex].ethnicities.filter((_, i) => i !== ethnicityIndex)
    setFormData({ ...formData, attentionTypes: newAttentionTypes })
  }

  return (
    <Card className="w-full max-w-4xl mx-auto p-4">
      <CardContent className="space-y-6">

        {/* Tipos de Atención */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium">Tipos de atención</label>
            <Button onClick={(e) => { e.preventDefault(); addAttentionType() }} variant="outline" size="sm">
              <Plus className="h-4 w-4 mr-2" />
              Agregar tipo de atención
            </Button>
          </div>
          {formData.attentionTypes.map((attentionType, attentionIndex) => (
            <div key={attentionIndex} className="space-y-4 border p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <Select
                  value={attentionType.type}
                  onValueChange={(value) => {
                    const newAttentionTypes = [...formData.attentionTypes]
                    newAttentionTypes[attentionIndex].type = value
                    setFormData({ ...formData, attentionTypes: newAttentionTypes })
                  }}
                >
                  <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Tipo de atención" />
                  </SelectTrigger>
                  <SelectContent>
                    {ATTENTION_TYPES.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Button
                  variant="destructive"
                  size="icon"
                  onClick={(e) => { e.preventDefault(); removeAttentionType(attentionIndex) }}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>

              {/* Rangos de edad para el tipo de atención */}
              <div className="space-y-2">
                {attentionType.ageRanges.map((ageRange, ageIndex) => (
                  <div key={ageIndex} className="grid grid-cols-4 gap-4 items-center">
                    <div className="flex flex-col gap-1">
                      <label className="text-sm font-medium">Rangos de edad</label>
                      <Select
                        value={ageRange.range}
                        onValueChange={(value) => {
                          const newAttentionTypes = [...formData.attentionTypes]
                          newAttentionTypes[attentionIndex].ageRanges[ageIndex].range = value
                          setFormData({ ...formData, attentionTypes: newAttentionTypes })
                        }}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Rangos" />
                        </SelectTrigger>
                        <SelectContent>
                          {AGE_RANGES.map((range) => (
                            <SelectItem key={range} value={range}>
                              {range}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-sm font-medium">Mujeres</label>
                      <Input
                        type="number"
                        placeholder="Mujeres"
                        value={ageRange.women}
                        onChange={(e) => {
                          const newAttentionTypes = [...formData.attentionTypes]
                          newAttentionTypes[attentionIndex].ageRanges[ageIndex].women = parseInt(e.target.value)
                          setFormData({ ...formData, attentionTypes: newAttentionTypes })
                        }}
                      />
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="text-sm font-medium">Hombres</label>
                      <Input
                        type="number"
                        placeholder="Hombres"
                        value={ageRange.men}
                        onChange={(e) => {
                          const newAttentionTypes = [...formData.attentionTypes]
                          newAttentionTypes[attentionIndex].ageRanges[ageIndex].men = parseInt(e.target.value)
                          setFormData({ ...formData, attentionTypes: newAttentionTypes })
                        }}
                      />
                    </div>

                    <Button
                      variant="destructive"
                      className="mt-6"
                      size="icon"
                      onClick={(e) => {
                        e.preventDefault();
                        const newAttentionTypes = [...formData.attentionTypes]
                        newAttentionTypes[attentionIndex].ageRanges = newAttentionTypes[attentionIndex].ageRanges.filter((_, i) => i !== ageIndex)
                        setFormData({ ...formData, attentionTypes: newAttentionTypes })
                      }}
                    >
                      <Trash2 className="h-4 w-4 " />
                    </Button>

                  </div>
                ))}
                {attentionType.ageRanges.length < 4 && (
                  <Button
                    onClick={(e) => { e.preventDefault(); addAttentionAgeRange(attentionIndex) }}
                    variant="outline"
                    size="sm"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Agregar rango de edad
                  </Button>
                )}
              </div>

              {/* Discapacidades */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium">Discapacidad</label>
                  <Button onClick={(e) => { e.preventDefault(); addDisability(attentionIndex) }} variant="outline" size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    Agregar discapacidad
                  </Button>
                </div>
                {attentionType.disabilities.map((disability, dIndex) => (
                  <div key={dIndex} className="space-y-4 border p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <Select
                        value={disability.type}
                        onValueChange={(value) => {
                          const newAttentionTypes = [...formData.attentionTypes]
                          newAttentionTypes[attentionIndex].disabilities[dIndex].type = value
                          setFormData({ ...formData, attentionTypes: newAttentionTypes })
                        }}
                      >
                        <SelectTrigger className="w-[200px]">
                          <SelectValue placeholder="Tipo de discapacidad" />
                        </SelectTrigger>
                        <SelectContent>
                          {DISABILITIES.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <Button
                        variant="destructive"
                        size="icon"
                        onClick={(e) => { e.preventDefault(); removeDisability(attentionIndex, dIndex) }}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>

                    {disability.ageRanges.map((ageRange, aIndex) => (
                      <div key={aIndex} className="grid grid-cols-4 gap-4 items-center">
                        <div className="flex flex-col gap-1">
                          <label className="text-sm font-medium">Rangos de edad</label>
                          <Select
                            value={ageRange.range}
                            onValueChange={(value) => {
                              const newAttentionTypes = [...formData.attentionTypes]
                              newAttentionTypes[attentionIndex].disabilities[dIndex].ageRanges[aIndex].range = value
                              setFormData({ ...formData, attentionTypes: newAttentionTypes })
                            }}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Rangos" />
                            </SelectTrigger>
                            <SelectContent>
                              {AGE_RANGES.map((range) => (
                                <SelectItem key={range} value={range}>
                                  {range}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="flex flex-col gap-1">
                          <label className="text-sm font-medium">Mujeres</label>
                          <Input
                            type="number"
                            placeholder="Mujeres"
                            value={ageRange.women}
                            onChange={(e) => {
                              const newAttentionTypes = [...formData.attentionTypes]
                              newAttentionTypes[attentionIndex].disabilities[dIndex].ageRanges[aIndex].women = parseInt(e.target.value)
                              setFormData({ ...formData, attentionTypes: newAttentionTypes })
                            }}
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <label className="text-sm font-medium">Hombres</label>
                          <Input
                            type="number"
                            placeholder="Hombres"
                            value={ageRange.men}
                            onChange={(e) => {
                              const newAttentionTypes = [...formData.attentionTypes]
                              newAttentionTypes[attentionIndex].disabilities[dIndex].ageRanges[aIndex].men = parseInt(e.target.value)
                              setFormData({ ...formData, attentionTypes: newAttentionTypes })
                            }}
                          />
                        </div>
                        <Button
                          variant="destructive"
                          className="mt-6"
                          size="icon"
                          onClick={(e) => {
                            e.preventDefault();
                            const newAttentionTypes = [...formData.attentionTypes]
                            newAttentionTypes[attentionIndex].disabilities[dIndex].ageRanges = newAttentionTypes[attentionIndex].disabilities[dIndex].ageRanges.filter((_, i) => i !== aIndex)
                            setFormData({ ...formData, attentionTypes: newAttentionTypes })
                          }}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                    {disability.ageRanges.length < 4 && (
                      <Button
                        onClick={(e) => { e.preventDefault(); addDisabilityAgeRange(attentionIndex, dIndex) }}
                        variant="outline"
                        size="sm"
                      >
                        <Plus className="h-4 w-4 mr-2" />
                        Agregar rango de edad
                      </Button>
                    )}
                  </div>
                ))}
              </div>

              {/* Etnias */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium">Etnia</label>
                  <Button onClick={(e) => { e.preventDefault(); addEthnicity(attentionIndex) }} variant="outline" size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    Agregar etnia
                  </Button>
                </div>
                {attentionType.ethnicities.map((ethnicity, eIndex) => (
                  <div key={eIndex} className="space-y-4 border p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <Select
                        value={ethnicity.type}
                        onValueChange={(value) => {
                          const newAttentionTypes = [...formData.attentionTypes]
                          newAttentionTypes[attentionIndex].ethnicities[eIndex].type = value
                          setFormData({ ...formData, attentionTypes: newAttentionTypes })
                        }}
                      >
                        <SelectTrigger className="w-[200px]">
                          <SelectValue placeholder="Tipo de etnia" />
                        </SelectTrigger>
                        <SelectContent>
                          {ETHNICITIES.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <Button
                        variant="destructive"
                        size="icon"
                        onClick={(e) => { e.preventDefault(); removeEthnicity(attentionIndex, eIndex) }}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>

                    {ethnicity.ageRanges.map((ageRange, aIndex) => (
                      <div key={aIndex} className="grid grid-cols-4 gap-4 items-center">
                        <div className="flex flex-col gap-1">
                          <label className="text-sm font-medium">Rangos de edad</label>
                          <Select
                            value={ageRange.range}
                            onValueChange={(value) => {
                              const newAttentionTypes = [...formData.attentionTypes]
                              newAttentionTypes[attentionIndex].ethnicities[eIndex].ageRanges[aIndex].range = value
                              setFormData({ ...formData, attentionTypes: newAttentionTypes })
                            }}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Rangos" />
                            </SelectTrigger>
                            <SelectContent>
                              {AGE_RANGES.map((range) => (
                                <SelectItem key={range} value={range}>
                                  {range}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="flex flex-col gap-1">
                          <label className="text-sm font-medium">Mujeres</label>
                          <Input
                            type="number"
                            placeholder="Mujeres"
                            value={ageRange.women}
                            onChange={(e) => {
                              const newAttentionTypes = [...formData.attentionTypes]
                              newAttentionTypes[attentionIndex].ethnicities[eIndex].ageRanges[aIndex].women = parseInt(e.target.value)
                              setFormData({ ...formData, attentionTypes: newAttentionTypes })
                            }}
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <label className="text-sm font-medium">Hombres</label>
                          <Input
                            type="number"
                            placeholder="Hombres"
                            value={ageRange.men}
                            onChange={(e) => {
                              const newAttentionTypes = [...formData.attentionTypes]
                              newAttentionTypes[attentionIndex].ethnicities[eIndex].ageRanges[aIndex].men = parseInt(e.target.value)
                              setFormData({ ...formData, attentionTypes: newAttentionTypes })
                            }}
                          />
                        </div>
                        <Button
                          variant="destructive"
                          size="icon"
                          className="mt-6"
                          onClick={(e) => {
                            e.preventDefault();
                            const newAttentionTypes = [...formData.attentionTypes]
                            newAttentionTypes[attentionIndex].ethnicities[eIndex].ageRanges = newAttentionTypes[attentionIndex].ethnicities[eIndex].ageRanges.filter((_, i) => i !== aIndex)
                            setFormData({ ...formData, attentionTypes: newAttentionTypes })
                          }}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                    {ethnicity.ageRanges.length < 4 && (
                      <Button
                        onClick={(e) => { e.preventDefault(); addEthnicityAgeRange(attentionIndex, eIndex) }}
                        variant="outline"
                        size="sm"
                      >
                        <Plus className="h-4 w-4 mr-2" />
                        Agregar rango de edad
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* <Button className="w-full" type="submit">
          Guardar
        </Button> */}
      </CardContent>
    </Card>
  )
}
