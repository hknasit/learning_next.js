'use client'
import React from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

export default function ProductDetails() {
    const pathname = usePathname()
  return (
    <div>Product {pathname} Details Page</div>
  )
}
