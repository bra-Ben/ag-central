


const Input = ({type, For, label, placeholder, classname,value}) => {

    return (

        <div className="form-group">
             <label >
                 {label}
             </label>

             <input 
                for={For}
                type= {type} 
                placeholder= {placeholder}
                className= {classname}
                value= {value}
             ></input>
             
                             
        </div>

    )

}

export default Input;
