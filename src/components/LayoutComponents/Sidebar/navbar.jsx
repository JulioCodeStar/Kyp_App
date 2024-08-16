/* eslint-disable react/prop-types */
import { SheetMenu } from '../Sidebar/sheet-menu';
import { ModeToggle } from '../Sidebar/mode-toggle';
import { UserNav } from '../Sidebar/user-nav';
import { NavMenu2 } from '../Sidebar/nav-menu2';

export function Navbar() {
  return (
    <header className="sticky top-0 z-10 w-full">
      <div className="mx-4 sm:mx-8 flex h-[60px] items-center">
        <div className="flex items-center space-x-4 lg:space-x-0">
          <SheetMenu />
          <div className='hidden lg:block'>
            <NavMenu2 />
          </div>
        </div>
        <div className="flex flex-1 items-center space-x-2 justify-end">
          <ModeToggle />
          <UserNav />
        </div>
      </div>
    </header>
  )
}
