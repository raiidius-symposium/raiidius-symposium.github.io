'use client';

import { useEdition } from '@/lib/edition-context';
import { siteConfig } from '@/lib/content.config';

export function AboutSection() {
  const { currentEdition } = useEdition();

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl space-y-12">
          {/* About the Series */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              About {siteConfig.seriesAcronym}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {siteConfig.seriesDescription} Each year, we bring together researchers, clinicians, public health professionals, 
              data scientists, and other stakeholders to explore how AI and informatics can responsibly 
              accelerate infectious disease discovery, improve clinical care, and strengthen public health action.
            </p>
          </div>

          {/* Current Edition Focus */}
          {currentEdition.isActive && (
            <div className="rounded-lg border bg-card p-6 md:p-8">
              <h3 className="mb-4 text-xl font-semibold text-primary">
                {currentEdition.year} Edition Focus: {currentEdition.themeTitle}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {currentEdition.themeDescription}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
