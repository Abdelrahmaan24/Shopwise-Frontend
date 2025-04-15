import SingleProductBody from "./singleProductBody";


export default async function PostDetails(postId) {
    const response = await fetch(`https://fakestoreapi.com/products/${postId}`);
    const post = await response.json();
    return post;
}