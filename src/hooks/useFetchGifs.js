import React from 'react'
import { getGif } from '../helpers/getGifs'

export const useFetchGifs = ( categoryGifGrid ) =>{
    const [state, setstate] = React.useState({
      data:[],
      loading: true
    })

    React.useEffect ( () => {
        getGif( categoryGifGrid )
            .then( imgs => {
                setTimeout(() => {
                    setstate({
                        data: imgs,
                        loading: false
                });
                }, 1000);

            })
    }, [categoryGifGrid]) 
    return state
}