// TODO: highlight/bold keywords within bullet points

export const rotations = [
  {
    num: '01',
    title: 'IT Support Specialist',
    org: 'Wisconsin Public Media (WPM)',
    period: 'August 2025 - February 2026',
    badge: 'done',
    bullets: [
      'Provided generalist IT user support through ticket handling, walk in software and hardware technical issues.',
      'Handled computer life cycle management for 400 person organization - including decommissioning and imaging computers, onboarding and offboarding technical set ups.',
      'Utilized BigFix, Qualys and Cisco AMP for automated software patching and asset auditing. Targeted computer vulnerabilities across the organization and created scripts to remotely resolve issues without user interruptions.',
      'Created UI experience for PBS WI Friends Board Portal. Improved site accessibility in compatible strategy to enhance workflows.',
      'Set up linux kiosks on department TVs to display and rotate through PBS WI and WPR websites in lobbies and hallways.',
      'Completed networking training and monitored and adjusted switches when issues arose.',
      'Researched and tested transcription and diarization software to find cost effective options for audio file transcription.',
      'Wrote bash scripts to maintain backup directories for internal IT resources.',
    ],
    chips: ['BigFix', 'osTicket', 'Qualys', 'Cisco AMP', 'SnipeIT', 'Linux', 'Bash'],
  },
  {
    num: '02',
    title: 'Software Engineer',
    org: 'ROAD',
    period: 'February 2026 - August 2026',
    badge: 'done',
    bullets: [
      "Contributed to end-to-end development of student facing applications supplied by UW's Registrar Office, utilizing a stack consisting of Go, Java, Typescript, Angular, as well as AWS infrastructure and services.",
      'Collaborated in a 7-person agile team, following scrum methodology to provide iterative updates and consistent product delivery.',
      'Deployed and managed cloud infrastructure on AWS with Terraform and automated GitLab CI/CD pipelines.',
      'Participated in code reviews of application features to continuously optimize changes and supply transparent feedback across the development team.',
      {
        text: 'Rebuilt a containerized Java Spring enrollment API as a Golang AWS Lambda function, cutting infrastructure costs for a low-traffic internal service used by RO Student Services.',
        subBullets: [
          'API structured as a Golang Lambda Function that is triggered by an API Gateway. Implemented logging with CloudWatch to view status of requests, queries, and database connections.',
          'Adjusted frontend cloudfront origins for new application routing structure.',
          'Costs decreased to ⅓ of previous reports due to replacing constantly running service with an invokable Lambda function to scale pricing relative to actual usage.',
          'Created unit tests for incremental development of application. Additionally made Docker containers to send http requests for local testing.',
        ],
      },
      {
        text: "Upgraded ROAD's cloudwatch team's notifier to utilize current AWS SDK v2 for Go.",
        subBullets: [
          "Cloudwatch team's notifier is a AWS Go Lambda function that receives a Cloudwatch Alert from an SNS topic and send to a Microsoft teams alert channel using webhooks.",
          'Implemented mock and unit testing with AWS CLI for modified features.',
        ],
      },
    ],
    chips: [
      'Golang', 'Java', 'TypeScript', 'Angular', 'Terraform', 'CI/CD',
      'AWS', 'Lambda', 'API Gateway', 'CloudWatch', 'Unit Testing', 'Agile/Scrum',
    ],
  },
  {
    num: '03',
    title: 'Full Stack Software Engineer',
    org: 'Graduate School OIT',
    period: 'August 2026 - February 2027',
    badge: 'active',
    bullets: [
      'Update coming soon',
    ],
    chips: [],
  },
  {
    num: '04',
    title: 'TBD',
    org: '',
    period: 'February 2027 - August 2027',
    badge: 'next',
    bullets: [
      'Upcoming',
    ],
    chips: [],
  },
]

export const prodevCards = [
  {
    name: 'Fully Prepared to Lead (FP2L)',
    type: 'Seminar',
    detail: 'Series focused on practical ways to cultivate leadership, develop career growth goals, and improve corporate presentation skills.',
  },
  {
    name: 'Authorized Agent Network Tool Suite (AANTS)',
    type: 'Certification',
    detail: 'Administrator training to configure networking equipment across UW campus.',
  },
  {
    name: 'IT Professionals Conference',
    type: 'Conference',
    detail: 'Event connecting IT Professionals across campus, designed to help attendees learn from each other through discussion of projects, experiences, and challenges.',
  },
]