import React from 'react';
import { Link } from 'react-router-dom';

const Hero = (props) => {
    return (
        <section className="mt-18 text-white bg-cover bg-no-repeat bg-center bg-gray-800"
            style={{ backgroundImage: `url(${props.image})` }}
            >
            <div className="max-w-screen-xl mx-auto px-4">
                <div className="flex flex-col justify-center py-4 md:min-h-[550px]">
                    <h2 className="hero-title">
                        <span className="text-primary">{props.titleSpan}</span><br />{props.title}<span className="text-primary">.</span>
                    </h2>
                    <p className="text-xl sm:text-2xl mt-8">{props.subtitle}</p>
                    <div className="mt-8 flex flex-col md:flex-row">
                        <Link to="#" className="btn-xl">
                            Рассчитать заказ
                        </Link>
                        <Link to="#" className="btn-xl btn-xl-secondary mt-6 md:mt-0 md:ml-8">
                            Договориться о консультации
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
