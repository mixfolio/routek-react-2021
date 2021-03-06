import React, { useState } from 'react'
import Hero from '../components/Hero';
import { heroLegal } from '../data/heroData';
import { legalData } from '../data/legalData'


const Legal = () => {
   
    const [clicked, setClicked] = useState(false);
    function toggle(index) {
        if (clicked === index) {
            // если пункт уже открыт
            return setClicked(null)
        }
        setClicked(index)
    }

    return (
        <>
            <Hero image={heroLegal.image} titleSpan={heroLegal.titleSpan} title={heroLegal.title} subtitle={heroLegal.subtitle} />

            <section className="py-10 md:py-16">
                <div className="max-w-screen-xl mx-auto px-4">
                    <h2 className="h2-title">Правовая информация</h2>
                    <ul className="mt-6">
                        {legalData.map((item, index) =>
                            <li key={index} className='border-b'>
                                <div onClick={() => toggle(index)} className='flex justify-between items-center py-4 cursor-pointer'>
                                    <h3 className="text-xl md:text-2xl text-primary  ">
                                        {item.title}
                                    </h3>
                                    <span>
                                        {clicked === index ?
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            :
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        }
                                    </span>
                                </div>
                                {clicked === index ? <div className="mb-4 space-y-2"> {item.text}</div>: null}
                            </li>
                        )}
                    </ul>
                </div>
            </section>
        
        </>
    )
}

export default Legal
