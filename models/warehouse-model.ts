import { model, models, Schema } from "mongoose"
import { ReactNode } from "react"

export interface IWarehouse {
  name: ReactNode
  id?: string
  typeId: string
  company: string
  isCreated?: boolean
}

const WarehouseSchema = new Schema<IWarehouse>(
  {
    typeId: String,
    company: String,
    isCreated: Boolean,
  },
  {
    timestamps: false,
    collection: "warehouses",
    strict: true,
    toJSON: {
      versionKey: false,
      virtuals: true,
      transform: (_, ret) => {
        ret.id = ret._id
        delete ret._id
      },
    },
  }
)

export const Warehouse = models.Warehouse || model("Warehouse", WarehouseSchema)
