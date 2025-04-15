import Cart_checkout from "@/components/cart_checkout";
import Cart_form from "@/components/cart_form";
import Cart_navbar from "@/components/cart_navbar";
import Footer_login from "@/components/footer_login";

export default function Home() {
    return (
        <>
            <Cart_navbar />
            <Cart_form />
            <Cart_checkout />
            <Footer_login />        
        </>
    );
}
