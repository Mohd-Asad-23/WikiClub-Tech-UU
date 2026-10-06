import Link from 'next/link';
import {
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  Code2,
  ExternalLink,
  GraduationCap,
  HeartHandshake,
  MessageCircle,
  Sparkles,
  Users,
} from 'lucide-react';

const programs = [
  {
    id: 'chai-with-wiki',
    eyebrow: 'Community • Learning',
    title: 'Chai with Wiki',
    description:
      'An approachable space to discover Wikimedia, open knowledge, and open-source collaboration through conversations, practical guidance, and community-led learning.',
    icon: MessageCircle,
    accent: 'from-cyan-500 to-sky-500',
    points: [
      'Beginner-friendly introduction to the Wikimedia ecosystem',
      'Real conversations with contributors and mentors',
      'Practical first steps for getting involved',
    ],
    href: 'https://meta.wikimedia.org/wiki/Chai_with_Wiki',
  },
  {
    id: 'road-to-wiki',
    eyebrow: 'Mentorship • Contribution',
    title: 'Road to Wiki',
    description:
      'A structured journey that helps students move from learning about Wikimedia technologies to making meaningful open-source contributions.',
    icon: Code2,
    accent: 'from-blue-600 to-indigo-600',
    points: [
      'Hands-on exposure to open-source workflows',
      'Guidance around MediaWiki, Gerrit and Phabricator',
      'Mentorship focused on sustained contribution',
    ],
    href: 'https://meta.wikimedia.org/wiki/Road_to_wiki_program_UU',
  },
];

const benefits = [
  {
    icon: GraduationCap,
    title: 'Learn by doing',
    text: 'Go beyond theory with practical sessions, tasks and real contribution workflows.',
  },
  {
    icon: Users,
    title: 'Learn with people',
    text: 'Connect with students, contributors and experienced members of the open-source community.',
  },
  {
    icon: HeartHandshake,
    title: 'Get mentorship',
    text: 'Build confidence through guidance, feedback and a supportive community.',
  },
  {
    icon: Sparkles,
    title: 'Build your portfolio',
    text: 'Turn your learning into visible contributions and meaningful project experience.',
  },
];

const faqs = [
  {
    q: 'Do I need prior Wikimedia experience?',
    a: 'No. The programs are designed to make open-source and Wikimedia contribution approachable for students at different experience levels.',
  },
  {
    q: 'What can I learn through these programs?',
    a: 'You can explore Wikimedia technologies, open-source collaboration, contribution workflows, community practices and practical software-development skills.',
  },
  {
    q: 'Are the programs only for experienced developers?',
    a: 'No. Beginners are welcome. The focus is on learning, collaboration and gradually moving toward meaningful contribution.',
  },
];

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.12),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.08),transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-700">
              <Sparkles className="h-4 w-4" />
              WikiClub Tech UU Programs
            </span>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Learn. Contribute.{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Grow together.
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Explore programs created to help students discover open knowledge,
              build practical skills and take their first steps into the
              Wikimedia and open-source ecosystem.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#programs"
                className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-3 font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-800"
              >
                Explore programs
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <Link
                href="https://forms.gle/FGoyrEHC1CuP9hPSA"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-700"
              >
                Join WikiClub Tech
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="programs" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-600">
            Our programs
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Find your way into open source
          </h2>
          <p className="mt-3 text-slate-600">
            Start with community learning or take a more structured path toward contribution.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {programs.map((program) => {
            const Icon = program.icon;
            return (
              <article
                key={program.id}
                id={program.id}
                className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-9"
              >
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${program.accent} text-white shadow-lg`}>
                  <Icon className="h-7 w-7" />
                </div>
                <p className="mt-7 text-sm font-bold uppercase tracking-wider text-sky-600">
                  {program.eyebrow}
                </p>
                <h3 className="mt-2 text-3xl font-bold text-slate-950">
                  {program.title}
                </h3>
                <p className="mt-4 leading-7 text-slate-600">
                  {program.description}
                </p>
                <ul className="mt-7 space-y-3">
                  {program.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-6 text-slate-700">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-sky-500" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={program.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-600 transition hover:text-blue-800"
                >
                  View program details
                  <ExternalLink className="h-4 w-4" />
                </a>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-slate-950 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
                Why join
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                More than a workshop.
                <br />
                A path to contribution.
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <div key={benefit.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <Icon className="h-6 w-6 text-cyan-300" />
                    <h3 className="mt-4 font-semibold">{benefit.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{benefit.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-600">FAQ</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-950">Questions, answered</h2>
        </div>
        <div className="mt-10 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white px-6">
          {faqs.map((faq) => (
            <details key={faq.q} className="group py-5">
              <summary className="cursor-pointer list-none pr-8 font-semibold text-slate-900 marker:hidden">
                {faq.q}
              </summary>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 p-8 text-white shadow-xl sm:p-12">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <BookOpen className="h-8 w-8" />
              <h2 className="mt-4 text-3xl font-bold">Ready to start contributing?</h2>
              <p className="mt-3 text-blue-50">
                Join the WikiClub Tech UU community and turn curiosity into practical open-source experience.
              </p>
            </div>
            <Link
              href="https://forms.gle/FGoyrEHC1CuP9hPSA"
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-blue-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-50"
            >
              Join the community
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
