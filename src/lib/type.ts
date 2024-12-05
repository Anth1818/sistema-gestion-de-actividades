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
  
  