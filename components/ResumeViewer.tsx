'use client';

import { useState, useEffect } from 'react';
import { Document, Page, Text, View, StyleSheet, PDFViewer, PDFDownloadLink, Font } from '@react-pdf/renderer';

// Register fonts for PDF
Font.register({
  family: 'Inter',
  fonts: [
    { src: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff' },
    { src: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuI6fAZ9hjp-Ek-_EeA.woff', fontWeight: 600 },
    { src: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYAZ9hjp-Ek-_EeA.woff', fontWeight: 700 }
  ]
});

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 40,
    fontFamily: 'Inter',
    color: '#111827'
  },
  header: {
    marginBottom: 20,
    borderBottom: '1pt solid #E5E7EB',
    paddingBottom: 10
  },
  name: {
    fontSize: 24,
    fontWeight: 700,
    marginBottom: 4,
    color: '#000000'
  },
  contact: {
    fontSize: 10,
    color: '#4B5563',
    flexDirection: 'row',
    gap: 10,
    marginBottom: 4
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 700,
    marginTop: 16,
    marginBottom: 8,
    color: '#111827',
    textTransform: 'uppercase',
    letterSpacing: 1
  },
  jobBlock: {
    marginBottom: 12
  },
  jobHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: 4
  },
  jobTitle: {
    fontSize: 12,
    fontWeight: 600,
    color: '#111827'
  },
  jobCompany: {
    fontSize: 12,
    fontWeight: 700,
    color: '#000000'
  },
  jobDate: {
    fontSize: 10,
    color: '#6B7280'
  },
  bulletPoint: {
    flexDirection: 'row',
    marginBottom: 3,
    paddingLeft: 8
  },
  bullet: {
    width: 10,
    fontSize: 10,
    color: '#4B5563'
  },
  bulletText: {
    flex: 1,
    fontSize: 10,
    color: '#374151',
    lineHeight: 1.4
  },
  skillsBlock: {
    marginBottom: 8
  },
  skillCategory: {
    fontSize: 10,
    fontWeight: 600,
    color: '#111827',
    marginBottom: 2
  },
  skillList: {
    fontSize: 10,
    color: '#4B5563',
    lineHeight: 1.4
  }
});

const RESUME_DATA = {
  header: {
    name: "Ayush Singh",
    email: "ayushsingh1214@gmail.com",
    linkedin: "linkedin.com/in/ayushsingh1214",
    github: "github.com/ayushs1214",
    portfolio: "portfolio-2ohx.vercel.app",
    location: "Mumbai, India"
  },
  education: {
    degree: "B.E. Information Technology",
    school: "TSEC Mumbai",
    date: "Jan 2022 – May 2025",
    details: "CGPA 7.62. Won Leadership Excellence Award + IDEATHON."
  }
};

