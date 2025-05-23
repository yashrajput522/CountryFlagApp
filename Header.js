import { useState } from "react"


const Header = () => {
   const [isDark, setIsDark] = useState(false)
  return (
   <h1 className="header-container">
    <div className="header-content">
        <h2 className="tittle">
            <a href="/">Where is the world? </a>
        
        </h2>
        <p className="theme-changer" onClick={()=>{document.body.classList.toggle("dark")
            setIsDark(!isDark)
         }
     }>

            <i className="fa-solid fa-moon" />
            &nbsp;&nbsp; Dark Mode
        </p>
    </div>

   </h1>
  )
}

export default Header
