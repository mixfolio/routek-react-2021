import React from 'react'
import Hero from '../components/Hero';

import bg from  '../assets/images/hero-bg/legal-hero-bg.jpg'

const Legal = () => {
    const heroTitleSpan = 'Правовая '
    const heroTitle = 'информация'
    const heroSubtitle = 'В этом разделе вы найдете все юридические и нормативные документы, <br/> регламентирующие работу нашей платформы'

    return (
        <>
            <Hero bg={bg}  heroTitleSpan={heroTitleSpan} heroTitle={heroTitle} heroSubtitle={heroSubtitle}/>
        </>
    )
}

export default Legal
