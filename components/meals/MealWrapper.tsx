"use client"

import { useState, useEffect } from "react"
import { IMealType } from "../../models/mealType-model"
import { MealForm } from "./MealForm"
import { MealList } from "./MealList"

export function MealWrapper() {
  const [mealTypes, setMealTypes] = useState<IMealType[]>([])
  const [editMealType, setEditMealType] = useState<IMealType | undefined>()

  const refreshMealTypes = () => {
    fetch("/api/meals")
      .then((res) => res.json())
      .then((data) => setMealTypes(data))
      .catch((err) => {
        console.error("Klaida gaunant duomenis:", err)
      })
  }

  useEffect(() => {
    refreshMealTypes()
  }, [])

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
