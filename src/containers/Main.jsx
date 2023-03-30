import React from 'react'
import { HeroeCarousel } from '../components/HeroeCarousel'
import { SectionAboutUs } from '../components/SectionAboutUs'
import { SectionFeaturedVehicles } from '../components/SectionFeaturedVehicles'
import { SectionCarsFeatures } from '../components/SectionCarsFeatures'


export const Main = () => {
  return (
    <>
        <HeroeCarousel/>

        <SectionFeaturedVehicles/>

        <SectionCarsFeatures />

        <SectionAboutUs/>
    </>
  )
}
