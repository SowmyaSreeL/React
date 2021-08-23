import { Link } from "react-router-dom"

const Products = () => {
    return (
        <section>
            <h1>Welcome to products!!!</h1>
            <ul>
                <li><Link to='/products/p1'>book</Link></li>
                <li><Link to='/products/p2'>pen</Link></li>
                <li><Link to='/products/p3'>bag</Link></li>
                <li><Link to='/products/p4'>pencil</Link></li>
            </ul>
        </section>
    )
}

export default Products;