import React from 'react'
import Catalog from '@/components/catalogcomponent/Catalog'
import Navbarcomponent from '@/components/navbar/Navbar'

export async function generateMetadata({ params }) {
  return {
    title: "1001anime - Catalog",
    openGraph: {
      title: "1001anime - Catalog",
    },
    twitter: {
      card: "summary",
      title: "1001anime - Catalog",
    },
  }
}

function page({ searchParams }) {
  return (
    <div>
      <Navbarcomponent />
      <div className='max-w-[94%] xl:max-w-[88%] mx-auto mt-[70px]'>
        <Catalog searchParams={searchParams} />
      </div>
    </div>
  )
}

export default page
