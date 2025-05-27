import { Warehouse, IWarehouse } from "../../models/warehouse-model"
import { connMongoose } from "@/utils/connect-mongoose"
import { Types } from "mongoose"

export class WarehouseService {
  async getWarehouses(): Promise<IWarehouse[]> {
    await connMongoose()
    const warehouses = await Warehouse.find().sort({ company: 1 })
    return warehouses
  }

  async saveWarehouse(warehouse: IWarehouse): Promise<void> {
    await connMongoose()
    await Warehouse.create(warehouse)
  }

  async updateWarehouse(warehouse: IWarehouse): Promise<void> {
    await connMongoose()
    const id = warehouse.id ?? ""
    delete warehouse.id
    await Warehouse.updateOne({ _id: new Types.ObjectId(id) }, warehouse)
  }

  async deleteWarehouse(id: string): Promise<void> {
    await connMongoose()
    await Warehouse.deleteOne({ _id: new Types.ObjectId(id) })
  }
}
