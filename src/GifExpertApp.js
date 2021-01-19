import React from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

export const GifExpertApp = () => {

    const categoryArreglo = ['One punch']
    const [category, setCategory] = React.useState(categoryArreglo)

    return (
        <>
            <div className="container-fluid img-fluid background_header">
                <div className="container py-5">
                    <h1 className="display-5 text-white">Gif Giphy</h1>
                    <AddCategory 
                        AgregandoNuevaCategoria = { setCategory }/>
                </div>
            </div>

            <div className="container py-3">
                <ul className="list-group">
                    {
                        category.map( (category) => (
                            <GifGrid  
                                key= { category }
                                categoryGifGrid ={ category }/>
                        ))
                    }
                </ul>                
            </div>            
        </>
    )
}

