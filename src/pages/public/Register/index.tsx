/* eslint-disable jsx-a11y/no-autofocus */
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRight, LoaderCircle, Pizza } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import { schemaRegister } from './schema'
import { FormRegisterProps } from './types'

export const RegisterPage: React.FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting, isValid, dirtyFields },
  } = useForm<FormRegisterProps>({
    resolver: zodResolver(schemaRegister),
    mode: 'onChange',
  })

  const handleSubmitForm = async (data: FormRegisterProps) => {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    toast.success('Para finalizar, clique no link que você recebeu em seu e-mail :)')
    console.log(data)
  }

  return (
    <>
      <Helmet title="Login" />
      <div className="justify-cente grid min-h-screen w-full grid-cols-1 md:grid-cols-2">
        <section className="flex flex-col justify-between bg-red-500 align-top max-md:hidden">
          <div className="ml-3 mt-3 flex flex-row gap-2">
            <Pizza size={100} className="text-white" />
          </div>
          <p className="ml-1 flex items-end text-white">
            Pizza Food Delivery © {new Date().getFullYear()}{' '}
          </p>
        </section>
        <section className="max-md: flex flex-col items-center justify-between p-2 max-md:bg-red-500 max-md:p-6">
          <Pizza size={100} className="text-white" />
          <div className="m-auto text-center">
            <h1 className="pb-2 text-3xl font-bold max-md:text-white">
              Crie uma conta grátis agora
            </h1>
            <p className="mb-4 text-pretty text-lg text-muted-foreground max-md:text-zinc-100">
              Tenha acesso a seus pedidos e acompanhe suas vendas em tempo real
            </p>
            <form className="flex w-full flex-col gap-4" onSubmit={handleSubmit(handleSubmitForm)}>
              <div className="flex flex-col gap-2">
                <Input
                  className={`h-12 text-lg max-md:bg-white ${!dirtyFields.nameShop ? 'border-zinc-900' : dirtyFields.nameShop && errors.nameShop ? 'border-red-700' : 'border-green-700'}`}
                  placeholder="Nome do seu estabelecimento"
                  {...register('nameShop')}
                />
                {errors.nameShop && (
                  <p className="text-left text-xs text-red-500">{errors.nameShop.message}</p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <Input
                  className={`h-12 text-lg max-md:bg-white ${!dirtyFields.nameManager ? 'border-zinc-900' : dirtyFields.nameManager && errors.nameManager ? 'border-red-700' : 'border-green-700'}`}
                  placeholder="Nome do Responsável"
                  {...register('nameManager')}
                />
                {errors.nameManager && (
                  <p className="text-left text-xs text-red-500">{errors.nameManager?.message}</p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <Input
                  className={`h-12 text-lg max-md:bg-white ${!dirtyFields.email ? 'border-zinc-900' : dirtyFields.email && errors.email ? 'border-red-700' : 'border-green-700'}`}
                  placeholder="Qual seu e-mail?"
                  {...register('email')}
                />
                {errors.email && (
                  <p className="text-left text-xs text-red-500">{errors.email.message}</p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <Input
                  className={`h-12 text-lg max-md:bg-white ${!dirtyFields.phone ? 'border-zinc-900' : dirtyFields.phone && errors.phone ? 'border-red-700' : 'border-green-700'}`}
                  placeholder="Qual seu telefone?"
                  type="number"
                  {...register('phone')}
                />
                {errors.phone && (
                  <p className="text-left text-xs text-red-500">{errors.phone?.message}</p>
                )}
              </div>
              <Button
                className="flex h-12 w-full items-center justify-center text-lg max-md:bg-gray-900"
                disabled={isSubmitting || !isValid}
              >
                {isSubmitting ? (
                  <LoaderCircle className="animate-spin" size={40} />
                ) : (
                  <>
                    Cadastrar agora
                    <ArrowRight size={40} className="mt-1" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </section>
      </div>
    </>
  )
}
