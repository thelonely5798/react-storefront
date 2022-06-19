import Navbar from '@/components/NavBar'
import { selectOpenModalCheckout } from '@/store/features/checkoutSlice'
import Head from 'next/head'
import React from "react"
import ShoppingCart from '../Cart'
import Footer from '../Footer/index'
import { useAppSelector } from '@/store/store'
export default function StoreLayout({ children }) {
  const isOpenCheckout = useAppSelector(selectOpenModalCheckout)
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {children}
      {isOpenCheckout && (
        <ShoppingCart />
      )}
      <Footer />
      <style>
        {
          `
            body {
              overflow-x: hidden;
            }
          `
        }
      </style>
    </div>
  )
}
