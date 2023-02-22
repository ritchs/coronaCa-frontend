import React from 'react'

export const Grupo = () => {
    return (
        <div className='bg-portada2 bg-cover h-screen'>
            <div className='grid grid-cols-4 xl:pt-16 2xl:pt-24'>
                <div className='col-span-1'>
                    <img src="/images/logo.png" alt="" className='w-40 mx-10' />
                </div>
                <div className='col-span-2 text-white'>
                    <div className='xl:text-8xl 2xl:text-9xl font-bold mb-5'>¡Felicidades!</div>
                    <div className='xl:text-4xl 2xl:text-5xl'>Estas a un paso de tomar <strong>ACCIÓN y</strong></div>
                    <div className='xl:text-4xl 2xl:text-5xl mb-14'><strong>emprender en tu vida</strong></div>
                    <div className='xl:text-4xl 2xl:text-5xl'>Sólo falta unirte a nuestro grupo de</div>
                    <div className='xl:text-4xl 2xl:text-5xl'><strong>WhatsApp</strong> donde te mantendremos</div>
                    <div className='xl:text-4xl 2xl:text-5xl mb-14'>informada.</div>
                    <a href="" className='bg-[#25CB4D] rounded-md px-24 p-2'>UNIRME AL GRUPO</a>
                </div>
            </div>
        </div>
    )
}
