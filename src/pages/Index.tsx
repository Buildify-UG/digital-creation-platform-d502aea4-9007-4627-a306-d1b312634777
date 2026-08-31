import { useState } from 'react';
import { MessageCircle, Trash2, Send, ShoppingCart } from 'lucide-react';

interface Service {
  id: string;
  icon: string;
  name: string;
  description: string;
}

interface CartItem extends Service {
  addedAt: number;
}

const services: Service[] = [
  {
    id: '1',
    icon: '🌐',
    name: 'Criação de Sites',
    description: 'Websites modernos, responsivos e otimizados para conversão'
  },
  {
    id: '2',
    icon: '🤖',
    name: 'Bots para WhatsApp',
    description: 'Automação inteligente para atendimento e vendas'
  },
  {
    id: '3',
    icon: '🎨',
    name: 'Criação de Imagens com IA',
    description: 'Imagens profissionais geradas com inteligência artificial'
  },
  {
    id: '4',
    icon: '🖼️',
    name: 'Design e Artes Digitais',
    description: 'Designs criativos e identidade visual completa'
  },
  {
    id: '5',
    icon: '💻',
    name: 'Aplicativos Web',
    description: 'Aplicações web escaláveis e de alta performance'
  },
  {
    id: '6',
    icon: '⚙️',
    name: 'Automação',
    description: 'Processos automatizados para sua empresa'
  },
  {
    id: '7',
    icon: '🧠',
    name: 'Soluções com IA',
    description: 'Inteligência artificial customizada para seus negócios'
  }
];

