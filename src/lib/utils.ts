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
      {
        id: 5,
        name: "victimOfTrafficking",
        label: "Victima de trata",
      },
      {
        id: 6,
        name: "femicide",
        label: "Violencia de genero",
      },
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

      {
        id: 16,
        name: "telephone service",
        label: "Atención telefónica",
      },



    ],
    "Formación": [
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

export const countries = [
  { id: 1, country: "Afganistán" },
  { id: 2, country: "Islas Gland" },
  { id: 3, country: "Albania" },
  { id: 4, country: "Alemania" },
  { id: 5, country: "Andorra" },
  { id: 6, country: "Angola" },
  { id: 7, country: "Anguilla" },
  { id: 8, country: "Antártida" },
  { id: 9, country: "Antigua y Barbuda" },
  { id: 10, country: "Antillas Holandesas" },
  { id: 11, country: "Arabia Saudí" },
  { id: 12, country: "Argelia" },
  { id: 13, country: "Argentina" },
  { id: 14, country: "Armenia" },
  { id: 15, country: "Aruba" },
  { id: 16, country: "Australia" },
  { id: 17, country: "Austria" },
  { id: 18, country: "Azerbaiyán" },
  { id: 19, country: "Bahamas" },
  { id: 20, country: "Bahréin" },
  { id: 21, country: "Bangladesh" },
  { id: 22, country: "Barbados" },
  { id: 23, country: "Bielorrusia" },
  { id: 24, country: "Bélgica" },
  { id: 25, country: "Belice" },
  { id: 26, country: "Benin" },
  { id: 27, country: "Bermudas" },
  { id: 28, country: "Bhután" },
  { id: 29, country: "Bolivia" },
  { id: 30, country: "Bosnia y Herzegovina" },
  { id: 31, country: "Botsuana" },
  { id: 32, country: "Isla Bouvet" },
  { id: 33, country: "Brasil" },
  { id: 34, country: "Brunéi" },
  { id: 35, country: "Bulgaria" },
  { id: 36, country: "Burkina Faso" },
  { id: 37, country: "Burundi" },
  { id: 38, country: "Cabo Verde" },
  { id: 39, country: "Islas Caimán" },
  { id: 40, country: "Camboya" },
  { id: 41, country: "Camerún" },
  { id: 42, country: "Canadá" },
  { id: 43, country: "República Centroafricana" },
  { id: 44, country: "Chad" },
  { id: 45, country: "República Checa" },
  { id: 46, country: "Chile" },
  { id: 47, country: "China" },
  { id: 48, country: "Chipre" },
  { id: 49, country: "Isla de Navidad" },
  { id: 50, country: "Ciudad del Vaticano" },
  { id: 51, country: "Islas Cocos" },
  { id: 52, country: "Colombia" },
  { id: 53, country: "Comoras" },
  { id: 54, country: "República Democrática del Congo" },
  { id: 55, country: "Congo" },
  { id: 56, country: "Islas Cook" },
  { id: 57, country: "Corea del Norte" },
  { id: 58, country: "Corea del Sur" },
  { id: 59, country: "Costa de Marfil" },
  { id: 60, country: "Costa Rica" },
  { id: 61, country: "Croacia" },
  { id: 62, country: "Cuba" },
  { id: 63, country: "Dinamarca" },
  { id: 64, country: "Dominica" },
  { id: 65, country: "República Dominicana" },
  { id: 66, country: "Ecuador" },
  { id: 67, country: "Egipto" },
  { id: 68, country: "El Salvador" },
  { id: 69, country: "Emiratos Árabes Unidos" },
  { id: 70, country: "Eritrea" },
  { id: 71, country: "Eslovaquia" },
  { id: 72, country: "Eslovenia" },
  { id: 73, country: "España" },
  { id: 74, country: "Islas ultramarinas de Estados Unidos" },
  { id: 75, country: "Estados Unidos" },
  { id: 76, country: "Estonia" },
  { id: 77, country: "Etiopía" },
  { id: 78, country: "Islas Feroe" },
  { id: 79, country: "Filipinas" },
  { id: 80, country: "Finlandia" },
  { id: 81, country: "Fiyi" },
  { id: 82, country: "Francia" },
  { id: 83, country: "Gabón" },
  { id: 84, country: "Gambia" },
  { id: 85, country: "Georgia" },
  { id: 86, country: "Islas Georgias del Sur y Sandwich del Sur" },
  { id: 87, country: "Ghana" },
  { id: 88, country: "Gibraltar" },
  { id: 89, country: "Granada" },
  { id: 90, country: "Grecia" },
  { id: 91, country: "Groenlandia" },
  { id: 92, country: "Guadalupe" },
  { id: 93, country: "Guam" },
  { id: 94, country: "Guatemala" },
  { id: 95, country: "Guayana Francesa" },
  { id: 96, country: "Guinea" },
  { id: 97, country: "Guinea Ecuatorial" },
  { id: 98, country: "Guinea-Bissau" },
  { id: 99, country: "Guyana" },
  { id: 100, country: "Haití" },
  { id: 101, country: "Islas Heard y McDonald" },
  { id: 102, country: "Honduras" },
  { id: 103, country: "Hong Kong" },
  { id: 104, country: "Hungría" },
  { id: 105, country: "India" },
  { id: 106, country: "Indonesia" },
  { id: 107, country: "Irán" },
  { id: 108, country: "Iraq" },
  { id: 109, country: "Irlanda" },
  { id: 110, country: "Islandia" },
  { id: 111, country: "Israel" },
  { id: 112, country: "Italia" },
  { id: 113, country: "Jamaica" },
  { id: 114, country: "Japón" },
  { id: 115, country: "Jordania" },
  { id: 116, country: "Kazajstán" },
  { id: 117, country: "Kenia" },
  { id: 118, country: "Kirguistán" },
  { id: 119, country: "Kiribati" },
  { id: 120, country: "Kuwait" },
  { id: 121, country: "Laos" },
  { id: 122, country: "Lesotho" },
  { id: 123, country: "Letonia" },
  { id: 124, country: "Líbano" },
  { id: 125, country: "Liberia" },
  { id: 126, country: "Libia" },
  { id: 127, country: "Liechtenstein" },
  { id: 128, country: "Lituania" },
  { id: 129, country: "Luxemburgo" },
  { id: 130, country: "Macao" },
  { id: 131, country: "ARY Macedonia" },
  { id: 132, country: "Madagascar" },
  { id: 133, country: "Malasia" },
  { id: 134, country: "Malawi" },
  { id: 135, country: "Maldivas" },
  { id: 136, country: "Malí" },
  { id: 137, country: "Malta" },
  { id: 138, country: "Islas Malvinas" },
  { id: 139, country: "Islas Marianas del Norte" },
  { id: 140, country: "Marruecos" },
  { id: 141, country: "Islas Marshall" },
  { id: 142, country: "Martinica" },
  { id: 143, country: "Mauricio" },
  { id: 144, country: "Mauritania" },
  { id: 145, country: "Mayotte" },
  { id: 146, country: "México" },
  { id: 147, country: "Micronesia" },
  { id: 148, country: "Moldavia" },
  { id: 149, country: "Mónaco" },
  { id: 150, country: "Mongolia" },
  { id: 151, country: "Montserrat" },
  { id: 152, country: "Mozambique" },
  { id: 153, country: "Myanmar" },
  { id: 154, country: "Namibia" },
  { id: 155, country: "Nauru" },
  { id: 156, country: "Nepal" },
  { id: 157, country: "Nicaragua" },
  { id: 158, country: "Níger" },
  { id: 159, country: "Nigeria" },
  { id: 160, country: "Niue" },
  { id: 161, country: "Isla Norfolk" },
  { id: 162, country: "Noruega" },
  { id: 163, country: "Nueva Caledonia" },
  { id: 164, country: "Nueva Zelanda" },
  { id: 165, country: "Omán" },
  { id: 166, country: "Países Bajos" },
  { id: 167, country: "Pakistán" },
  { id: 168, country: "Palau" },
  { id: 169, country: "Palestina" },
  { id: 170, country: "Panamá" },
  { id: 171, country: "Papúa Nueva Guinea" },
  { id: 172, country: "Paraguay" },
  { id: 173, country: "Perú" },
  { id: 174, country: "Islas Pitcairn" },
  { id: 175, country: "Polinesia Francesa" },
  { id: 176, country: "Polonia" },
  { id: 177, country: "Portugal" },
  { id: 178, country: "Puerto Rico" },
  { id: 179, country: "Qatar" },
  { id: 180, country: "Reino Unido" },
  { id: 181, country: "Reunión" },
  { id: 182, country: "Ruanda" },
  { id: 183, country: "Rumania" },
  { id: 184, country: "Rusia" },
  { id: 185, country: "Sahara Occidental" },
  { id: 186, country: "Islas Salomón" },
  { id: 187, country: "Samoa" },
  { id: 188, country: "Samoa Americana" },
  { id: 189, country: "San Cristóbal y Nevis" },
  { id: 190, country: "San Marino" },
  { id: 191, country: "San Pedro y Miquelón" },
  { id: 192, country: "San Vicente y las Granadinas" },
  { id: 193, country: "Santa Helena" },
  { id: 194, country: "Santa Lucía" },
  { id: 195, country: "Santo Tomé y Príncipe" },
  { id: 196, country: "Senegal" },
  { id: 197, country: "Serbia y Montenegro" },
  { id: 198, country: "Seychelles" },
  { id: 199, country: "Sierra Leona" },
  { id: 200, country: "Singapur" },
  { id: 201, country: "Siria" },
  { id: 202, country: "Somalia" },
  { id: 203, country: "Sri Lanka" },
  { id: 204, country: "Suazilandia" },
  { id: 205, country: "Sudáfrica" },
  { id: 206, country: "Sudán" },
  { id: 207, country: "Suecia" },
  { id: 208, country: "Suiza" },
  { id: 209, country: "Surinam" },
  { id: 210, country: "Svalbard y Jan Mayen" },
  { id: 211, country: "Tailandia" },
  { id: 212, country: "Taiwán" },
  { id: 213, country: "Tanzania" },
  { id: 214, country: "Tayikistán" },
  { id: 215, country: "Territorio Británico del Océano Índico" },
  { id: 216, country: "Territorios Australes Franceses" },
  { id: 217, country: "Timor Oriental" },
  { id: 218, country: "Togo" },
  { id: 219, country: "Tokelau" },
  { id: 220, country: "Tonga" },
  { id: 221, country: "Trinidad y Tobago" },
  { id: 222, country: "Túnez" },
  { id: 223, country: "Islas Turcas y Caicos" },
  { id: 224, country: "Turkmenistán" },
  { id: 225, country: "Turquía" },
  { id: 226, country: "Tuvalu" },
  { id: 227, country: "Ucrania" },
  { id: 228, country: "Uganda" },
  { id: 229, country: "Uruguay" },
  { id: 230, country: "Uzbekistán" },
  { id: 231, country: "Vanuatu" },
  { id: 232, country: "Venezuela" },
  { id: 233, country: "Vietnam" },
  { id: 234, country: "Islas Vírgenes Británicas" },
  { id: 235, country: "Islas Vírgenes de los Estados Unidos" },
  { id: 236, country: "Wallis y Futuna" },
  { id: 237, country: "Yemen" },
  { id: 238, country: "Yibuti" },
  { id: 239, country: "Zambia" },
  { id: 240, country: "Zimbabue" }
];


export const rangeOfAge = [
  {
    id: 0,
    label: "Ninguno"
  },
  {
    id: 1,
    label: "1-17"
  },
  {
    id: 2,
    label: "18-30"
  },
  {
    id: 3,
    label: "31-45"
  },
  {
    id: 4,
    label: "46-85"
  },
]

export const killerStatus = [
  {
    id: 0,
    label: "Ninguno"
  },
  {
    id: 1,
    label: "Privado de libertad"
  },
  {
    id: 2,
    label: "Suicidio"
  },
  {
    id: 3,
    label: "Prófugo"
  },
  {
    id: 4,
    label: "Por determinar"
  },
  {
    id: 5,
    label: "Sentenciado"
  }
]

export const type_femicide = [
  {
    id: 0,
    label: "Ninguno"
  },
  {
    id: 1,
    label: "Femicidio Agravado"
  },
  {
    id: 2,
    label: "Femicidio Frustado"
  },
  {
    id: 3,
    label: "Femicidio"
  }]

export const type_weapon = [
  {
    id: 0,
    label: "Ninguno"
  },
  {
    id: 1,
    label: "Arma blanca"
  },
  {
    id: 2,
    label: "Fuerza Corporal"
  },
  {
    id: 3,
    label: "Arma de fuego"
  },
  {
    id: 4,
    label: "Objeto contundente"
  },
  {
    id: 5,
    label: "Material inflamable"
  },
  {
    id: 6,
    label: "Ahogamiento"
  }
]

export const type_telephone_service = [
  {
    id: 0,
    label: "Ninguno"
  },
  {
    id: 1,
    label: "Psicológia"
  },
  {
    id: 2,
    label: "Legal"
  },
  {
    id: 3,
    label: "Orientación"
  }
]

// Para la grafica de barras
const chartDataFullMonths = [
  { month: "Enero", completado: 186, no_completado: 45 },
  { month: "Febrero", completado: 305, no_completado: 21 },
  { month: "Marzo", completado: 237, no_completado: 22 },
  { month: "Abril", completado: 173, no_completado: 19 },
  { month: "Mayo", completado: 209, no_completado: 23 },
  { month: "Junio", completado: 214, no_completado: 14 },
  { month: "Julio", completado: 186, no_completado: 28 },
  { month: "Agosto", completado: 305, no_completado: 26 },
  { month: "Septiembre", completado: 237, no_completado: 22 },
  { month: "Octubre", completado: 273, no_completado: 23 },
  { month: "Noviembre", completado: 209, no_completado: 23 },
  { month: "Diciembre", completado: 214, no_completado: 24 },
]

//Para la grafica de pastel
const chartDataPie = [
  { activitie: "activitie1", done: 275, fill: "hsl(var(--chart-1))" },
  { activitie: "activitie2", done: 90, fill: "hsl(var(--chart-2))" },
  { activitie: "activitie3", done: 187, fill: "hsl(var(--chart-3))" },
  { activitie: "activitie4", done: 173, fill: "hsl(var(--chart-4))" },
]

//Para la tabla de estados y sede central
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
]