// Define the variants
const VARIANTS: Record<string, any> = {
  "Partnerships Manager": {
    experience: [
      {
        company: "testRigor",
        role: "Support & Partnerships Coordinator",
        date: "Jan 2025 – Present",
        bullets: [
          "Managed channel partner relationships with SI firms and resellers to drive product adoption.",
          "Led influencer and technical community outreach for product evangelism.",
          "Primary contact for customers & partners on AI-driven QA automation product.",
          "Resolved technical onboarding blockers, improving partner activation rates.",
          "Built internal documentation & FAQs, reducing repetitive support queries."
        ]
      },
      {
        company: "FinURL",
        role: "Co-Founder",
        date: "Mar 2023 – Jul 2024",
        bullets: [
          "Led NBFC and financial institution partnership development.",
          "Created partner onboarding documentation and self-service guides.",
          "Co-founded fintech platform reaching 900+ organic users in Year 1.",
          "Acted as technical POC for API integrations and platform workflows."
        ]
      },
      {
        company: "IETE-TSEC",
        role: "Chairperson",
        date: "Mar 2023 – Mar 2024",
        bullets: [
          "Managed sponsorship strategy and marketing operations.",
          "Led 60+ member team organizing events for 500+ participants.",
          "Won Leadership Excellence Award."
        ]
      }
    ],
    skills: [
      { category: "GTM & Partnerships", items: "Channel Strategy, SI Onboarding, Influencer GTM, Pipeline Generation" },
      { category: "Tools", items: "HubSpot, Salesforce, LinkedIn Sales Navigator, Apollo.io, Notion" }
    ]
  },
  "Business Development": {
    experience: [
      {
        company: "testRigor",
        role: "Support & Partnerships Coordinator",
        date: "Jan 2025 – Present",
        bullets: [
          "Drove pipeline generation through channel partner relationships with SI firms and resellers.",
          "Led influencer and technical community outreach for product evangelism.",
          "Resolved technical onboarding blockers, improving partner activation rates.",
          "Built internal documentation & FAQs, reducing repetitive support queries."
        ]
      },
      {
        company: "FinURL",
        role: "Co-Founder",
        date: "Mar 2023 – Jul 2024",
        bullets: [
          "Co-founded fintech platform reaching 900+ organic users in Year 1 through aggressive GTM.",
          "Led NBFC and financial institution partnership development and deal closure.",
          "Acted as technical POC for API integrations and platform workflows."
        ]
      },
      {
        company: "CloseLoop (Project)",
        role: "Creator",
        date: "Present",
        bullets: [
          "Built post-call execution engine for B2B sales teams.",
          "Automated CRM updates, follow-up drafts, and task creation triggered post-call."
        ]
      }
    ],
    skills: [
      { category: "Outreach & Prospecting", items: "LinkedIn Sales Navigator, Apollo.io, Clay, Hunter.io, Lusha, ZoomInfo" },
      { category: "Sales Tech", items: "Meet Alfred, Lemlist, Instantly, Smartlead, Expandi, HubSpot, Salesforce" }
    ]
  },
  "Account Executive": {
    experience: [
      {
        company: "testRigor",
        role: "Support & Partnerships Coordinator",
        date: "Jan 2025 – Present",
        bullets: [
          "Owned enterprise account relationships and resolved technical onboarding blockers.",
          "Managed channel partner relationships with SI firms and resellers.",
          "Primary contact for customers & partners on AI-driven QA automation product.",
          "Built internal documentation & FAQs, reducing repetitive support queries."
        ]
      },
      {
        company: "FinURL",
        role: "Co-Founder",
        date: "Mar 2023 – Jul 2024",
        bullets: [
          "Led discovery, conversion, and deal closure for NBFC and financial institution partnerships.",
          "Co-founded fintech platform reaching 900+ organic users in Year 1.",
          "Acted as technical POC for API integrations and platform workflows."
        ]
      },
      {
        company: "CloseLoop (Project)",
        role: "Creator",
        date: "Present",
        bullets: [
          "Built post-call execution engine for B2B sales teams to improve deal closure signals.",
          "Automated CRM updates, follow-up drafts, and task creation triggered post-call."
        ]
      }
    ],
    skills: [
      { category: "Sales & Account Management", items: "Discovery, Conversion, Deal Closure Signals, Enterprise Account Ownership" },
      { category: "CRM & Enablement", items: "HubSpot, Salesforce, Pipedrive, Gong, Chorus.ai" }
    ]
  },
  "Founding GTM / GTM Engineer": {
    experience: [
      {
        company: "CloseLoop (Project)",
        role: "Creator & Full-Stack Engineer",
        date: "Present",
        bullets: [
          "Built post-call execution engine for B2B sales teams using FastAPI, Node.js, PostgreSQL, OpenAI.",
          "Automated CRM updates, follow-up drafts, and task creation triggered post-call.",
          "Owned full-stack development and technical GTM strategy."
        ]
      },
      {
        company: "testRigor",
        role: "Support & Partnerships Coordinator",
        date: "Jan 2025 – Present",
        bullets: [
          "Primary technical contact for customers & partners on AI-driven QA automation product.",
          "Resolved technical onboarding blockers, improving partner activation rates.",
          "Managed channel partner relationships with SI firms and resellers."
        ]
      },
      {
        company: "FinURL",
        role: "Co-Founder",
        date: "Mar 2023 – Jul 2024",
        bullets: [
          "Co-founded fintech platform reaching 900+ organic users in Year 1.",
          "Acted as technical POC for API integrations and platform workflows.",
          "Built Python automation scripts for data validation."
        ]
      }
    ],
    skills: [
      { category: "Engineering", items: "Node.js, FastAPI, PostgreSQL, Redis, AWS, React.js, Next.js" },
      { category: "GTM & Sales Tech", items: "HubSpot, Salesforce, Apollo.io, Clay, Smartlead" }
    ]
  },
  "Full-Stack Engineer": {
    experience: [
      {
        company: "Nyuway",
        role: "Backend Developer Intern",
        date: "Jul 2024 – Aug 2024",
        bullets: [
          "Built and secured backend features using Node.js, Express.js, MongoDB.",
          "Designed user auth + session management leading to 40% stability improvement.",
          "Contributed to secure API endpoint design & DevOps integration.",
          "Participated in agile sprint planning."
        ]
      },
      {
        company: "CloseLoop (Project)",
        role: "Creator & Full-Stack Engineer",
        date: "Present",
        bullets: [
          "Built post-call execution engine for B2B sales teams using FastAPI, Node.js, PostgreSQL, OpenAI.",
          "Automated CRM updates, follow-up drafts, and task creation triggered post-call."
        ]
      },
      {
        company: "FinURL",
        role: "Co-Founder & Technical Lead",
        date: "Mar 2023 – Jul 2024",
        bullets: [
          "Acted as technical POC for API integrations and platform workflows.",
          "Built Python automation scripts for data validation.",
          "Co-founded fintech platform reaching 900+ organic users in Year 1."
        ]
      },
      {
        company: "testRigor",
        role: "Support & Partnerships Coordinator",
        date: "Jan 2025 – Present",
        bullets: [
          "Primary technical contact for customers & partners on AI-driven QA automation product.",
          "Resolved technical onboarding blockers, improving partner activation rates."
        ]
      }
    ],
    skills: [
      { category: "Languages", items: "JavaScript, TypeScript, Python, C/C++" },
      { category: "Backend & DB", items: "Node.js, Express.js, FastAPI, Flask, MongoDB, PostgreSQL, Redis" },
      { category: "Frontend & Infra", items: "React.js, Next.js, AWS, Docker, NGINX" }
    ]
  }
};

