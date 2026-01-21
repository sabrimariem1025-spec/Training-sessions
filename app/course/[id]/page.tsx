'use client';

import Link from 'next/link';
import { coursesData } from '@/data/courses';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Clock, Target, Hammer, FileText, CheckCircle, Package } from 'lucide-react';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function CoursePage({ params }: PageProps) {
  const { id } = await params;
  const courseId = parseInt(id);
  const course = coursesData.find((c) => c.id === courseId);

  if (!course) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100 p-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-red-600">الدورة غير موجودة</h1>
            <Link href="/">
              <Button className="mt-4">العودة إلى الرئيسية</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const pathColor = course.path === 'standard' ? 'bg-blue-100 text-blue-800' : 'bg-orange-100 text-orange-800';
  const pathLabel = course.path === 'standard' ? 'المسار الأساسي' : 'المسار المتقدم';

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white shadow-sm">
        <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6 lg:px-8">
          <Link href="/" className="mb-4 inline-block text-primary hover:underline">
            ← العودة إلى الحصص
          </Link>
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-3xl font-bold text-primary">{course.title}</h1>
              <span className={`mt-2 inline-block rounded-full px-4 py-1 text-sm font-semibold ${pathColor}`}>
                {pathLabel}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Quick Info */}
        <div className="mb-8 grid gap-4 md:grid-cols-2">
          <Card className="border-primary/20">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Clock className="h-5 w-5 text-primary" />
                مدة الحصة
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-primary">{course.duration}</p>
            </CardContent>
          </Card>
          <Card className="border-primary/20">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Target className="h-5 w-5 text-accent" />
                عدد الأهداف
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-accent">{course.objectives.length} أهداف</p>
            </CardContent>
          </Card>
        </div>

        {/* Objectives */}
        <Card className="mb-8 border-primary/20">
          <CardHeader className="bg-gradient-to-r from-primary to-primary/80 text-white">
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5" />
              أهداف التعلم
            </CardTitle>
            <CardDescription className="text-blue-100">ما سوف تتعلمه في هذه الحصة</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <ul className="space-y-3">
              {course.objectives.map((objective, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                  <span className="text-slate-700">{objective}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Theoretical Content */}
        <Card className="mb-8 border-accent/20">
          <CardHeader className="bg-gradient-to-r from-accent to-accent/80 text-white">
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              المحتوى النظري
            </CardTitle>
            <CardDescription className="text-orange-100">المواضيع المراد دراستها</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <ul className="space-y-2">
              {course.theoreticalContent.map((content, index) => (
                <li key={index} className="flex items-start gap-3 text-slate-700">
                  <span className="flex-shrink-0 rounded-full bg-accent/20 px-3 py-0.5 text-sm font-semibold text-accent">
                    {index + 1}
                  </span>
                  <span className="pt-0.5">{content}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Practical Activities */}
        <Card className="mb-8 border-green-200">
          <CardHeader className="bg-gradient-to-r from-green-600 to-green-700 text-white">
            <CardTitle className="flex items-center gap-2">
              <Hammer className="h-5 w-5" />
              الأنشطة العملية
            </CardTitle>
            <CardDescription className="text-green-100">تطبيق عملي على ما تعلمته</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <ul className="space-y-3">
              {course.practicalActivities.map((activity, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-600 text-xs font-bold text-white">
                    {index + 1}
                  </div>
                  <span className="text-slate-700">{activity}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Assessment */}
        <Card className="mb-8 border-purple-200">
          <CardHeader className="bg-gradient-to-r from-purple-600 to-purple-700 text-white">
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              التقييم والاختبارات
            </CardTitle>
            <CardDescription className="text-purple-100">كيفية قياس تقدمك</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <ul className="space-y-3">
              {course.assessment.map((item, index) => (
                <li key={index} className="flex items-start gap-3 rounded-lg bg-purple-50 p-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-purple-600" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Resources */}
        <Card className="mb-8 border-indigo-200">
          <CardHeader className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white">
            <CardTitle className="flex items-center gap-2">
              <Package className="h-5 w-5" />
              الموارد والأدوات المطلوبة
            </CardTitle>
            <CardDescription className="text-indigo-100">الأدوات التي ستحتاجها</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <ul className="space-y-2">
              {course.resources.map((resource, index) => (
                <li key={index} className="flex items-start gap-3 text-slate-700">
                  <span className="flex-shrink-0 rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-semibold text-indigo-700">
                    {index + 1}
                  </span>
                  <span className="pt-0.5">{resource}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex gap-4">
          <Link href="/" className="flex-1">
            <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white bg-transparent">
              العودة إلى الحصص
            </Button>
          </Link>
          {courseId < 10 && (
            <Link href={`/course/${courseId + 1}`} className="flex-1">
              <Button className="w-full bg-primary text-white hover:bg-primary/90">
                الحصة التالية ←
              </Button>
            </Link>
          )}
        </div>

        {/* Footer */}
        <div className="mt-16 border-t border-slate-200 pt-8 text-center text-sm text-slate-600">
          <p>
            برنامج التدريب مقدم من CIDEAL و AVER بالتعاون مع الوكالة الإسبانية للتعاون الدولي للتنمية (AECID)
          </p>
        </div>
      </main>
    </div>
  );
}
