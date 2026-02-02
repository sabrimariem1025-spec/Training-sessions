export interface CourseContent {
  id: number;
  title: string;
  objectives: string[];
  theoreticalContent: string[];
  practicalActivities?: string[];
  assessment?: string[];
  resources?: string[];
  path: 'standard' | 'advanced' | 'students'|'university';
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
{
  id: 6,
  title: 'الحصة 6: إنشاء سيرة ذاتية (CV) باستعمال Word',
  objectives: [
    'فهم ما هي السيرة الذاتية',
    'التعرّف على مكوّنات الـ CV',
    'إنشاء CV بسيط باستعمال Word',
  ],
  theoreticalContent: [
    'ما هو الـ CV ولماذا نحتاجه',
    'المعلومات الشخصية',
    'التجربة، التكوين، المهارات',
    'قواعد الـ CV الجيّد',
  ],
  practicalActivities: [
    'فتح نموذج CV في Word',
    'كتابة المعلومات الشخصية',
    'تنسيق العناوين والخطوط',
    'حفظ الـ CV بصيغة PDF',
  ],
  path: 'standard',
},


// ===================== المسار المتقدّم =====================
{
  id: 6,
  title: 'الحصة المتقدّمة 1: التصميم باستعمال Canva',
  objectives: [
    'التعرّف على Canva',
    'إنشاء تصميم بسيط لمشروع',
  ],
  theoreticalContent: [
    'ما هو التصميم الرقمي',
    'أنواع التصاميم (Poster, Logo, Post)',
  ],
  practicalActivities: [
    'إنشاء حساب Canva',
    'اختيار قالب',
    'تعديل النص والصورة',
  ],
  path: 'advanced',
},

{
  id: 7,
  title: 'الحصة المتقدّمة 2: إنشاء محتوى رقمي جذّاب',
  objectives: [
    'كتابة محتوى واضح',
    'اختيار صور مناسبة',
  ],
  theoreticalContent: [
    'المحتوى الجيّد',
    'أهمية الصورة والعنوان',
  ],
  practicalActivities: [
    'كتابة منشور فيسبوك',
    'تصميم منشور بسيط',
  ],
  path: 'advanced',
},

{
  id: 8,
  title: 'الحصة المتقدّمة 3: مدخل إلى التسويق الرقمي',
  objectives: [
    'فهم التسويق الرقمي',
    'التعريف بالمشروع على الإنترنت',
  ],
  theoreticalContent: [
    'وسائل التواصل الاجتماعي',
    'الجمهور المستهدف',
  ],
  practicalActivities: [
    'اختيار صفحة مناسبة للمشروع',
    'تحليل منشورات ناجحة',
  ],
  path: 'advanced',
},

{
  id: 9,
  title: 'الحصة المتقدّمة 4: إدارة صفحة فيسبوك لمشروع',
  objectives: [
    'إدارة صفحة فيسبوك',
    'نشر محتوى بانتظام',
  ],
  theoreticalContent: [
    'إعداد الصفحة',
    'أنواع المنشورات',
  ],
  practicalActivities: [
    'إنشاء صفحة',
    'نشر أول منشور',
  ],
  path: 'advanced',
},

{
  id: 10,
  title: 'الحصة المتقدّمة 5: اختبار تقييمي شامل',
  objectives: [
    'تقييم المكتسبات',
    'تثبيت المعارف',
  ],
  theoreticalContent: [
    'أسئلة حول الإعلامية الأساسية',
    'Canva والتسويق الرقمي',
  ],
  practicalActivities: [
    'Test نظري',
    'تمرين تطبيقي بسيط',
  ],
  path: 'advanced',
},
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

  // ===================== مسار التلامذة – صغار =====================
{
  id: 11,
  title: 'حصة التلامذة 2: استعمال لوحة المفاتيح',
  objectives: [
    'التعرّف على الحروف',
    'الكتابة بطريقة صحيحة',
  ],
  theoreticalContent: [
    'الحروف العربية والفرنسية',
  ],
  practicalActivities: [
    'كتابة الاسم',
    'كتابة كلمات بسيطة',
  ],
  path: 'students',
},

{
  id: 12,
  title: 'حصة التلامذة 3: الرسام Paint – مستوى متقدّم',
  objectives: [
    'تنمية الخيال',
    'استعمال الأدوات',
  ],
  theoreticalContent: [
    'الألوان والأشكال',
  ],
  practicalActivities: [
    'رسم منزل',
    'تلوين صورة',
  ],
  path: 'students',
},

{
  id: 13,
  title: 'حصة التلامذة 4: مشاهدة فيديوهات تعليمية',
  objectives: [
    'التعلّم عبر الفيديو',
    'التمييز بين المفيد وغير المفيد',
  ],
  theoreticalContent: [
    'YouTube للأطفال',
  ],
  practicalActivities: [
    'مشاهدة فيديو تعليمي',
  ],
  path: 'students',
},

{
  id: 14,
  title: 'حصة التلامذة 5: ألعاب تعليمية',
  objectives: [
    'التعلّم باللعب',
  ],
  theoreticalContent: [
    'ألعاب تعليمية',
  ],
  practicalActivities: [
    'ألعاب حروف وأرقام',
  ],
  path: 'students',
},

{
  id: 15,
  title: 'حصة التلامذة 6: التوعية بالأمان الرقمي',
  objectives: [
    'التصرّف الآمن',
  ],
  theoreticalContent: [
    'عدم مشاركة المعلومات الشخصية',
  ],
  practicalActivities: [
    'تمثيل مواقف',
  ],
  path: 'students',
},

{
  id: 16,
  title: 'حصة التلامذة 7: تقييم ولعب حر',
  objectives: [
    'تثبيت المكتسبات',
  ],
    theoreticalContent: [
  ],
  practicalActivities: [
    'نشاط حر',
    'ألعاب مراجعة',
  ],
  path: 'students',
},
// ===================== مسار تلامذة المعاهد (Lycée) =====================
{
  id: 17,
  title: 'حصة المعهد 1: البحث المتقدّم والموثوق',
  objectives: [
    'التحقّق من المصادر',
  ],
  theoreticalContent: [
    'المواقع الموثوقة',
    'الأخبار الزائفة',
  ],
  path: 'students',
},

{
  id: 18,
  title: 'حصة المعهد 2: Word للبحوث المدرسية',
  objectives: [
    'تنسيق بحث مدرسي',
  ],
  theoreticalContent: [],
  practicalActivities: [
    'كتابة بحث قصير',
  ],
  path: 'students',
},

{
  id: 19,
  title: 'حصة المعهد 3: PowerPoint لإنجاز العروض',
  objectives: [
    'إنجاز عرض تقديمي',
  ],
  theoreticalContent: [],
  path: 'students',
},

{
  id: 20,
  title: 'حصة المعهد 4: البريد الإلكتروني والتواصل الرسمي',
  objectives: [
    'التواصل الرسمي عبر البريد الإلكتروني',
  ],
  theoreticalContent: [],
  path: 'students',
},

{
  id: 21,
  title: 'حصة المعهد 5: الوعي الرقمي وحماية الحسابات',
  objectives: [
    'حماية الحسابات الشخصية',
  ],
  theoreticalContent: [],
  path: 'students',
},

{
  id: 22,
  title: 'حصة المعهد 6: مشروع تطبيقي مدرسي',
  objectives: [
    'تطبيق ما تم تعلّمه',
  ],
  theoreticalContent: [],
  practicalActivities: [
    'بحث + عرض تقديمي',
  ],
  path: 'students',
},

// ===================== المسار الجامعي =====================
{
  id: 23,
  title: 'المسار الجامعي 1: HTML',
  objectives: ['إنشاء صفحة ويب'],
  path: 'university',
    theoreticalContent: [
  ],
},
{
  id: 24,
  title: 'المسار الجامعي 2: CSS',
  objectives: ['تنسيق الصفحة'],
  path: 'university',
    theoreticalContent: [
  ],
},
{
  id: 25,
  title: 'المسار الجامعي 3: JavaScript',
  objectives: ['إضافة تفاعل'],
  path: 'university',
    theoreticalContent: [
  ],
},
{
  id: 26,
  title: 'المسار الجامعي 4: Git & GitHub',
  objectives: ['إدارة الكود'],
  path: 'university',
    theoreticalContent: [
  ],
},
{
  id: 27,
  title: 'المسار الجامعي 5: نشر المشروع على Vercel',
  objectives: ['نشر الموقع'],
  path: 'university',
    theoreticalContent: [
  ],
},


];
