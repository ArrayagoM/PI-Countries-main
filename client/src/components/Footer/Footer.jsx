import React from 'react';
import { Link } from 'react-router-dom';
import s from './FooterStyle.module.css';
import { SiLinkedin, SiGithub } from 'react-icons/si';

export default function Footer(){
     return(
          <div className={`${s.footer} ${s.footerBg}`}>
               <div className={`${s.container} ${s.footerDiv}`}>
                    <div className={s.footerInfo}>
                         <p>Proyecto API <span>Countries</span></p>
                         <p><Link to='/about' className={s.name}>Juan Martin Arrayago</Link> - Henry</p>
                    </div>
                  <div className={s.links}>
                  <div className={s.footerLinkL}>                     
                         <a href="https://www.linkedin.com/in/juan-martin-arrayago/">
                              <SiLinkedin/>
                         </a>
                    </div> <div className={s.footerLinkG}>                     
                         <a href="https://github.com/ArrayagoM">
                              <SiGithub/>
                         </a>
                    </div>
                  </div>
               </div>
          </div>
     )
};