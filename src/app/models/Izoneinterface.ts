export interface IZone {
  zona: string
  checked: boolean
  numberzone: number
  indificatortype: number
  cams: Cams[]
}

export interface Cams {
  subzone: string
  camera: string
  connection: boolean
  checked: boolean
  icon: string
  iconconn: string
  iconclick: string
}
