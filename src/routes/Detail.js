import { useEffect } from "react";
import {useParams} from "react-router-dom";

function Detail() {
    // 원래 object였던 id를 바로 쓸 수 있음.
    const {id} = useParams();
    const getDetail = async() => {
        const json = await(await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        console.log(json);
    }
    useEffect(()=>{
        getDetail();
    });
    return (
        <h1>Detail</h1>
    )
}   

export default Detail;