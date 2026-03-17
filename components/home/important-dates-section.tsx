'use client';

import { Calendar, CheckCircle2 } from 'lucide-react';
import { useEdition } from '@/lib/edition-context';

export function ImportantDatesSection() {
  const { currentEdition } = useEdition();

  if (!currentEdition.importantDates.length) return null;

  return (
    <section className="bg-muted/30 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-2xl font-bold tracking-tight md:text-3xl">
              Important Dates
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Mark your calendar for these key deadlines and milestones.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 hidden h-full w-px bg-border md:left-1/2 md:block" />

            <div className="space-y-6">
              {currentEdition.importantDates.map((item, index) => (
                <div
                  key={item.label}
                  className={`relative flex items-start gap-4 md:gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="rounded-lg border bg-card p-4 shadow-sm">
                      <div className="flex items-center gap-2 md:justify-start">
                        <Calendar className="h-4 w-4 text-primary md:hidden" />
                        <span className="text-sm font-medium text-primary">{item.date}</span>
                      </div>
                      <h3 className="mt-2 font-semibold">{item.label}</h3>
                      {item.description && (
                        <p className="mt-1 text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-4 hidden h-3 w-3 -translate-x-1/2 rounded-full border-2 border-primary bg-background md:left-1/2 md:block" />

                  {/* Spacer for alternating layout */}
                  <div className="hidden flex-1 md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
