/* eslint-disable jsx-a11y/no-autofocus */
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRight, Pizza } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import { schemaLogin } from './schema'
import { FormLoginProps } from './types'

export const LoginPage: React.FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting, isValid, dirtyFields },
  } = useForm<FormLoginProps>({
    resolver: zodResolver(schemaLogin),
    mode: 'onChange',
  })

  const handleSubmitForm = async (data: FormLoginProps) => {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    toast.success('Para finalizar, clique no link que você recebeu em seu e-mail :)')
    console.log(data.email)
  }

  return (
    <>
      <Helmet title="Login" />
      <div className="justify-cente grid min-h-screen w-full grid-cols-1 md:grid-cols-2">
        <section className="flex flex-col justify-between bg-red-500 align-top max-md:hidden">
          <div className="ml-3 mt-3 flex flex-row gap-2">
            <Pizza size={100} className="text-white" />
          </div>
        </section>
        <section className="max-md: flex flex-col items-center justify-between p-2 max-md:bg-red-500 max-md:p-6">
          <Pizza size={100} className="text-white" />
          <div className="m-auto text-center">
            <h1 className="pb-2 text-3xl font-bold max-md:text-white">
              Acesse seu painel administrativo
            </h1>
            <p className="mb-4 text-pretty text-lg text-muted-foreground max-md:text-zinc-100">
              Acompanhe seus pedidos e vendas
            </p>
            <form className="flex w-full flex-col gap-4" onSubmit={handleSubmit(handleSubmitForm)}>
              <div className="flex flex-col gap-2">
                <Input
                  className={`h-12 text-lg max-md:bg-white ${!dirtyFields.email ? 'border-zinc-900' : dirtyFields.email && !isValid ? 'border-red-700' : 'border-green-700'}`}
                  placeholder="Digite o seu email cadastrado aqui"
                  {...register('email')}
                />
                {errors.email && (
                  <p className="text-left text-xs text-red-500">{errors.email.message}</p>
                )}
              </div>
              <Button
                className="h-12 w-full text-lg max-md:bg-gray-900"
                disabled={isSubmitting || !isValid}
              >
                Entrar <ArrowRight />
              </Button>
            </form>
          </div>
          <p className="flex items-end max-md:text-white">
            Pizza Food Delivery © {new Date().getFullYear()}{' '}
          </p>
        </section>
      </div>
    </>
  )
}
