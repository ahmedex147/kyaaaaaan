
export type Language = 'ar' | 'en';

export interface ServiceItem {
  id: string;
  icon: string;
  title: { ar: string; en: string };
  description: { ar: string; en: string };
  details: { ar: string[]; en: string[] };
}

export interface TranslationDict {
  [key: string]: {
    ar: string;
    en: string;
  };
}
