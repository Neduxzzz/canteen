import { IState } from "@/types/shared-t"

export async function createMealType(formData: FormData): Promise<IState> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"

  const res = await fetch(`${baseUrl}/api/meals`, {
    method: "POST",
    body: JSON.stringify({
      title: formData.get("title"),
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })

  const data = await res.json()

  if (!res.ok) {
    return {
      message: data.message || "Klaida",
      errors: data.errors,
      isSaved: false,
    }
  }

  return {
    message: data.message || "Išsaugota sėkmingai",
    errors: undefined,
    isSaved: true,
  }
}
