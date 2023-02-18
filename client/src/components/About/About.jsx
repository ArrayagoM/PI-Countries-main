import React from "react";
import s from './About.module.css';

const About = () => {
return(
    <div className={s.contenedor}>
        <h1 className={s.title}>Hola Soy Martin Arrayago!!!</h1>
        <h3 className={s.subtitle}>Developer Web Full stack</h3>
      <div className={s.content_p}>  
        <p>¡Hola! Permíteme presentarme a todos como un apasionado del desarrollo en TI. Mi nombre es juan Martin Arrayago y soy un desarrollador entusiasta que siempre busca aprender y mejorar en mi campo. Mi pasión por la programación comenzó hace varios años cuando descubrí lo poderosa que puede ser la tecnología para cambiar el mundo. Desde entonces, no dejó de explorar y experimentar con nuevas herramientas y tecnologías.</p><br/>
        <p>En particular, me enfocó en el desarrollo web, y recientemente estuve trabajando en un emocionante proyecto: una aplicación de Countries. Esta aplicación ha sido creada utilizando un stack tecnológico completo que incluye React, Redux, Hooks, CSS puro, Node.js, Express, Sequelize y Postgres.</p><br/>
        <p>Me apasiona crear aplicaciones web que sean atractivas visualmente y al mismo tiempo muy funcionales. Con React y Redux creó una experiencia de usuario fluida e intuitiva, mientras que las tecnologías Node.js y Express me han permitido crear un backend seguro y eficiente. Para manejar la base de datos, utilizó Sequelize, una herramienta que me ha permitido interactuar con Postgres de una manera sencilla y efectiva.</p><br/>
        <p>Como desarrollador, me enorgullece decir que mi aplicación de Countries no solo es funcional y atractiva, sino también escalable y fácil de mantener. Además, siempre busco mejorar mis habilidades y estar a la vanguardia de las últimas tecnologías. Estoy interesado en aprender más sobre inteligencia artificial y cómo puedo aplicar esta tecnología a mis futuros proyectos.</p><br/>
        <p>Pero lo que realmente me motiva en mi carrera en IT es mi pasión por el progreso y el aprendizaje constante. Soy una persona carismática, divertida y simpática, pero sobre todo técnica. Me encanta trabajar en equipo y estar rodeado de personas apasionadas y motivadas, ya que creo que la mejor manera de aprender y crecer es a través de la colaboración.</p><br/>
        <p>En resumen, estoy comprometido con mi carrera en el desarrollo web y la tecnología en general. Estoy emocionado de explorar nuevas oportunidades y aprender cosas nuevas cada día. Creo que mi pasión, mi dedicación y mi entusiasmo por aprender y mejorar me hacen un excelente candidato para cualquier equipo de desarrollo en TI. ¡Gracias por leer!</p><br/>
        </div>
    </div>
)
}


export default About;
