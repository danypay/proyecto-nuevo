"use client"
import { SearhSchema } from '@/src/schema'
import { useRouter } from 'next/navigation'
import React from 'react'
import { toast } from 'react-toastify'

export default function ProductSearch() {

    const router = useRouter()

    function handleSearchForm(formData : FormData) {
        const data = {
            search: formData.get('search')
        }
        const result = SearhSchema.safeParse(data)
        if(!result.success){
            result.error.issues.forEach( issue => (
                toast.error(issue.message)
            ))
            return
        }
        router.push(`/admin/products/search?search=${result.data.search}`)
    }

    return (
        <form
            className='flex items-center'
            action={handleSearchForm}
        >
            <input
                type="text"
                placeholder='Buscar Producto'
                className='p-2 placeholder-gray-400 w-full'
                name='search'
            />
            <input
                type="submit"
                value={'Buscar'}
                className='bg-indigo-600 p-2 uppercase text-white cursor-pointer'
            />

        </form>
    )
}
