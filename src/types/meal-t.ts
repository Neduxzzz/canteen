export interface IMealType {
  id: string
  title: string
}

export interface IMeal {
  id?: number
  typeId: number
  company: string
  IsCreated?: boolean
}
