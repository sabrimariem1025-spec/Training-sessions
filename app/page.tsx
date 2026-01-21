'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  const courses = [
    {
      id: 1,
      title: 'مدخل إلى الإعلامية',
      description: 'أساسيات الحاسوب والمعدات',
      path: 'standard',
      color: 'bg-blue-50 border-blue-200',
    },
    {
      id: 2,
      title: 'نظام التشغيل والملفات',
      description: 'التعامل مع نظام التشغيل وإدارة الملفات',
      path: 'standard',
      color: 'bg-green-50 border-green-200',
    },
    {
      id: 3,
      title: 'معالج النصوص',
      description: 'استخدام برنامج معالجة النصوص (Word)',
      path: 'standard',
      color: 'bg-purple-50 border-purple-200',
    },
    {
      id: 4,
      title: 'جداول البيانات',
      description: 'العمل مع برنامج Excel والجداول',
      path: 'advanced',
      color: 'bg-orange-50 border-orange-200',
    },
    {
      id: 5,
      title: 'العروض التقديمية',
      description: 'إنشاء عروض احترافية مع PowerPoint',
      path: 'standard',
      color: 'bg-red-50 border-red-200',
    },
    {
      id: 6,
      title: 'الإنترنت والبريد الإلكتروني',
      description: 'استخدام الإنترنت والتواصل الآمن',
      path: 'standard',
      color: 'bg-cyan-50 border-cyan-200',
    },
    {
      id: 7,
      title: 'الأمان والخصوصية الرقمية',
      description: 'حماية البيانات والعمل الآمن على الإنترنت',
      path: 'advanced',
      color: 'bg-indigo-50 border-indigo-200',
    },
    {
      id: 8,
      title: 'أساسيات التسويق الرقمي',
      description: 'مقدمة في التسويق والترويج عبر الإنترنت',
      path: 'advanced',
      color: 'bg-pink-50 border-pink-200',
    },
    {
      id: 9,
      title: 'إنشاء صفحات الويب الأساسية',
      description: 'مبادئ تصميم الويب والعروض الرقمية',
      path: 'advanced',
      color: 'bg-emerald-50 border-emerald-200',
    },
    {
      id: 10,
      title: 'مشاريع عملية وتطبيقات',
      description: 'تطبيق المهارات في مشاريع حقيقية',
      path: 'advanced',
      color: 'bg-slate-50 border-slate-200',
    },
  ];

  const standardCourses = courses.filter((c) => c.path === 'standard');
  const advancedCourses = courses.filter((c) => c.path === 'advanced');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-primary">برنامج تدريب الإعلامية</h1>
            <p className="mt-2 text-lg text-slate-600">
              اتفاقية QIMA - تعزيز الفرص الاجتماعية والاقتصادية للنساء والشباب
            </p>
            <p className="mt-1 text-sm text-slate-500">منطقة مدنين والمناطق المحيطة</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Introduction */}
        <Card className="mb-12 border-primary/20 bg-white">
          <CardHeader className="bg-gradient-to-r from-primary to-primary/80 text-white">
            <CardTitle>مرحباً بك في برنامج التدريب</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="mb-4 text-slate-700">
              هذا البرنامج التدريبي شامل ومتخصص مصمم لتطوير مهارات الإعلامية لديك. يتضمن البرنامج 10 حصص
              تفصيلية تغطي كل جوانب استخدام الحاسوب بكفاءة.
            </p>
            <p className="text-slate-700">
              يمكنك اختيار المسار المناسب لك: <strong>المسار الأساسي</strong> للمبتدئين أو{' '}
              <strong>المسار المتقدم</strong> الذي يتضمن تطبيقات متقدمة وفرص العمل الحر.
            </p>
          </CardContent>
        </Card>

        {/* Standard Path */}
        <div className="mb-12">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-primary">المسار الأساسي</h2>
            <p className="mt-2 text-slate-600">
              مناسب للمبتدئين - تعلم الأساسيات والمهارات الضرورية في استخدام الحاسوب
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {standardCourses.map((course) => (
              <Link key={course.id} href={`/course/${course.id}`}>
                <Card className={`h-full cursor-pointer border-2 transition-all hover:shadow-lg ${course.color}`}>
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">{course.title}</CardTitle>
                    <CardDescription>{course.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white bg-transparent">
                      اعرض الحصة →
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Advanced Path */}
        <div>
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-accent">المسار المتقدم</h2>
            <p className="mt-2 text-slate-600">
              للمستخدمين المتقدمين - مهارات متطورة وفرص إنشاء مشاريع خاصة والعمل الحر
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {advancedCourses.map((course) => (
              <Link key={course.id} href={`/course/${course.id}`}>
                <Card className={`h-full cursor-pointer border-2 transition-all hover:shadow-lg ${course.color}`}>
                  <CardHeader>
                    <CardTitle className="text-lg text-accent">{course.title}</CardTitle>
                    <CardDescription>{course.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-white bg-transparent">
                      اعرض الحصة →
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-16 border-t border-slate-200 pt-8 text-center text-slate-600">
          <p className="text-sm">
            برنامج التدريب مقدم من CIDEAL و AVER بالتعاون مع الوكالة الإسبانية للتعاون الدولي للتنمية (AECID)
          </p>
        </div>
      </main>
    </div>
  );
}