const Index = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [clientName, setClientName] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const whatsappNumber2 = '5511999999999';

  const addToCart = (service: Service) => {
    setCart([...cart, { ...service, addedAt: Date.now() }]);
  };

  const removeFromCart = (index: number) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const sendWhatsApp = () => {
    if (!clientName || !whatsappNumber || cart.length === 0) {
      alert('Por favor, preencha seu nome, WhatsApp e adicione serviços');
      return;
    }

    const servicesList = cart.map(s => `• ${s.icon} ${s.name}`).join('\n');
    const message = `Olá! Sou ${clientName}\n\n📋 Serviços solicitados:\n${servicesList}\n\n📝 Descrição do projeto:\n${projectDescription || 'Não informado'}\n\n📱 Meu WhatsApp: ${whatsappNumber}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber2}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-purple-950">
      {/* Botão Flutuante WhatsApp */}
      <a
        href={`https://wa.me/${whatsappNumber2}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300 animate-pulse"
      >
        <MessageCircle size={28} />
      </a>

      {/* Botão Carrinho */}
      <button
        onClick={() => setShowCart(!showCart)}
        className="fixed top-6 right-6 z-40 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
      >
        <ShoppingCart size={20} />
        <span className="font-bold">{cart.length}</span>
      </button>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-30 bg-slate-950/80 backdrop-blur-md border-b border-purple-500/20">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            BERTO DEX CREATION 🧠
          </h1>
          <div className="hidden md:flex gap-8">
            <a href="#servicos" className="text-gray-300 hover:text-purple-400 transition">Serviços</a>
            <a href="#contato" className="text-gray-300 hover:text-purple-400 transition">Contato</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Transformamos suas ideias
            </span>
            <br />
            <span className="text-white">em realidade digital</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Criamos sites modernos, bots inteligentes, designs incríveis e soluções com IA. Tudo que sua empresa precisa para crescer no mundo digital.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => setShowCart(true)}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-lg hover:shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              🚀 Solicitar serviço
            </button>
            <a
              href={`https://wa.me/${whatsappNumber2}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold rounded-lg hover:shadow-2xl hover:shadow-green-500/50 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              💬 Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section id="servicos" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Nossos Serviços
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="group relative bg-gradient-to-br from-slate-800 to-slate-900 border border-purple-500/30 rounded-2xl p-6 hover:border-purple-400/60 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 to-blue-600/0 group-hover:from-purple-600/10 group-hover:to-blue-600/10 transition-all duration-300"></div>
                <div className="relative z-10">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h4 className="text-xl font-bold text-white mb-2">{service.name}</h4>
                  <p className="text-gray-400 text-sm mb-6">{service.description}</p>
                  <button
                    onClick={() => addToCart(service)}
                    className="w-full py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300"
                  >
                    Adicionar ao pedido
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Precisa de um projeto personalizado?
          </h3>
          <p className="text-gray-300 mb-8 text-lg">
            Fale diretamente com a BERTO DEX CREATION e vamos transformar sua visão em realidade.
          </p>
          <a
            href={`https://wa.me/${whatsappNumber2}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold rounded-lg hover:shadow-2xl hover:shadow-green-500/50 transform hover:scale-105 transition-all duration-300"
          >
            💬 Conversar agora
          </a>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="bg-slate-950/80 border-t border-purple-500/20 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
                BERTO DEX CREATION 🧠
              </h4>
              <p className="text-gray-400">Tecnologia • Design • IA • Automação</p>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-4">Links Rápidos</h5>
              <div className="space-y-2">
                <a href="#" className="text-gray-400 hover:text-purple-400 transition block">Início</a>
                <a href="#servicos" className="text-gray-400 hover:text-purple-400 transition block">Serviços</a>
                <a href="#contato" className="text-gray-400 hover:text-purple-400 transition block">Contato</a>
              </div>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-4">Contato</h5>
              <a
                href={`https://wa.me/${whatsappNumber2}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition block"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
          <div className="border-t border-purple-500/20 pt-8 text-center text-gray-500">
            <p>&copy; 2024 BERTO DEX CREATION. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Carrinho Lateral */}
      {showCart && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-start justify-end">
          <div className="w-full md:w-96 h-screen bg-gradient-to-b from-slate-900 to-slate-950 border-l border-purple-500/30 overflow-y-auto">
            <div className="p-6 border-b border-purple-500/20 sticky top-0 bg-slate-900/95">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-white">Seu Pedido</h3>
                <button
                  onClick={() => setShowCart(false)}
                  className="text-gray-400 hover:text-white transition"
                >
                  ✕
                </button>
              </div>
            </div>

            <div className="p-6">
              {cart.length === 0 ? (
                <p className="text-gray-400 text-center py-8">Nenhum serviço adicionado</p>
              ) : (
                <>
                  <div className="space-y-3 mb-6">
                    {cart.map((item, index) => (
                      <div
                        key={`${item.id}-${item.addedAt}-${index}`}
                        className="bg-slate-800 border border-purple-500/20 rounded-lg p-3 flex items-center justify-between group"
                      >
                        <div className="flex-1">
                          <p className="text-white font-semibold">{item.icon} {item.name}</p>
                          <p className="text-gray-400 text-sm">{item.description}</p>
                        </div>
                        <button
                          onClick={() => removeFromCart(index)}
                          className="ml-2 text-red-400 hover:text-red-300 transition opacity-0 group-hover:opacity-100"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-purple-500/20 pt-6 space-y-4">
                    <div>
                      <label className="block text-white font-semibold mb-2">Seu Nome</label>
                      <input
                        type="text"
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        placeholder="Digite seu nome"
                        className="w-full bg-slate-800 border border-purple-500/30 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:border-purple-400 focus:outline-none transition"
                      />
                    </div>

                    <div>
                      <label className="block text-white font-semibold mb-2">WhatsApp</label>
                      <input
                        type="tel"
                        value={whatsappNumber}
                        onChange={(e) => setWhatsappNumber(e.target.value)}
                        placeholder="55 11 99999-9999"
                        className="w-full bg-slate-800 border border-purple-500/30 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:border-purple-400 focus:outline-none transition"
                      />
                    </div>

                    <div>
                      <label className="block text-white font-semibold mb-2">Descrição do Projeto</label>
                      <textarea
                        value={projectDescription}
                        onChange={(e) => setProjectDescription(e.target.value)}
                        placeholder="Descreva seu projeto e o que você precisa..."
                        className="w-full bg-slate-800 border border-purple-500/30 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:border-purple-400 focus:outline-none transition h-24 resize-none"
                      />
                    </div>

                    <button
                      onClick={sendWhatsApp}
                      className="w-full py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-green-500/50 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <Send size={20} />
                      Enviar pedido pelo WhatsApp
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