//Para la tabla de actividades
const mockDataActivities = [
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


//Para la tabla de datos mensuales
const monthlyData = [
  { id: 1, category: "Atención Jurídica", subCategory: "Asesoramiento inicial", jan: 272, feb: 540, mar: 834, apr: 915, may: 1954, jun: 140, jul: 1147, aug: 2715, sep: 5925, oct: 1, nov: 3, dec: 10, total: 15442, percentage: "14.2%" },
  { id: 2, category: "Atención Jurídica", subCategory: "Asistencia Legal (Sede Central)", jan: 61, feb: 113, mar: 151, apr: 172, may: 180, jun: 267, jul: 95, aug: 177, sep: 148, oct: 1, nov: 3, dec: 10, total: 1353, percentage: "1.3%" },
  { id: 3, category: "Atención Jurídica", subCategory: "Patrocinio (Delegaciones)", jan: 47, feb: 38, mar: 38, apr: 70, may: 182, jun: 127, jul: 132, aug: 111, sep: 156, oct: 1, nov: 3, dec: 10, total: 881, percentage: "0.8%" },
  { id: 4, category: "Atención Jurídica", subCategory: "Representación en trámites judiciales (por designaciones)", jan: 3, feb: 118, mar: 12, apr: 18, may: 10, jun: 120, jul: 31, aug: 6, sep: 34, oct: 1, nov: 3, dec: 10, total: 335, percentage: "0.3%" },
  { id: 5, category: "Atención Jurídica", subCategory: "Informe de Tesis", jan: 16, feb: 8, mar: 8, apr: 12, may: 3, jun: 0, jul: 0, aug: 2, sep: 18, oct: 1, nov: 3, dec: 10, total: 50, percentage: "0.1%" },
  { id: 6, category: "Atención Preventiva", subCategory: "Atención psicológica", jan: 26, feb: 105, mar: 147, apr: 142, may: 1143, jun: 407, jul: 399, aug: 668, sep: 608, oct: 1, nov: 3, dec: 10, total: 3614, percentage: "3.3%" },
  { id: 7, category: "Atención Preventiva", subCategory: "Casa a casa", jan: 48, feb: 234, mar: 348, apr: 408, may: 1166, jun: 1212, jul: 1192, aug: 2021, sep: 1598, oct: 1, nov: 3, dec: 10, total: 8227, percentage: "7.6%" },
  { id: 8, category: "Atención Preventiva", subCategory: 'Puntos violeta "violencia de género"', jan: 428, feb: 1494, mar: 2058, apr: 2241, may: 9181, jun: 7292, jul: 5186, aug: 5788, sep: 8771, oct: 1, nov: 3, dec: 10, total: 42410, percentage: "39.0%" },
  { id: 9, category: "Atención Preventiva", subCategory: 'Conversatorios "violencia de género"', jan: 100, feb: 343, mar: 467, apr: 364, may: 3778, jun: 3045, jul: 3448, aug: 3188, sep: 9809, oct: 1, nov: 3, dec: 10, total: 25209, percentage: "23.2%" },
  { id: 10, category: "Atención Preventiva", subCategory: 'Toma de espacios "violencia de género"', jan: 475, feb: 213, mar: 305, apr: 227, may: 1249, jun: 968, jul: 1139, aug: 891, sep: 3330, oct: 1, nov: 3, dec: 10, total: 8584, percentage: "7.9%" },
  { id: 11, category: "Atención Preventiva", subCategory: "Atención Telefónica", jan: 5, feb: 410, mar: 315, apr: 541, may: 82, jun: 85, jul: 4, aug: 57, sep: 896, oct: 1, nov: 3, dec: 10, total: 1985, percentage: "1.8%" },
  { id: 12, category: "Capacitación", subCategory: "Defensoras comunales", jan: 0, feb: 0, mar: 0, apr: 0, may: 0, jun: 264, jul: 110, aug: 21, sep: 69, oct: 1, nov: 3, dec: 10, total: 464, percentage: "0.4%" },
]
