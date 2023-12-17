/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Hfus9B9uNcM
 */
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import {
  CalendarIcon,
  CopyrightIcon,
  ProjectorIcon,
  SearchIcon,
} from "lucide-react";

export default function Home() {
  return (
    <main className="w-full">
      <nav className="fixed top-0 z-10 mx-auto w-full px-4 py-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tighter">GERAIA</h1>
          <div className="hidden space-x-4 lg:flex">
            <Button className="text-base text-current" variant="link">
              Início
            </Button>
            <Button className="text-base text-current" variant="link">
              Sobre
            </Button>
            <Button className="text-base text-current" variant="link">
              Pesquisa
            </Button>
            <Button className="text-base text-current" variant="link">
              Equipe
            </Button>
            <Button className="text-base text-current" variant="link">
              Contato
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </nav>
      <section className="relative h-screen w-full">
        <div className="container mx-auto flex h-full flex-col justify-center px-4 py-12 md:px-6 md:py-24 lg:px-8 lg:py-32">
          <h1 className="mb-10 text-center text-6xl font-bold tracking-tighter">
            GERAIA
          </h1>
          <p className="mb-10 text-center text-lg text-gray-600">
            Pesquisa e desenvolvimento em IA Generativa
          </p>
          <div className="flex justify-center">
            <Button className="mr-4" variant="link">
              Saiba Mais
            </Button>
            <Button>Junte-se a nós</Button>
          </div>
        </div>
      </section>
      <div className="container mx-auto px-4 py-8 md:px-6 lg:px-8">
        <section className="mb-10">
          <h2 className="mb-4 text-3xl font-bold tracking-tighter">
            Áreas de atuação
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <h3 className="flex items-center gap-2 text-xl font-semibold">
                  <div className="rounded-full bg-primary p-2">
                    <SearchIcon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  Pesquisa
                </h3>
              </CardHeader>
              <CardContent className="pt-2">
                <p className="text-base">
                  Nosso grupo está focado no desenvolvimento de novas pesquisas
                  para várias aplicações.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <h3 className="flex items-center gap-2 text-xl font-semibold">
                  <div className="rounded-full bg-primary p-2">
                    <ProjectorIcon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  Projetos
                </h3>
              </CardHeader>
              <CardContent className="pt-2">
                <p className="text-base">
                  Estamos explorando como os projetos podem ser usados na IA
                  generativa.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <h3 className="flex items-center gap-2 text-xl font-semibold">
                  <div className="rounded-full bg-primary p-2">
                    <CalendarIcon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  Eventos
                </h3>
              </CardHeader>
              <CardContent className="pt-2">
                <p className="text-base">
                  Nossa pesquisa inclui a descoberta de eventos ótimos para
                  tarefas generativas.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <h3 className="flex items-center gap-2 text-xl font-semibold">
                  <div className="rounded-full bg-primary p-2">
                    <CopyrightIcon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  Produção de conteúdo
                </h3>
              </CardHeader>
              <CardContent className="pt-2">
                <p className="text-base">
                  Nosso grupo está focado na produção de conteúdo para várias
                  aplicações.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
        <section className="mb-10">
          <h2 className="mb-4 text-3xl font-bold tracking-tighter">
            Sobre Nós
          </h2>
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            <div>
              <p className="mb-4 text-lg text-gray-600">
                Somos um grupo de pesquisadores e engenheiros dedicados ao
                avanço do campo da IA Generativa. Nossa paixão por IA nos levou
                a explorar vários aspectos de modelos generativos, aprendizado
                por reforço e pesquisa de arquitetura neural.
              </p>
              <Button className="mt-4" variant="link">
                Saiba Mais
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Image
                alt="Imagem Sobre 1"
                height="300"
                src="/about-us-pic-1.jpeg"
                style={{
                  aspectRatio: "300/300",
                  objectFit: "cover",
                }}
                width="300"
              />
              <Image
                alt="Imagem Sobre 2"
                height="300"
                src="/about-us-pic-2.jpeg"
                style={{
                  aspectRatio: "300/300",
                  objectFit: "cover",
                }}
                width="300"
              />
            </div>
          </div>
        </section>
        {/* <section className="mb-10">
          <h2 className="mb-4 text-3xl font-bold tracking-tighter">
            Nossa Equipe
          </h2>
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage
                alt="Membro da equipe 1"
                src="/placeholder.svg?height=300&width=300"
              />
              <AvatarFallback>MT1</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage
                alt="Membro da equipe 2"
                src="/placeholder.svg?height=300&width=300"
              />
              <AvatarFallback>MT2</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage
                alt="Membro da equipe 3"
                src="/placeholder.svg?height=300&width=300"
              />
              <AvatarFallback>MT3</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage
                alt="Membro da equipe 4"
                src="/placeholder.svg?height=300&width=300"
              />
              <AvatarFallback>MT4</AvatarFallback>
            </Avatar>
          </div>
        </section> */}
        <section>
          <h2 className="mb-4 text-3xl font-bold tracking-tighter">
            Entre em Contato
          </h2>
          <p className="mb-4 text-lg">
            Interessado em nossa pesquisa? Entre em contato conosco.
          </p>
          <Button className="w-full sm:w-auto">Contate-nos</Button>
        </section>
      </div>
    </main>
  );
}
