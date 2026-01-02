import React from 'react'
import { useForm } from 'react-hook-form'
import { BsWhatsapp } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { ImInstagram } from 'react-icons/im'
import { IoLocateSharp } from 'react-icons/io5'
import { MdEmail } from 'react-icons/md'
import { PiPhone } from 'react-icons/pi'

export default function Contact (){
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    const { nome, email, assunto, mensagem } = data
    const texto = `*Nova mensagem pelo portfólio* 💻
👤 *Nome:* ${nome}
📧 *E-mail:* ${email}
📝 *Assunto:* ${assunto}
💬 *Mensagem:* ${mensagem}`

    const numero = '5584999259170' 
    const link = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`
    window.open(link, '_blank')
    reset()
  }

  return (
    <section id="contact" className="py-32 px-6 bg-black/90">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2 text-[#41a0be]">
          Entre em contato
        </h2>

        <p className="text-gray-400 text-center mb-12">
          Conheça um pouco mais sobre minha trajetória, motivações e experiências.
        </p>

        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 grid grid-cols-1 lg:grid-cols-2 gap-12 border border-white/20">
          {/* Lado esquerdo - informações */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">
              Detalhes de Contato
            </h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="p-3 bg-white/10 rounded-full mr-4 border border-white/20">
                  <IoLocateSharp className="text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Localização</h4>
                  <p className="text-slate-300">Guamaré/RN</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 bg-white/10 rounded-full mr-4 border border-white/20">
                  <MdEmail className="text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">E-mail</h4>
                  <p className="text-slate-300">nettosousa06@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 bg-white/10 rounded-full mr-4 border border-white/20">
                  <PiPhone className="text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Telefone</h4>
                  <p className="text-slate-300">+55 (84) 99925-9170</p>
                </div>
              </div>
            </div>

            {/* Rdes sociais */}
            <div className="mt-8">
              <h4 className="text-white font-semibold mb-4">Siga-me</h4>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/nettosousa96/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 rounded-full border border-white/20 hover:bg-[#41a0be] transition-all"
                >
                  <ImInstagram className="text-white text-xl" />
                </a>
                <a
                  href="https://github.com/DamiaoNetto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 rounded-full border border-white/20 hover:bg-[#41a0be] transition-all"
                >
                  <FaGithub className="text-white text-xl" />
                </a>
                <a
                  href="https://wa.me/5584999259170"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 rounded-full border border-white/20 hover:bg-[#41a0be] transition-all"
                >
                  <BsWhatsapp className="text-white text-xl" />
                </a>
              </div>
            </div>
          </div>

          {/* Lado direito - formulário */}
          <div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block mb-2 text-sm text-slate-300">Nome</label>
                <input
                  {...register('nome', { required: 'Informe seu nome' })}
                  type="text"
                  className="w-full px-4 py-2 bg-white/10 rounded-lg border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-[#41a0be] transition-all"
                />
                {errors.nome && (
                  <p className="text-red-400 text-sm mt-1">{errors.nome.message}</p>
                )}
              </div>

              <div>
                <label className="block mb-2 text-sm text-slate-300">E-mail</label>
                <input
                  {...register('email', {
                    required: 'Informe seu e-mail',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'E-mail inválido',
                    },
                  })}
                  type="email"
                  className="w-full px-4 py-2 bg-white/10 rounded-lg border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-[#41a0be] transition-all"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="block mb-2 text-sm text-slate-300">Assunto</label>
                <input
                  {...register('assunto', { required: 'Informe o assunto' })}
                  type="text"
                  className="w-full px-4 py-2 bg-white/10 rounded-lg border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-[#41a0be] transition-all"
                />
                {errors.assunto && (
                  <p className="text-red-400 text-sm mt-1">{errors.assunto.message}</p>
                )}
              </div>

              <div>
                <label className="block mb-2 text-sm text-slate-300">Mensagem</label>
                <textarea
                  {...register('mensagem', { required: 'Digite sua mensagem' })}
                  rows="5"
                  className="w-full px-4 py-2 bg-white/10 rounded-lg border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-[#41a0be] transition-all"
                ></textarea>
                {errors.mensagem && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.mensagem.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="flex items-center justify-center gap-2 px-6 py-2 rounded-full bg-[#41a0be] text-white font-semibold hover:bg-[#2a7c97] transition-all"
              >
                <BsWhatsapp className="text-lg" />
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
