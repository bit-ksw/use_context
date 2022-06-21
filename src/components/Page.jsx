import Header from './Header'
import Footer from './Footer'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const Page = () => {

  return (
    <div className="page">
      <Header></Header>
      <Footer></Footer>
    </div>
  )
}

export default Page
