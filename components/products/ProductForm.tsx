"use client"

import { IState } from "../../src/types/shared-t"
import { IWarehouseType } from "../../models/warehouseType-model"
import { SubmitButton } from "../parts/submit-button"
import { createWarehouseType } from "../../actions/warehousesTypes"
import { useActionState, useEffect, useRef } from "react"
import { TextField } from "../parts/text-field"

type IProps = {
  warehouseTypes: IWarehouseType[]
  getWarehouseFromApi: () => void
  setEditWarehouseType: (wt?: IWarehouseType) => void
  editWarehouseType?: IWarehouseType
}

const initialState: IState = {
  message: "",
  errors: undefined,
  isSaved: false,
}

export function ProductForm({
  getWarehouseFromApi,
  editWarehouseType,
  setEditWarehouseType,
}: IProps) {
  const ref = useRef<HTMLFormElement>(null)
  const [state, formAction] = useActionState<IState, FormData>(
    createWarehouseType,
    initialState
  )

  useEffect(() => {
    if (state.isSaved) {
      getWarehouseFromApi()
      ref.current?.reset()
      setEditWarehouseType(undefined)
    }
  }, [state.isSaved])

  const handleAction = async (data: FormData) => {
    await formAction(data)
  }

  return (
    <form ref={ref} action={handleAction} className="grid gap-y-5 max-w-md">
      <TextField
        label="Produkto pavadinimas"
        name="title"
        isRequired={true}
        defaultValue={editWarehouseType?.title}
        errors={state?.errors?.title}
      />

      {editWarehouseType?.id && (
        <input type="hidden" name="id" value={editWarehouseType.id} />
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
