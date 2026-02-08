'use client';

import { ArrowDown, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/src/components/ui/button';

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-background via-background to-muted/20"
    >
      <div className="container mx-auto px-4 text-center">
        <div
          data-reveal
          className="transition-all duration-1000 opacity-0 translate-y-10 data-[revealed=true]:opacity-100 data-[revealed=true]:translate-y-0"
        >
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="text-primary">Davi Business</span>
            </h1>
            <div className="h-1 w-20 bg-primary mx-auto mb-6" />
          </div>

          <p className="text-lg md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto font-semibold">
            Transforme Sua Visão em Realidade Digital
          </p>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
            Soluções personalizadas de software e hardware para empresas que querem crescer. Da
            ideia à escalabilidade, estamos aqui para impulsionar seu negócio com tecnologia de
            ponta.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => scrollToSection('servicos')}
            >
              Conheça Nossos Serviços
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300 bg-transparent"
              onClick={() => scrollToSection('contato')}
            >
              Solicitar Orçamento
            </Button>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 text-muted-foreground mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
              <a
                href="mailto:contato@davibusiness.com.br"
                className="flex flex-col items-center gap-2 hover:text-primary transition-colors p-4 rounded-lg hover:bg-muted/30"
              >
                <Mail className="h-6 w-6" />
                <span className="text-sm font-medium">contato@davibusiness.com.br</span>
              </a>
              <a
                href="tel:+5592992584985"
                className="flex flex-col items-center gap-2 hover:text-primary transition-colors p-4 rounded-lg hover:bg-muted/30"
              >
                <Phone className="h-6 w-6" />
                <span className="text-sm font-medium">(92) 99258-4985</span>
              </a>
              <div className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-muted/30">
                <MapPin className="h-6 w-6" />
                <span className="text-sm font-medium">Brasil</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection('sobre')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="h-6 w-6 text-primary" />
      </button>
    </section>
  );
}
