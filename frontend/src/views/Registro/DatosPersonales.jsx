import { useState } from "react";

const DatosPersonales = () => {
    const [state, setState] = useState({
        email :'',
        username : '',
        password : '',
      })
  return (
    <div className="flex flex-col mb-2">
        <div className="mt-4 flex flex-col bg-gray-100 rounded-lg p-4 shadow-sm">
            <div className="mt-4">
              <label className="text-black" >Email</label>
              <input placeholder="" className="w-full bg-slate-400 rounded-md border-gray-300 text-black px-2 py-1" type="text" id='email'/>
            </div>

            <div className="mt-4">
              <label className="text-black" >Nombre de usuario</label>
              <input placeholder="" className="w-full bg-slate-400 rounded-md border-gray-300 text-black px-2 py-1" type="text" id='username'/>
            </div>

            <div className="mt-4">
              <label className="text-black" >Contraseña</label>
              <input placeholder="" className="w-full bg-slate-400 rounded-md border-gray-300 text-black px-2 py-1" type="password" id='password'/>
            </div>

            <div className="mt-4">
              <label className="text-black" >Confirmar contraseña</label>
              <input placeholder="" className="w-full bg-slate-400 rounded-md border-gray-300 text-black px-2 py-1" type="password" id='password'/>
            </div>

        </div>
    </div>
  )
}

export default DatosPersonales