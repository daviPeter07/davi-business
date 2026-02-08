'use client';

import { clients } from '@/src/constants/clients';

export function ClientsSection() {
  return (
    <section id="clientes" className="py-20">
      <div className="container mx-auto px-4">
        <div
          data-reveal
          className="transition-all duration-1000 opacity-0 translate-y-10 data-[revealed=true]:opacity-100 data-[revealed=true]:translate-y-0"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Empresas que <span className="text-primary">Confiam</span> em Nós
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
            Trabalhamos com empresas de diferentes segmentos que buscam inovação e crescimento
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {clients.map((client) => (
              <div
                key={client.name}
                className="flex flex-col items-center text-center p-8 rounded-lg border bg-card hover:shadow-lg transition-all hover:scale-105"
              >
                <div className="w-24 h-24 mb-4 rounded-lg bg-muted flex items-center justify-center border-2 border-primary/20">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-w-20 max-h-20 object-contain"
                    onError={(e) => {
                      // Fallback if logo not found
                      const element = e.target as HTMLElement;
                      element.style.display = 'none';
                      if (element.parentElement) {
                        element.parentElement.innerHTML = `<span className="text-sm font-semibold">${client.name}</span>`;
                      }
                    }}
                  />
                </div>

                <h3 className="text-xl font-bold mb-2">{client.name}</h3>

                {client.description && (
                  <p className="text-sm text-muted-foreground mb-4">{client.description}</p>
                )}

                {client.website && (
                  <a
                    href={client.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline"
                  >
                    Visite o site →
                  </a>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Sua empresa pode ser a próxima a crescer com a gente.
              <br />
              <span className="text-primary font-semibold">Entre em contato</span> e vamos
              conversar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
