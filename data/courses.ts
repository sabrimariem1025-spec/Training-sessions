export interface CourseContent {
  id: number;
  title: string;
  objectives: string[];
  theoreticalContent: string[];
  practicalActivities?: string[];
  assessment?: string[];
  resources?: string[];
  path: 'standard' | 'advanced' | 'students';
}

export const coursesData: CourseContent[] = [
  // ===================== المسار الأساسي =====================
  {
    id: 1,
    title: 'الحصة 1: مدخل إلى الإعلامية',
    objectives: [
      'فهم معنى الإعلامية',
      'التعرّف على مكوّنات الحاسوب',
      'استعمال الفأرة ولوحة المفاتيح',
    ],
    theoreticalContent: [
      'ما هي الإعلامية واستعمالاتها',
      'مكوّنات الحاسوب المادية',
      'البرامج ونظام التشغيل',
    ],
    practicalActivities: [
      'تشغيل وإيقاف الحاسوب',
      'التدرّب على النقر بالفأرة',
      'كتابة الاسم باستعمال لوحة المفاتيح',
    ],
    path: 'standard',
  },

  {
    id: 2,
    title: 'الحصة 2: نظام ويندوز وتنظيم الملفات',
    objectives: [
      'التعرّف على نظام ويندوز',
      'تنظيم الملفات والمجلّدات',
    ],
    theoreticalContent: [
      'سطح المكتب',
      'النوافذ وشريط المهام',
      'الملفات والمجلّدات',
    ],
    practicalActivities: [
      'إنشاء مجلّد',
      'إعادة تسمية ملف',
      'حذف ملف واسترجاعه',
    ],
    path: 'standard',
  },

  {
    id: 3,
    title: 'الحصة 3: برنامج Word',
    objectives: [
      'كتابة نص بسيط',
      'تنسيق النص',
      'حفظ الملف',
    ],
    theoreticalContent: [
      'واجهة Word',
      'الكتابة والتنسيق',
    ],
    practicalActivities: [
      'كتابة فقرة قصيرة',
      'تغيير الخط واللون',
      'حفظ الملف',
    ],
    path: 'standard',
  },

  {
    id: 4,
    title: 'الحصة 4: الإنترنت والاستعمال الآمن',
    objectives: [
      'استعمال الإنترنت',
      'البحث عن معلومات',
      'التعرّف على المخاطر',
    ],
    theoreticalContent: [
      'ما هو الإنترنت',
      'محركات البحث',
      'الأمان الرقمي',
    ],
    path: 'standard',
  },

  {
    id: 5,
    title: 'الحصة 5: البريد الإلكتروني',
    objectives: [
      'إنشاء بريد إلكتروني',
      'إرسال رسالة',
    ],
    theoreticalContent: [
      'البريد الإلكتروني',
      'قواعد كتابة رسالة',
    ],
    path: 'standard',
  },

  // ===================== المسار المتقدّم =====================
  {
    id: 6,
    title: 'الحصة المتقدّمة 1: التصميم باستعمال Canva',
    objectives: [
      'التعرّف على Canva',
      'إنشاء تصميم لمشروع',
    ],
    theoreticalContent: [
      'التصميم الرقمي',
      'أنواع التصاميم',
    ],
    practicalActivities: [
      'اختيار قالب',
      'تعديل النص والصورة',
      'تحميل التصميم',
    ],
    path: 'advanced',
  },

  {
    id: 7,
    title: 'الحصة المتقدّمة 2: مدخل إلى التسويق الرقمي',
    objectives: [
      'فهم التسويق الرقمي',
      'التسويق لمشروع صغير',
    ],
    theoreticalContent: [
      'وسائل التواصل الاجتماعي',
      'المحتوى الجيّد',
    ],
    path: 'advanced',
  },

  // ===================== مسار التلامذة =====================
  {
    id: 8,
    title: 'حصة التلامذة 1: الإعلامية بطريقة مبسّطة',
    objectives: [
      'فهم الحاسوب بطريقة سهلة',
      'التعامل مع الفأرة ولوحة المفاتيح',
    ],
    theoreticalContent: [
      'ما هو الحاسوب',
      'أين نستعمله (الدراسة، الألعاب)',
    ],
    practicalActivities: [
      'رسم بسيط باستعمال Paint',
      'كتابة الاسم',
    ],
    path: 'students',
  },

  {
    id: 9,
    title: 'حصة التلامذة 2: البحث والواجبات المدرسية',
    objectives: [
      'البحث عن معلومات مدرسية',
      'الاستعمال الآمن للإنترنت',
    ],
    theoreticalContent: [
      'Google للبحث',
      'مواقع تعليمية',
    ],
    path: 'students',
  },
];
