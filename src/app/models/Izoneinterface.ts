export interface IZone {
    zona: string
    checked: boolean
    subzone: Subzone[]
  }
  
  export interface Subzone {
    subzone: string
    camera: string
    connection: boolean
    icon: string
  }
  