
import { GoogleGenAI } from "@google/genai";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async getChatResponse(userMessage: string, language: 'ar' | 'en') {
    const systemInstruction = language === 'ar' 
      ? "أنت مستشار ذكي لشركة 'كيان'. كيان تساعد المطاعم على زيادة أرباحها في تطبيقات التوصيل وتقليل الهدر. أجب على استفسارات العملاء بأسلوب احترافي ومشجع وروج لخدماتنا: الإدارة اليومية، تقليل العمولات، إيقاف الهدر الإعلاني، التسعير الاحترافي، كول سنتر، حملات قوقل ماب، وإنشاء تطبيقات خاصة. كن مختصراً وودوداً."
      : "You are an AI consultant for 'Kayan'. Kayan helps restaurants increase profits in delivery apps and reduce waste. Answer client inquiries professionally and encouragingly, promoting our services: daily management, commission reduction, stopping ad waste, professional pricing, call center, Google Maps campaigns, and private app creation. Be concise and friendly.";

    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction: systemInstruction,
          temperature: 0.7,
        },
      });
      return response.text || (language === 'ar' ? 'عذراً، حدث خطأ ما.' : 'Sorry, something went wrong.');
    } catch (error) {
      console.error("Gemini API Error:", error);
      return language === 'ar' ? 'نعتذر، المستشار غير متاح حالياً.' : 'Apologies, the consultant is currently unavailable.';
    }
  }
}
