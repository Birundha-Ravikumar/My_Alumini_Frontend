import React from 'react'
import Banner from '../../banner/Banner'
import GalleryArea from '../../Home/GalleryArea'
import HeaderPage from '../../pages/main/layout/header/HeaderPage'
import FooterPage from '../../pages/main/layout/footer/FooterPage'

const SingleAlbum = () => {
  return (
    <>
    <HeaderPage/>
    <Banner title='Gallery'/>
    <GalleryArea/>
    <FooterPage/>
    </>
  )
}

export default SingleAlbum