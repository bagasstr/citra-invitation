import React, { useState } from 'react'
// import data
import { dataPaket } from '../data/data'
// import icons
import { HiCheck, HiShoppingCart } from 'react-icons/hi'

const PriceList = () => {
  const { title, subtitle, cards } = dataPaket
  return (
    <section className='section' id='harga'>
      <div className='w-full'>
        <div className='containers'>
          <div className='text-center'>
            <h1 className='text-xl font-bold mb-2 text-accent'>HARGA PAKET</h1>
            <h2 className='mb-2 text-center title  Sdesktop:mb-7'>{title}</h2>
            <h3 className='mb-10 text-center lead'>{subtitle}</h3>
          </div>
          <div className='grid mobile:grid-cols-1 tablet:grid-cols-1 Sdesktop:grid-cols-3 justify-items-center'>
            {cards.map((result, cardIndex) => {
              const {
                title,
                price,
                btnText,
                borderColor,
                description,
                popular,
                id,
              } = result
              return (
                <div
                  key={id}
                  className='bg-accent/20 p-[.5rem] rounded-xl w-[250px] relative'
                >
                  <div className='absolute bg-accent px-2 rounded-full text-white font-semibold top-[-10px] left-[-5px]'>
                    {popular}
                  </div>
                  <div className='text-center'>
                    <h1 className='font-semibold text-lg text-accent'>
                      {title}
                    </h1>
                    <h2 className='font-bold text-3xl'>{price}</h2>
                  </div>
                  <div className=''>
                    {description.map((desc, index) => {
                      const { titleDesc2, titleDesc } = desc
                      return (
                        <div className=''>
                          <div className=''>
                            <div className='flex items-center'>
                              <div className='mr-2'>
                                <HiCheck className='text-accent font-semibold' />
                              </div>
                              <h1 className=' font-medium'>{titleDesc}</h1>
                            </div>
                            <p className='text-black/70 font-normal'>
                              {titleDesc2}
                            </p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PriceList
