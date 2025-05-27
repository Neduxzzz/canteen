import { model, models, Schema } from "mongoose"

export interface IWarehouseType {
  id: string
  title: string
}

const WarehouseTypeSchema = new Schema<IWarehouseType>(
  {
    title: String,
  },
  {
    timestamps: false,
    collection: "warehouses_types",
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

export const WarehouseType =
  models.WarehouseType || model("WarehouseType", WarehouseTypeSchema)
