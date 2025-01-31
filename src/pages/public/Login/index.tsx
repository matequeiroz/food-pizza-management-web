import { ArrowRight, Pizza } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export const LoginPage: React.FC = () => (
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
          <form className="flex w-full flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Input
                type="email"
                className="h-12 text-lg max-md:bg-white"
                placeholder="Digite o seu email cadastrado aqui"
              />
            </div>
            <Button className="h-12 w-full text-lg max-md:bg-gray-900">
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
