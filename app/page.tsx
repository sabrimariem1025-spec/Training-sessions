'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { coursesData } from '@/data/courses';


export default function Home() {
  const standardCourses = coursesData.filter((c) => c.path === 'standard');
  const advancedCourses = coursesData.filter((c) => c.path === 'advanced');

  const getColorByPath = (path: 'standard' | 'advanced') =>
    path === 'standard'
      ? 'bg-blue-50 border-blue-200'
      : 'bg-pink-50 border-pink-200';

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100">
      {/* Header */}
     <header className="border-b border-slate-200 bg-white shadow-sm">
  <div className="mx-auto max-w-7xl px-4 py-8">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-primary">
        برنامج تدريب الإعلامية
      </h1>

      <p className="mt-2 text-lg text-slate-600">
        اتفاقية QIMA – تعزيز الفرص الاجتماعية والاقتصادية
      </p>

      <p className="mt-1 text-sm text-slate-500">
        ولاية مدنين
      </p>

      {/* New part */}
      <div className="mt-4 text-sm text-slate-600">
        <p>
          تنظيم: <strong>AVER</strong>
        </p>
        <p>
          تأطير وتكوين: <strong>مريم صبري</strong> – مدرّبة إعلامية
        </p>
      </div>
    </div>
  </div>
</header>


      {/* Main */}
      <main className="mx-auto max-w-7xl px-4 py-12">
        {/* Intro */}
        <Card className="mb-12">
          <CardHeader className="bg-primary text-white">
  <CardTitle>تقديم البرنامج التكويني</CardTitle>
</CardHeader>

<CardContent className="pt-6 text-slate-700 leading-relaxed">
  <p className="mb-4">
    يهدف هذا البرنامج التكويني إلى تمكين المشاركين من اكتساب
    المهارات الأساسية في الإعلامية، واستعمال الحاسوب والتكنولوجيا
    الرقمية بشكل فعّال في حياتهم اليومية والمهنية.
  </p>

  <p className="mb-4">
    يستهدف البرنامج فئات المبتدئين وأصحاب المشاريع الصغرى،
    مع اعتماد مقاربة تطبيقية وبيداغوجية تراعي مستوى
    وقدرات كل متدرّب.
  </p>

  <p>
    يتكوّن البرنامج من مسارين:
    <strong> مسار أساسي </strong>
    مخصّص للمبتدئين، و
    <strong> مسار متقدّم </strong>
    موجّه لأصحاب المشاريع والراغبين في تطوير مهاراتهم الرقمية
    في التصميم والتسويق.
  </p>
</CardContent>
        </Card>

        {/* Standard Path */}
        <section className="mb-14">
          <h2 className="mb-2 text-2xl font-bold text-primary">
            المسار الأساسي
          </h2>
          <p className="mb-6 text-slate-600">
            مخصّص للمبتدئين لتعلّم أساسيات الإعلامية
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {standardCourses.map((course) => (
              <Link key={course.id} href={`/course/${course.id}`}>
                <Card
                  className={`h-full cursor-pointer border-2 transition hover:shadow-lg ${getColorByPath(
                    course.path
                  )}`}
                >
                  <CardHeader>
                    <CardTitle className="text-lg">
                      {course.title}
                    </CardTitle>
                    <CardDescription>
                      {course.objectives[0]}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button
                      variant="outline"
                      className="w-full"
                    >
                      عرض الحصة →
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Advanced Path */}
        <section>
          <h2 className="mb-2 text-2xl font-bold text-accent">
            المسار المتقدّم
          </h2>
          <p className="mb-6 text-slate-600">
            مخصّص لأصحاب المشاريع والتسويق الرقمي
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {advancedCourses.map((course) => (
              <Link key={course.id} href={`/course/${course.id}`}>
                <Card
                  className={`h-full cursor-pointer border-2 transition hover:shadow-lg ${getColorByPath(
                    course.path
                  )}`}
                >
                  <CardHeader>
                    <CardTitle className="text-lg">
                      {course.title}
                    </CardTitle>
                    <CardDescription>
                      {course.objectives[0]}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button
                      variant="outline"
                      className="w-full"
                    >
                      عرض الحصة →
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 border-t pt-6 text-center text-sm text-slate-500">
          برنامج مقدّم من CIDEAL و AVER
          بالتعاون مع AECID
        </footer>
      </main>
    </div>
  );
}
