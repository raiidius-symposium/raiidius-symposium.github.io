'use client';

import { useState } from 'react';
import { Clock, MapPin, Users, Printer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useEdition } from '@/lib/edition-context';
import { siteConfig, getSessionSpeakers, type Session } from '@/lib/content.config';

const formatLabels: Record<string, string> = {
  registration: 'Registration',
  keynote: 'Keynote',
  breakout: 'Breakout',
  panel: 'Panel',
  poster: 'Poster',
  session: 'Session',
  roundtable: 'Roundtable',
  reception: 'Reception',
  break: 'Break',
  lunch: 'Lunch',
  remarks: 'Remarks',
};

const formatColors: Record<string, string> = {
  keynote: 'bg-primary text-primary-foreground',
  panel: 'bg-primary/80 text-primary-foreground',
  breakout: 'bg-accent text-accent-foreground',
  poster: 'bg-secondary text-secondary-foreground',
  session: 'bg-primary/60 text-primary-foreground',
  roundtable: 'bg-primary/70 text-primary-foreground',
  reception: 'bg-muted text-muted-foreground',
  break: 'bg-muted text-muted-foreground',
  lunch: 'bg-muted text-muted-foreground',
  registration: 'bg-muted text-muted-foreground',
  remarks: 'bg-secondary text-secondary-foreground',
};

function SessionCard({ session }: { session: Session }) {
  const { currentEdition } = useEdition();
  const speakers = getSessionSpeakers(currentEdition, session);

  return (
    <div className="relative border-l-4 border-primary/20 pl-4 py-4 hover:border-primary/50 transition-colors">
      <div className="flex flex-wrap items-start gap-2 mb-2">
        <Badge className={formatColors[session.format] || 'bg-muted'}>
          {formatLabels[session.format] || session.format}
        </Badge>
        <span className="text-sm text-muted-foreground flex items-center gap-1">
          <Clock className="h-3 w-3" />
          {session.startTime} - {session.endTime}
        </span>
        {session.location && (
          <span className="text-sm text-muted-foreground flex items-center gap-1">
            <MapPin className="h-3 w-3" />
            {session.location}
          </span>
        )}
      </div>
      <h3 className="font-semibold text-lg mb-1">{session.title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-2">
        {session.description}
      </p>
      {speakers.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2">
          {speakers.map((speaker) => (
            <Badge key={speaker.id} variant="outline" className="text-xs">
              <Users className="h-3 w-3 mr-1" />
              {speaker.name}
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
}

function BreakoutTracksCard() {
  const { currentEdition } = useEdition();

  if (!currentEdition.breakoutTracks.length) return null;

  return (
    <Card className="mt-4 border-primary/20">
      <CardHeader className="pb-3">
        <CardTitle className="text-base">Breakout Session Tracks</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {currentEdition.breakoutTracks.map((track) => (
          <div key={track.id} className="border-l-2 border-accent pl-3">
            <div className="flex items-center gap-2 mb-1">
              <Badge variant="outline" className="text-xs font-mono">
                Track {track.label}
              </Badge>
              <span className="font-medium text-sm">{track.title}</span>
            </div>
            <p className="text-xs text-muted-foreground">{track.description}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export default function ProgramPage() {
  const { currentEdition } = useEdition();
  const [activeFilter, setActiveFilter] = useState('all');

  const formats = ['all', 'keynote', 'breakout', 'panel', 'poster', 'session', 'roundtable', 'reception'];
  
  const filteredSessions = activeFilter === 'all' 
    ? currentEdition.agenda 
    : currentEdition.agenda.filter((s) => s.format === activeFilter);

  const handlePrint = () => {
    window.print();
  };

  if (!currentEdition.agenda.length) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-4 text-3xl font-bold">Program</h1>
          <p className="text-muted-foreground">
            The program for {siteConfig.seriesAcronym} {currentEdition.year} will be announced soon.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-2 text-3xl font-bold md:text-4xl">
            {siteConfig.seriesAcronym} {currentEdition.year} Program
          </h1>
          <p className="text-lg text-muted-foreground mb-4">
            {currentEdition.dateFormatted} &middot; {currentEdition.timezone}
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>
              {currentEdition.venue} &middot; {currentEdition.venueRoom} &middot; {currentEdition.fullAddress}
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="mb-8 flex items-center justify-between">
          <Tabs value={activeFilter} onValueChange={setActiveFilter}>
            <TabsList className="flex-wrap h-auto gap-1">
              {formats.map((format) => (
                <TabsTrigger key={format} value={format} className="text-xs capitalize">
                  {format === 'all' ? 'All' : formatLabels[format] || format}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
          <Button variant="outline" size="sm" onClick={handlePrint} className="hidden md:flex gap-2 print:hidden">
            <Printer className="h-4 w-4" />
            Print
          </Button>
        </div>

        {/* Agenda */}
        <div className="space-y-2">
          {filteredSessions.map((session) => (
            <SessionCard key={session.id} session={session} />
          ))}
        </div>

        {/* Breakout tracks detail (show when filtering breakouts or all) */}
        {(activeFilter === 'all' || activeFilter === 'breakout') && <BreakoutTracksCard />}

        {/* Print styles */}
        <style jsx global>{`
          @media print {
            body * {
              visibility: hidden;
            }
            .container, .container * {
              visibility: visible;
            }
            .container {
              position: absolute;
              left: 0;
              top: 0;
              width: 100%;
            }
            .print\\:hidden {
              display: none !important;
            }
          }
        `}</style>
      </div>
    </div>
  );
}
