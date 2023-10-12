import { useDispatch, useSelector } from "react-redux"
import ProductFavs from "../../components/ProductFavs/ProductFavs"
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import getFavoritesByIdUser from "../../redux/Actions/Favs/getFavoritesByIdUser";

const Favs= () => {
    const favorites = useSelector((state)=> state.favorites)
    const dispatch = useDispatch()
    const { key } = useParams();

    
    useEffect(()=>{
        dispatch(getFavoritesByIdUser(key))
    }, [dispatch])
    console.log("estado global", favorites);
    return (
    <div>
        <h1>hola</h1>
        <ProductFavs/>
    </div>
)
}

export default Favs