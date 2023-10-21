export const searchProduct =(searchQuery)=>{
    return fetch(`https://dummyjson.com/products/search?q=${searchQuery}`).then(res => res.json())
}
export const getProducts =(searchQuery)=>{
    return fetch(`https://dummyjson.com/products`).then(res => res.json())
}
export const addToCart = ({itemCode, quanity}) =>{
    
}