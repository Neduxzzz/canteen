"use client"

import { deleteApi } from "@/utils/server-api"
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline"
import { IMealType } from "../../models/mealType-model"

type IProps = {
  mealTypes?: IMealType[]
  setEditMealType: (mealType: IMealType) => void
  refreshMealTypes: () => void
}

export function MealList({
  mealTypes = [],
  setEditMealType,
  refreshMealTypes,
}: IProps) {
  const removeMealType = async (id?: string) => {
    if (!id) return
    try {
      await deleteApi(`/api/meals/${id}`, {})
      refreshMealTypes()
    } catch (error) {
      alert("Klaida trinant gaminį: " + (error as Error).message)
    }
  }

  return (
    <table className="w-full text-sm text-left text-gray-500">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          <th className="px-6 py-3">Gaminio pavadinimas</th>
          <th className="px-6 py-3">Veiksmai</th>
        </tr>
      </thead>
      <tbody className="bg-white border-b">
        {mealTypes.map((meal) => (
          <tr key={meal.id}>
            <td className="px-6 py-4">{meal.title}</td>
            <td className="px-6 py-4 flex gap-3">
              <button
                title="Redaguoti"
                onClick={() => setEditMealType(meal)}
                className="text-blue-600"
              >
                <PencilIcon className="w-5 h-5" />
              </button>
              <button
                title="Šalinti"
                onClick={() => removeMealType(meal.id)}
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
