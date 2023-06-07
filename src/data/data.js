// import images
import LogoImg from '../assets/logo.png'
import HeroImg from '../assets/HERO.png'
import CardIconImg1 from '../assets/icons/design.png'
import CardIconImg2 from '../assets/icons/calender.png'
import CardIconImg3 from '../assets/icons/gallery.png'
import CardIconImg4 from '../assets/icons/navigation.png'
import CardIconImg5 from '../assets/icons/music.png'
import CardIconImg6 from '../assets/icons/moment.png'
import CardIconImg7 from '../assets/icons/amplop.png'
import CardIconImg8 from '../assets/icons/love.png'

// export components
export const header = {
  logo: LogoImg,
  btnText: 'Pesan Sekarang',
}
export const dataNavLink = [
  { id: 1, name: 'Home', path: '/#home' },
  { id: 2, name: 'Katalog', path: '/#katalog' },
  { id: 3, name: 'Paket', path: '/#harga' },
  { id: 4, name: 'Fitur', path: '/#fitur' },
  { id: 5, name: 'Testimoni', path: '/#testimoni' },
  { id: 6, name: 'Faq', path: '/#faq' },
]

export const dataNavLinkOrder = [
  { id: 1, name: 'Katalog', path: '/#katalog' },
  { id: 2, name: 'Paket', path: '/#paket' },
  { id: 3, name: 'Fitur', path: '/#fitur' },
  { id: 4, name: 'Testimoni', path: '/#testimoni' },
  { id: 5, name: 'Faq', path: '/#faq' },
]

export const hero = {
  title: 'JASA PEMBUATAN UNDANGAN DIGITAL',

  subtitle:
    'This template is brought to you by TemplateMo website. Feel free to use this for a commercial purpose. You are not allowed to redistribute the template ZIP file on any other template website. Thank you.',
  btnText: 'Pesan Sekarang',
  image: HeroImg,
}

export const features = {
  feature1: {
    pretitle: 'make it easy',
    title: 'Apa Itu ',
    subtitle:
      'We hope this DigiMedia template is useful for your work. You can use this template for any purpose. You may contribute a little amount via PayPal to support TemplateMo in creating new templates regularly.',
  },
}

export const product = {
  title: 'Fitur Unggulan',
  subtitle: 'Fitur Undangan Online',
  cards: [
    {
      icon: CardIconImg1,
      title: 'Design Modern dan Responsive',
      subtitle: 'Elit esse cillum dolore eu fugiat nulla pariatur',
      delay: 200,
    },
    {
      icon: CardIconImg2,
      title: 'Menambahkan ke kalender',
      subtitle: 'Elit esse cillum dolore eu fugiat nulla pariatur',
      delay: 400,
    },
    {
      icon: CardIconImg3,
      title: 'Gallery Foto',
      subtitle: 'Elit esse cillum dolore eu fugiat nulla pariatur',
      delay: 600,
    },
    {
      icon: CardIconImg4,
      title: 'Navigasi Lokasi',
      subtitle: 'Elit esse cillum dolore eu fugiat nulla pariatur',
      delay: 600,
    },
    {
      icon: CardIconImg5,
      title: 'Background Musik',
      subtitle: 'Elit esse cillum dolore eu fugiat nulla pariatur',
      delay: 600,
    },
    {
      icon: CardIconImg6,
      title: 'Berbagi moment indah dan Ucapan',
      subtitle: 'Elit esse cillum dolore eu fugiat nulla pariatur',
      delay: 600,
    },
    {
      icon: CardIconImg7,
      title: 'Amplop Digital',
      subtitle: 'Elit esse cillum dolore eu fugiat nulla pariatur',
      delay: 600,
    },
    {
      icon: CardIconImg8,
      title: 'Love Story dan Quotes',
      subtitle: 'Elit esse cillum dolore eu fugiat nulla pariatur',
      delay: 600,
    },
  ],
}

