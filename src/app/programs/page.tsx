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
  Mail,
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
    <div className="min-h-screen text-slate-900">
      <section className="relative isolate overflow-hidden border-b border-slate-200/70 bg-gradient-to-br from-white via-sky-50/70 to-emerald-50/60 backdrop-blur-sm">
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,rgba(14,165,233,0.16),transparent_28%),radial-gradient(circle_at_10%_90%,rgba(16,185,129,0.12),transparent_30%)]" />
        <div aria-hidden="true" className="absolute -right-24 top-16 h-72 w-72 rounded-full border border-sky-200/50" />
        <div aria-hidden="true" className="absolute -right-12 top-28 h-48 w-48 rounded-full border border-emerald-200/60" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
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
                className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-3 font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5 hover:bg-slate-800"
              >
                Explore programs
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <Link
                href="https://forms.gle/FGoyrEHC1CuP9hPSA"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300/80 bg-white/80 px-5 py-3 font-semibold text-slate-800 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-700"
              >
                Join WikiClub Tech
              </Link>
              <a
                href="mailto:wikitech@indicwiki.org"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white/80 px-5 py-3 font-semibold text-slate-700 transition hover:border-sky-300 hover:text-sky-700"
              >
                <Mail className="h-4 w-4" />
                Email us
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:justify-self-end">
            <div aria-hidden="true" className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-sky-200/60 via-white/30 to-emerald-200/60 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/90 bg-white/75 p-5 shadow-2xl shadow-sky-900/10 backdrop-blur-xl sm:p-7">
              <div aria-hidden="true" className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-sky-100/80" />
              <div className="relative flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-700">Open knowledge in action</p>
                  <p className="mt-1 text-lg font-bold text-slate-950">Your journey starts here</p>
                </div>
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-lg">
                  <Sparkles className="h-5 w-5" />
                </div>
              </div>

              <div className="relative mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl bg-gradient-to-br from-cyan-500 to-sky-600 p-5 text-white shadow-lg shadow-sky-900/10">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-cyan-50">Connect & discover</p>
                  <p className="mt-1 text-xl font-bold">Chai with Wiki</p>
                  <p className="mt-2 text-sm leading-5 text-sky-50">Start with a conversation. Grow with a community.</p>
                </div>
                <div className="rounded-2xl bg-gradient-to-br from-blue-700 to-indigo-700 p-5 text-white shadow-lg shadow-indigo-900/10 sm:translate-y-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15">
                    <Code2 className="h-5 w-5" />
                  </div>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-blue-100">Build & contribute</p>
                  <p className="mt-1 text-xl font-bold">Road to Wiki</p>
                  <p className="mt-2 text-sm leading-5 text-blue-100">Learn the workflow. Make your work count.</p>
                </div>
              </div>

              <div className="relative mt-8 flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-white/80 p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                  <HeartHandshake className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Learn together, contribute together</p>
                  <p className="mt-1 text-sm text-slate-600">A welcoming path from curiosity to open-source participation.</p>
                </div>
              </div>
              <div aria-hidden="true" className="absolute bottom-3 right-5 flex gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
              </div>
            </div>
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
                className="group relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white/90 p-7 shadow-lg shadow-slate-900/5 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-2xl hover:shadow-sky-900/10 sm:p-9"
              >
                <div aria-hidden="true" className={`absolute right-0 top-0 h-32 w-32 rounded-bl-[5rem] bg-gradient-to-br ${program.accent} opacity-[0.08] transition duration-300 group-hover:scale-110`} />
                <div className={`relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${program.accent} text-white shadow-lg shadow-slate-900/10 transition duration-300 group-hover:rotate-3 group-hover:scale-105`}>
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
                <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                  <a
                    href={program.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-semibold text-blue-600 transition hover:text-blue-800"
                    aria-label={`View more details about ${program.title}`}
                  >
                    View More Details
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <a
                    href={program.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-sky-700"
                    aria-label={`View ${program.title} on Meta-Wiki`}
                  >
                    View Meta-Wiki page
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-slate-950 py-16 text-white">
        <div aria-hidden="true" className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
        <div aria-hidden="true" className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
        <div className="mt-10 divide-y divide-slate-200 rounded-2xl border border-slate-200/70 bg-white/90 px-6 shadow-xl shadow-slate-900/5 backdrop-blur-sm">
          {faqs.map((faq) => (
            <details key={faq.q} className="group py-5 marker:hidden">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 pr-1 font-semibold text-slate-900 marker:hidden transition hover:text-sky-700">
                {faq.q}
              </summary>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-blue-600 to-cyan-500 p-8 text-white shadow-xl shadow-blue-900/15 sm:p-12">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <BookOpen className="h-8 w-8" />
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Ready to start contributing?</h2>
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
