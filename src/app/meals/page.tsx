import { getApi } from "@/utils/server-api"
import { MealWrapper } from "../../../components/meals/MealWrapper"
import { IMealType } from "../../../models/mealType-model"
export default async function MealsPage() {
  const initialMealTypes: IMealType[] = await getApi("/api/meals")
  return <MealWrapper initialMealTypes={initialMealTypes} />
}
