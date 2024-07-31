
import {Text, Flex , Checkbox} from '@radix-ui/themes';


const CrearCuenta = () => {


    return (
    <div className="flex flex-col mb-2">
        <div className="mt-4 flex flex-col bg-gray-100 rounded-lg p-4 shadow-sm">
            <div className="mt-4 flex flex-row space-x-2">
                <div className="flex-1">
                  <label className="text-black">Nombres</label>
                  <input placeholder=" " className="w-[88%] bg-slate-400 rounded-md border-gray-300 text-black px-2 py-1" id="nombre" type="text"/>
                </div>

                <div className="flex-1">
                  <label className="text-black" >Apellidos</label>
                  <input placeholder=" " className="w-[89%] bg-slate-400 rounded-md border-gray-300 text-black px-2 py-1" id="apellido" type="text"/>
                </div>
            </div>

            <div className="mt-4">
              <label className="text-black" >Correo</label>
              <input placeholder="" className="w-full bg-slate-400 rounded-md border-gray-300 text-black px-2 py-1" id="correo" type="text"/>
            </div>

            <div className="mt-4 flex flex-row space-x-2">
                <div className="flex-1">
                 <label className="text-black">Teléfono</label>
                 <input placeholder=" " className="w-[88%] bg-slate-400 rounded-md border-gray-300 text-black px-2 py-1" id="telefono" type="text"/>
                </div>

                <div className="flex-1">
                 <label className="text-black" >Fecha de Nacimiento</label>
                 <input placeholder=" " className="w-[89%] bg-slate-400 rounded-md border-gray-300 text-black px-2 py-1" id="fechaNacimiento" type="date"/>
                </div>
            </div>

            <div className='mt-4'>
                <Text as="label" size="2" className='text-black'>
                    <Flex gap="2">
                        <Checkbox defaultChecked />
                           Acepto los Términos del servicio y la Política y ley de datos personales
                    </Flex>
                </Text>
            </div>

        </div>
    </div>
  )
}

export default CrearCuenta