import React,{useEffect} from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'
const Chefs = () => {
  useEffect(()=>{AOS.init()},[])
  return(
    <div className='chefs-img'>
      <img class="uno" src="Imagenes/chef1.png"alt="Chef's" data-aos="fade-right" data-aos-duration="750"/>
      <img class="dos" src="Imagenes/chef2.png"alt="Chef's" data-aos="fade-up" data-aos-duration="750"/>
      <img class="tres" src="Imagenes/chef3.png" alt="Chef's"data-aos="fade-left" data-aos-duration="750"/>
    </div>
  )
}

export { Chefs }