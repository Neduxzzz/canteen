import { Wrapper } from "@/components/warehouses/wrapper"
import { IWarehouseType } from "@/models/warehouseType-model"
import { getApi } from "@/utils/server-api"

export default async function WarehousePage() {
  const warehouseTypes = await getApi<IWarehouseType[]>(
    "/api/classificators/certificates"
  )

  return <Wrapper certTypes={warehouseTypes} />
}
