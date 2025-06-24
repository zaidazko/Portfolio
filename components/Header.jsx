import GooeyNav from '../src/blocks/Components/GooeyNav/GooeyNav'
import Lanyard from '../src/blocks/Components/Lanyard/Lanyard'


const Header = () => {





    const menus = [
        {name: "Introduction", tag: "#hero"},
        {name: "Skills", tag: "#skills"},
        {name: "Projects/Experience", tag: '#projects'},
        {name: "Contacts", tag: "#contact"}
    ]

  return (
    <>
      <div className="flex left-0 z-99 backdrop-blur-xl w-full fixed justify-center items-center gap-15 p-5 font-medium text-lg h-15 text-white">
        {menus.map((menu, index) => (
          <a className="cursor-pointer hover:text-white/60 transition-all" key={index} href={menu.tag}>{menu.name}</a>
        ))}
      </div>
    </>
  )
}

export default Header
