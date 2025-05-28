import { MealType } from "../../models/mealType-model"
import { connMongoose } from "@/utils/connect-mongoose"

export class MealTypeService {
  async create(data: { title: string }) {
    await connMongoose()
    const newMealType = new MealType({ title: data.title })
    return await newMealType.save()
  }

  async getAll() {
    await connMongoose()
    return await MealType.find()
  }

  async updateMealType(id: string, data: { title: string }) {
    await connMongoose()
    return await MealType.findByIdAndUpdate(id, data, { new: true })
  }

  async deleteMealType(id: string) {
    await connMongoose()
    return await MealType.findByIdAndDelete(id)
  }
}
