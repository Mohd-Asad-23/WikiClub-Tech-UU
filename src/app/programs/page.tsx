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
    <div
      className="relative min-h-screen overflow-hidden text-slate-900"
      style={{
        backgroundImage:
          'radial-gradient(circle at 15% 10%, rgba(210, 238, 250, 0.75) 0%, rgba(210, 238, 250, 0) 42%), radial-gradient(circle at 85% 10%, rgba(215, 250, 225, 0.8) 0%, rgba(215, 250, 225, 0) 45%), radial-gradient(circle at 80% 90%, rgba(255, 245, 235, 0.65) 0%, rgba(255, 245, 235, 0) 40%), #f8fcfa',
      }}
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0" style={{
        backgroundImage: 'linear-gradient(rgba(100, 116, 139, 0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(100, 116, 139, 0.12) 1px, transparent 1px)',
        backgroundSize: '52px 52px',
        backgroundPosition: 'center center',
        maskImage: 'linear-gradient(to bottom, black 75%, transparent)',
        WebkitMaskImage: 'linear-gradient(to bottom, black 75%, transparent)',
      }} />
      <section className="relative z-10 isolate overflow-hidden border-b border-slate-200/70 bg-white/20 backdrop-blur-[2px]">
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-sky-100/20 via-transparent to-emerald-100/20" />
        <div aria-hidden="true" className="absolute -right-24 top-16 h-72 w-72 rounded-full border border-sky-200/50" />
        <div aria-hidden="true" className="absolute -right-12 top-28 h-48 w-48 rounded-full border border-emerald-200/60" />
        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="mb-10 border-b border-slate-200/70 pb-7 sm:mb-12 sm:pb-8">
            <div className="mx-auto grid max-w-4xl grid-cols-[1fr_auto_1fr] items-center gap-3 sm:gap-6 lg:gap-8">
              <div className="flex items-center justify-center">
                <img
                  src="/WikiClub-Tech-UU/logo.svg"
                  alt="WikiClub Tech logo"
                  className="h-16 w-16 shrink-0 object-contain sm:h-20 sm:w-20 lg:h-24 lg:w-24"
                />
              </div>
              <div className="min-w-0 text-center">
                <p className="whitespace-nowrap text-base font-extrabold tracking-[0.08em] text-slate-950 sm:text-2xl lg:text-3xl">WIKICLUB TECH</p>
                <p className="mt-1 whitespace-nowrap text-[0.65rem] font-bold tracking-[0.12em] text-slate-600 sm:text-sm sm:tracking-[0.18em] lg:text-base">UNITED UNIVERSITY</p>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="/WikiClub-Tech-UU/uniteduniversity.png"
                  alt="United University logo"
                  className="h-16 w-16 shrink-0 scale-125 object-contain sm:h-20 sm:w-20 sm:scale-125 lg:h-24 lg:w-24 lg:scale-150"
                />
              </div>
            </div>
          </div>
          <div className="grid gap-8 lg:grid-cols-1 lg:items-center">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-700">
              <Sparkles className="h-4 w-4" />
              WikiClub Tech UU Programs
            </span>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Learn. Contribute.{' '}
              <span className="bg-gradient-to-r from-emerald-700 via-teal-600 to-amber-600 bg-clip-text text-transparent">
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
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300/80 bg-white/80 px-5 py-3 font-semibold text-slate-800 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-emerald-300 hover:text-emerald-800"
              >
                Join WikiClub Tech
              </Link>
              <a
                href="mailto:wikitech@indicwiki.org"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white/80 px-5 py-3 font-semibold text-slate-700 transition hover:border-sky-300 hover:text-emerald-800"
              >
                <Mail className="h-4 w-4" />
                Email us
              </a>
            </div>
          </div>


          </div>
        </div>
      </section>

      <section id="programs" className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
            Our programs
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Find your way into open source
          </h2>
          <p className="mt-3 text-slate-600">
            Start with community learning or take a more structured path toward contribution.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {programs.map((program) => {
            const Icon = program.icon;
            const isChai = program.id === 'chai-with-wiki';
            return (
              <article
                key={program.id}
                id={program.id}
                className={`group relative isolate overflow-hidden rounded-3xl border p-6 shadow-lg shadow-slate-900/[0.06] transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7 ${isChai ? 'border-orange-200/80 bg-gradient-to-br from-[#FFF3E7] via-[#FCE8D5] to-[#F8E2D2] text-[#713F25]' : 'border-emerald-200/80 bg-gradient-to-br from-[#EDF9F2] via-[#DDF2E7] to-[#D5EDE2] text-[#214F42]'}`}
              >
                <div aria-hidden="true" className={`absolute -right-10 -top-10 h-36 w-36 rounded-full border ${isChai ? 'border-orange-900/[0.08]' : 'border-emerald-900/[0.08]'}`} />
                <div aria-hidden="true" className={`absolute -right-4 -top-4 h-24 w-24 rounded-full border ${isChai ? 'border-orange-900/[0.08]' : 'border-emerald-900/[0.08]'}`} />
                <div className="relative flex items-start justify-between gap-4">
                  <div className={`flex h-11 w-11 items-center justify-center rounded-xl ring-1 ${isChai ? 'bg-orange-200/70 text-[#8C4A20] ring-orange-300/70' : 'bg-emerald-200/70 text-[#27664F] ring-emerald-300/70'}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className={`rounded-full border px-3 py-1 text-xs font-bold tracking-wide ${isChai ? 'border-orange-300/80 bg-white/50 text-[#8C4A20]' : 'border-emerald-300/80 bg-white/50 text-[#27664F]'}`}>
                    {isChai ? 'CONNECT & DISCOVER' : 'BUILD & CONTRIBUTE'}
                  </span>
                </div>
                <h3 className="relative mt-5 text-2xl font-bold tracking-tight sm:text-3xl">{program.title}</h3>
                <p className={`relative mt-3 max-w-xl text-sm leading-6 sm:text-base ${isChai ? 'text-[#754F3A]' : 'text-[#3D6657]'}`}>{program.description}</p>
                <div className={`relative mt-6 flex flex-wrap items-center gap-4 border-t pt-4 ${isChai ? 'border-orange-300/70' : 'border-emerald-300/70'}`}>
                  <a href={program.href} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 ${isChai ? 'bg-[#B96B35] hover:bg-[#9F5728]' : 'bg-[#34765D] hover:bg-[#285F4A]'}`} aria-label={`View more details about ${program.title}`}>
                    View program details <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <a href={program.href} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-1.5 text-sm font-bold transition ${isChai ? 'text-[#8C4A20] hover:text-[#5E3219]' : 'text-[#27664F] hover:text-[#174735]'}`} aria-label={`View ${program.title} on Meta-Wiki`}>
                    Meta-Wiki <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative z-10 isolate overflow-hidden border-y border-emerald-100/80 bg-white/45 py-16 text-slate-900 backdrop-blur-sm">
        <div aria-hidden="true" className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-sky-200/45 blur-3xl" />
        <div aria-hidden="true" className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-emerald-200/45 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
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
                  <div key={benefit.title} className="rounded-2xl border border-emerald-100 bg-white/75 p-5 shadow-sm backdrop-blur-sm">
                    <Icon className="h-6 w-6 text-emerald-700" />
                    <h3 className="mt-4 font-semibold">{benefit.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{benefit.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">FAQ</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-950">Questions, answered</h2>
        </div>
        <div className="mt-10 divide-y divide-slate-200/80 rounded-2xl border border-white/90 bg-white/75 px-6 shadow-xl shadow-slate-900/5 backdrop-blur-md">
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

      <section className="relative z-10 px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-white/90 bg-gradient-to-r from-sky-100/95 via-white/95 to-emerald-100/95 p-8 text-slate-900 shadow-xl shadow-emerald-900/10 backdrop-blur-md sm:p-12">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <BookOpen className="h-8 w-8" />
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Ready to start contributing?</h2>
              <p className="mt-3 text-slate-600">
                Join the WikiClub Tech UU community and turn curiosity into practical open-source experience.
              </p>
            </div>
            <Link
              href="https://forms.gle/FGoyrEHC1CuP9hPSA"
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-emerald-700 px-6 py-3 font-bold text-white shadow-md shadow-emerald-900/15 transition hover:-translate-y-0.5 hover:bg-emerald-800"
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
