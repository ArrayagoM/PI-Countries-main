import React from "react"
import { NavLink } from "react-router-dom";
import s from './NavBar.module.css';

export default function Nav(){
     return(
          <div className={`${s.navBar} ${s.navBarBg}`}>
               <div className={`${s.container} ${s.navBarDiv}`}>
                    <div>
                         <NavLink to="/" className={s.link}>Logout</NavLink>
                    </div>
                    <div className={`${s.links}`}>
                        <div className={s.page}> <NavLink to="/countries" style={({isActive}) => isActive ? {color: '#3CA6A6', fontWeight: '700'} : {color: 'white', fontWeight: '400'}} className={s.linkp}>Paises</NavLink></div>
                         <div className={s.activity}><NavLink to="/addActivity" style={({isActive}) => isActive ? {color: '#3CA6A6', fontWeight: '700'} : {color: 'white', fontWeight: '400'}} className={s.linka}>Agregar Actividad</NavLink></div>
                    </div>
               </div>
          </div>
     )
}