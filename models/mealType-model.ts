import { model, models, Schema } from "mongoose"

export interface IMealType {
  id: string
  title: string
}

const MealTypeSchema = new Schema<IMealType>(
  {
    title: String,
  },
  {
    timestamps: false,
    collection: "meals_types",
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

export const MealType = models.MealType || model("MealType", MealTypeSchema)
