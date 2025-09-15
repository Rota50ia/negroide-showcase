import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, MapPin, Calendar, PlayCircle, Ticket, Music, Users, Drum, Instagram, Youtube, Mail, Menu, X, ExternalLink } from "lucide-react";

// Import band member photos
import edilsonPhoto from "@/assets/edilson-morais.jpg";
import luizChaffinPhoto from "@/assets/luiz-chaffin.jpg";
import luizClimacoPhoto from "@/assets/luiz-climaco.jpg";
import heroImage from "@/assets/hero-edilson.png";
const nav = [{
  href: "#ingressos",
  label: "Ingressos"
}, {
  href: "#sobre",
  label: "Sobre"
}, {
  href: "#repertorio",
  label: "Repertório"
}, {
  href: "#banda",
  label: "Banda"
}, {
  href: "#midia",
  label: "Mídia"
}, {
  href: "#contato",
  label: "Contato"
}];
export default function ShowNegroidePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const date = "Sábado, 22 de Novembro de 2025";
  const time = "20h30";
  const city = "Recife, PE";
  const venue = "Teatro das Américas";
  const ticketsUrl = "https://seu-link-de-ingressos.com";
  const pressKitUrl = "https://seu-link-de-presskit.com";
  const whatsapp = "https://wa.me/55XXXXXXXXXXX";
  const email = "contato@negroide.show";
  const insta = "https://instagram.com/sua-pagina";
  const youtube = "https://youtube.com/@seucanal";
  const repertoire = [{
    title: "Negróide",
    authors: "Edilson Morais e Bruno Rejan",
    duration: "4:01 min",
    url: "https://youtu.be/2TaJgZ1Dn5M"
  }, {
    title: "Stasiant",
    authors: "Edilson Morais",
    duration: "3:21 min",
    url: "https://youtu.be/v3smkvUH6Oo"
  }, {
    title: "Samba 1",
    authors: "Henrique Reis",
    duration: "3:26 min",
    url: "https://youtu.be/A1C1FsSzuP4"
  }, {
    title: "Tudo em 5",
    authors: "Pedro Braga",
    duration: "5:09 min",
    url: "https://youtu.be/RxBsJwYUGpU"
  }, {
    title: "Curupira Pirou",
    authors: "Marcos Suzano e Lenine",
    duration: "5:48 min",
    url: "https://youtu.be/jHm_pwSrkdY"
  }, {
    title: "Carlito Marron",
    authors: "Carlinhos Brown",
    duration: "6:14 min",
    url: "https://youtu.be/Q_AS1KL26Cw"
  }, {
    title: "Carimbó Marajoara",
    authors: "Dorivã Borges",
    duration: "5:10 min",
    url: "https://youtu.be/hsnNsN6gTCI"
  }, {
    title: "Lendas da Mata",
    authors: "João Martins",
    duration: "2:50 min",
    url: "https://youtube.com/shorts/jRlaqtzIvZg"
  }, {
    title: "Oye Como Vá & Guajira",
    authors: "Tito Puente / D. Brown / José Chepitó Areas / Rico Reyes",
    duration: "6:40 min",
    url: "https://youtu.be/IFerUpZ91p8"
  }];
  const band = [{
    name: "Edilson Morais",
    role: "Percussão, Vocal / Direção Musical",
    highlight: "35 anos de carreira nacional e internacional.",
    photo: edilsonPhoto
  }, {
    name: "Luiz Chaffin",
    role: "Guitarra, Cavaco e Bandolim",
    highlight: "Versatilidade e riqueza melódica.",
    photo: luizChaffinPhoto
  }, {
    name: "Luiz Clímaco",
    role: "Guitarra, Violão e Baixo",
    highlight: "Bases sólidas e harmonias refinadas.",
    photo: luizClimacoPhoto
  }];
  const ticketTiers = [{
    title: "Pista",
    price: "R$ 80",
    note: "Entrada geral"
  }, {
    title: "Camarote",
    price: "R$ 120",
    note: "Área VIP com bar exclusivo"
  }, {
    title: "Mesa Premium",
    price: "R$ 200",
    note: "Mesa para 4 pessoas"
  }];
  return <div className="min-h-screen bg-gradient-to-b from-background via-muted to-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <motion.div initial={{
            opacity: 0,
            x: -20
          }} animate={{
            opacity: 1,
            x: 0
          }} className="flex items-center gap-2">
              <Drum className="h-8 w-8 text-primary" />
              <span className="font-bold text-xl">NEGRÓIDE</span>
            </motion.div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {nav.map(item => <a key={item.href} href={item.href} className="text-muted-foreground hover:text-primary transition-smooth font-medium">
                  {item.label}
                </a>)}
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Ingressos
              </Button>
            </div>

            {/* Mobile menu button */}
            <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && <motion.div initial={{
          opacity: 0,
          y: -20
        }} animate={{
          opacity: 1,
          y: 0
        }} className="md:hidden py-4 border-t border-border">
              <div className="flex flex-col space-y-4">
                {nav.map(item => <a key={item.href} href={item.href} className="text-muted-foreground hover:text-primary transition-smooth font-medium" onClick={() => setMobileMenuOpen(false)}>
                    {item.label}
                  </a>)}
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 w-fit">
                  Ingressos
                </Button>
              </div>
            </motion.div>}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: `url(${heroImage})`
      }}>
          <div className="absolute inset-0 bg-background/60" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{
          opacity: 0,
          y: 50
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} className="space-y-8">
            <motion.h1 className="text-5xl md:text-7xl font-bold" initial={{
            opacity: 0,
            scale: 0.8
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            delay: 0.2,
            duration: 0.8
          }}>
              SHOW <span className="text-primary">NEGRÓIDE</span>
            </motion.h1>
            
            <motion.p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto" initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 0.4
          }}>
              com <span className="text-primary font-semibold">Edilson Morais e Banda</span>
            </motion.p>

            

            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center items-center" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.8
          }}>
              
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6">
                <PlayCircle className="mr-2 h-5 w-5" />
                Assistir Prévia
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Ingressos */}
      <section id="ingressos" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <motion.div initial={{
        opacity: 0,
        y: 50
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Ingressos</h2>
          <p className="text-xl text-muted-foreground">Escolha seu lugar e garante sua experiência única</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {ticketTiers.map((tier, index) => <motion.div key={tier.title} initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.2
        }}>
              <TicketTier {...tier} />
            </motion.div>)}
        </div>

        <motion.div initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} viewport={{
        once: true
      }} className="text-center mt-12">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <ExternalLink className="mr-2 h-5 w-5" />
            Comprar Agora
          </Button>
        </motion.div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="surface-elevated">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <motion.div initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Uma Experiência Sonora Única</h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  O <span className="text-primary font-semibold">Show Negróide</span> apresenta uma fusão extraordinária 
                  da percussão brasileira com influências mundiais, liderada pelo mestre Edilson Morais.
                </p>
                <p>
                  Com <span className="text-primary">35 anos de experiência</span> nacional e internacional, 
                  Edilson traz ao palco uma performance que transcende fronteiras musicais, explorando 
                  ritmos afro-brasileiros, caribenhos e latinos.
                </p>
                <p>
                  Acompanhado por uma banda excepcional, o espetáculo promete uma jornada musical 
                  que celebra a diversidade rítmica e a riqueza cultural do Brasil e do mundo.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <Stat title="35 anos" subtitle="de carreira musical" />
              <Stat title="9 músicas" subtitle="no repertório oficial" />
              <Stat title="3 artistas" subtitle="excepcionais no palco" />
              <Stat title="1 noite" subtitle="inesquecível" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Repertório */}
      <section id="repertorio" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <motion.div initial={{
        opacity: 0,
        y: 50
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Repertório Oficial</h2>
          <p className="text-xl text-muted-foreground">Uma seleção cuidadosa de composições autorais e releituras</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repertoire.map((song, index) => <motion.div key={song.title} initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.1
        }}>
              <Card className="bg-card border-border hover-glow transition-smooth cursor-pointer">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{song.title}</span>
                    <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                      {song.duration}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-3">
                  <p><strong>Autores:</strong> {song.authors}</p>
                  <a href={song.url} target="_blank" rel="noreferrer" className="text-primary hover:text-primary/80 inline-flex items-center gap-2 transition-smooth">
                    <Youtube className="h-4 w-4" /> 
                    Assistir no YouTube
                  </a>
                </CardContent>
              </Card>
            </motion.div>)}
        </div>
      </section>

      {/* Banda */}
      <section id="banda" className="surface-elevated">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <motion.div initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">A Banda</h2>
            <p className="text-xl text-muted-foreground">Artistas excepcionais que darão vida a cada nota</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {band.map((member, index) => <motion.div key={member.name} initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.2
          }}>
                <Card className="bg-card border-border hover-glow transition-smooth overflow-hidden">
                  <div className="aspect-square w-full overflow-hidden">
                    <img src={member.photo} alt={member.name} className="h-full w-full object-cover transition-transform hover:scale-105" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm space-y-2">
                    <p className="text-primary font-medium">{member.role}</p>
                    <p className="text-muted-foreground">{member.highlight}</p>
                  </CardContent>
                </Card>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Mídia */}
      <section id="midia" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <motion.div initial={{
        opacity: 0,
        y: 50
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Assista e Sinta a Vibração</h2>
          <p className="text-xl text-muted-foreground">Prévia do que você vai experimentar ao vivo</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {repertoire.slice(0, 6).map((song, index) => <motion.div key={song.title} initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: index * 0.1
        }}>
              <Card className="bg-card border-border hover-glow transition-smooth overflow-hidden">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Youtube className="h-5 w-5 text-red-500" /> 
                    {song.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video w-full overflow-hidden rounded-lg border border-border">
                    <iframe className="h-full w-full" src={song.url.replace("youtu.be/", "www.youtube.com/embed/").replace("youtube.com/shorts/", "www.youtube.com/embed/")} title={song.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                  </div>
                </CardContent>
              </Card>
            </motion.div>)}
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="surface-elevated">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <motion.div initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Entre em Contato</h2>
            <p className="text-xl text-muted-foreground">Para informações, parcerias e imprensa</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div initial={{
            opacity: 0,
            x: -30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Informações do Evento</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span>{date} • {time}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>{venue}, {city}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Ticket className="h-5 w-5 text-primary" />
                    <a href={ticketsUrl} className="text-primary hover:underline">
                      Link para ingressos
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Siga nas Redes</h3>
                <div className="flex gap-4">
                  <Button variant="outline" size="icon" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <Instagram className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <Youtube className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <Mail className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            x: 30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }}>
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle>Entre em Contato</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Nome</label>
                    <input type="text" className="w-full mt-1 px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Seu nome completo" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Email</label>
                    <input type="email" className="w-full mt-1 px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary" placeholder="seu@email.com" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Mensagem</label>
                    <textarea rows={4} className="w-full mt-1 px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none" placeholder="Sua mensagem..." />
                  </div>
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    <Mail className="mr-2 h-4 w-4" />
                    Enviar Mensagem
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Drum className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg">SHOW NEGRÓIDE</span>
            </div>
            <p className="text-muted-foreground mb-4">
              com Edilson Morais e Banda • {date} • {venue}, {city}
            </p>
            <p className="text-sm text-muted-foreground">
              © 2025 Show Negróide. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>;
}
function Stat({
  title,
  subtitle
}: {
  title: string;
  subtitle: string;
}) {
  return <motion.div className="text-center" whileHover={{
    scale: 1.05
  }} transition={{
    type: "spring",
    stiffness: 300
  }}>
      <p className="text-primary font-bold text-2xl mb-1">{title}</p>
      <p className="text-muted-foreground text-sm">{subtitle}</p>
    </motion.div>;
}
function TicketTier({
  title,
  price,
  note
}: {
  title: string;
  price: string;
  note: string;
}) {
  return <Card className="bg-card border-border hover-glow transition-smooth text-center">
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-primary font-bold text-3xl">{price}</p>
        <p className="text-muted-foreground">{note}</p>
        <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
          <Ticket className="mr-2 h-4 w-4" />
          Selecionar
        </Button>
      </CardContent>
    </Card>;
}