const ResumeDocument = ({ role }: { role: string }) => {
  const data = VARIANTS[role] || VARIANTS["Full-Stack Engineer"];

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.name}>{RESUME_DATA.header.name}</Text>
          <View style={styles.contact}>
            <Text>{RESUME_DATA.header.email}</Text>
            <Text>•</Text>
            <Text>{RESUME_DATA.header.linkedin}</Text>
            <Text>•</Text>
            <Text>{RESUME_DATA.header.github}</Text>
            <Text>•</Text>
            <Text>{RESUME_DATA.header.location}</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Experience</Text>
        {data.experience.map((exp: any, i: number) => (
          <View key={i} style={styles.jobBlock}>
            <View style={styles.jobHeader}>
              <Text style={styles.jobTitle}><Text style={styles.jobCompany}>{exp.company}</Text> | {exp.role}</Text>
              <Text style={styles.jobDate}>{exp.date}</Text>
            </View>
            {exp.bullets.map((bullet: string, j: number) => (
              <View key={j} style={styles.bulletPoint}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.bulletText}>{bullet}</Text>
              </View>
            ))}
          </View>
        ))}

        <Text style={styles.sectionTitle}>Education</Text>
        <View style={styles.jobBlock}>
          <View style={styles.jobHeader}>
            <Text style={styles.jobTitle}><Text style={styles.jobCompany}>{RESUME_DATA.education.school}</Text> | {RESUME_DATA.education.degree}</Text>
            <Text style={styles.jobDate}>{RESUME_DATA.education.date}</Text>
          </View>
          <View style={styles.bulletPoint}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.bulletText}>{RESUME_DATA.education.details}</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Skills</Text>
        {data.skills.map((skill: any, i: number) => (
          <View key={i} style={styles.skillsBlock}>
            <Text style={styles.skillCategory}>{skill.category}: <Text style={styles.skillList}>{skill.items}</Text></Text>
          </View>
        ))}
      </Page>
    </Document>
  );
};

export function ResumeViewer({ role }: { role: string }) {
  const actualRole = role === "Other" ? "Full-Stack Engineer" : role;

  return (
    <div className="flex flex-col">
      <div className="h-[600px] md:h-[800px] w-full bg-zinc-100">
        <PDFViewer width="100%" height="100%" className="border-none">
          <ResumeDocument role={actualRole} />
        </PDFViewer>
      </div>
      <div className="p-4 bg-zinc-900 border-t border-zinc-800 flex justify-end">
        <PDFDownloadLink 
          document={<ResumeDocument role={actualRole} />} 
          fileName={`Ayush_Singh_Resume_${actualRole.replace(/[^a-zA-Z0-9]/g, '_')}.pdf`}
          className="px-6 py-3 bg-zinc-100 text-zinc-900 rounded-xl font-medium hover:bg-white transition-colors"
        >
          {/* @ts-ignore */}
          {({ loading }) => (loading ? 'Generating PDF...' : 'Download PDF')}
        </PDFDownloadLink>
      </div>
    </div>
  );
}
