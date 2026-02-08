'use client';

import { Github, Linkedin, Mail, Heart, Building2 } from 'lucide-react';

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 place-items-center text-center">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">Davi Business</h3>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Soluções personalizadas de software e hardware que transformam ideias em resultados
              reais para seu negócio crescer.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('inicio')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('sobre')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('projetos')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Projetos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contato')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="space-y-2">
              <p className="text-muted-foreground text-sm">
                <a
                  href="mailto:contato@davibusiness.com.br"
                  className="hover:text-primary transition-colors"
                >
                  contato@davibusiness.com.br
                </a>
              </p>
              <p className="text-muted-foreground text-sm">
                <a href="tel:+5592992584985" className="hover:text-primary transition-colors">
                  (92) 99258-4985
                </a>
              </p>
              <p className="text-muted-foreground text-sm">Brasil</p>
            </div>
          </div>
        </div>

        {/* Rodapé final */}
        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-xs mb-2 flex items-center justify-center gap-2">
            <Building2 className="h-4 w-4" />
            CNPJ: 64.616.637/0001-90
          </p>
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            Feito com <Heart className="h-4 w-4 text-red-500" /> para empresas que crescem © 2026
            Davi Business
          </p>
        </div>
      </div>
    </footer>
  );
}
