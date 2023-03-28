import React from 'react'
import { HeroeCarousel } from './HeroeCarousel'
import { SectionFeaturedVehicles } from './SectionFeaturedVehicles'
import { SectionProin } from './SectionProin'

export const Main = () => {
  return (
    <>
        <HeroeCarousel/>

        <SectionFeaturedVehicles/>

        <SectionProin />

      <section>
        <div>
          <img src='assets/img-Proin-593px.png' alt='imgCardProin'/>
          <h3>Proin in lorem tortorn</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto aperiam perspiciatis aliquam mollitia nemo ratione deserunt, itaque commodi, eum ex nobis cumque rem ullam illum sunt dolores iste sit inventore.</p>
        </div>

        <div>
          <img src='assets/img-Proin-594px.png' alt='imgCardProin'/>
          <h3>Proin in lorem tortor</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto aperiam perspiciatis aliquam mollitia nemo ratione deserunt, itaque commodi, eum ex nobis cumque rem ullam illum sunt dolores iste sit inventore.</p>
        </div>

        <div>
          <img src='assets/img-Proin-593px.png' alt='imgCardProin'/>
          <h3>Proin in lorem tortor</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto aperiam perspiciatis aliquam mollitia nemo ratione deserunt, itaque commodi, eum ex nobis cumque rem ullam illum sunt dolores iste sit inventore.</p>
        </div>
      </section>

      <section>
        <div>
          <img src='assets/img-aboutUs-818px.png' alt='imgAboutUs'/>
        </div>
        <div>
          <h2>ABOUT US</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium aut consectetur sequi corrupti labore commodi? Incidunt quae iste, reiciendis possimus eaque at ex ratione aut, tempore libero veniam, vel facere!</p>
        </div>
      </section>

    </>
  )
}
