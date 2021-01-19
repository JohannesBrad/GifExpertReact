import React from 'react'

const GifGridItem = ( { id, title, url } ) => {
   console.log(id, title, url);
    return (
        <>                                     
            <div className="col-3"  key={id}>
                <div className="card mb-2 animate__animated animate__fadeIn">   
                <img src={ url } className="card-img-top" alt={ title } />                                      
                    <div className="card-body" >
                        <h5 className="card-title" >{ title }</h5>
                    </div>
                </div>
            </div>
        </>
    )
}
export default GifGridItem

