'use client';

import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useEdition } from '@/lib/edition-context';

const programBlocks = [
  {
    time: '8:00 AM - 10:15 AM',
    title: 'Morning Sessions',
    items: [
      'Registration & Breakfast',
      'Opening Remarks',
      'Keynote Presentations (2)',
    ],
  },
  {
    time: '10:30 AM - 12:45 PM',
    title: 'Midday Sessions',
    items: [
      'OHDSI Workshop Tutorial',
      'Panel Discussion & Q&A',
    ],
  },
  {
    time: '12:45 PM - 3:30 PM',
    title: 'Afternoon Sessions',
    items: [
      'Lunch & Poster Session',
      'Extended Poster Viewing',
      'Patient Engagement Tools',
    ],
  },
  {
    time: '3:30 PM - 6:15 PM',
    title: 'Closing & Reception',
    items: [
      'Roundtable Discussion',
      'Closing Remarks',
      'Networking Reception',
    ],
  },
];

export function ProgramPreviewSection() {
  const { currentEdition } = useEdition();

  if (!currentEdition.isActive) return null;

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
            <div>
              <h2 className="mb-2 text-2xl font-bold tracking-tight md:text-3xl">Program at a Glance</h2>
              <p className="text-muted-foreground">
                A full day of learning, discussion, and collaboration.
              </p>
            </div>
            <Button asChild variant="outline" className="gap-2">
              <Link href="/program">
                View Full Program
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {programBlocks.map((block) => (
              <Card key={block.title} className="border-0 shadow-sm">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {block.time}
                  </div>
                  <CardTitle className="text-lg">{block.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {block.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 rounded-lg border bg-muted/30 p-4 text-center">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">{currentEdition.venue}</strong>
              {' '}&middot;{' '}
              {currentEdition.venueRoom}
              {' '}&middot;{' '}
              {currentEdition.fullAddress}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
