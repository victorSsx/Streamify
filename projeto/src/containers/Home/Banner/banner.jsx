import { useState, useEffect } from 'react'
const vite_img = import.meta.env.VITE_API_IMG
const apiKey = import.meta.env.VITE_API_KEY

import './banner.css'

const Banner = () => {

    const [banner, setBanner] = ([])

    const getImgBanner = async (url) => {
        const res = await feach (url)
        const data = await res.json()

        setBanner(data.results)
    }
    useEffect(() => {
        const imgBanner = `${vite_img}img_banner?${apiKey}`

        getImgBanner(imgBanner)
    }, [])

    return(
        <>
        <div className='banner_p'>
        </div>
        </>
    )
}

export default Banner