"use client"

import { IState } from "../../src/types/shared-t"
import { IMealType } from "../../models/mealType-model"
import { SubmitButton } from "../parts/submit-button"
import { createMealType } from "../../actions/meals"
import { useActionState, useEffect, useRef } from "react"
import { TextField } from "../parts/text-field"

type IProps = {
  mealTypes: IMealType[]
  getMealsFromApi: () => void
  setEditMealType: (wt?: IMealType) => void
  editMealType?: IMealType
}

const initialState: IState = {
  message: "",
  errors: undefined,
  isSaved: false,
}

export function MealForm({
  getMealsFromApi,
  editMealType,
  setEditMealType,
}: IProps) {
  const ref = useRef<HTMLFormElement>(null)

  const [state, formAction] = useActionState<IState, FormData>(
    async (_prevState, formData) => await createMealType(formData),
    initialState
  )

  useEffect(() => {
    if (state.isSaved) {
      getMealsFromApi()
      ref.current?.reset()
      setEditMealType(undefined)
    }
  }, [state.isSaved])

  const handleAction = async (data: FormData) => {
    await formAction(data)
  }

  return (
    <form ref={ref} action={handleAction} className="grid gap-y-5 max-w-md">
      <TextField
        label="Valgio pavadinimas"
        name="title"
        isRequired={true}
        defaultValue={editMealType?.title}
        errors={state?.errors?.title}
      />

      {editMealType?.id && (
        <input type="hidden" name="id" value={editMealType.id} />
      )}

      <div
        className={`my-2 text-sm italic p-1 ${
          state?.errors ? "bg-red-100" : state?.message ? "bg-green-100" : ""
        }`}
      >
        {state?.message}
      </div>

      <div className="mt-1 w-14">
        <SubmitButton />
      </div>
    </form>
  )
}
