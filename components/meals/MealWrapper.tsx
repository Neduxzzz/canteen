"use client"

import { useState } from "react"
import { IMealType } from "../../models/mealType-model"
import { MealForm } from "./MealForm"
import { MealList } from "./MealList"
import { getApi } from "@/utils/server-api"

type Props = {
  initialMealTypes: IMealType[]
}

export function MealWrapper({ initialMealTypes }: Props) {
  const [mealTypes, setMealTypes] = useState<IMealType[]>(initialMealTypes)
  const [editMealType, setEditMealType] = useState<IMealType | undefined>()

  const refreshMealTypes = async () => {
    const updated = await getApi<IMealType[]>("/api/meals")
    setMealTypes(updated)
  }

  return (
    <div className="grid gap-y-8">
      <MealForm
        mealTypes={mealTypes}
        getMealsFromApi={refreshMealTypes}
        setEditMealType={setEditMealType}
        editMealType={editMealType}
      />
      <MealList
        mealTypes={mealTypes}
        setEditMealType={setEditMealType}
        refreshMealTypes={refreshMealTypes}
      />
    </div>
  )
}
