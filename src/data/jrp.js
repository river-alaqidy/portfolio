export const rotations = [
  {
    num: "01",
    title: "IT User Support",
    badge: "done",
    period: "August 2025 - February 2026",
    org: "PBS Wisconsin · Madison, WI",
    bullets: [
      "Provided generalist IT support for user tickets in osTicket and Slack, and resolved walk-in hardware/software issues while managing the computer lifecycle — imaging, decommissioning, and onboarding/offboarding users.",
      "Audited and remediated computer vulnerabilities using Qualys, Cisco AMP, and SnipeIT, and implemented BigFix to automate remote software patching and issue resolution.",
      "Completed AANTS network training and monitored and adjusted switches to resolve connectivity issues.",
      "Wrote a Bash script to automate backup directory maintenance and set up Linux kiosk displays for building-wide TVs.",
    ],
    chips: ["osTicket", "SnipeIT", "Qualys", "Cisco AMP", "BigFix", "Linux", "Bash"],
  },
  {
    num: "02",
    title: "Software Engineering",
    badge: "done",
    period: "February 2026 - August 2026",
    org: "ROAD Student Facing Applications · Madison, WI",
    bullets: [
      "Migrated an AWS Lambda alerting service from AWS SDK for Go v1 to v2, implementing unit and mock tests for a CloudWatch-to-Microsoft-Teams notification pipeline serving CSE and CAOS.",
      "Rebuilt a containerized Java Spring enrollment API as a Golang AWS Lambda function, cutting infrastructure overhead for a low-traffic internal service used by RO Student Services.",
      "Designed and deployed AWS resources (Lambda, API Gateway, IAM, CloudWatch) using Terraform, and built GitLab CI/CD pipelines to deploy across dev, test, and prod.",
      "Built a Go server mux to route and query enrollment/validation requests, and updated CloudFront origin routing to support the new API.",
    ],
    chips: ["Go", "AWS Lambda", "API Gateway", "Terraform", "GitLab CI/CD", "CloudWatch"],
  },
  {
    num: "03",
    title: "Full Stack Software Development",
    badge: "active",
    period: "August 2026 - February 2027",
    org: "",
    bullets: [
      "Upcoming",
    ],
    chips: [],
  },
  {
    num: "04",
    title: "TBD",
    badge: "next",
    period: "February 2027 - August 2027",
    org: "",
    bullets: [
      "Upcoming",
    ],
    chips: [],
  },
];

export const prodevCards = [
  {
    type: "Seminar",
    name: "FP2L",
    detail: "TODO",
  },
  {
    type: "Certification",
    name: "AANTS",
    detail: "TODO",
  },
  {
    type: "Conference",
    name: "ITCCC",
    detail: "TODO",
  },
];

export const skillGroups = [
  {
    title: "Technical",
    tags: [
      "Go",
      "AWS - Lambda, CloudWatch, SNS",
      "Git",
      "BigFix",
    ],
  },
  {
    title: "IT Concepts",
    tags: [
      "Software Engineering",
      "User Support",
      "Computer Life Cycle Management",
      "Networking Basics",
    ],
  },
  {
    title: "Process & Collaboration",
    tags: [
      "Agile / Scrum",
      "Code Review",
      "Sprint Planning",
      "Documentation",
    ],
  },
];

export const jrpSubnav = [
  { href: "#jrp-rotations", label: "Rotations" },
  { href: "#jrp-about",     label: "About the JRP" },
  { href: "#jrp-prodev",    label: "Prof Dev" },
  { href: "#jrp-skills",    label: "Skills" },
];

// export const rotations = [
//   {
//     num: "01",
//     title: "IT User Support",
//     badge: "done",
//     period: "August 2025 - February 2026",
//     desc: "Provided General IT Support for PBS Wisconsin. Helped automate assistance and increase efficiency by introducing BigFix Admin to the organization.",
//   },
//   {
//     num: "02",
//     title: "Software Engineering",
//     badge: "done",
//     period: "February 2026 - August 2026",
//     desc: "Contributed to ROAD Student Facing Applications. Experienced development using Go and AWS Services (Lambda, CloudWatch, SNS).",
//   },
//   {
//     num: "03",
//     title: "Full Stack Software Development",
//     badge: "active",
//     period: "August 2026 - February 2027",
//     desc: "Third rotation discipline to be determined in collaboration with program coordinators. Possibilities include networking, cybersecurity, systems administration, or data infrastructure.",
//   },
//   {
//     num: "04",
//     title: "TBD",
//     badge: "next",
//     period: "February 2027 - August 2027",
//     desc: "Final rotation. Chosen based on program performance, interest, and available placements within UW–Madison IT.",
//   },
// ];

// export const prodevCards = [
//   {
//     type: "Seminar",
//     name: "FP2L",
//     detail: "TODO",
//   },
//   {
//     type: "Certification",
//     name: "AANTS",
//     detail: "TODO",
//   },
//   {
//     type: "Conference",
//     name: "ITCCC",
//     detail: "TODO",
//   },
// ];

// export const skillGroups = [
//   {
//     title: "Technical",
//     tags: [
//       "Go",
//       "AWS - Lambda, CloudWatch, SNS",
//       "Git",
//       "BigFix",
//     ],
//   },
//   {
//     title: "IT Concepts",
//     tags: [
//       "Software Engineering",
//       "User Support",
//       "Computer Life Cycle Management",
//       "Networking Basics",
//     ],
//   },
//   {
//     title: "Process & Collaboration",
//     tags: [
//       "Agile / Scrum",
//       "Code Review",
//       "Sprint Planning",
//       "Documentation",
//     ],
//   },
// ];

// export const jrpSubnav = [
//   { href: "#jrp-rotations", label: "Rotations" },
//   { href: "#jrp-about",     label: "About the JRP" },
//   { href: "#jrp-prodev",    label: "Prof Dev" },
//   { href: "#jrp-skills",    label: "Skills" },
// ];