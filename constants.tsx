
import { ServiceItem, TranslationDict } from './types';

export const TRANSLATIONS: TranslationDict = {
  brandName: { ar: 'كيان', en: 'Kayan' },
  heroTitle: { ar: 'نساعد المطاعم على رفع أرباحهم', en: 'We Help Restaurants Boost Profits' },
  heroSubtitle: { ar: 'في تطبيقات التوصيل (فرع واحد أو سلاسل)', en: 'In Delivery Apps (Single Branch or Chains)' },
  lossWarning: { ar: 'لأن الخسارة ما تفرّق بين كبير وصغير… الفرق في اللي ينتبه 💰', en: "Loss doesn't distinguish between big or small... The difference is in who pays attention 💰" },
  missionStatement: { ar: 'إحنا ما نشتغل إدارة فقط، نشتغل على النتيجة النهائية: ربح أعلى 🔼 وهدر أقل 🔽', en: "We don't just manage; we work for the bottom line: Higher profits 🔼 and lower waste 🔽" },
  ourServices: { ar: 'وش نقدّم لك؟', en: 'What Do We Offer?' },
  freeReview: { ar: 'نبدأ معك بـ مراجعة مجانية وسريعة', en: 'We start with a quick free review' },
  ctaButton: { ar: 'تواصل معنا الآن', en: 'Contact Us Now' },
  aiConsultant: { ar: 'مستشار كيان الذكي', en: 'Kayan AI Consultant' },
  aiPlaceholder: { ar: 'كيف يمكننا مساعدتك اليوم؟', en: 'How can we help your restaurant today?' },
  planMatch: { ar: 'خطة واضحة تناسب حجم نشاطك', en: 'A clear plan that fits your business size' },
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'daily-mgmt',
    icon: '🔥',
    title: { ar: 'إدارة ومتابعة يومية', en: 'Daily Management & Monitoring' },
    description: { ar: 'متابعة حسابات التوصيل والطلبات بشكل يومي', en: 'Daily monitoring of delivery accounts and orders' },
    details: { 
      ar: ['متابعة الطلبات والمشاكل', 'استرجاع مبالغ الطلبات المعترض عليها', '(تعويضات تُخصم من حساب المطعم بدون متابعة)'],
      en: ['Monitoring orders and issues', 'Recovering disputed order amounts', '(Compensation deducted from account without follow-up)']
    }
  },
  {
    id: 'commissions',
    icon: '💰',
    title: { ar: 'تقليل العمولات وتحسين العقود', en: 'Commission Reduction' },
    description: { ar: 'تحسين العقود بما يتناسب مع تسعيرك وهامش ربحك', en: 'Improving contracts to suit your pricing and profit margins' },
    details: {
      ar: ['دراسة العقود الجديدة والقديمة', 'التفاوض لتقليل نسب العمولات', 'ضمان هوامش ربحية مستدامة'],
      en: ['Analyzing new and old contracts', 'Negotiating lower commission rates', 'Ensuring sustainable profit margins']
    }
  },
  {
    id: 'ad-waste',
    icon: '📣',
    title: { ar: 'إيقاف الهدر الإعلاني', en: 'Stop Advertising Waste' },
    description: { ar: 'تحويل الصرف من عشوائي إلى صرف ذكي يجيب نتيجة فعلية', en: 'Transforming random spending into smart spending for actual results' },
    details: {
      ar: ['إدارة قوائم التوب لست (Top List)', 'تحليل النقرات والعروض', 'تحسين ميزانية الإعلانات'],
      en: ['Managing Top Lists', 'Analyzing clicks and offers', 'Optimizing ad budgets']
    }
  },
  {
    id: 'pricing',
    icon: '📊',
    title: { ar: 'تسعير احترافي', en: 'Professional Pricing' },
    description: { ar: 'تسعير أعلى من المحلي بزيادة مدروسة تحافظ على الطلب', en: 'Higher pricing than local with calculated increases that maintain demand' },
    details: {
      ar: ['دراسة المنافسين', 'زيادة مدروسة تحافظ على الربحية', 'تجنب خسائر التوصيل'],
      en: ['Competitor analysis', 'Calculated increases that protect profitability', 'Avoiding delivery-related losses']
    }
  },
  {
    id: 'visibility',
    icon: '🚀',
    title: { ar: 'رفع الظهور', en: 'Boost Visibility' },
    description: { ar: 'رفع ظهور مطعمك في المراتب الأولى بعروض محسوبة', en: 'Lifting your restaurant to top ranks with calculated offers' },
    details: {
      ar: ['تحسين ظهور المطعم', 'عروض لا تأكل من أرباحك', 'تحليل نقاط الظهور'],
      en: ['Improving restaurant visibility', 'Offers that don’t eat into your profits', 'Analyzing visibility hotspots']
    }
  },
  {
    id: 'call-center',
    icon: '📞',
    title: { ar: 'كول سنتر متكامل', en: 'Integrated Call Center' },
    description: { ar: 'بنات مدرّبات لاستقبال الطلبات براتب شهري مناسب', en: 'Trained staff to receive orders at an affordable monthly cost' },
    details: {
      ar: ['تعامل احترافي مع العملاء', 'بدون هموم التوظيف أو الإدارة', 'استمرارية وجودة عالية'],
      en: ['Professional customer handling', 'No recruitment or management headaches', 'Continuity and high quality']
    }
  },
  {
    id: 'google-maps',
    icon: '📍',
    title: { ar: 'حملات قوقل ماب', en: 'Google Maps Campaigns' },
    description: { ar: 'رفع ظهور مطعمك عند البحث القريب وزيادة الاتصالات', en: 'Boosting nearby search visibility and increasing calls' },
    details: {
      ar: ['زيادة الزيارات الفعلية للفرع', 'تحسين التقييمات والتفاعل', 'تحليل نتائج البحث المحلي'],
      en: ['Increasing physical branch visits', 'Improving ratings and engagement', 'Analyzing local search results']
    }
  },
  {
    id: 'custom-app',
    icon: '📱',
    title: { ar: 'تطبيقك الخاص', en: 'Your Private App' },
    description: { ar: 'طلبات مباشرة بدون عمولات مع خطة تسويق متكاملة', en: 'Direct orders with no commissions and a full marketing plan' },
    details: {
      ar: ['تحويل عملاء تطبيقات التوصيل', 'توفير خدمة الاستلام (Pick-up)', 'توفير مناديب توصيل عند الحاجة'],
      en: ['Converting delivery app users', 'Offering pick-up services', 'Providing private couriers when needed']
    }
  }
];
