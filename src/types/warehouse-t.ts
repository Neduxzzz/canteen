export interface IWarehouseType {
  id: string
  title: string
}
export interface IWarehouse {
  id?: number
  typeId: number
  company: string
  IsCreated?: boolean
}
