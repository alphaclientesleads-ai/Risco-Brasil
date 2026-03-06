import React from 'react';
import { Layout } from './components/Layout';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { ServicesSection } from './components/ServicesSection';
import { ProcessSection } from './components/ProcessSection';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { CheckCircle } from 'lucide-react';

export default function App() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Layout>
      <Header scrollTo={scrollTo} />
      <Hero scrollTo={scrollTo} />
      
      <ProblemSection />

      <ServicesSection />

      <ProcessSection />

      <AboutSection />

      {/* Seção Depoimentos */}
      <section id="depoimentos" className="py-20 bg-white border-t border-slate-200 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs text-[var(--color-rb-gold)] font-mono mb-4 block tracking-widest">[ CLIENTES ]</span>
            <h2 className="text-3xl md:text-4xl font-medium text-[var(--color-rb-blue)] tracking-tight">
              O que dizem sobre nós
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                text: "O diagnóstico rápido foi diferencial. Enviei os dados da nossa nova torre residencial e em poucas horas já tinha um retorno claro sobre a viabilidade. Agilidade que o canteiro de obras exige.",
                name: 'Ricardo Santos',
                role: "Diretor de Operações, Construtora Vertical",
                initial: "R"
              },
              {
                text: "A equipe demonstrou expertise que eu nunca vi em outra corretora. Eles traduziram as exigências contratuais complexas em uma proposta sólida e sem furos.",
                name: "Eng. Marcos Deuel",
                role: "Gestor de Projetos, Safeway Groups",
                initial: "M"
              },
              {
                text: "O processo em 4 etapas realmente funciona direto ao ponto, sem burocracia desnecessária. É a primeira vez que sinto que o seguro não trava a minha obra.",
                name: "Clara Mendes",
                role: "CEO, CM Engenharia e Infraestrutura",
                initial: "C"
              },
              {
                text: "Fundamental para nossas licitações públicas. O enquadramento técnico da proposta nos deu a segurança necessária para cumprir as exigências do edital com perfeição.",
                name: "Paulo Vieira",
                role: "Diretor Jurídico, GGE German Gulf",
                initial: "P"
              },
              {
                text: "O que mais me impressionou foi o acompanhamento até a emissão. Eles conduziram todo com a seguradora de forma proativa. Não precisei cobrar uma única vez.",
                name: 'Beatriz Lemos',
                role: "Gerente de Suprimentos, Bucomac Industrial",
                initial: "B"
              },
              {
                text: "Trabalho com segurança do trabalho há 15 anos e sei o valor de uma cobertura bem estruturada. O diagnóstico deles mapeou riscos que passaram despercebidos por outros.",
                name: 'Sérgio Barboza',
                role: "Consultor SST, Previna Consultoria",
                initial: "S"
              },
              {
                text: "Precisávamos de coberturas equivalentes para uma obra industrial de grande porte. A precisão técnica no enquadramento da proposta foi impecável. Parceiros de confiança.",
                name: "Roberto Costa",
                role: "Diretor Técnico, Nova Soluções Industrializadas",
                initial: "R"
              },
              {
                text: "Mais que um serviço, uma consultoria estratégica. Eles entendem as dores de quem constrói e entregam a apólice com uma rapidez que ajuda muito no nosso fluxo de caixa.",
                name: "Fernanda Ramos",
                role: "Financeiro, Grupo Safeway",
                initial: "F"
              }
            ].map((testimonial, i) => {
              return (
              <div key={i} className="spotlight-card rounded-2xl p-6 flex flex-col h-full bg-white shadow-sm border border-slate-200 group hover:border-[var(--color-rb-gold)]/30 transition-colors">
                <div className="flex gap-1 text-[var(--color-rb-gold)] mb-4">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                <p className="text-sm text-slate-600 mb-6 flex-grow leading-relaxed group-hover:text-[var(--color-rb-blue)] transition-colors">"{testimonial.text}"</p>
                
                <div className="flex items-center gap-3 mt-auto pt-4 border-t border-slate-100">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-[var(--color-rb-gold)] font-bold text-lg shrink-0 bg-slate-50 border border-slate-200`}>
                    {testimonial.initial}
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <p className="font-bold text-[var(--color-rb-blue)] leading-none text-sm">{testimonial.name}</p>
                      <CheckCircle className="w-3 h-3 text-[var(--color-rb-gold)]" />
                    </div>
                    <p className="text-[10px] text-slate-500 mt-0.5">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            )})}
          </div>
        </div>
      </section>

      {/* Seção Perguntas Frequentes */}
      <section id="faq" className="py-20 bg-white border-t border-slate-200 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs text-[var(--color-rb-gold)] font-mono mb-4 block tracking-widest">[ FAQ ]</span>
            <h2 className="text-3xl md:text-4xl font-medium text-[var(--color-rb-blue)] tracking-tight">
              Perguntas Frequentes
            </h2>
          </div>
          <div className="space-y-4">
            {[
              {
                pergunta: "Isso serve só para obra grande?",
                resposta: "Não. Há atendimento desde obra pequena até grande porte, o ponto é a exigência do contrato e a necessidade de resolver isso direito."
              },
              {
                pergunta: "Vocês atendem fora de São Paulo?",
                resposta: "Sim. Atuamos desde 2013 com seguros empresariais e riscos complexos em todo o Brasil, com experiência em diversas tipologias de obras e contratos."
              },
              {
                pergunta: "O que eu preciso mandar no primeiro contato?",
                resposta: "Para o diagnóstico inicial, precisamos apenas do tipo de obra, localização, prazo estimado, valor aproximado e, se houver, as exigências contratuais."
              },
              {
                pergunta: "Meu caso é \"específico\". Dá pra fazer?",
                resposta: "Sim. A Risco Brasil é especialista em riscos complexos e soluções customizadas. Traga seu caso para analisarmos."
              },
              {
                pergunta: "Quais documentos preciso para iniciar a cotação?",
                resposta: "Para o diagnóstico inicial, precisamos apenas do tipo de obra, localização, prazo estimado, valor aproximado e, se houver, as exigências contratuais."
              },
              {
                pergunta: "Quanto tempo demora para receber uma proposta?",
                resposta: "Nosso diagnóstico é rápido. Geralmente, em poucas horas após o recebimento dos dados iniciais, já conseguimos dar um retorno sobre a viabilidade."
              },
              {
                pergunta: "Vocês fazem o acompanhamento em caso de sinistro?",
                resposta: "Sim. Nosso trabalho não termina na emissão da apólice. Oferecemos suporte e orientação completa caso ocorra algum sinistro."
              }
            ].map((faq, i) => (
              <div key={i} className="spotlight-card rounded-2xl p-6 bg-slate-50 border border-slate-200 group hover:border-[var(--color-rb-gold)]/30 transition-colors">
                <h3 className="font-medium text-[var(--color-rb-blue)] text-lg mb-2 group-hover:text-[var(--color-rb-gold)] transition-colors">{faq.pergunta}</h3>
                <p className="text-slate-600 font-light leading-relaxed">{faq.resposta}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Formulário Final */}
      <section id="contato-form" className="py-32 bg-[var(--color-rb-blue)] border-t border-slate-800 relative z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(197,160,89,0.05),transparent_50%)] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-xs text-[var(--color-rb-gold)] font-mono mb-4 block tracking-widest">[ CONTATO ]</span>
              <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-8 leading-[1.1]">
                Destrave sua obra <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">agora mesmo.</span>
              </h2>
              <p className="text-lg text-slate-400 font-light mb-8 leading-relaxed">
                Envie os dados essenciais da obra e receba orientação clara sobre enquadramento e cotação. Sem compromisso.
              </p>
            </div>
            
            <div className="spotlight-card rounded-[2rem] p-8 md:p-10 bg-white/5 border border-slate-700 backdrop-blur-xl">
              <form className="space-y-6" onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const data = Object.fromEntries(formData.entries());
                const msg = `Olá! Vim pelo site e gostaria de uma cotação de Seguro de Engenharia.

*Nome:* ${data.nome}${data.cargo ? ' – ' + data.cargo : ''}
*Empresa:* ${data.empresa}
*WhatsApp:* ${data.whatsapp}
*Tipo de obra:* ${data.tipo || 'não informado'}
*Valor aprox.:* ${data.valor || 'não informado'}
*Observações:* ${data.obs || 'nenhuma'}`;
                window.open(`https://wa.me/551123370104?text=${encodeURIComponent(msg)}`, '_blank');
              }}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 uppercase tracking-widest mb-2">Nome</label>
                    <input name="nome" type="text" required className="w-full px-4 py-3 rounded-xl bg-white/5 border border-slate-700 text-white focus:border-[var(--color-rb-gold)] outline-none transition-colors" placeholder="Seu nome" />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-400 uppercase tracking-widest mb-2">Cargo</label>
                    <input name="cargo" type="text" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-slate-700 text-white focus:border-[var(--color-rb-gold)] outline-none transition-colors" placeholder="Ex: Diretor" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 uppercase tracking-widest mb-2">Empresa</label>
                    <input name="empresa" type="text" required className="w-full px-4 py-3 rounded-xl bg-white/5 border border-slate-700 text-white focus:border-[var(--color-rb-gold)] outline-none transition-colors" placeholder="Nome da empresa" />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-400 uppercase tracking-widest mb-2">WhatsApp</label>
                    <input name="whatsapp" type="tel" required className="w-full px-4 py-3 rounded-xl bg-white/5 border border-slate-700 text-white focus:border-[var(--color-rb-gold)] outline-none transition-colors" placeholder="(11) 9 0000-0000" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 uppercase tracking-widest mb-2">Tipo de obra</label>
                    <select name="tipo" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-slate-700 text-white focus:border-[var(--color-rb-gold)] outline-none transition-colors appearance-none">
                      <option value="" className="bg-[var(--color-rb-blue)] text-gray-400">Selecionar…</option>
                      <option className="bg-[var(--color-rb-blue)]">Residencial</option>
                      <option className="bg-[var(--color-rb-blue)]">Comercial</option>
                      <option className="bg-[var(--color-rb-blue)]">Industrial</option>
                      <option className="bg-[var(--color-rb-blue)]">Infraestrutura</option>
                      <option className="bg-[var(--color-rb-blue)]">Outros</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-400 uppercase tracking-widest mb-2">Valor aprox.</label>
                    <select name="valor" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-slate-700 text-white focus:border-[var(--color-rb-gold)] outline-none transition-colors appearance-none">
                      <option value="" className="bg-[var(--color-rb-blue)] text-gray-400">Selecionar…</option>
                      <option className="bg-[var(--color-rb-blue)]">Até R$ 1 Milhão</option>
                      <option className="bg-[var(--color-rb-blue)]">R$ 1M a R$ 5M</option>
                      <option className="bg-[var(--color-rb-blue)]">R$ 5M a R$ 20M</option>
                      <option className="bg-[var(--color-rb-blue)]">Acima de R$ 20M</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-400 uppercase tracking-widest mb-2">Observações</label>
                  <textarea name="obs" rows={3} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-slate-700 text-white focus:border-[var(--color-rb-gold)] outline-none resize-none transition-colors" placeholder="Ex: seguro exigido pelo banco..."></textarea>
                </div>
                
                <button type="submit" className="group relative w-full bg-white text-[var(--color-rb-blue)] py-4 rounded-full font-bold text-lg overflow-hidden transition-transform hover:scale-[1.02] shadow-[0_0_40px_-10px_rgba(255,255,255,0.4)]">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Solicitar Cotação
                  </span>
                  <div className="absolute inset-0 bg-[var(--color-rb-gold)] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-expo"></div>
                </button>
                
                <p className="text-[10px] text-center text-slate-500 uppercase tracking-widest opacity-60">
                  Seus dados são usados apenas para contato.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/551123370104?text=Olá! Vim pelo site da Risco Brasil e gostaria de agendar uma reunião para falar sobre meu projeto de engenharia."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500/90 hover:bg-green-500 text-white p-4 rounded-full shadow-[0_0_30px_rgba(34,197,94,0.4)] transition-all hover:scale-110 flex items-center justify-center group backdrop-blur-sm border border-white/10"
      >
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </Layout>
  );
}
