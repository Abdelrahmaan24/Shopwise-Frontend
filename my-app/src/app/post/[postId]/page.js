import SingleProductBody from '@/components/singleProductBody'
import PostDetails from '@/components/singleProductFetech'
import React from 'react'

const SingleProduct =async (props) => {
    const postId = props.params.postId
    const product = await PostDetails(postId)
    return (
        <>
            <SingleProductBody product={product} />
        </>
    )
}

export default SingleProduct
