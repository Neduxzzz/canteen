"use client"
import type { INav } from "@/types/nav-t"
import { ClipboardDocumentListIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"

type IProps = { menu: INav[] }

const HOST = "http://localhost:3000"

export function Nav(props: IProps) {
  const [inVisible, setIsVisible] = useState(false)
  const { menu } = props
  const pathname = usePathname()
  const isActive = (slug: string) =>
    pathname === `/${slug}` || pathname.startsWith(`/${slug}/`)

  return (
    <nav className="bg-white">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href={HOST} className="flex items-center space-x-3">
          <ClipboardDocumentListIcon className="h-8 w-8 stroke-orange-500" />
          <div className="text-2xl text-orange-500 font-bold ">Valgykla</div>
        </Link>
        <button
          onClick={() => setIsVisible(!inVisible)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-800 rounded-lg md:hidden hover:bg-gray-200 focus:outline-none"
        ></button>
        <div
          className={`w-full md:block md:w-auto ${inVisible ? "" : "hidden"}`}
        >
          <ul className="font-medium flex flex-col p-4 mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
            {menu.map((item, index) => (
              <li key={item.slug || index}>
                <Link
                  href={`/${item.slug}`}
                  className={`block py-2 px-3 rounded hover:bg-orange-100 hover:text-orange-700 transition
                    ${
                      isActive(item.slug)
                        ? "bg-orange-500 text-white font-bold"
                        : "text-gray-800"
                    }`}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
