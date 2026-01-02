import React from 'react'
import { testimonials } from '../data/data'
import { IoIosStar } from 'react-icons/io'

export default function Testimonials(){

  
  return (
    
   <section id='testimonials' className="min-h-screen flex items-center justify-center bg-black/90 text-white text-center px-6">
      <div className="container mx-auto px-6 mt-10">
        <h2 className="text-3xl font-bold text-[#41a0be] mb-2">Feedback de Clientes</h2>
        <p className="text-gray-400 mb-10">Opiniões reais de quem já confiou em mim para transformar ideias em resultados.</p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {testimonials.map((item, index) => (
            <div key={index} className='bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 mb-5'>
              <div className='flex items-center mb-4'>
                <div className='h-12 w-12 rounded-full overflow-hidden mr-4'>
                  <img src={item.image} alt={item.name} className='w-full h-full object-cover' />
                </div>
                <div className='text-left'>
                  <h4 className='font-semibold text-white'>{item.name}</h4>
                  <p className="text-[#41a0be] text-sm">{item.position}</p>
                </div>
              </div>

              <p className='text-slate-300 text-sm py-2 text-left'>{item.content}</p>

              <div className='flex gap-1 mt-4 justify-start'>
                {Array.from({ length: 5 }).map((_, i) => (
                  <IoIosStar key={i} className='text-white' />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
