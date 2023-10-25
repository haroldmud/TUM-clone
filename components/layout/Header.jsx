import Link from "next/link"
import Icon1 from "../../public/assets/icons/Icon1"
import Icon2 from "../../public/assets/icons/Icon2"
import Icon3 from "../../public/assets/icons/Icon3"
import Menu from "../../public/assets/icons/Menu"

let links = [
  [
    "./News", "NEWS AND EVENTS",
  ],
  
  [
    "./Studies", "STUDIES",
  ],
  [  
    "./Lifelong", "LIFELONG LEARNING",
 ],
  [
    "./Research", "RESEARCH"
  ],
  [
    "./Innovation", "INNOVATION"
  ],
  [
    "./Community", "COMMUNITY"
  ],
  [
    "./About", "ABOUT TUM"
  ],
]

export default function Header(){
  return(
    <>
      <header className="header bg-blue1 text-white py-4 xl:w-auto">
        <div className="flex justify-center">
          <div className="flex justify-between w-96p items-center">
            <div className="flex items-center">
              <Icon1/>
              <Link className="ml-4" href="/">
                <Icon2/>
              </Link>
              
              <div className="hidden xl:flex w-4r ml-3 leading-0.9r text-0.8r">
                <p>Technical University of Munich</p>
              </div>
            </div>
            <ul className="hidden xl:flex text-0.875r font-bold gap-8 pl-96">
            { 
              links.map(
                          (item, index) => <li key={index}>
                            <Link href={item[0]} className='text-green6a6 hover:underline'>
                              {item[1]}
                            </Link> 
                            </li>
                          )
            }
            </ul>
            <div className="flex md:justify-end xl:w-auto w-45p">
              <div className="flex items-center">
                <p className="font-bold opacity-25">DE</p> <div className="text-2r mb-2 mx-2">|</div> <p className="font-bold">EN</p>        
              </div>
              <div className="flex ml-6 items-center">
              <Icon3/>
              </div>
              <div className="xl:hidden flex items-center ml-6">
                <Menu/>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
