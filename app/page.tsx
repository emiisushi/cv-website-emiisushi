import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
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
  education,
  experiences,
  profile,
  projects,
  skills,
} from "@/lib/profile-data";

export default function Home() {
  return (
    <div className="atmosphere-bg min-h-screen pb-14">
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-10">
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

        <section className="enter-up grid gap-6 md:grid-cols-[1.15fr_2fr]" style={{ animationDelay: "120ms" }}>
          <Card>
            <CardContent className="space-y-4 p-6">
              <div className="mx-auto overflow-hidden rounded-xl border border-border/70 sm:mx-0">
                <Image
                  src="/headshot.svg"
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

        <section className="enter-up grid gap-6 lg:grid-cols-2" style={{ animationDelay: "220ms" }}>
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

        <section className="enter-up" style={{ animationDelay: "320ms" }}>
          <Card>
            <CardHeader>
              <CardTitle>Experience</CardTitle>
              <CardDescription>
                Professional, academic, and volunteer experiences that demonstrate practical skills.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-7">
              {experiences.map((exp) => (
                <article key={`${exp.title}-${exp.period}`} className="space-y-2">
                  <h3 className="text-base font-semibold text-foreground">{exp.title}</h3>
                  <p className="text-sm font-medium text-[--brand]">{exp.organization}</p>
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">
                    {exp.period}
                  </p>
                  <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
                    {exp.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </CardContent>
          </Card>
        </section>

        <section className="enter-up" style={{ animationDelay: "420ms" }}>
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

        <section className="enter-up" style={{ animationDelay: "520ms" }}>
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
