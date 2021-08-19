import Link from 'next/link'
import { useConfigStore } from 'src/store'

const Tab = ({
  title,
  link,
  active,
}: {
  title: string
  link: string
  active: boolean
}) => {
  return (
    <Link href={link} scroll={false} passHref>
      <div
        className={`col-span-1 p-2 xl:p-4 text-center transition duration-500 border-2 border-black rounded-lg cursor-pointer
         ${
           active
             ? `border-black text-black hover:shadow-xl`
             : 'border-gray-300 text-gray-300'
         } hover:border-black hover:text-black`}
      >
        <a className="font-bold text-md lg:text-lg xl:text-xl">{title}</a>
      </div>
    </Link>
  )
}

const CategoriesTab = () => {
  const categories = useConfigStore((state) => state.categories)

  return (
    <div className="grid grid-cols-2 gap-2 md:grid-cols-3 xl-grid-cols-3 2xl:grid-cols-6 lg:gap-4">
      {categories.map((category, index) => {
        const link = `/${category.name.toLowerCase()}`
        return (
          <Tab
            key={index}
            title={category.name}
            link={link}
            active={category.active}
          />
        )
      })}
    </div>
  )
}

export default CategoriesTab
