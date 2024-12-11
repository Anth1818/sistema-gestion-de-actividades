import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const gerency = [
  {
    id: 1,
    name: "defender",
    label: "Gerencia de la defensoría nacional de los derechos de la mujer",
  },
  {
    id: 2,
    name: "regional",
    label: "Gerencia de desarrollo alternativo y política regional ",
  },
  {
    id: 3,
    name: "prevention",
    label: "Gerencia de atención integral y prevención de la violencia contra las mujeres",
  },
  {
    id: 4,
    name: "research",
    label: "Gerencia de investigación y capacitación ",
  },
]

export const actionsOptions = [
  {
    id: 1,
    name: "legalAttention",
    label: "Atención jurídica",
  },
  {
    id: 2,
    name: "prevention",
    label: "Prevención",
  },
  {
    id: 3,
    name: "training",
    label: "Formación",
  },
]

export const activities = [
  {
    "Atención jurídica": [
      {
        id: 1,
        name: "legal advice",
        label: "Asesoría legal",
      },
      {
        id: 2,
        name: "mobile ombudsman",
        label: "Defensoría móvil",
      },
      {
        id: 3,
        name: "gender justice",
        label: "Mesa técnica de justicia de género",
      },
      {
        id: 4,
        name: "representation in court cases",
        label: "Repesentación en causas judiciales",
      },
      // {
      //   id: 5,
      //   name: "victimOfTrafficking",
      //   label: "Victima de trata",
      // },
      // {
      //   id: 6,
      //   name: "femicide",
      //   label: "Femicidio",
      // },
      {
        id: 7,
        name: "procedural action",
        label: "Acción procesal",
      }, 
    ],
    "Prevención": [
      {
        id: 8,
        name: "psicolocial attention",
        label: "Atención psicológica",
      },
      {
        id: 9,
        name: "ginecoloical attention",
        label: "Atención ginecológica",
      },
      {
        id: 10,
        name: "house to house",
        label: "Casa por casa",
      },
      {
        id: 11,
        name: "conversation",
        label: "Conversatorio",
      },
      {
        id: 12,
        name: "violet Dot",
        label: "Punto violeta",
      },
      
      {
        id: 13,
        name: "space Intake",
        label: "Toma de espacio",
      },
      {
        id: 14,
        name: "preventive dynamics",
        label: "Dinámicas preventivas",
      },
      {
        id: 15,
        name: "cinema Forum",
        label: "Cine foro"
      },
      
      // {
      //   id: 16,
      //   name: "telephone service",
      //   label: "Atención telefónica",
      // },
    
    
   
    ],
    "Capacitación": [
      {
        id: 17,
        name: "community defenders",
        label: "Defensoras comunales comunitarias",
      },
      {
        id: 18,
        name: "communal labor defenders",
        label: "Defensoras comunales laborales"
      },
      {
        id: 19,
        name: "youth community defenders",
        label: "Defensoras comunales juveniles"
      }
    ]
  }
]

export const places = [
  {
    id: 1,
    name: "MINMUJER headquarters",
    label: "Sede MINMUJER",
  },
  {
    id: 2,
    name: "CAFIM",
    label: "CAFIM",
  },
  {
    id: 3,
    name: "UAIM",
    label: "UAIM",
  },
  {
    id: 4,
    name: "public ministry",
    label: "Ministerio público",
  },
  {
    id: 5,
    name: "TSJ",
    label: "TSJ",
  },
  {
    id: 6,
    name: "justice palace",
    label: "Palacio de justicia",
  },
  {
    id: 7,
    name: "hospital",
    label: "Hospital",
  },
  {
    id: 8,
    name: "ambulatory",
    label: "Ambulatorio",
  },
  {
    id: 9,
    name: "CDI",
    label: "CDI",
  },
  {
    id: 10,
    name: "mission base",
    label: "Base de misiones",
  },
  {
    id: 11,
    name: "educational Unit",
    label: "Unidad educativa",
  },
  {
    id: 12,
    name: "university",
    label: "Universidad",
  },
]

