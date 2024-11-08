"use client"

import Link from "next/link"
import { useParams } from "next/navigation"


export default function LinkComplete() {

    const params = useParams()
    return (
        <Link
            href={`/order`}
            className={`${Object.keys(params).length === 0 ? 'bg-amber-400' : ''} flex justify-center font-bold w-full border-t border-gray-200 py-6 last-of-type:border-b cursor-pointer`}
        >Todos los Productos</Link>
    )
}
