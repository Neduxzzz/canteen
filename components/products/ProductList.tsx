"use client"

import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline"
import { IWarehouseType } from "../../models/warehouseType-model"

type IProps = {
  warehouseTypes: IWarehouseType[]
  setEditWarehouseType: (warehouseType: IWarehouseType) => void
  refreshWarehouseTypes: () => void
}

export function ProductList({
  warehouseTypes,
  setEditWarehouseType,
  refreshWarehouseTypes,
}: IProps) {
  const removeWarehouseType = async (id?: string) => {
    if (!id) return
    try {
      const res = await fetch(`/api/products/${id}`, {
        method: "DELETE",
      })
      if (!res.ok) throw new Error("Ištrynimas nepavyko")
      refreshWarehouseTypes()
    } catch (error) {
      alert("Klaida trinant produktą: " + (error as Error).message)
    }
  }

  return (
    <table className="w-full text-sm text-left text-gray-500">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          <th className="px-6 py-3">Produkto pavadinimas</th>
          <th className="px-6 py-3">Veiksmai</th>
        </tr>
      </thead>
      <tbody className="bg-white border-b">
        {warehouseTypes.map((wt) => (
          <tr key={wt.id}>
            <td className="px-6 py-4">{wt.title}</td>
            <td className="px-6 py-4 flex gap-3">
              <button
                title="Redaguoti"
                onClick={() => setEditWarehouseType(wt)}
                className="text-blue-600"
              >
                <PencilIcon className="w-5 h-5" />
              </button>
              <button
                title="Šalinti"
                onClick={() => removeWarehouseType(wt.id)}
                className="text-red-600"
              >
                <TrashIcon className="w-5 h-5" />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
