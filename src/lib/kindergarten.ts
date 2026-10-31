/**
 * EduPlus Kindergarten copy (EN + AR). Source: EduPlus Kindergarten plan v2 (26 Oct 2026).
 * Lists only what the approved plan covers.
 * Public wording: "supports" / "aligned to" frameworks, never "approved" or "compliant".
 */
export type KgIcon = "frameworks" | "journal" | "diary" | "attendance" | "pickup" | "rooms" | "billing" | "portal" | "languages";

export const KG = {
  en: {
    name: "EduPlus Kindergarten",
    short: "A separate edition for nurseries and kindergartens, birth to age 6.",
    eyebrow: "Features · EduPlus Kindergarten",
    title: "EduPlus Kindergarten",
    intro: "Its own edition for nurseries, Montessori settings and kindergartens, for children from birth to age 6, including babies. Learning, daily care, attendance and billing in one innovative school ERP.",
    metaTitle: "EduPlus Kindergarten",
    metaDesc: "EduPlus Kindergarten is a separate edition for nurseries, Montessori settings and kindergartens, from babies to age 6, with every screen in English, Arabic and French.",
    whatTitle: "What the edition covers",
    features: [
      { icon: "frameworks", t: "Early-years frameworks", b: "Supports EYFS, Ontario, Montessori and play-based frameworks, from birth to age 6." },
      { icon: "journal", t: "Observations and learning journals", b: "Record observations with photos and next steps, and share progress with families." },
      { icon: "diary", t: "Daily diary and infant care", b: "Meals, bottles and feeds, sleeps and sleep checks, nappies and activities, logged through the day." },
      { icon: "attendance", t: "Check-in, check-out and sessions", b: "Drop-off and collection times, session bookings, and booked against actual hours." },
      { icon: "pickup", t: "Authorised pickup", b: "Only approved adults collect each child, with consents and incidents recorded." },
      { icon: "rooms", t: "Rooms and ratios", b: "Rooms by age group, with staff-to-child ratio rules you configure for your region." },
      { icon: "billing", t: "Billing with subsidies", b: "Session and hourly fees with subsidy billing, such as Ontario CWELCC, in both Lite and Full." },
      { icon: "portal", t: "Mobile-friendly parent portal", b: "Parents follow their child's day, learning and invoices from their phone's browser, with nothing to install." },
      { icon: "languages", t: "English, Arabic and French", b: "Every Kindergarten screen in English, Arabic (right to left) and French from day one." },
    ] as { icon: KgIcon; t: string; b: string }[],
    marketsTitle: "Built for nurseries in Canada and the Gulf",
    marketsBody: "Designed first for childcare centres in Ontario, Canada, and British-curriculum nurseries in the GCC.",
    editionsTitle: "Kindergarten Lite and Full",
    editionsBody: "EduPlus Kindergarten is sold as its own edition, not as an add-on to the K-12 editions. Lite covers learning, daily care, sessions, pickup and billing with subsidies. Full adds Clinic, Transport and Front Office integrations and advanced accounting.",
    demo: "Request a demo",
    contact: "Ask about Kindergarten",
    all: "All features",
    learn: "Learn more about EduPlus Kindergarten",
  },
  ar: {
    name: "EduPlus Kindergarten",
    short: "إصدار مستقل للحضانات ورياض الأطفال، من الولادة حتى 6 سنوات.",
    eyebrow: "المزايا · EduPlus Kindergarten",
    title: "EduPlus Kindergarten لرياض الأطفال",
    intro: "إصدار مستقل للحضانات ومراكز مونتيسوري ورياض الأطفال، للأطفال من الولادة حتى سن 6 سنوات، بمن فيهم الرُّضّع. التعلّم والرعاية اليومية والحضور والفوترة في نظام ERP مدرسي مبتكر واحد.",
    metaTitle: "EduPlus Kindergarten لرياض الأطفال",
    metaDesc: "EduPlus Kindergarten إصدار مستقل للحضانات ومراكز مونتيسوري ورياض الأطفال، من الرُّضّع حتى 6 سنوات، وكل شاشاته بالعربية والإنجليزية والفرنسية.",
    whatTitle: "ما يغطيه الإصدار",
    features: [
      { icon: "frameworks", t: "أطر الطفولة المبكرة", b: "يدعم أطر EYFS وأونتاريو ومونتيسوري والتعلّم القائم على اللعب، من الولادة حتى 6 سنوات." },
      { icon: "journal", t: "الملاحظات وسجلات التعلّم", b: "سجّل الملاحظات مع الصور والخطوات التالية، وشارك تقدّم الطفل مع أسرته." },
      { icon: "diary", t: "اليوميات ورعاية الرُّضّع", b: "الوجبات والرضعات وزجاجات الحليب، والنوم ومتابعته، وتغيير الحفاضات والأنشطة، تُسجَّل على مدار اليوم." },
      { icon: "attendance", t: "تسجيل الوصول والمغادرة والفترات", b: "أوقات التوصيل والاستلام، وحجوزات الفترات، ومقارنة الساعات المحجوزة بالفعلية." },
      { icon: "pickup", t: "الاستلام المصرّح به", b: "لا يستلم الطفل إلا البالغون المعتمدون، مع تسجيل الموافقات والحوادث." },
      { icon: "rooms", t: "القاعات ونِسَب الإشراف", b: "قاعات حسب الفئة العمرية، مع قواعد لنسبة الموظفين إلى الأطفال تضبطها وفق منطقتك." },
      { icon: "billing", t: "الفوترة مع الدعم الحكومي", b: "رسوم حسب الفترة أو الساعة مع فوترة الدعم الحكومي، مثل برنامج CWELCC في أونتاريو، في الإصدارين Lite وFull." },
      { icon: "portal", t: "بوابة لأولياء الأمور تناسب الجوال", b: "يتابع أولياء الأمور يوم طفلهم وتعلّمه وفواتيره من متصفح الهاتف، دون تثبيت أي تطبيق." },
      { icon: "languages", t: "العربية والإنجليزية والفرنسية", b: "كل شاشات Kindergarten بالعربية (من اليمين إلى اليسار) والإنجليزية والفرنسية منذ اليوم الأول." },
    ] as { icon: KgIcon; t: string; b: string }[],
    marketsTitle: "مصمَّم للحضانات في كندا والخليج",
    marketsBody: "صُمّم أولًا لمراكز رعاية الأطفال في أونتاريو بكندا، وللحضانات التي تتبع المنهج البريطاني في دول الخليج.",
    editionsTitle: "Kindergarten بإصدارَي Lite وFull",
    editionsBody: "يُباع EduPlus Kindergarten كإصدار مستقل، وليس إضافة إلى إصدارات المدارس (K-12). يغطي إصدار Lite التعلّم والرعاية اليومية والفترات والاستلام والفوترة مع الدعم الحكومي، ويضيف إصدار Full التكامل مع العيادة والنقل والاستقبال، والمحاسبة المتقدمة.",
    demo: "اطلب عرضًا تجريبيًا",
    contact: "استفسر عن Kindergarten",
    all: "جميع المزايا",
    learn: "تعرّف على EduPlus Kindergarten",
  },
};
