'use client';

import Link from 'next/link';
import { Ticket, Users, GraduationCap, Accessibility, FileText, ArrowRight, Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useEdition } from '@/lib/edition-context';
import { siteConfig } from '@/lib/content.config';

const registrationTiers = [
  {
    id: 'general',
    name: 'General Registration',
    price: '$150',
    description: 'Full access to all symposium sessions, meals, and networking reception.',
    features: [
      'All keynotes and sessions',
      'Breakout session participation',
      'Poster session access',
      'Breakfast and lunch',
      'Networking reception',
      'Digital program materials',
    ],
    icon: Users,
  },
  {
    id: 'trainee',
    name: 'Trainee Registration',
    price: '$75',
    description: 'Discounted rate for students, residents, fellows, and postdoctoral researchers.',
    features: [
      'All keynotes and sessions',
      'Breakout session participation',
      'Poster session access',
      'Breakfast and lunch',
      'Networking reception',
      'Digital program materials',
      'Priority poster presentation slots',
    ],
    icon: GraduationCap,
    highlighted: true,
  },
];

export default function RegisterPage() {
  const { currentEdition } = useEdition();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="mb-4 text-3xl font-bold md:text-4xl">
            Register for {siteConfig.seriesAcronym} {currentEdition.year}
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Join us for a day of learning, discussion, and networking focused on 
            responsible AI for {currentEdition.themeShortTitle}.
          </p>
        </div>

        {/* Event Details */}
        <div className="mb-8 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{currentEdition.dateFormatted}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>{currentEdition.venue}, {currentEdition.city}</span>
          </div>
        </div>

        {/* Registration CTA */}
        <div className="mb-12 rounded-lg bg-primary/5 border border-primary/20 p-8 text-center">
          <Ticket className="mx-auto mb-4 h-12 w-12 text-primary" />
          {currentEdition.isActive && currentEdition.registrationUrl ? (
            <>
              <h2 className="mb-2 text-xl font-semibold">Secure Your Spot</h2>
              <p className="mb-6 text-muted-foreground">
                Registration is open. Space is limited.
              </p>
              <Button asChild size="lg" className="gap-2">
                <a href={currentEdition.registrationUrl}>
                  Register Now
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </>
          ) : (
            <>
              <h2 className="mb-2 text-xl font-semibold">Registration Coming Soon</h2>
              <p className="text-muted-foreground">
                Registration for {siteConfig.seriesAcronym} {currentEdition.year} will open soon. 
                Sign up for our mailing list to be notified.
              </p>
            </>
          )}
        </div>

        {/* Registration Tiers */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-center">Registration Options</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {registrationTiers.map((tier) => {
              const Icon = tier.icon;
              return (
                <Card 
                  key={tier.id} 
                  className={tier.highlighted ? 'border-primary/50 shadow-md' : ''}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Icon className="h-8 w-8 text-primary" />
                      {tier.highlighted && (
                        <Badge className="bg-primary text-primary-foreground">
                          Recommended
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-xl">{tier.name}</CardTitle>
                    <CardDescription>{tier.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <span className="text-3xl font-bold">{tier.price}</span>
                      <span className="text-muted-foreground"> / person</span>
                    </div>
                    <ul className="space-y-2">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <p className="mt-4 text-center text-sm text-muted-foreground">
            * Prices are placeholders. Final pricing will be confirmed when registration opens.
          </p>
        </section>

        {/* What's Included */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">What's Included</h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {[
              'Full day of sessions',
              'Continental breakfast',
              'Boxed lunch',
              'Coffee breaks',
              'Networking reception',
              'Digital materials',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 rounded-lg border p-3">
                <span className="h-2 w-2 rounded-full bg-primary" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Accessibility */}
        <section className="mb-12">
          <Alert className="border-primary/20">
            <Accessibility className="h-4 w-4" />
            <AlertDescription>
              <strong className="text-foreground">Accessibility Accommodations:</strong>{' '}
              We are committed to making {siteConfig.seriesAcronym} accessible to all attendees. 
              If you require specific accommodations (e.g., sign language interpretation, 
              dietary restrictions, mobility assistance), please indicate this during 
              registration or contact us at{' '}
              <a href={`mailto:${currentEdition.contactEmail}`} className="text-primary hover:underline">
                {currentEdition.contactEmail}
              </a>.
            </AlertDescription>
          </Alert>
        </section>

        {/* Code of Conduct */}
        <section className="mb-12">
          <Card className="bg-muted/30">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <FileText className="h-6 w-6 text-primary shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Code of Conduct</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    All {siteConfig.seriesAcronym} participants are expected to adhere to our 
                    Code of Conduct, which promotes a professional, respectful, and inclusive 
                    environment for all attendees.
                  </p>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/code-of-conduct">
                      Read Code of Conduct
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Cancellation Policy */}
        <section className="mb-12">
          <h2 className="mb-4 text-xl font-bold">Cancellation Policy</h2>
          <div className="text-sm text-muted-foreground space-y-2">
            <p>
              <strong className="text-foreground">Full refund:</strong> Cancellations received 
              more than 30 days before the event.
            </p>
            <p>
              <strong className="text-foreground">50% refund:</strong> Cancellations received 
              15-30 days before the event.
            </p>
            <p>
              <strong className="text-foreground">No refund:</strong> Cancellations received 
              less than 15 days before the event.
            </p>
            <p className="pt-2">
              Substitutions are welcome at any time. Contact us to transfer your registration.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section className="rounded-lg border bg-muted/30 p-6 text-center">
          <h2 className="mb-2 text-lg font-semibold">Questions About Registration?</h2>
          <p className="text-muted-foreground">
            Contact us at{' '}
            <a
              href={`mailto:${currentEdition.contactEmail}`}
              className="text-primary hover:underline"
            >
              {currentEdition.contactEmail}
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
