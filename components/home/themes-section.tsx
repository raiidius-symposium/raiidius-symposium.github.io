'use client';

import { 
  Microscope, 
  Activity, 
  TrendingUp, 
  Scale, 
  Building, 
  Users 
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useEdition } from '@/lib/edition-context';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  microscope: Microscope,
  activity: Activity,
  'trending-up': TrendingUp,
  scale: Scale,
  building: Building,
  users: Users,
};

export function ThemesSection() {
  const { currentEdition } = useEdition();

  if (!currentEdition.themes.length) return null;

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-2xl font-bold tracking-tight md:text-3xl">
              Symposium Themes
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Explore the key topics that will shape our discussions and presentations.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {currentEdition.themes.map((theme) => {
              const Icon = iconMap[theme.icon || 'activity'] || Activity;
              return (
                <div 
                  key={theme.id} 
                  className="group rounded-lg border bg-card p-6 transition-colors hover:border-primary/30"
                >
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      Theme
                    </Badge>
                  </div>
                  <h3 className="mb-2 font-semibold">{theme.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {theme.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
