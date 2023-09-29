import Carousel from "../components/Carousel/Carousel"
import Products from "../components/Products/Products"
import home from "./home.css"

const Home = () => {
    return (
        <div className="containerHome">
            <div>
                <Carousel />
            </div>

            <div className="containerHomeFeatured">

            </div>
        </div>
    )
}

export default Home