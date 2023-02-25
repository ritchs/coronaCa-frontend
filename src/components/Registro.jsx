import React from 'react';
import { Formik, Field, Form } from 'formik';
import UseSend from '../components/Hooks/UseSend';
import { Navigate } from 'react-router-dom';


export const Registro = () => {
    const { sendMail } = UseSend();
    const { goToGroup, setgoToGroup } = React.useState(false);

    function Redirigir() {
        if (goToGroup) {
            return <Navigate to="/group" />

        }
    }
    return (
        <div className='bg-gradient-to-b from-[#3F5D89] to to-[#8A6DC3] bg-contain bg-no-repeat h-[74rem] lg:h-[50rem] 2xl:h-[75rem]'>
            <div className='grid grid-cols-5 border-black  2xl:pt-16 font-fontMonserrat'>
                <div className='col-span-5 lg:col-span-1 lg:pt-10'>
                    <img src="/images/logo.png" alt="" className='w-[5.5rem] lg:w-36 2xl:w-40 mx-[9.5rem] lg:mx-10' /></div>
                <div className='col-span-5 lg:col-span-2'>
                    <div className='lg:text-7xl 2xl:text-8xl text-2xl lg:text-left text-white font-bold mb-5'>Corona, CA.</div>
                    <div className='lg:text-3xl 2xl:text-4xl text-xl lg:text-left text-white'>Cuida <strong> Adultos Mayores</strong>  de</div>
                    <div className='lg:text-3xl 2xl:text-4xl text-xl lg:text-left text-white mb-5'>Manera <strong>Independiente</strong></div>
                    <div className='bg-[#25CB4D]  text-white lg:text-6xl 2xl:text-7xl font-bold pt-2 pb-3 rounded-full mb-2 lg:mb-5 w-[11.5rem] lg:w-[31rem] mx-[6rem] lg:mx-0'>18 de marzo</div>
                    <div className='text-centerxt lg:text-left text-white lg:text-3xl 2xl:text-4xl'>Asiste a nuestra <strong className='text-[#F2F244]'>conferencia informativa</strong></div>
                    <div className='mt-3 lg:mt-10 text-center lg:text-left text-white lg:text-4xl 2xl:text-5xl'>¡Registrate <strong className='text-[#F2F244]'>Gratis</strong>!</div>
                    <div className='text-left mt-5 text-white '>
                        <Formik
                            initialValues={{
                                name: '',
                                phone: '',
                                email: '',
                            }}
                            onSubmit={async (values) => {
                                if (values.name != '' && values.phone != '' && values.email != '') {
                                    const res = sendMail(values)
                                    if (res.status == 200) {
                                        Redirigir();
                                    }

                                } else {
                                    const error = {
                                        Nombre: values.name != '' ? 'correcto' : 'Falta el Nombre',
                                        Telefono: values.phone != '' ? 'correcto' : 'Falta el Telefono',
                                        Email: values.email != '' ? 'correcto' : 'Falta el Email',
                                    }
                                    alert(JSON.stringify(error, null, 2));
                                }
                            }}
                        >
                            <Form action="">
                                <label htmlFor="name" className='text-xs'>NOMBRE:</label><br />
                                <Field id="name" type="text" name='name' className='w-[23rem] lg:w-[30rem] rounded-md h-10 bg-[#DADEEA] text-black' /><br />
                                <label htmlFor="phone" className='text-xs'>TELÉFONO</label><br />
                                <Field id="phone" type="text" name='phone' className='w-[23rem] lg:w-[30rem] rounded-md h-10 bg-[#DADEEA] text-black' /><br />
                                <label htmlFor="email" className='text-xs'>CORREO ELECTRÓNICO</label><br />
                                <Field id="email" type="text" name='email' className='w-[23rem] lg:w-[30rem] rounded-md h-10 bg-[#DADEEA] text-black' /><br />

                                <button type="submit" onClick={() => {
                                    setgoToGroup(true);
                                }} className='mt-5 bg-[#25CB4D] rounded-md px-5 p-2'> ENVIAR</button>
                            </Form>
                        </Formik>
                    </div>
                </div>
                <div className='col-span-2'>
                    <img src="/images/reina.png" alt="" className='lg:w-[33rem]' />
                </div>
                <div className=''></div>
            </div>
        </div >
    )
}