import React, { useState } from 'react'
// import data
import { dataPaket } from '../data/data'
// import icons
import { HiCheck, HiShoppingCart } from 'react-icons/hi'

const PriceList = () => {
  // index state
  const [index, setIndex] = useState(false)
  // destructure pricing
  const { title, subtitle, cards } = dataPaket
  return (
    <section id='harga' className='section'>
      <div className='container mx-auto'>
        <h1 className='flex items-center justify-center mb-2 text-xl font-bold uppercase text-accent'>
          Harga Paket
        </h1>
        {/* title */}
        <h2
          className='mb-2 text-center title lg:mb-7 '
          data-aos='fade-up'
          data-aos-delay='200'
        >
          {title}
        </h2>
        <p className='mb-10 text-center lead'>{subtitle}</p>
        {/* cards */}
        <div className='gap-x-4 flex flex-col Sdesktop:flex-row lg:gap-x-5 gap-y-[30px] lg:gap-y-0 justify-center items-center'>
          {cards.map((card, cardIndex) => {
            // data card
            const { title, price, btnText, borderColor, description } = card
            // card
            return (
              <div
                data-aos='fade-up'
                data-aos-delay=''
                data-aos-offset='300'
                key={cardIndex}
              >
                <div
                  className='mx-auto rounded-md cursor-pointer max-w-[350px] pricing-table '
                  style={{ backgroundColor: borderColor }}
                >
                  {/* card title */}
                  <div className='text-lg font-semibold text-center text-white'>
                    {title}
                  </div>
                  {/* card price */}
                  <div className='mb-5 text-5xl font-semibold text-center text-white '>
                    {price}
                  </div>
                  {/* card services */}
                  <div className='flex flex-col mb-6 gap-y-2'>
                    {description.map((desc, index) => {
                      // data desc
                      const { titleDesc, titleDesc2 } = desc
                      return (
                        <div
                          className='flex items-center space-x-2 '
                          key={index}
                        >
                          <div className='mr-2'>
                            <HiCheck className='text-2xl text-green-600 ' />
                          </div>
                          <div>
                            <h1 className='font-bold text-white'>
                              {titleDesc}
                            </h1>
                            <h1 className='text-white/70'>{titleDesc2}</h1>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                  {/* btn */}
                  <div className=''>
                    <button
                      onClick={() => setIndex(cardIndex)}
                      className=' text-white btn2 btn-lg space-x-[14px] bg-accent hover:bg-accent/70  transition-all'
                    >
                      <span>{btnText}</span>
                      <HiShoppingCart />
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default PriceList
