export function formatCurrency(amount: number){
    return new Intl.NumberFormat('en-US',{
        style: 'currency',
        currency: 'USD'
    }).format(amount)
}

export function getImagePath(image: string){
    const cloudinaryBaseUrl = 'https://res.cloudinary.com'
    if(image.startsWith(cloudinaryBaseUrl)) {
        return image
    }else{
        return `/products/${image}.jpg`
    }
}