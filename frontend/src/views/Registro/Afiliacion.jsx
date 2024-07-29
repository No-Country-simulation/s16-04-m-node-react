

const Afiliacion = () => {
  return (
    <div className="flex flex-col mb-2">
        <div className="mt-4 flex flex-col bg-gray-100 rounded-lg p-4 shadow-sm">
            <div className="mt-4 flex flex-row space-x-2">
                <div className="flex-1">
                    <label className="text-black" >Nombre de la obra social</label>
                    <select className="w-full bg-slate-400 rounded-md border-gray-300 text-black px-2 py-1" id="nameOS">
                        <option value="">Seleccione...</option>

                        <optgroup label="AR">
                            <option value="AF">AF</option>
                            <option value="DZ">DZ</option>
                            <option value="AO">AO</option>
                        </optgroup>

                    </select>
                </div>

                <div className="flex-1">
                  <label className="text-black">N° de Afiliado</label>
                  <input placeholder=" " className="w-full bg-slate-400 rounded-md border-gray-300 text-black px-2 py-1" id="numAfiliado" type="text"/>
                </div>

            </div>

            <div className="mt-4">
              <label className="text-black" >Plan de cobertura</label>
              <input placeholder="" className="w-full bg-slate-400 rounded-md border-gray-300 text-black px-2 py-1" type="plan"/>
            </div>

            <div className="mt-4 flex flex-row space-x-2">
                <div className="flex-1">
                  <label className="text-black">Fecha de afiliación</label>
                  <input placeholder=" " className="w-full bg-slate-400 rounded-md border-gray-300 text-black px-2 py-1" id="fechaAfiliado" type="date"/>
                </div>

                <div className="flex-1">
                    <label className="text-black" >Tipo de Afiliacion</label>
                    <select className="w-full bg-slate-400 rounded-md border-gray-300 text-black px-2 py-1" id="tipoAfiliacion">
                        <option value="">Seleccione...</option>

                        <optgroup label="AR">
                            <option value="AF">AF</option>
                            <option value="DZ">DZ</option>
                            <option value="AO">AO</option>
                        </optgroup>

                    </select>
                </div>

            </div>

            <div className="mt-4">
              <label className="text-black" >Correo</label>
              <input placeholder="" className="w-full bg-slate-400 rounded-md border-gray-300 text-black px-2 py-1" type="email"/>
            </div>   
        </div>
    </div>
  )
}

export default Afiliacion