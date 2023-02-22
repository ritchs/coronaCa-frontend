import React from 'react';
import { Formik, Field, Form } from 'formik';
import UseSend from '../components/Hooks/UseSend';
export const Registro = () => {
    const { sendMail } = UseSend();
    return (
        <div className='bg-portada bg-contain bg-no-repeat'>
            <div className='grid grid-cols-5 border-black pt-16'>
                <div className='col-span-1 border-red-500'> 1</div>
                <div className='col-span-2  border-red-500'>
                    <div className='text-9xl text-left text-white font-bold mb-5'>Corona, CA.</div>
                    <div className='text-5xl text-left text-white'>Cuida <strong> Adultos Mayores</strong>  de</div>
                    <div className='text-5xl text-left text-white mb-5'>Manera <strong>Independiente</strong></div>
                    <div className='bg-[#25CB4D] text-white text-7xl font-bold pt-2 pb-3 rounded-full mb-5 w-[31rem]'>18 de marzo</div>
                    <div className='text-left text-white text-5xl'>Asiste a nuestra <strong className='text-[#F2F244]'>conferencia informativa</strong></div>
                    <div className='mt-10 text-left text-white text-6xl'>¡Registrate <strong className='text-[#F2F244]'>Gratis</strong>!</div>
                    <div className='text-left mt-5 text-white pb-[20rem]'>
                        <Formik
                            initialValues={{
                                name: '',
                                phone: '',
                                email: '',
                            }}
                            onSubmit={async (values) => {
                                // await new Promise((r) => setTimeout(r, 500));
                                sendMail(values)
                                alert(JSON.stringify(values, null, 2));
                            }}
                        >


                            <Form action="">
                                <label htmlFor="name" className='text-xs'>NOMBRE:</label><br />
                                <Field id="name" type="text" name='name' className='w-[30rem] rounded-md h-10 bg-[#DADEEA]' /><br />
                                <label htmlFor="phone" className='text-xs'>TELÉFONO</label><br />
                                <Field id="phone" type="text" name='phone' className='w-[30rem] rounded-md h-10 bg-[#DADEEA]' /><br />
                                <label htmlFor="email" className='text-xs'>CORREO ELECTRÓNICO</label><br />
                                <Field id="email" type="text" name='email' className='w-[30rem] rounded-md h-10 bg-[#DADEEA]' /><br />
                                <button type="submit"  className='mt-5 bg-[#25CB4D] rounded-md w-[7.25rem] p-2'>ENVIAR</button>
                            </Form>
                        </Formik>
                    </div>
                </div>
                <div className=''></div>
                <div className=''></div>
            </div>
        </div>
    )
}