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
  const standardCourses = coursesData.filter(c => c.path === 'standard');
  const advancedCourses = coursesData.filter(c => c.path === 'advanced');
  const studentCourses = coursesData.filter(c => c.path === 'students');
  const universityCourses = coursesData.filter(c => c.path === 'university');

  const getColor = (path: string) => {
    if (path === 'standard') return 'bg-blue-50 border-blue-200';
    if (path === 'advanced') return 'bg-pink-50 border-pink-200';
    if (path === 'students') return 'bg-green-50 border-green-200';
    if (path === 'university') return 'bg-purple-50 border-purple-200';
    return '';
  };

  const renderSection = (title: string, courses: any[]) => (
    <section className="mb-14">
      <h2 className="mb-6 text-2xl font-bold">{title}</h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {courses.map(course => (
          <Link key={course.id} href={`/course/${course.id}`}>
            <Card
              className={`h-full cursor-pointer border-2 transition hover:shadow-lg ${getColor(
                course.path
              )}`}
            >
              <CardHeader>
                <CardTitle className="text-lg">
                  {course.title}
                </CardTitle>
                <CardDescription>
                  {course.objectives?.[0]}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  عرض الحصة →
                </Button>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100">
      <header className="bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-8 text-center">
          <h1 className="text-4xl font-bold text-primary">
            برنامج التكوين في الإعلامية
          </h1>
          <p className="mt-2 text-slate-600">
            اتفاقية QIMA – ولاية مدنين
          </p>
          <p className="mt-3 text-sm text-slate-500">
            إعداد وتأطير: <strong>مريم الصابري</strong>
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        {renderSection('المسار الأساسي', standardCourses)}
        {renderSection('المسار المتقدّم', advancedCourses)}
        {renderSection('مسار التلامذة', studentCourses)}
        {renderSection('المسار الجامعي', universityCourses)}

        <footer className="mt-16 text-center text-sm text-slate-500">
          برنامج مقدّم من AVER و CIDEAL بالتعاون مع AECID
        </footer>
      </main>
    </div>
  );
}
