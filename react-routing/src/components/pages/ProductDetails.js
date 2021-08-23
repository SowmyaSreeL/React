import { useParams } from "react-router-dom";

const ProductDetails = () => {

    const { productId } = useParams();
    return(
        <section>
            <h1>Product details</h1>
            <p>{productId}</p>
        </section>
    )
}

export default ProductDetails;