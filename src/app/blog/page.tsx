import Link from 'next/link'
import React from 'react'

export default function Blog() {
  return (
    <div>Blog Page
        <Link href={"/blog/first"}> First Blog </Link>
    </div>
  )
}
