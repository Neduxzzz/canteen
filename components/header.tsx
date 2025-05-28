import { Nav } from "../components/nav"
type INav = { title: string; slug: string }

const menu: INav[] = [
  { title: "Sandelys", slug: "warehouses" },
  { title: "Produktai", slug: "products" },
  { title: "Patiekalai", slug: "meals" },
]

export function Header() {
  return (
    <header className="bg-white border-b-4 border-red-500 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Nav menu={menu} />
      </div>
    </header>
  )
}
