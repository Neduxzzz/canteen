"use client"

import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline"
import { IWarehouseType } from "../../models/warehouseType-model"
import { IWarehouse } from "../../models/warehouse-model"
import { deleteApi } from "@/utils/server-api"

type IProps = {
  warehouseTypes: IWarehouseType[]
  warehouses: IWarehouse[]
  setEditWarehouse: (warehouse: IWarehouse) => void
  refreshWarehouses: () => void
}

export function WarehouseList(props: IProps) {
  const { warehouseTypes, warehouses, setEditWarehouse, refreshWarehouses } =
    props

  const findType = (id?: string) =>
    warehouseTypes.find((i) => i.id === id)?.title

  const changeWarehouse = (id?: string) => {
    if (!id) return
    const warehouse = warehouses.find((i) => i.id === id)
    if (!warehouse) return
    setEditWarehouse(warehouse)
  }

  const removeWarehouse = async (id?: string) => {
    if (!id) return
    await deleteApi(`/api/warehouses/${id}`, {})
    refreshWarehouses()
  }

  return (
    <table className="w-full text-sm text-left text-gray-500">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          <th scope="col" className="px-6 py-3">
            Tipas
          </th>
          <th scope="col" className="px-6 py-3">
            Pavadinimas
          </th>
          <th scope="col" className="px-6 py-3">
            Veiksmai
          </th>
        </tr>
      </thead>
      <tbody className="bg-white border-b">
        {warehouses.map((w) => (
          <tr key={w.id}>
            <td className="px-6 py-4">{findType(w.typeId)}</td>
            <td className="px-6 py-4">{w.name}</td>
            <td className="px-6 py-4 flex gap-3">
              <button
                title="Keisti duomenis"
                onClick={() => changeWarehouse(w.id)}
              >
                <PencilIcon className="w-5 h-5 stroke-blue-600" />
              </button>
              <button
                title="Šalinti produkta"
                onClick={() => removeWarehouse(w.id)}
              >
                <TrashIcon className="w-5 h-5 stroke-red-600" />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
