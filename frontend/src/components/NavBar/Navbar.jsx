import React, { useContext, useState } from 'react'
import'./NavBar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const Navbar = ({setShowLogin}) => {
    const [menu,setMenu] = useState("Home")
    const {getTotalCartAmount} = useContext(StoreContext);
  return (
    <div className='navbar'>
       
    <Link to=''><img src={assets.final} alt="Sainik Hardware Logo" className="logo"  /> </Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={()=>setMenu('Home')} className={menu==='Home'?'active':''}>Home</Link>
        <a href='#explore-product' onClick={ ()=>setMenu('Products')} className={menu==='Products'?'active':''}>Products</a>
       
        <a href='#footer' onClick={ ()=>setMenu('Contact-Us')} className={menu==='Contact-Us'?'active':''}>Contact-Us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.searchi} alt=""  height={45} width={45}/>
        <div className="navbar-search-icon">
        <Link to='/cart'><img src={assets.carti}  alt="" height={40} width={40} /> </Link>
        <div className={getTotalCartAmount()===0?"":"dot"}></div>
      </div>
      <button onClick={()=>setShowLogin(true)}>Sign in</button>
      </div>
      </div>

   
  )
}

export default Navbar
