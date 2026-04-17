import {
  CalendarDays,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import Image from "next/image";

import { ModeToggle } from "@/components/mode-toggle";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  aiProcess,
  certificationsMemberships,
  education,
  profile,
  projects,
  seminarsAndConferences,
  skills,
} from "@/lib/profile-data";

export default function Home() {
  return (
    <div className="atmosphere-bg min-h-screen pb-14">
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-10">
        <nav className="enter-up rounded-2xl border border-border/80 bg-[#0d1422] p-3 text-slate-200 shadow-sm">
          <ul className="flex flex-wrap items-center justify-center gap-2 text-sm font-medium sm:gap-3 sm:text-base">
            {[
              { label: "About", href: "#about" },
              { label: "Skills", href: "#skills" },
              { label: "Seminars", href: "#seminars" },
              { label: "Education", href: "#education" },
              { label: "Projects", href: "#projects" },
              { label: "Contact", href: "#contact" },
            ].map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="inline-flex rounded-lg px-3 py-1.5 text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <header className="enter-up sticky top-3 z-20 rounded-2xl border border-border/90 bg-card/85 p-4 shadow-sm backdrop-blur md:p-5">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Curriculum Vitae
              </p>
              <h1 className="font-serif text-3xl font-bold leading-tight md:text-4xl">
                {profile.name}
              </h1>
              <p className="mt-1 text-base text-muted-foreground">{profile.role}</p>
            </div>
            <div className="flex items-center gap-3">
              <ModeToggle />
              <Button asChild>
                <a href={profile.social.github} target="_blank" rel="noreferrer">
                  View GitHub
                </a>
              </Button>
            </div>
          </div>
        </header>

        <section id="about" className="enter-up delay-120 grid gap-6 md:grid-cols-[1.15fr_2fr]">
          <Card>
            <CardContent className="space-y-4 p-6">
              <div className="mx-auto overflow-hidden rounded-xl border border-border/70 sm:mx-0">
                <Image
                  src="/profile.jpg"
                  alt="Professional headshot of Emi Isushi"
                  width={540}
                  height={540}
                  className="aspect-square w-full object-cover"
                  priority
                />
              </div>
              <div className="space-y-3 text-sm">
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Mail className="h-4 w-4" />
                  {profile.email}
                </a>
                <p className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  {profile.phone}
                </p>
                <p className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  {profile.location}
                </p>
                <div className="flex gap-3 pt-2">
                  <Button asChild variant="outline" className="w-full">
                    <a href={profile.social.linkedin} target="_blank" rel="noreferrer">
                      <Linkedin className="mr-2 h-4 w-4" />
                      LinkedIn
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <a href={profile.social.github} target="_blank" rel="noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Profile Summary</CardTitle>
              <CardDescription>{profile.tagline}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-5 text-sm leading-7 text-muted-foreground sm:text-base">
              <p>{profile.bio}</p>
              <p>{profile.summary}</p>
              <div className="flex flex-wrap gap-2">
                {["AI-Powered UI Development", "Design Systems", "Production Deployment"].map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="skills" className="enter-up delay-220 grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Skills & Technical Competencies</CardTitle>
              <CardDescription>
                Core technologies and workflow strengths used in projects.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-5">
              <SkillGroup title="Frontend Engineering" items={skills.frontend} />
              <SkillGroup title="AI Workflow" items={skills.aiWorkflow} />
              <SkillGroup title="Tools & Collaboration" items={skills.tools} />
            </CardContent>
          </Card>

          <Card>
            <div id="education" className="relative -top-24" aria-hidden="true" />
            <CardHeader>
              <CardTitle>Education</CardTitle>
              <CardDescription>
                Academic background, certifications, and learning focus.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {education.map((item) => (
                <article key={`${item.title}-${item.period}`} className="space-y-2">
                  <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm font-medium text-[--brand]">{item.organization}</p>
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">
                    {item.period}
                  </p>
                  <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                    {item.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </CardContent>
          </Card>
        </section>

        <section id="seminars" className="enter-up delay-320">
          <Card>
            <CardHeader>
              <CardTitle>Seminars & Conferences</CardTitle>
              <CardDescription>
                Conference and seminar participation aligned with IT and engineering growth.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="timeline-list space-y-6">
                {seminarsAndConferences.map((item, index) => (
                  <article
                    key={`${item.title}-${item.date}`}
                    className="timeline-item relative rounded-xl border border-border/80 bg-background/55 p-4 md:p-5"
                  >
                    <span className="timeline-dot" aria-hidden="true" />
                    <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-2 flex items-center gap-2 text-sm font-semibold text-foreground/90">
                      <CalendarDays className="h-4 w-4 text-[--brand]" />
                      {item.date}
                    </p>
                    <p className="mt-1 flex items-center gap-2 text-sm font-medium text-muted-foreground">
                      <MapPin className="h-4 w-4 text-[--brand]" />
                      {item.location}
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                    {index !== seminarsAndConferences.length - 1 ? (
                      <span className="timeline-line" aria-hidden="true" />
                    ) : null}
                  </article>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="enter-up delay-420">
          <Card>
            <CardHeader>
              <CardTitle>Certifications & Memberships</CardTitle>
              <CardDescription>
                Certificates and memberships earned through academic and professional participation.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {certificationsMemberships.map((item) => (
                <article
                  key={`${item.title}-${item.subtitle}-${item.year}`}
                  className="cert-item flex items-start justify-between gap-4 rounded-xl border border-border/80 bg-background/55 px-4 py-3 md:px-5"
                >
                  <div>
                    <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                  </div>
                  <p className="whitespace-nowrap pt-1 text-sm font-semibold text-[--brand]">
                    {item.year}
                  </p>
                </article>
              ))}
            </CardContent>
          </Card>
        </section>

        <section id="projects" className="enter-up delay-520">
          <Card>
            <CardHeader>
              <CardTitle>Projects & Portfolio</CardTitle>
              <CardDescription>
                Selected projects including academic and personal work.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {projects.map((project) => (
                <article
                  key={project.name}
                  className="rounded-lg border border-border/80 bg-background/60 p-4 transition-all hover:-translate-y-0.5 hover:shadow-sm"
                >
                  <h3 className="font-semibold text-foreground">{project.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <Badge key={tech} variant="outline" className="bg-card/70">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button asChild variant="ghost" className="mt-3 px-0 text-[--brand] hover:text-[--brand]">
                    <a href={project.link} target="_blank" rel="noreferrer">
                      Open Project
                    </a>
                  </Button>
                </article>
              ))}
            </CardContent>
          </Card>
        </section>

        <section id="contact" className="enter-up delay-520">
          <Card className="border-border/90 bg-[#142238]/90 text-slate-100">
            <CardHeader>
              <CardTitle className="text-white">Get in Touch</CardTitle>
              <CardDescription className="text-slate-300">
                Send me a message for collaboration, internship opportunities, or project inquiries.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="fullName" className="text-sm font-medium text-slate-200">
                      Full Name
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      placeholder="Your name"
                      className="w-full rounded-lg border border-slate-600/70 bg-slate-700/60 px-4 py-3 text-slate-100 placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--brand]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="emailAddress" className="text-sm font-medium text-slate-200">
                      Email Address
                    </label>
                    <input
                      id="emailAddress"
                      name="emailAddress"
                      type="email"
                      placeholder="Your email"
                      className="w-full rounded-lg border border-slate-600/70 bg-slate-700/60 px-4 py-3 text-slate-100 placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--brand]"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-slate-200">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Message subject"
                    className="w-full rounded-lg border border-slate-600/70 bg-slate-700/60 px-4 py-3 text-slate-100 placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--brand]"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-200">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Your message"
                    className="w-full resize-y rounded-lg border border-slate-600/70 bg-slate-700/60 px-4 py-3 text-slate-100 placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--brand]"
                  />
                </div>
                <Button
                  type="submit"
                  className="h-12 w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-fuchsia-500 text-white hover:brightness-110"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </section>

        <section className="enter-up delay-520">
          <Card>
            <CardHeader>
              <CardTitle>v0.dev AI Generation Process</CardTitle>
              <CardDescription>
                Evidence of AI-assisted workflow and implementation approach.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground sm:text-base">
                v0.dev project link:{" "}
                <a
                  href={aiProcess.v0ProjectLink}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-[--brand] underline decoration-[color-mix(in_oklab,var(--brand),transparent_35%)] underline-offset-4"
                >
                  {aiProcess.v0ProjectLink}
                </a>
              </p>
              <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground sm:text-base">
                {aiProcess.notes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        <footer className="enter-up delay-520 rounded-2xl border border-border/90 bg-card/85 p-6 shadow-sm">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="space-y-3">
              <h3 className="font-serif text-2xl font-semibold text-[--brand]">{profile.name}</h3>
              <p className="text-sm text-muted-foreground">{profile.role}</p>
              <div className="flex items-center gap-3">
                <Button asChild variant="outline" size="icon">
                  <a href={profile.social.github} target="_blank" rel="noreferrer" aria-label="GitHub profile">
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="icon">
                  <a href={profile.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="icon">
                  <a href={`mailto:${profile.email}`} aria-label="Send email">
                    <Mail className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Quick Links
              </h4>
              <ul className="mt-3 space-y-2 text-sm">
                {[
                  { label: "About", href: "#about" },
                  { label: "Skills", href: "#skills" },
                  { label: "Seminars", href: "#seminars" },
                  { label: "Projects", href: "#projects" },
                  { label: "Contact", href: "#contact" },
                ].map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="text-muted-foreground transition-colors hover:text-foreground">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Contact
              </h4>
              <div className="mt-3 space-y-2 text-sm">
                <p className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="h-4 w-4 text-[--brand]" />
                  {profile.email}
                </p>
                <p className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4 text-[--brand]" />
                  {profile.location}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 border-t border-border/80 pt-4 text-xs text-muted-foreground sm:flex sm:items-center sm:justify-between">
            <p>© 2026 {profile.name}. All rights reserved.</p>
            <p className="mt-2 sm:mt-0">Made with care using Next.js and Tailwind CSS.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}

function SkillGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <Badge key={item}>{item}</Badge>
        ))}
      </div>
    </div>
  );
}
