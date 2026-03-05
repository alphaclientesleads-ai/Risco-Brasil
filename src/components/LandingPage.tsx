import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Clock, 
  FileText, 
  CheckCircle2, 
  AlertTriangle, 
  ArrowRight, 
  Menu, 
  X, 
  Phone, 
  Building2, 
  HardHat, 
  FileCheck 
} from 'lucide-react';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* Top Bar */}
      <div className="bg-slate-900 text-white py-2 px-4 text-center text-sm font-medium">
        Corretora especializada em seguros empresariais e riscos complexos desde 2013.
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold tracking-tight text-slate-900">RISCO BRASIL</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('como-funciona')} className="text-slate-600 hover:text-slate-900 text-sm font-medium transition-colors">Como funciona</button>
              <button onClick={() => scrollToSection('quem-somos')} className="text-slate-600 hover:text-slate-900 text-sm font-medium transition-colors">Quem somos</button>
              <button onClick={() => scrollToSection('duvidas')} className="text-slate-600 hover:text-slate-900 text-sm font-medium transition-colors">Dúvidas</button>
              <a href="https://wa.me/551123370104" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-slate-900 text-sm font-medium transition-colors flex items-center gap-2">
                <Phone className="w-4 h-4" />
                WhatsApp
              </a>
              <button 
                onClick={() => scrollToSection('cotacao')}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm"
              >
                Pedir cotação
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-slate-600 hover:text-slate-900 p-2">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-b border-slate-100 shadow-lg absolute w-full"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              <button onClick={() => scrollToSection('como-funciona')} className="block w-full text-left px-3 py-3 text-slate-600 hover:bg-slate-50 rounded-lg font-medium">Como funciona</button>
              <button onClick={() => scrollToSection('quem-somos')} className="block w-full text-left px-3 py-3 text-slate-600 hover:bg-slate-50 rounded-lg font-medium">Quem somos</button>
              <button onClick={() => scrollToSection('duvidas')} className="block w-full text-left px-3 py-3 text-slate-600 hover:bg-slate-50 rounded-lg font-medium">Dúvidas</button>
              <a href="https://wa.me/551123370104" target="_blank" rel="noopener noreferrer" className="block w-full text-left px-3 py-3 text-slate-600 hover:bg-slate-50 rounded-lg font-medium flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Falar no WhatsApp
              </a>
              <button 
                onClick={() => scrollToSection('cotacao')}
                className="w-full mt-4 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-3 rounded-lg font-medium shadow-sm"
              >
                Pedir cotação
              </button>
            </div>
          </motion.div>
        )}
      </nav>

      {/* 1) HERO */}
      <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl lg:text-5xl/tight font-bold text-slate-900 mb-6 tracking-tight">
                Seguro de Engenharia <span className="text-emerald-600">aderente ao seu contrato</span> — para evitar apólices rejeitadas e obra travada.
              </h1>
              <h2 className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
                Corretora especialista em riscos complexos. Nós <strong className="text-slate-900 font-semibold">interpretamos as exigências contratuais</strong> e conduzimos a cotação com clareza e agilidade para construtoras, incorporadoras e empresas de engenharia.
              </h2>

              <ul className="space-y-4 mb-10">
                {[
                  "Apólice alinhada ao que foi exigido (sem “cobertura diferente com nome parecido”)",
                  "Menos idas e voltas com seguradora por falta de enquadramento",
                  "Atendimento directo e consultivo (sem “fila de suporte”)"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a 
                  href="https://wa.me/551123370104" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center px-6 py-3.5 border border-transparent text-base font-semibold rounded-xl text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm hover:shadow-md transition-all"
                >
                  Solicitar cotação (WhatsApp)
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <button 
                  onClick={() => scrollToSection('cotacao')}
                  className="inline-flex justify-center items-center px-6 py-3.5 border border-slate-200 text-base font-semibold rounded-xl text-slate-700 bg-white hover:bg-slate-50 shadow-sm transition-all"
                >
                  Falar com especialista
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-slate-100">
                <div>
                  <div className="text-2xl font-bold text-slate-900">+11</div>
                  <div className="text-sm text-slate-500 font-medium">Anos de mercado</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">100%</div>
                  <div className="text-sm text-slate-500 font-medium">Foco em riscos complexos</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">48h*</div>
                  <div className="text-sm text-slate-500 font-medium">Resposta inicial</div>
                </div>
              </div>
              <p className="text-xs text-slate-400 mt-4 max-w-md">
                *Após envio das informações essenciais e em horário comercial. Emissão sujeita à análise da seguradora e ao enquadramento do risco.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-100/50 to-blue-50/50 rounded-3xl transform rotate-3 scale-95 -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Engenheiros em obra analisando projeto" 
                className="rounded-2xl shadow-xl w-full object-cover h-[600px]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2) IDENTIFICAÇÃO / DOR */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            O problema real: seguro tratado no automático custa caro.
          </h2>
          <p className="text-lg text-slate-600">
            Deixar o seguro da sua obra na mão de corretoras sem experiência em engenharia é um risco financeiro desnecessário. Na prática, três coisas acontecem:
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: FileText,
                title: "01 — A apólice é rejeitada",
                desc: "O contrato exigia cobertura “X”. A apólice veio “Y”. O cliente rejeita. A obra não começa.",
                highlight: "A obra não começa."
              },
              {
                icon: Clock,
                title: "02 — Dias de atraso e vai-e-vem",
                desc: "Falta de informação técnica e enquadramento errado gera retrabalho. Cada rodada de ajuste vira mais 3, 5, 7 dias — e o cronograma paga a conta.",
                highlight: "o cronograma paga a conta."
              },
              {
                icon: AlertTriangle,
                title: "03 — Dor de cabeça no sinistro",
                desc: "Quando o imprevisto acontece, você descobre que as entrelinhas não cobriam a realidade da obra. O barato vira caro.",
                highlight: "O barato vira caro."
              }
            ].map((card, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6">
                  <card.icon className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{card.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {card.desc.replace(card.highlight, "")}
                  <strong className="text-slate-900 font-semibold">{card.highlight}</strong>
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-xl font-medium text-slate-900 bg-red-50 inline-block px-6 py-3 rounded-lg border border-red-100">
              Obra parada não é só custo: é multa, perda de prazo e desgaste com o cliente final.
            </p>
          </div>
        </div>
      </section>

      {/* 3) O QUE EU FAÇO */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">
              Nós fazemos o seguro “caber” no contrato — não o contrário.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: FileCheck,
                title: "Leitura e interpretação",
                desc: "Analisamos as exigências contratuais (cliente, banco, concessionária) para garantir conformidade total."
              },
              {
                icon: ShieldCheck,
                title: "Enquadramento do risco",
                desc: "Estruturamos a cotação para ser coerente e viável, evitando coberturas desnecessárias ou insuficientes."
              },
              {
                icon: Building2,
                title: "Condução até a emissão",
                desc: "Acompanhamento próximo e orientação técnica durante todo o processo até a apólice estar em mãos."
              }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mb-6">
                  <item.icon className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4) COMO FUNCIONA */}
      <section id="como-funciona" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              O processo “sem atrito”: liberamos a sua obra em 3 passos.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-slate-700 z-0"></div>

            {[
              {
                step: "01",
                title: "Diagnóstico rápido",
                desc: "Você envia o essencial: tipo de obra, localização, prazo e exigências do contrato. Sem formulário gigante."
              },
              {
                step: "02",
                title: "Enquadramento e proposta",
                desc: "Nós traduzimos o contrato em requisitos de seguro e estruturamos uma proposta equivalente ao que foi exigido."
              },
              {
                step: "03",
                title: "Emissão e acompanhamento",
                desc: "Com tudo alinhado, conduzimos o processo e acompanhamos os próximos passos até a liberação."
              }
            ].map((item, idx) => (
              <div key={idx} className="relative z-10 bg-slate-800 p-8 rounded-2xl border border-slate-700">
                <div className="text-4xl font-bold text-emerald-500 mb-4 opacity-50">{item.step}</div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-300">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button 
              onClick={() => scrollToSection('cotacao')}
              className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-lg font-semibold rounded-xl text-slate-900 bg-emerald-400 hover:bg-emerald-500 shadow-lg hover:shadow-emerald-500/20 transition-all"
            >
              Quero a minha cotação
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* 5) QUEM FAZ */}
      <section id="quem-somos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Especialistas em riscos complexos desde 2013. Você foca na obra. Nós focamos no seguro.
              </h2>
              <div className="space-y-4">
                {[
                  "Atuação desde 2013 no mercado segurador",
                  "Atendimento em todo o território nacional",
                  "Foco exclusivo em riscos patrimoniais e financeiros para empresas",
                  "Atendimento consultivo e personalizado (sem robôs)"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                    <p className="text-slate-700 font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-100 rounded-2xl p-8 border border-slate-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <HardHat className="w-6 h-6 text-slate-900" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Risco Brasil</h3>
                  <p className="text-sm text-slate-500">Desde 2013</p>
                </div>
              </div>
              <p className="text-slate-600 italic">
                "Nosso objetivo é tirar a complexidade da mesa. O engenheiro precisa se preocupar com a fundação, não com a cláusula 4.2 da apólice. Isso é com a gente."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6) PROVA SOCIAL */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-slate-900">Situações reais que resolvemos</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Exigência Bancária",
                desc: "Obra com exigência de banco e prazo curto. Proposta estruturada em 24h sem desgaste, permitindo liberação do financiamento."
              },
              {
                title: "Contrato Complexo",
                desc: "Contrato com coberturas específicas e não-padrão. Exigências interpretadas e alinhadas com a seguradora para evitar rejeição."
              },
              {
                title: "Troca de Corretora",
                desc: "Cliente insatisfeito com corretora genérica. Assumimos o processo com atendimento direto e técnico, eliminando ruídos."
              }
            ].map((caseItem, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                <h3 className="font-bold text-slate-900 mb-2">{caseItem.title}</h3>
                <p className="text-slate-600 text-sm">{caseItem.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7) DÚVIDAS */}
      <section id="duvidas" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              O que a gente ouve — e o que acontece na prática.
            </h2>
          </div>

          <div className="space-y-8">
            {[
              {
                q: "“Só preciso cumprir a exigência do contrato. É simples.”",
                a: "É simples quando é feito certo. Se sair errado, a obra trava igual. Nós garantimos que saia certo na primeira vez."
              },
              {
                q: "“Estou comparando preços com outras corretoras.”",
                a: "Comparar faz sentido — mas preço muda com coberturas. Aqui você compara propostas equivalentes, não laranjas com bananas."
              },
              {
                q: "“Não tenho tempo para burocracia.”",
                a: "Você não precisa ter. Você envia o essencial e nós conduzimos o processo burocrático com a seguradora."
              },
              {
                q: "“Já sei qual seguradora quero usar.”",
                a: "Sem problema — cotamos seguradoras específicas quando compatíveis com o risco e com o contrato."
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                <p className="text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8) CTA FORTE (Formulário) */}
      <section id="cotacao" className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  Obra parada é perda de dinheiro e desgaste com o cliente.
                </h2>
                <p className="text-slate-600">
                  Preencha os dados essenciais. A nossa equipa retorna em horário comercial com uma proposta técnica — não com respostas automáticas.
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Nome</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all" placeholder="Seu nome completo" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Cargo</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all" placeholder="Ex: Diretor, Engenheiro..." />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Empresa</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all" placeholder="Nome da empresa" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">WhatsApp</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all" placeholder="(00) 00000-0000" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Tipo de obra</label>
                    <select className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all bg-white">
                      <option value="">Selecione...</option>
                      <option value="residencial">Residencial</option>
                      <option value="comercial">Comercial</option>
                      <option value="industrial">Industrial</option>
                      <option value="infraestrutura">Infraestrutura</option>
                      <option value="outros">Outros</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Valor aprox. da obra</label>
                    <select className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all bg-white">
                      <option value="">Selecione...</option>
                      <option value="ate-1m">Até R$ 1 Milhão</option>
                      <option value="1m-5m">R$ 1M a R$ 5M</option>
                      <option value="5m-20m">R$ 5M a R$ 20M</option>
                      <option value="acima-20m">Acima de R$ 20M</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Exigência do contrato / Observações</label>
                  <textarea rows={3} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all" placeholder="Descreva brevemente a necessidade..."></textarea>
                </div>

                <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-emerald-500/30 transition-all text-lg">
                  Receber a minha proposta técnica →
                </button>

                <p className="text-center text-xs text-slate-400 mt-4">
                  Seus dados são usados apenas para contacto e proposta. Sem spam.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 9) ENCERRAMENTO */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Se o seu contrato exige Seguro de Engenharia, o que destrava a obra é enquadramento correcto.
          </h2>
          <p className="text-slate-600 mb-8">
            Fale com a Risco Brasil e avance com clareza, conformidade e suporte consultivo.
          </p>
          <a 
            href="https://wa.me/551123370104" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-emerald-600 font-bold hover:text-emerald-700 transition-colors"
          >
            Pedir cotação no WhatsApp
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-white font-bold text-lg mb-2">Risco Brasil Corretora de Seguros</h3>
              <p className="text-sm mb-1">CNPJ 17.894.463/0001-47</p>
              <p className="text-sm">R. Pequetita, 145 – Cj. 91 • Vl. Olímpia – São Paulo/SP</p>
            </div>
            <div className="md:text-right space-y-2">
              <p className="text-white font-medium">(11) 2337-0104</p>
              <a href="mailto:contato@riscobrasil.com" className="block hover:text-white transition-colors">contato@riscobrasil.com</a>
              <div className="text-xs space-x-4 mt-4">
                <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
                <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
