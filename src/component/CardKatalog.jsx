import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Card, Heading, Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const CardKatalog = () => {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    axios
      .get('https://webadmin.citrainvitation.com/api/desain')
      .then((result) => {
        setData(result.data.products)
      })
  }, [])
  return (
    <section>
      <div className='container grid gap-5 py-4 mx-auto Sdesktop:gap-8 Sdesktop:grid-cols-3 tablet:grid-cols-2 '>
        {data.map((index, i) => {
          return (
            <Card align='left' key={i}>
              <Heading
                size='sm'
                className='absolute px-2 py-1 text-white border rounded-md bg-accent '
              >
                Premium
              </Heading>
              <Link to={index.link}>
                <Image
                  objectFit='cover'
                  src={index.image}
                  alt=''
                  className='rounded-md gambar-katalog '
                />
              </Link>
            </Card>
          )
        })}
      </div>
    </section>
  )
}

export default CardKatalog
