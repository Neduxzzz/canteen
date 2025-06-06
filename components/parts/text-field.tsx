type IProps = {
  label: string
  name: string
  isRequired: boolean
  type?: string
  defaultValue?: string
  errors?: string | string[]
}

export function TextField(props: IProps) {
  const { label, name, defaultValue, errors, isRequired, type } = props

  const errorMessages = typeof errors === "string" ? [errors] : errors ?? []

  return (
    <>
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {label}
      </label>
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
        type={type || "text"}
        required={isRequired}
        id={name}
        name={name}
        defaultValue={defaultValue}
      />
      {errorMessages.length > 0 && (
        <div className="mt-1 col-span-2 p-1 bg-red-100 italic text-sm">
          {errorMessages.join(" | ")}
        </div>
      )}
    </>
  )
}
