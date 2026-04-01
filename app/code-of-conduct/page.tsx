import { Metadata } from 'next'
import { Container } from '@/components/container'

export const metadata: Metadata = {
  title: 'Code of Conduct | RAIIDIUS',
  description: 'Community standards and expectations for RAIIDIUS events',
}

export default function CodeOfConductPage() {
  return (
    <main className="py-12 md:py-16 lg:py-20">
      <Container>
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-primary mb-4">Code of Conduct</h1>
            <p className="text-lg text-muted-foreground">
              RAIIDIUS is committed to providing a safe, inclusive, and professional environment for all participants.
            </p>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">Our Commitment</h2>
              <p className="text-foreground mb-4">
                We are committed to providing a conference and associated spaces that is welcoming and inspiring to all participants, regardless of gender, gender identity, age, sexual orientation, disability, physical appearance, body size, race, ethnicity, religion (or lack thereof), or technology choices.
              </p>
              <p className="text-foreground">
                We do not tolerate harassment of conference participants in any form. Sexual language and imagery are not appropriate for any conference venue, including talks, workshops, parties, and online media.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">Expected Behavior</h2>
              <ul className="space-y-3 text-foreground list-disc list-inside">
                <li>Treat all participants with respect and professionalism</li>
                <li>Be inclusive and welcoming to people from diverse backgrounds</li>
                <li>Listen actively to others and value their contributions</li>
                <li>Respect confidentiality and privacy of attendees</li>
                <li>Refrain from harassment, discrimination, or intimidation</li>
                <li>Challenge ideas respectfully, not attack individuals</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">Unacceptable Behavior</h2>
              <p className="text-foreground mb-4">Unacceptable behaviors include, but are not limited to:</p>
              <ul className="space-y-3 text-foreground list-disc list-inside">
                <li>Harassment, bullying, or intimidation of any kind</li>
                <li>Discriminatory language or actions based on protected characteristics</li>
                <li>Sexual harassment or unwelcome physical contact</li>
                <li>Photography without consent</li>
                <li>Disruption of presentations or events</li>
                <li>Violation of others' intellectual property rights</li>
                <li>Other conduct that creates a hostile or unwelcoming environment</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">Reporting & Response</h2>
              <p className="text-foreground mb-4">
                If you experience or witness unacceptable behavior, please contact the organizing committee immediately:
              </p>
              <div className="bg-accent p-6 rounded-lg">
                <p className="font-semibold text-foreground mb-2">Email:</p>
                <a href="mailto:raiidius@cumc.columbia.edu" className="text-primary hover:underline break-all">
                  raiidius@cumc.columbia.edu
                </a>
              </div>
              <p className="text-foreground mt-4">
                All reports will be handled with appropriate confidentiality and will be investigated promptly. We are committed to ensuring that appropriate action is taken in response to violations of this code of conduct.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">Consequences</h2>
              <p className="text-foreground">
                Participants who violate this code of conduct may be asked to leave the event at the sole discretion of the organizing committee.
              </p>
            </section>

            <section className="bg-secondary p-6 rounded-lg">
              <p className="text-sm text-muted-foreground">
                This code of conduct is inspired by and adapted from community standards established by technology and scientific organizations. We are grateful for their leadership in fostering inclusive communities.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </main>
  )
}
