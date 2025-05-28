import { WarehouseType } from "../../models/warehouseType-model"
import { connMongoose } from "@/utils/connect-mongoose"

export class WarehouseTypeService {
  async create(data: { title: string }) {
    await connMongoose()
    const newWarehouseType = new WarehouseType({
      title: data.title,
    })
    return await newWarehouseType.save()
  }

  async getAll() {
    await connMongoose()
    return await WarehouseType.find()
  }

  async updateWarehouseType(id: string, data: { title: string }) {
    await connMongoose()
    return await WarehouseType.findByIdAndUpdate(id, data, { new: true })
  }

  async deleteWarehouseType(id: string) {
    await connMongoose()
    return await WarehouseType.findByIdAndDelete(id)
  }
}