export const testimonials = {
  title: 'Testimoni',
  subtitle: 'Elit esse cillum dolore eu fugiat nulla pariatur',
  clients: [
    {
      imageUrl:
        'https://undangan-html.netlify.app/assets/images/wedding_banner22.png',
      imageAlt: 'testing',
      from: 'Desi & Aldi',
      title: 'Jumat, 20 Oktober 2021',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, tempora!',
      reviewCount: 34,
      rating: 4,
    },
    {
      imageUrl:
        'https://undangan-html.netlify.app/assets/images/wedding_banner22.png',
      imageAlt: 'testing',
      from: 'Desi & Aldi',
      title: 'Jumat, 20 Oktober 2021',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, tempora!',
      reviewCount: 34,
      rating: 4,
    },
    {
      imageUrl:
        'https://undangan-html.netlify.app/assets/images/wedding_banner22.png',
      imageAlt: 'testing',
      from: 'Desi & Aldi',
      title: 'Jumat, 20 Oktober 2021',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, tempora!',
      reviewCount: 34,
      rating: 4,
    },
    {
      imageUrl:
        'https://undangan-html.netlify.app/assets/images/wedding_banner22.png',
      imageAlt: 'testing',
      from: 'Desi & Aldi',
      title: 'Jumat, 20 Oktober 2021',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, tempora!',
      reviewCount: 34,
      rating: 4,
    },
    {
      imageUrl:
        'https://undangan-html.netlify.app/assets/images/wedding_banner22.png',
      imageAlt: 'testing',
      from: 'Desi & Aldi',
      title: 'Jumat, 20 Oktober 2021',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, tempora!',
      reviewCount: 34,
      rating: 4,
    },
  ],
}

export const dataPaket = {
  title: 'Pilih Paket',
  subtitle: 'We hope this DigiMedia template is useful for your work',
  cards: [
    {
      id: 1,
      title: 'Standard',
      price: '200K',
      description: [
        { titleDesc: 'Desain Basic' },
        {
          titleDesc: 'Masa Aktif 6 Bulan',
        },
        {
          titleDesc: 'Quotes',
        },
        {
          titleDesc: 'Informasi Pengantin',
        },
        {
          titleDesc: 'Detail Acara',
        },
        {
          titleDesc: 'RSVP',
          titleDesc2: 'Konfirmasi Kehadiran Via WhatsApp',
        },
        {
          titleDesc: 'Unlimited Tamu Undangan',
        },
        {
          titleDesc: 'Galeri Foto',
          titleDesc2: 'Maksimal 5 foto',
        },
        {
          titleDesc: 'Waktu Dan lokasi',
        },
      ],
      btnText: 'Pesan Sekarang',
      borderColor: '#1D267D',
    },
    {
      id: 2,
      title: 'Premium',
      popular: 'Best Price',
      price: '400K',
      description: [
        { titleDesc: 'Semua Fitur Basic' },
        {
          titleDesc: 'Masa Aktif 1 Tahun',
        },
        {
          titleDesc: 'Love Stories',
        },
        {
          titleDesc: 'Peta Lokasi',
        },
        {
          titleDesc: 'Galeri Foto',
          titleDesc2: 'Maximal 10 foto',
        },
        {
          titleDesc: 'Embed Video',
          titleDesc2: 'Link dari YouTube',
        },
        {
          titleDesc: 'Musik',
        },
        {
          titleDesc: 'RSVP',
          titleDesc2: 'Via WhatsApp atau Google SpreadSheet',
        },
        {
          titleDesc: 'Ucapan',
        },
        {
          titleDesc: 'Amplop Digital',
          titleDesc2: 'Dana, Bank, Ovo, Gopay',
        },
      ],
      btnText: 'Pesan Sekarang',
      borderColor: '#5C469C',
    },
    {
      id: 3,
      title: 'Exclusive',
      price: '1Jt',
      description: [
        { titleDesc: 'Semua Fitur Premium' },
        {
          titleDesc: 'Masa Aktif Selamanya',
          titleDesc2: 'Selama Citra invitation ada',
        },
        {
          titleDesc: 'Desain Custom',
        },
        {
          titleDesc: 'Galeri Foto',
          titleDesc2: 'Maksimal 20 foto',
        },
        {
          titleDesc: 'Link Live Foto',
          titleDesc2: 'hanya berupa tombol untuk mengarahkan ke live streaming',
        },
        {
          titleDesc: 'Undangan Fisik',
          titleDesc2: 'Bebas request berapa banyak undangan',
        },
      ],
      btnText: 'Pesan Sekarang',
      borderColor: '#0C134F',
    },
  ],
}

export const faq = {}
