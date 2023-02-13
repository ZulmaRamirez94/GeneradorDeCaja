import React, { useState }  from 'react';

const InputsData = (props) => {
    const {colors, setColors} = props;
    const [add, setAdd] = useState("");

const handleAdd = (e) => {
    console.log("Cargando....");
    setAdd(e.target.value);
}

const handleSubmit = (e) => {
    e.preventDefault();
    setColors([...colors, add]);
    setAdd("");
}

return(
    <form onSubmit={handleSubmit}>
        <div>
            <label>Color: </label>
            <input type="text" value = {add} name = "add" onChange = {handleAdd}/>
            <button type="submit">Add</button>
        </div>
    </form>
)
}
export default InputsData