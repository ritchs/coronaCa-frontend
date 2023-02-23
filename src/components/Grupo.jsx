import React from 'react'

export const Grupo = () => {
    return (
        <div className='bg-portada2 bg-cover h-screen'>
            <div className='grid grid-cols-4 lg:pt-16 2xl:pt-24 font-fontMonserrat'>
                <div className='col-span-1'>
                    <a href="/">
                        <img src="/images/logo.png" alt="" className='lg:w-36 2xl:w-40 mx-10' />
                    </a>
                </div>
                <div className='col-span-2 text-white'>
                    <div className='lg:text-7xl 2xl:text-8xl font-bold mb-5'>¡Felicidades!</div>
                    <div className='lg:text-3xl 2xl:text-4xl'>Estas a un paso de tomar <strong>ACCIÓN y</strong></div>
                    <div className='lg:text-3xl 2xl:text-4xl mb-14'><strong>emprender en tu vida</strong></div>
                    <div className='lg:text-3xl 2xl:text-4xl'>Sólo falta unirte a nuestro grupo de</div>
                    <div className='lg:text-3xl 2xl:text-4xl'><strong>WhatsApp</strong> donde te mantendremos</div>
                    <div className='lg:text-3xl 2xl:text-4xl mb-14'>informada.</div>
                    <a href="" className='bg-[#25CB4D] rounded-md px-24 p-2'>UNIRME AL GRUPO</a>
                </div>
            </div>
        </div>
    )
}
