'use client'
import React from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import {useRouter,useParams} from 'next/navigation'

export default function ProductDetails() {
    const pathname = usePathname()
    const router = useRouter()
    const params = useParams()
  
    function onClick(){
      console.log("Hi, I am back")
      router.push('/')
      
    }
  return (
    <div>Product {pathname} Details Page
    <div>
      <button onClick={onClick}>Back Home</button>
    </div>
    </div>
  )
}
