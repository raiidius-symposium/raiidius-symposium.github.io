'use client';

import { 
  Presentation, 
  Users, 
  MessageSquare, 
  LayoutGrid, 
  Code, 
  Wine 
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { whatToExpectCards } from '@/lib/content.config';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  presentation: Presentation,
  users: Users,
  messages: MessageSquare,
  layout: LayoutGrid,
  code: Code,
  wine: Wine,
};

export function WhatToExpectSection() {
  return (
    <section className="bg-muted/30 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-2xl font-bold tracking-tight md:text-3xl">
              What to Expect
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              RAIIDIUS features a dynamic program designed to facilitate learning, discussion, and collaboration.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whatToExpectCards.map((card) => {
              const Icon = iconMap[card.icon] || Presentation;
              return (
                <Card key={card.title} className="border-0 bg-card shadow-sm">
                  <CardContent className="pt-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-2 font-semibold">{card.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {card.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
