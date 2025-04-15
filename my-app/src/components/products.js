import React from 'react'
import Product from './product'

const Products = async () => {
    const result = await fetch('https://fakestoreapi.com/products?limit=8')
    const todo = await result.json()   
    return (
        <div class ="bg-[#FFFFFF]">
            <div class ="pb-[44px] ">
                <div class ="products_label flex items-center justify-center text-[30px] font-bold text-[#292B2C]">Exclusive Products</div>
            </div>
            <div class='flex items-center justify-center pb-[100px]'>
                <div class ="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-y-7 gap-x-6">
                    {todo.map((product) => (
                        <Product product={product} 
                            // key={product.id}
                            // id={product.id}
                            // title={product.title}
                            // price={product.price}
                            // description={product.description}
                            // category={product.category}
                            // image={product.image}
                            // rate = {product.rating.rate}
                            // count = {product.rating.count}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Products
