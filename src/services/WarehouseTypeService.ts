import { WarehouseType } from "../../models/warehouseType-model"
import { connMongoose } from "@/utils/connect-mongoose"

export class WarehouseTypeService {
  async getAll() {
    await connMongoose()
    const warehouseTypes = await WarehouseType.find()
    return warehouseTypes
  }
}
