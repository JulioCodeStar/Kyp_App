import { Navbar } from '../Sidebar/navbar'

export default function header({children}) {
  return (
    <div>
      <Navbar/>
      <div className="container pt-8 pb-8 px-4 sm:px-8 bg-[#FBFBFB]">{children}</div>
    </div>
  )
}
