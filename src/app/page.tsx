/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Hfus9B9uNcM
 */
import { Button } from "@/components/ui/button"
import { CardHeader, CardContent, Card } from "@/components/ui/card"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import Image from "next/image"

export default function Component() {
  return (
    <main className="w-full">
      <section className="relative bg-[#ffffff] w-full">
        <nav className="container mx-auto px-4 md:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold tracking-tighter">GERAIA</h1>
            <div className="hidden lg:flex space-x-4">
              <Button className="text-base text-black" variant="link">
                Início
              </Button>
              <Button className="text-base text-black" variant="link">
                Sobre
              </Button>
              <Button className="text-base text-black" variant="link">
                Pesquisa
              </Button>
              <Button className="text-base text-black" variant="link">
                Equipe
              </Button>
              <Button className="text-base text-black" variant="link">
                Contato
              </Button>
            </div>
          </div>
        </nav>
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-24 lg:py-32">
          <h1 className="text-4xl font-bold tracking-tighter text-center mb-10">
            Bem-vindo ao Grupo de Pesquisa GERAIA
          </h1>
          <p className="text-lg text-gray-600 text-center mb-10">Dedicado ao avanço da pesquisa em IA Generativa</p>
          <div className="flex justify-center">
            <Button className="mr-4" variant="link">
              Saiba Mais
            </Button>
            <Button>Junte-se a nós</Button>
          </div>
        </div>
      </section>
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8">
        <section className="mb-10">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">Nossas Áreas de Pesquisa</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <h3 className="text-xl font-semibold">Modelos Generativos</h3>
              </CardHeader>
              <CardContent>
                <p className="text-base text-gray-500">
                  Nosso grupo está focado no desenvolvimento de novos modelos generativos para várias aplicações.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <h3 className="text-xl font-semibold">Aprendizado por Reforço</h3>
              </CardHeader>
              <CardContent>
                <p className="text-base text-gray-500">
                  Estamos explorando como o aprendizado por reforço pode ser usado na IA generativa.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <h3 className="text-xl font-semibold">Pesquisa de Arquitetura Neural</h3>
              </CardHeader>
              <CardContent>
                <p className="text-base text-gray-500">
                  Nossa pesquisa inclui a descoberta de arquiteturas de redes neurais ótimas para tarefas generativas.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
        <section className="mb-10">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">Sobre Nós</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-4">
                Somos um grupo de pesquisadores e engenheiros dedicados ao avanço do campo da IA Generativa. Nossa
                paixão por IA nos levou a explorar vários aspectos de modelos generativos, aprendizado por reforço e
                pesquisa de arquitetura neural.
              </p>
              <Button className="mt-4" variant="link">
                Saiba Mais
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Image
                alt="Imagem Sobre 1"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="200"
              />
              <Image
                alt="Imagem Sobre 2"
                height="200"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="200"
              />
            </div>
          </div>
        </section>
        <section className="mb-10">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">Nossa Equipe</h2>
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage alt="Membro da equipe 1" src="/placeholder.svg?height=200&width=200" />
              <AvatarFallback>MT1</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage alt="Membro da equipe 2" src="/placeholder.svg?height=200&width=200" />
              <AvatarFallback>MT2</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage alt="Membro da equipe 3" src="/placeholder.svg?height=200&width=200" />
              <AvatarFallback>MT3</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage alt="Membro da equipe 4" src="/placeholder.svg?height=200&width=200" />
              <AvatarFallback>MT4</AvatarFallback>
            </Avatar>
          </div>
        </section>
        <section>
          <h2 className="text-3xl font-bold tracking-tighter mb-4">Entre em Contato</h2>
          <p className="text-lg text-gray-600 mb-4">Interessado em nossa pesquisa? Entre em contato conosco.</p>
          <Button className="w-full sm:w-auto">
            Contate-nos
          </Button>
        </section>
      </div>
    </main>
  )
}

