export type Module = {
  slug: string;
  name: string;
  short: string;
  intro: string;
  benefits: string[];
  shot: string;
  video?: string;
  editions: { full: boolean; lite: boolean };
};

export const MODULES: Module[] = [
  {
    slug: "admissions",
    name: "Admissions",
    short: "Enquiries to enrolment in one pipeline.",
    intro: "Track every application from first enquiry to confirmed seat, with a clear funnel for your admissions team.",
    benefits: ["Online applications and document checklists", "Pipeline and conversion view by grade", "Seat availability and waitlists at a glance"],
    shot: "02_admissions_applications",
    editions: { full: true, lite: true },
  },
  {
    slug: "academics",
    name: "Academics",
    short: "Classes, sections, subjects and timetables.",
    intro: "Set up the academic year once and keep classes, subjects, teachers and timetables in sync.",
    benefits: ["Weekly timetables for classes and teachers", "Subject and section setup per academic year", "Student records in one profile"],
    shot: "10_academics_dashboard",
    editions: { full: true, lite: true },
  },
  {
    slug: "attendance",
    name: "Attendance",
    short: "Daily attendance in a few taps.",
    intro: "Teachers mark attendance quickly, and leaders see who is present and which sections are still unmarked.",
    benefits: ["Fast daily and period-wise marking", "Unmarked sections flagged for follow-up", "Parents see attendance in the portal"],
    shot: "09_attendance_dashboard",
    editions: { full: true, lite: true },
  },
  {
    slug: "exams",
    name: "Exams & results",
    short: "Assessments, grades and report cards.",
    intro: "Plan exams, record marks and publish results and report cards that parents can open online.",
    benefits: ["Exam schedules and mark entry", "Results analysis by class and subject", "Report cards published to the portal"],
    shot: "12_results_analysis",
    editions: { full: true, lite: true },
  },
  {
    slug: "fees",
    name: "Fees",
    short: "Invoices, online payments and receipts.",
    intro: "Generate fee invoices, collect online, send reminders and see what is outstanding without spreadsheets.",
    benefits: ["Fee plans, invoices and instant receipts", "Online payment with automatic reconciliation", "Reminders and defaulter follow-up"],
    shot: "06_fees_dashboard",
    video: "02_fees_payments",
    editions: { full: true, lite: true },
  },
  {
    slug: "hr-payroll",
    name: "HR & Payroll",
    short: "Staff records, leave and pay runs.",
    intro: "Keep staff records, leave and payroll in the same system as the rest of the school.",
    benefits: ["Staff profiles and contracts", "Leave requests and approvals", "Monthly pay runs and payslips"],
    shot: "19_hr_dashboard",
    editions: { full: true, lite: true },
  },
  {
    slug: "library",
    name: "Library",
    short: "Catalogue, issue desk and returns.",
    intro: "Run the library desk with quick issue and return, overdue tracking and a catalogue students can browse.",
    benefits: ["Fast issue and return at the desk", "Overdue tracking and reminders", "Library reports for leaders"],
    shot: "15_library_desk",
    video: "04_library_canteen",
    editions: { full: true, lite: true },
  },
  {
    slug: "canteen",
    name: "Canteen & wallets",
    short: "Cashless canteen with student wallets.",
    intro: "Give students a cashless canteen wallet that parents can top up, with a simple cashier screen.",
    benefits: ["Student wallets with parent top-ups", "Quick cashier screen for the canteen", "Daily sales and wallet reports"],
    shot: "17_canteen_wallets",
    video: "04_library_canteen",
    editions: { full: true, lite: true },
  },
  {
    slug: "transport",
    name: "Transport & bus tracking",
    short: "Routes, stops and bus tracking.",
    intro: "Plan routes and stops, assign students to buses and keep parents informed about pick-up and drop-off.",
    benefits: ["Routes, stops and vehicle assignment", "Student transport allocation", "Bus tracking for families"],
    shot: "18_transport_dashboard",
    editions: { full: true, lite: true },
  },
  {
    slug: "announcements",
    name: "Announcements",
    short: "Notices and messages to families.",
    intro: "Send notices to the whole school, a grade or a single class, and see them land in the parent portal.",
    benefits: ["Targeted notices by grade or class", "Messages and meeting requests", "Everything visible in the parent portal"],
    shot: "13_communication_dashboard",
    editions: { full: true, lite: true },
  },
  {
    slug: "dashboards",
    name: "Dashboards & reports",
    short: "Principal and finance views of every module.",
    intro: "Principals and administrators see attendance, admissions, fees and more on one screen each morning.",
    benefits: ["Principal and finance dashboards", "Drill down from a number to the record", "Reports for every module"],
    shot: "01_principal_dashboard",
    video: "01_dashboard",
    editions: { full: true, lite: true },
  },
];
