"use client"

import { useState, useEffect } from "react"
import { IWarehouseType } from "../../models/warehouseType-model"
import { ProductForm } from "./ProductForm"
import { ProductList } from "./ProductList"

export function ProductWrapper() {
  const [warehouseTypes, setWarehouseTypes] = useState<IWarehouseType[]>([])
  const [editWarehouseType, setEditWarehouseType] = useState<
    IWarehouseType | undefined
  >()

  const refreshWarehouseTypes = () => {
    fetch("/api/classifacators/products")
      .then((res) => res.json())
      .then((data) => setWarehouseTypes(data))
      .catch((err) => {
        console.error("Klaida gaunant duomenis:", err)
      })
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
