'use client';

import { Zap, Target, Users, Award } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="sobre" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div
          data-reveal
          className="transition-all duration-1000 opacity-0 translate-y-10 data-[revealed=true]:opacity-100 data-[revealed=true]:translate-y-0"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Por que <span className="text-primary">Davi Business</span>?
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
            Somos especialistas em transformar desafios técnicos em oportunidades de crescimento
            para seu negócio
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                A Davi Business é uma empresa especializada em desenvolvimento de soluções
                personalizadas de software e hardware. Com anos de experiência em diferentes
                segmentos, entendemos as complexidades do seu negócio e sabemos como tecnologia pode
                impulsionar resultados reais.
              </p>

              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Não somos apenas desenvolvedores—somos parceiros de negócio. Desde a concepção da
                ideia até o suporte contínuo, estamos comprometidos em entregar soluções que geram
                impacto e crescimento mensurável para sua empresa.
              </p>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Trabalham conosco empresas que valorizam inovação, qualidade, agilidade e um
                relacionamento transparente e honesto.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-card rounded-lg border">
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Projetos</div>
                </div>
                <div className="text-center p-4 bg-card rounded-lg border">
                  <div className="text-2xl font-bold text-primary">10+</div>
                  <div className="text-sm text-muted-foreground">Clientes</div>
                </div>
                <div className="text-center p-4 bg-card rounded-lg border">
                  <div className="text-2xl font-bold text-primary">5+</div>
                  <div className="text-sm text-muted-foreground">Anos</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-card rounded-lg border hover:shadow-lg transition-shadow">
                <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Inovação</h3>
                <p className="text-sm text-muted-foreground">
                  Tecnologias modernas e soluções criativas
                </p>
              </div>

              <div className="text-center p-6 bg-card rounded-lg border hover:shadow-lg transition-shadow">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Qualidade</h3>
                <p className="text-sm text-muted-foreground">
                  Código limpo e bem testado em todas as entregas
                </p>
              </div>

              <div className="text-center p-6 bg-card rounded-lg border hover:shadow-lg transition-shadow">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Parceria</h3>
                <p className="text-sm text-muted-foreground">
                  Colaboração real desde o inicio até pós-launch
                </p>
              </div>

              <div className="text-center p-6 bg-card rounded-lg border hover:shadow-lg transition-shadow">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Resultados</h3>
                <p className="text-sm text-muted-foreground">
                  Métricas reais e ROI mensurável em projetos
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
