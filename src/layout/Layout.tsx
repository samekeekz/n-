import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'

const Layout = () => {
  return (
    <div className="flex w-full h-[100vh] flex-col gap-20 p-10">
      <Header />
      <Outlet />
    </div>
  )
}

export default Layout
