import { create } from 'zustand'
import { OrderItem } from './types'
import { Product } from '@prisma/client'

type Store = {
    order: OrderItem[]
    addToOrder: (product: Product) => void,
    increaseQuantity: (id: Product['id']) => void
    decreaseQuantity: (id: Product['id']) => void
    deleteToOrder: (id: Product['id']) => void
    emptyOrder: () => void
}

export const useStore = create<Store>((set,get) => ({
    order: [],
    addToOrder: (product) => {

        const {...data} = product
        let items : OrderItem[] = []
        if(get().order.find( item => item.id === data.id)){
            items = get().order.map( item => item.id === data.id ? {
                ...item,
                quantity: item.quantity + 1,
                subtotal: item.price * (item.quantity + 1)
            }: item)
        }else{
            items = [...get().order,{
                ...data,
                quantity: 1,
                subtotal: 1 * product.price
            }]
        }

        set({
            order: items
        })
    },

    increaseQuantity: (id) =>{
        const newOrder = get().order.map( item => item.id === id ? {
            ...item,
            quantity: item.quantity + 1,
            subtotal: item.price * (item.quantity + 1)
        }: item)
        set({
            order: newOrder
        })
    },
    decreaseQuantity: (id) => {
        const newOrder = get().order.map( item => item.id === id ? {
            ...item,
            quantity: item.quantity - 1,
            subtotal: item.price * (item.quantity - 1)
        }: item)
        set({
            order: newOrder
        })
    },
    deleteToOrder: (id) => {
        const newOrder = get().order.filter( item => item.id !== id)
        set({
            order: newOrder
        })
    },
    emptyOrder: () => {
        set({
            order: []
        })
    }
}))