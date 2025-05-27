"use client"
import { IWarehouseType } from "../../models/warehouseType-model"
import { IWarehouse } from "../../models/warehouse-model"
import { WarehouseForm } from "./form"
import { WarehouseList } from "./list"
import { useEffect, useState } from "react"
import { getApi } from "@/utils/server-api"

type IProps = { warehouseTypes: IWarehouseType[] }

export function Wrapper(props: IProps) {
  const { warehouseTypes } = props
  const [editWarehouse, setEditWarehouse] = useState<IWarehouse | undefined>()
  const [warehouses, setWarehouses] = useState<IWarehouse[]>([])

  const getWarehousesFromApi = () => {
    getApi<IWarehouse[]>(`/api/warehouses`).then((res: IWarehouse[]) => {
      setWarehouses(res)
    })
  }

  useEffect(() => {
    getWarehousesFromApi()
  }, [])

  return (
    <div className="grid gap-y-8">
      <WarehouseForm
        warehouseTypes={warehouseTypes}
        getWarehouseFromApi={getWarehousesFromApi}
        setEditWarehouse={setEditWarehouse}
        editWarehouse={editWarehouse}
      />
      <WarehouseList
        warehouseTypes={warehouseTypes}
        warehouses={warehouses}
        setEditWarehouse={setEditWarehouse}
        refreshWarehouses={getWarehousesFromApi}
      />
    </div>
  )
}
