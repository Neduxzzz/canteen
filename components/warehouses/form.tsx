"use client"

import { IState } from "../../src/types/shared-t"
import { IWarehouseType } from "../../models/warehouseType-model"
import { IWarehouse } from "../../models/warehouse-model"
import { SubmitButton } from "../parts/submit-button"
import { createWarehouses } from "../../actions/warehouses"
import { useActionState, useEffect, useMemo, useRef, useState } from "react"
import { Select } from "../parts/select"
import { toSelArr } from "@/utils/form/select-helper"
import { TextField } from "../parts/text-field"

type IProps = {
  warehouseTypes: IWarehouseType[]
  getWarehouseFromApi: () => void
  setEditWarehouse: (cert?: IWarehouse) => void
  editWarehouse?: IWarehouse
}

const initialState: IState = {
  message: "",
  errors: undefined,
  isSaved: false,
}

export function WarehouseForm(props: IProps) {
  const {
    warehouseTypes,
    getWarehouseFromApi,
    editWarehouse,
    setEditWarehouse,
  } = props
  const ref = useRef<HTMLFormElement>(null)
  const [state, formAction] = useActionState<IState, FormData>(
    createWarehouses,
    initialState
  )

  const selProps = useMemo(
    () => ({
      label: "Produkto Pavadinimas",
      name: "typeId",
      isRequired: true,
      defaultValue: editWarehouse?.typeId,
      error: state?.errors?.typeId && state?.errors?.typeId.join(" | "),
    }),
    [editWarehouse, state]
  )

  useEffect(() => {
    if (state.isSaved) {
      getWarehouseFromApi()
    }
  }, [state])
  const handleAction = (data: FormData) => {
    formAction(data)
    ref.current?.reset()
    if (data.has("id")) {
      setEditWarehouse(undefined)
    }
  }

  return (
    <form ref={ref} action={handleAction} className="grid gap-y-5 max-w-md">
      <div className="grid grid-cols-2">
        <Select
          options={toSelArr(warehouseTypes, "title")}
          selProps={selProps}
        />
      </div>
      <div className="grid grid-cols-2">
        <TextField
          label="Kiekis"
          name="company"
          isRequired={true}
          defaultValue={editWarehouse?.company}
          errors={state?.errors?.company}
        />
      </div>
      {editWarehouse?.id && (
        <input type="hidden" name="id" value={editWarehouse.id} />
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
