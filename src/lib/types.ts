export interface AgeRangeData {
  range: string
  women: number
  men: number
}

export interface DisabilityData {
  type: string
  ageRanges: AgeRangeData[]
}

export interface EthnicityData {
  type: string
  ageRanges: AgeRangeData[]
}

export interface AttentionTypeData {
  type: string
  ageRanges: AgeRangeData[]
  disabilities: DisabilityData[]
  ethnicities: EthnicityData[]
}

export interface FormData {
  attentionTypes: AttentionTypeData[]
}

export interface TableProps {
  viewUser?: boolean;
  achievements?: boolean;
  mobileUnits?: boolean;
  columnas: { campo: string; label: string }[];
}


export type Activity = {
  id: number;
  name: string;
  label: string;
};

export interface Worker {
  id: number;
  identity_card: number;
  is_foreign: boolean;
  full_name: string;
  gender_id: number;
  department_id: number;
  position_id: number;
  payroll_type_id: number;
  area_coordination_id: number;
  status: string;
  created: string;
  updated: string | null;
  gender: string;
  department: string;
  position: string;
  payroll_type: string;
  area: string;
  state_id: number | null;
  state: string | null;
  municipality_id: number | null;
  municipality: string | null;
  parish_id: number | null;
  parish: string | null;
  address: string | null;
}

export type Agenda = {
  id: number;
  username: string;
  type_activity: string;
  date: string;
  dateFormatted: string;
  status: "Por completar" | "Completada" | "No completada";
  type_action: string;
  management_unit: string;
  state: string;
  municipality: string;
  parish: string;
  responsible: string;
  place: string;
  obs: string;
  n_womans: number;
  n_man: number;
  observation: string;
  dateFinished: string;
};

export type OrdenColumna = {
  columna: keyof Agenda | "id";
  direccion: "asc" | "desc";
} | null;


export interface MobileUnit {
  id: number;
  user: string;
  status: string;
  dateFormatted: string;
  cantMobileUnitsRequired: number;
  cantUltrasoundRequired: number;
  logisticalSupport: string;
  state: string;
  municipality: string;
  parish: string;
  place: string;
  responsible: string;
  obs: string;
  date: string;
  poblationServed: string;
  obs2: string;
  dateFinished: string;
  attentionTypes: AttentionTypeData[];
  dateUpdated: string;
}