import React from 'react'
import PropTypes from 'prop-types';

const AddCategory = ({ AgregandoNuevaCategoria }) => {

    const [inputValue, setInputvalue] = React.useState('');
    const handleInputChange = (e) => {
         setInputvalue(e.target.value)
     }

     const handleSubmit = (e) => {
        e.preventDefault()
         console.log(inputValue);
         if(inputValue.trim().length > 2){
            AgregandoNuevaCategoria( cats => [inputValue, ...cats])
            setInputvalue('')
         }else{
             console.log('esta vacio');
         }       
     }

    return (
        <>
            <div className="mt-5 mb-2">
                <form action="" onSubmit={ handleSubmit }>
                    <div className="row">
                        <div className="col-10">
                            <input 
                                type="text" 
                                value = { inputValue }
                                onChange={ handleInputChange } 
                                className="form-control" id="exampleFormControlInput1" 
                                placeholder="Busca tu gif favorito"/>
                        </div>
                        <div className="col-2 d-grid gap-2">
                            <button type="submit" className="btn btn-primary btn-block" value="buscar">Buscar</button>
                        </div>
                    </div>
               </form>
            </div>
         
        </>
    )
}
export default AddCategory

AddCategory.propTypes = {
    AgregandoNuevaCategoria: PropTypes.func.isRequired
}


