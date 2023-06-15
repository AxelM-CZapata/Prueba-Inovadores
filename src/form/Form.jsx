
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
function Form() {

    const navigate = useNavigate();
  const [data, setData] = useState({
    email: '',
    password: ''
  });

function handleChange (event){
  setData({
    ...data,
    [event.target.name]: event.target.value
  })
}
const handleSubmit = async(event)=>{
  console.log(data);
  event.preventDefault();
  await axios.post('http://localhost:3000/user',data)
  navigate('/nav')
}
  return (
    <>
      <form>
        <div>
          <label>Correo electrónico:</label>
          <input onChange={handleChange} value={data.email}  name="email" required/>
        </div>

        <div>
          <label>Contraseña:</label>
          <input onChange={handleChange} value= {data.password} type="password" name="password" required/>
        </div>

        <div>
          <button  onClick={handleSubmit} type="submit">Iniciar sesión</button>
        </div>
      </form>
    </>
  )
}

export default Form
