"use client"

import { useState, useEffect } from "react"
import { IWarehouseType } from "../../models/warehouseType-model"
import { ProductForm } from "./ProductForm"
import { ProductList } from "./ProductList"
import { getApi } from "@/utils/server-api"

export function ProductWrapper() {
  const [warehouseTypes, setWarehouseTypes] = useState<IWarehouseType[]>([])
  const [editWarehouseType, setEditWarehouseType] = useState<
    IWarehouseType | undefined
  >()

  const refreshWarehouseTypes = async () => {
    try {
      const data = await getApi<IWarehouseType[]>(
        "/api/classifacators/products"
      )
      setWarehouseTypes(data)
    } catch (err) {
      console.error("Klaida gaunant duomenis:", err)
    }
  }

  useEffect(() => {
    refreshWarehouseTypes()
  }, [])

  return (
    <div className="grid gap-y-8">
      <ProductForm
        warehouseTypes={warehouseTypes}
        getWarehouseFromApi={refreshWarehouseTypes}
        setEditWarehouseType={setEditWarehouseType}
        editWarehouseType={editWarehouseType}
      />
      <ProductList
        warehouseTypes={warehouseTypes}
        setEditWarehouseType={setEditWarehouseType}
        refreshWarehouseTypes={refreshWarehouseTypes}
      />
    </div>
  )
}
