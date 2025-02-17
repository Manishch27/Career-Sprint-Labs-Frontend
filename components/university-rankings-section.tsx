'use client'

import { Trophy, Award, GraduationCap, Medal } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import Link from 'next/link';

const rankingCategories = [
  {
    title: "Top 10 MBA Universities in India",
    icon: Trophy,
    description: "Leading business schools offering world-class MBA programs",
    className: "bg-amber-100 dark:bg-amber-900/20 text-amber-600 dark:text-amber-300",
    url: "top-universities/mba"
  },
  {
    title: "UGC-DEB Approved Universities 2024",
    icon: Award,
    description: "Universities approved by Distance Education Bureau",
    className: "bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-300",
    url: "/universities/list/ugc-deb-approved"
  },
  {
    title: "Top 10 MCA Universities in India",
    icon: GraduationCap,
    description: "Premier institutions for Computer Applications",
    className: "bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-300",
    url: "top-universities/mca"
  },
  {
    title: "NIRF Ranked Universities 2024",
    icon: Medal,
    description: "National Institutional Ranking Framework top institutions",
    className: "bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-300",
    url: "universities/list/nirf-ranked"
  }
];

export function UniversityRankingsSection() {
  return (
    <section className="w-full pb-8 bg-gradient-to-b from-white via-blue-50 to-white dark:from-background dark:via-blue-950 dark:to-background">
      <div className="lg:px-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {rankingCategories.map((category) => {
            const Icon = category.icon;
            return (
              <Link key={category.title} href={category.url} passHref>
                <Card 
                  className="group hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
                >
                  <CardContent className="p-6 text-center space-y-4">
                    <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center ${category.className} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-blue-950 dark:text-blue-50 group-hover:text-blue-600 dark:group-hover:text-blue-400 line-clamp-2 min-h-[56px]">
                        {category.title}
                      </h3>
                      <p className="text-sm text-blue-700/80 dark:text-blue-200/80 mt-2">
                        {category.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

