
import React, { useState, useEffect } from 'react';
import { TRANSLATIONS, SERVICES } from './constants';
import { Language } from './types';
import { GeminiService } from './services/geminiService';
import { 
  Menu, X, Globe, Phone, ChevronRight, ChevronLeft, 
  TrendingUp, TrendingDown, Target, Zap, 
  MessageSquare, Send, Bot, User, CheckCircle2
} from 'lucide-react';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('ar');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string}[]>([]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const gemini = new GeminiService();

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLanguage = () => setLang(prev => prev === 'ar' ? 'en' : 'ar');
  const t = (key: string) => TRANSLATIONS[key][lang];

  const handleSendMessage = async () => {
    if (!userInput.trim()) return;
    const currentInput = userInput;
    setUserInput('');
    setMessages(prev => [...prev, { role: 'user', text: currentInput }]);
    setIsLoading(true);

    const botResponse = await gemini.getChatResponse(currentInput, lang);
    setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
    setIsLoading(false);
  };

  return (
    <div className={`min-h-screen bg-slate-50 text-slate-900 ${lang === 'ar' ? 'font-arabic' : 'font-english'}`}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg">
              K
            </div>
            <span className="text-2xl font-bold text-emerald-800 tracking-tight">{t('brandName')}</span>
          </div>

          <div className="hidden md:flex items-center gap-8 font-semibold">
            <a href="#services" className="hover:text-emerald-600 transition-colors">{t('ourServices')}</a>
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded-full transition-all"
            >
              <Globe size={18} />
              <span>{lang === 'ar' ? 'English' : 'العربية'}</span>
            </button>
            <a 
              href="tel:0569791234" 
              className="bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700 transition-all shadow-md flex items-center gap-2"
            >
              <Phone size={18} />
              <span dir="ltr">0569791234</span>
            </a>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 p-4 space-y-4 shadow-xl">
            <a href="#services" className="block text-lg font-medium" onClick={() => setIsMenuOpen(false)}>{t('ourServices')}</a>
            <button onClick={toggleLanguage} className="flex items-center gap-2 w-full text-lg">
              <Globe size={18} /> {lang === 'ar' ? 'English' : 'العربية'}
            </button>
            <a href="tel:0569791234" className="block bg-emerald-600 text-white text-center py-3 rounded-xl font-bold">
              {t('ctaButton')}
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-10 duration-1000">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
              <Target size={16} />
              {t('brandName')} 👌
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-slate-900">
              {t('heroTitle')} <span className="text-emerald-600 underline decoration-wavy underline-offset-8 decoration-emerald-200">{lang === 'ar' ? 'كيان' : 'Kayan'}</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
              {t('heroSubtitle')}
            </p>
            <div className="bg-white p-6 rounded-2xl shadow-xl border border-slate-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-50 rounded-full -mr-12 -mt-12 transition-transform group-hover:scale-150 duration-700"></div>
              <p className="text-lg font-medium text-slate-800 relative z-10 italic">
                "{t('lossWarning')}"
              </p>
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="tel:0569791234" className="bg-emerald-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-emerald-700 transition-all shadow-lg hover:shadow-emerald-200 flex items-center gap-3 group">
                {t('ctaButton')}
                {lang === 'ar' ? <ChevronLeft className="group-hover:-translate-x-1 transition-transform" /> : <ChevronRight className="group-hover:translate-x-1 transition-transform" />}
              </a>
              <button 
                onClick={() => setChatOpen(true)}
                className="bg-white text-emerald-600 border-2 border-emerald-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-emerald-50 transition-all flex items-center gap-3"
              >
                <Zap size={20} />
                {t('aiConsultant')}
              </button>
            </div>
          </div>

          <div className="relative group animate-in fade-in zoom-in duration-1000 delay-300">
            <div className="absolute -inset-4 bg-emerald-400/20 rounded-3xl blur-2xl group-hover:bg-emerald-400/30 transition-all duration-700"></div>
            <img 
              src="https://picsum.photos/seed/restaurant-profit/800/600" 
              alt="Restaurant Management" 
              className="relative rounded-3xl shadow-2xl border-8 border-white object-cover aspect-video"
            />
            <div className={`absolute bottom-8 ${lang === 'ar' ? '-left-8' : '-right-8'} bg-white p-6 rounded-2xl shadow-2xl space-y-4 max-w-xs transform hover:scale-105 transition-transform duration-500`}>
              <div className="flex items-center justify-between gap-4">
                <span className="font-bold text-emerald-600 flex items-center gap-1"><TrendingUp size={20}/> {lang === 'ar' ? 'ربح أعلى' : 'Higher Profit'}</span>
                <span className="font-bold text-red-500 flex items-center gap-1"><TrendingDown size={20}/> {lang === 'ar' ? 'هدر أقل' : 'Lower Waste'}</span>
              </div>
              <p className="text-sm text-slate-500 border-t pt-4">
                {t('missionStatement')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900">{t('ourServices')}</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">{t('missionStatement')}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service, idx) => (
              <div 
                key={service.id}
                onClick={() => setActiveTab(activeTab === service.id ? null : service.id)}
                className={`group p-8 rounded-3xl transition-all duration-500 cursor-pointer relative overflow-hidden h-full border-2 
                  ${activeTab === service.id 
                    ? 'bg-emerald-600 text-white border-emerald-600 shadow-emerald-200 shadow-2xl scale-105 z-10' 
                    : 'bg-slate-50 border-transparent hover:border-emerald-200 hover:bg-white hover:shadow-xl'
                  }`}
              >
                <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-500">{service.icon}</div>
                <h3 className="text-xl font-bold mb-4">{service.title[lang]}</h3>
                <p className={`text-sm leading-relaxed mb-6 ${activeTab === service.id ? 'text-emerald-50' : 'text-slate-500'}`}>
                  {service.description[lang]}
                </p>
                
                {activeTab === service.id && (
                  <ul className="space-y-3 border-t border-emerald-400 pt-6 animate-in slide-in-from-top-4">
                    {service.details[lang].map((detail, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm font-medium">
                        <CheckCircle2 size={16} className="shrink-0 mt-0.5" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                )}
                
                <div className={`mt-6 text-xs font-bold uppercase tracking-widest ${activeTab === service.id ? 'text-emerald-200' : 'text-emerald-600'}`}>
                  {activeTab === service.id ? (lang === 'ar' ? 'إغلاق التفاصيل' : 'Close Details') : (lang === 'ar' ? 'عرض المزيد' : 'Learn More')}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-emerald-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-[100px] translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-10">
          <div className="inline-block bg-emerald-800 px-6 py-2 rounded-full text-emerald-300 font-bold tracking-widest text-sm mb-4">
            {t('planMatch')}
          </div>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            {t('freeReview')}
          </h2>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
            {lang === 'ar' 
              ? 'سواء عندك فرع واحد أو عدة فروع، نعطيك خطة واضحة تناسب حجم نشاطك'
              : 'Whether you have one branch or many, we provide a clear plan that fits your business size.'}
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-4">
            <a 
              href="tel:0569791234" 
              className="bg-white text-emerald-900 px-10 py-5 rounded-2xl font-bold text-2xl hover:bg-emerald-50 transition-all shadow-2xl flex items-center gap-4 group"
            >
              <Phone size={24} className="group-hover:rotate-12 transition-transform" />
              <span dir="ltr">0569791234</span>
            </a>
          </div>
          <div className="pt-10 flex flex-wrap justify-center gap-8 opacity-60">
            <span className="flex items-center gap-2 font-semibold"><CheckCircle2 size={20}/> {lang === 'ar' ? 'مراجعة مجانية' : 'Free Review'}</span>
            <span className="flex items-center gap-2 font-semibold"><CheckCircle2 size={20}/> {lang === 'ar' ? 'بدون التزامات' : 'No Obligations'}</span>
            <span className="flex items-center gap-2 font-semibold"><CheckCircle2 size={20}/> {lang === 'ar' ? 'نتائج ملموسة' : 'Proven Results'}</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-900 text-slate-400 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
              K
            </div>
            <span className="text-xl font-bold text-white">{t('brandName')} 👌</span>
          </div>
          
          <div className="flex gap-8 text-sm font-medium">
            <a href="#services" className="hover:text-emerald-400">{t('ourServices')}</a>
            <a href="tel:0569791234" className="hover:text-emerald-400">{t('ctaButton')}</a>
          </div>

          <div className="text-sm">
            &copy; {new Date().getFullYear()} {t('brandName')}. {lang === 'ar' ? 'جميع الحقوق محفوظة.' : 'All rights reserved.'}
          </div>
        </div>
      </footer>

      {/* AI Assistant Toggle Button */}
      {!chatOpen && (
        <button 
          onClick={() => setChatOpen(true)}
          className={`fixed bottom-8 ${lang === 'ar' ? 'left-8' : 'right-8'} bg-emerald-600 text-white p-4 rounded-full shadow-2xl hover:bg-emerald-700 transition-all z-40 group flex items-center gap-2`}
        >
          <div className="w-8 h-8 flex items-center justify-center bg-white/20 rounded-full">
            <Bot size={20} />
          </div>
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap font-bold pr-2">
            {t('aiConsultant')}
          </span>
        </button>
      )}

      {/* AI Chat Window */}
      {chatOpen && (
        <div className={`fixed bottom-0 ${lang === 'ar' ? 'left-0' : 'right-0'} md:bottom-8 md:mx-8 w-full md:w-[400px] h-full md:h-[600px] bg-white md:rounded-3xl shadow-2xl z-50 flex flex-col overflow-hidden border border-slate-200 animate-in slide-in-from-bottom-20 duration-500`}>
          <div className="bg-emerald-600 p-6 text-white flex items-center justify-between shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot size={24} />
              </div>
              <div>
                <h4 className="font-bold">{t('aiConsultant')}</h4>
                <p className="text-xs text-emerald-100 flex items-center gap-1">
                  <span className="w-2 h-2 bg-emerald-300 rounded-full animate-pulse"></span>
                  {lang === 'ar' ? 'متاح الآن لمساعدتك' : 'Available now to help'}
                </p>
              </div>
            </div>
            <button onClick={() => setChatOpen(false)} className="hover:bg-emerald-700 p-2 rounded-lg transition-colors">
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-50">
            {messages.length === 0 && (
              <div className="text-center py-10 space-y-4">
                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full mx-auto flex items-center justify-center">
                  <Bot size={40} />
                </div>
                <p className="text-slate-500 font-medium">{t('aiPlaceholder')}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  <button 
                    onClick={() => { setUserInput(lang === 'ar' ? 'كيف ترفعون أرباح المطاعم؟' : 'How do you increase restaurant profits?'); }}
                    className="text-xs bg-white border border-slate-200 px-3 py-2 rounded-full hover:border-emerald-300 hover:text-emerald-600 transition-all"
                  >
                    {lang === 'ar' ? 'كيف ترفعون الأرباح؟' : 'How do you increase profits?'}
                  </button>
                  <button 
                    onClick={() => { setUserInput(lang === 'ar' ? 'هل لديكم خدمة كول سنتر؟' : 'Do you have a call center service?'); }}
                    className="text-xs bg-white border border-slate-200 px-3 py-2 rounded-full hover:border-emerald-300 hover:text-emerald-600 transition-all"
                  >
                    {lang === 'ar' ? 'خدمة الكول سنتر' : 'Call center service'}
                  </button>
                </div>
              </div>
            )}
            {messages.map((m, idx) => (
              <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} animate-in zoom-in-95 duration-300`}>
                <div className={`max-w-[80%] p-4 rounded-2xl flex gap-3 ${
                  m.role === 'user' 
                    ? 'bg-emerald-600 text-white rounded-br-none' 
                    : 'bg-white text-slate-800 shadow-sm border border-slate-100 rounded-bl-none'
                }`}>
                  {m.role === 'bot' && <Bot size={18} className="shrink-0 mt-1" />}
                  <div className="text-sm leading-relaxed whitespace-pre-wrap">{m.text}</div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-2xl border border-slate-100 flex gap-2">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce delay-150"></span>
                  <span className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce delay-300"></span>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white border-t border-slate-200">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder={t('aiPlaceholder')}
                className="flex-1 bg-slate-100 px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
              />
              <button 
                onClick={handleSendMessage}
                disabled={isLoading || !userInput.trim()}
                className="bg-emerald-600 text-white p-3 rounded-xl hover:bg-emerald-700 disabled:opacity-50 transition-all"
              >
                <Send size={20} />
              </button>
            </div>
            <p className="text-[10px] text-center text-slate-400 mt-2">
              Powered by Kayan AI & Gemini 3
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
