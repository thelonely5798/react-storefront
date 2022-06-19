import Banner from '@/components/Banner/index'
import Footer from '@/components/Footer/index'
import Navbar  from '@/components/NavBar/index'
import { Productgrid } from '@/components/pages/Home/ProductGrid'
import StoreLayout from '@/components/StoreLayout/index'
import Head from 'next/head'

export default function Home() {
  return (
    <StoreLayout>
        <Banner/>
        <Productgrid />
    </StoreLayout>
    )
}
