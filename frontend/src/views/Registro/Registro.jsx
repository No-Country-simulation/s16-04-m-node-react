import { useState } from 'react';
import {
  Flex,Text,Checkbox} from "@radix-ui/themes";
import { useNavigate } from 'react-router-dom';
import { Toaster,toast } from "sonner";


function Registro() {
  const navigate = useNavigate();
  const formArray = [1, 2, 3];
  const [formNo, setFormNo] = useState(formArray[0])
  const [state, setState] = useState({
    name: '',
    lastname: '',
    email: '',
    telephone: '',
    birthdate: '',
    username:'',
    password:'',
    passwordconf:'',
    nameOS: '',
    numberA: '',
    planC: '',
    dateA: '',
    typeA:'',
  
  })
  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }
  const next = () => {
    if (formNo === 1 && state.name && state.lastname && state.email && state.telephone && state.birthdate) {
      setFormNo(formNo + 1)
    }
    else if (formNo === 2 && state.email && state.username && state.password && state.passwordconf) {
      setFormNo(formNo + 1)
    } else {
      toast.error('Debe completar los campos')
    }
  }
  const pre = () => {
    setFormNo(formNo - 1)
  }
  const finalSubmit = () => {
    if (state.nameOS && state.numberA && state.planC && state.dateA && state.typeA) {
      toast.success('Campos completados correctamente')
      navigate('/login');
    } else {
      toast.error('Debe completar los campos')
    }
  }
  return (
    <div className="w-screen h-screen  flex justify-center items-center">
      <Toaster richColors position="top-left" />
      <div className="card w-[45%] rounded-md shadow-md bg-white p-5">
        <div className='flex justify-center items-center'>
          {
            formArray.map((v, i) => <><div className={`w-[35px] my-3 text-white rounded-full ${formNo - 1 === i || formNo - 1 === i + 1 || formNo === formArray.length ? 'bg-blue-500' : 'bg-slate-400'} h-[35px] flex justify-center items-center`}>
              {v}
            </div>
              {
                i !== formArray.length - 1 && <div className={`w-[85px] h-[2px] ${formNo === i + 2 || formNo === formArray.length ? 'bg-blue-500' : 'bg-slate-400'}`}></div>
              }
            </>)
          }
        </div>
        {
          formNo === 1 && <div>

            <div className="flex flex-row gap-10">
              <div className="basis-1/4">
                <div className='flex flex-col mb-2'>
                  <label htmlFor="nombre" className="text-black">Nombre</label>
                  <input value={state.name} onChange={inputHandle} className='text-black p-2 bg-slate-300 mt-1 outline-0 focus:border-blue-500 rounded-md' type="text" name='name'  id='name' />
                </div>
              </div>
              <div className="basis-1/4">
                <div className='flex flex-col mb-2'>
                  <label htmlFor="lastname"className="text-black" >Apellido</label>
                  <input value={state.lastname} onChange={inputHandle} className='text-black p-2  bg-slate-300 mt-1 outline-0 focus:border-blue-500 rounded-md' type="text" name='lastname'  id='lastname' />
                </div>
              </div>
              
            </div>
          
            <div className='flex flex-col mb-2'>
              <label htmlFor="email" className="text-black">Correo</label>
              <input value={state.email} onChange={inputHandle} className='text-black p-2 border bg-slate-300 mt-1 outline-0 focus:border-blue-500 rounded-md' type="text" name='email'  id='email' />
            </div>

            <div className="flex flex-row gap-10">
              <div className="basis-1/4">
                <div className='flex flex-col mb-2'>
                  <label htmlFor="telephone" className="text-black">Teléfono</label>
                  <input value={state.telephone} onChange={inputHandle} className='text-black p-2 bg-slate-300 mt-1 outline-0 focus:border-blue-500 rounded-md' type="number" name='telephone'  id='telephone' />
                </div>
              </div>
              <div className="basis-1/4">
                <div className='flex flex-col mb-2'>
                  <label htmlFor="birthdate"className="text-black" >Fecha de Nacimiento</label>
                  <input value={state.birthdate} onChange={inputHandle} className='text-black p-2 w-[125%] bg-slate-300 mt-1 outline-0 focus:border-blue-500 rounded-md' type="date" name='birthdate'  id='birthdate' />
                </div>
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

            <div className='mt-4 flex justify-center items-center'>
              <button onClick={next} className='px-3 py-2 text-lg rounded-md w-full text-white bg-[#01579B]'>CONTINUAR</button>
            </div>
          </div>
        }

        {
          formNo === 2 && <div>
              <div className='flex flex-col mb-2'>
                <label htmlFor="email" className="text-black">Email</label>
                <input value={state.email} onChange={inputHandle} className='text-black p-2 border bg-slate-300 mt-1 outline-0 focus:border-blue-500 rounded-md' type="text" name='email'  id='email' />
              </div> 

              <div className='flex flex-col mb-2'>
                <label htmlFor="username" className="text-black">Nombre de usuario</label>
                <input value={state.username} onChange={inputHandle} className='text-black p-2 border bg-slate-300 mt-1 outline-0 focus:border-blue-500 rounded-md' type="text" name='username'  id='username'/>
              </div>

              <div className='flex flex-col mb-2'>
                <label htmlFor="password" className="text-black">Contraseña</label>
                <input value={state.password} onChange={inputHandle} className='text-black p-2 border bg-slate-300 mt-1 outline-0 focus:border-blue-500 rounded-md' type="password" name='password'  id='password'/>
              </div>

              <div className='flex flex-col mb-2'>
                <label htmlFor="passwordconf" className="text-black">Confirmar Contraseña</label>
                <input value={state.passwordconf} onChange={inputHandle} className='text-black p-2 border bg-slate-300 mt-1 outline-0 focus:border-blue-500 rounded-md' type="password" name='passwordconf'  id='passwordconf' />
              </div>
            <div className='mt-4 gap-3 flex justify-center items-center'>
              <button onClick={pre} className='px-3 py-2 text-lg rounded-md w-full text-white bg-[#01579B]'>ATRAS</button>
              <button onClick={next} className='px-3 py-2 text-lg rounded-md w-full text-white bg-[#01579B]'>CONTINUAR</button>
            </div>
          </div>
        }

        {
          formNo === 3 && <div>
              <div className="flex flex-row gap-10">
                <div className="basis-1/4">
                  <div className='flex flex-col mb-2'>
                    <label htmlFor="nombreOS" className="text-black">Nombre de la obra social</label>
                    <input value={state.nameOS} onChange={inputHandle} className='text-black p-2 bg-slate-300 mt-1 outline-0 focus:border-blue-500 rounded-md' type="text" name='nameOS'  id='nameOS' />
                  </div>
                </div>
                <div className="basis-1/4">
                  <div className='flex flex-col mb-2'>
                    <label htmlFor="numberA"className="text-black" >N° de afiliado</label>
                    <input value={state.numberA} onChange={inputHandle} className='text-black p-2  bg-slate-300 mt-1 outline-0 focus:border-blue-500 rounded-md' type="number" name='numberA'  id='numberA' />
                  </div>
                </div>
              </div>

              <div className='flex flex-col mb-2'>
                <label htmlFor="planC" className="text-black">Plan de cobertura</label>
                <input value={state.planC} onChange={inputHandle} className='text-black p-2 border bg-slate-300 mt-1 outline-0 focus:border-blue-500 rounded-md' type="text" name='planC'  id='planC' />
              </div>

              <div className="flex flex-row gap-24">
                <div className="basis-1/4">
                  <div className='flex flex-col mb-2'>
                    <label htmlFor="dateA" className="text-black">Fecha de afiliación</label>
                    <input value={state.dateA} onChange={inputHandle} className='text-black p-2 w-[125%] bg-slate-300 mt-1 outline-0 focus:border-blue-500 rounded-md' type="date" name='dateA'  id='dateA' />
                  </div>
                </div>
                <div className="basis-1/4">
                  <div className='flex flex-col mb-2'>
                    <label htmlFor="typeA"className="text-black" >Tipo de afiliación</label>
                    <input value={state.typeA} onChange={inputHandle} className='text-black p-2  bg-slate-300 mt-1 outline-0 focus:border-blue-500 rounded-md' type="text" name='typeA'  id='typeA' />
                  </div>
                </div>
              </div>

              <div className='flex flex-col mb-2'>
                <label htmlFor="email" className="text-black">Email</label>
                <input value={state.email} onChange={inputHandle} className='text-black p-2 border bg-slate-300 mt-1 outline-0 focus:border-blue-500 rounded-md' type="text" name='email'  id='email' />
              </div> 
              
            <div className='mt-4 gap-3 flex justify-center items-center'>
              <button onClick={pre} className='px-3 py-2 text-lg rounded-md w-full text-white bg-[#01579B]'>ATRAS</button>
              <button onClick={finalSubmit} className='px-3 py-2 text-lg rounded-md w-full text-white bg-[#01579B]'>
                GUARDAR
              </button>
            </div>
          </div>
        }

      </div>
    </div>
  );
}

export default Registro;