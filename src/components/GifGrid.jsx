import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem'

const GifGrid = ( { categoryGifGrid }) => {

    const { loading, data:images } = useFetchGifs( categoryGifGrid );
    return (
        <div>
            <p> { categoryGifGrid } </p>
            { loading && 'Cargando...' }    
            <div className="row" >                
                    {
                        images.map( ( img ) => (
                        <GifGridItem 
                            key={ img.id }
                            {...img}
                            />                
                        ))
                    }
            </div>
        </div>
    )
}
export default GifGrid



