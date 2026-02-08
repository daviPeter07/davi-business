'use client';

import { servicesData } from '@/src/constants/services';

export function ServicesSection() {
  return (
    <section id="servicos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div
          data-reveal
          className="transition-all duration-1000 opacity-0 translate-y-10 data-[revealed=true]:opacity-100 data-[revealed=true]:translate-y-0"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Nossos <span className="text-primary">Serviços</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
            Soluções completas em software e hardware para impulsionar seu negócio
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {servicesData.map((category) => {
              const IconComponent = category.categoryIcon;
              return (
                <div
                  key={category.title}
                  className="p-8 rounded-lg border bg-card hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">{category.title}</h3>
                  </div>

                  <ul className="space-y-4">
                    {category.services.map((service) => (
                      <li
                        key={service.name}
                        className="border-b border-border/50 pb-4 last:border-b-0"
                      >
                        <h4 className="font-semibold text-foreground mb-1">{service.name}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {service.description}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Não encontrou o serviço que procura? Abra seu caso com nosso time de especialistas e
              vamos desenvolver uma solução personalizada para suas necessidades.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
