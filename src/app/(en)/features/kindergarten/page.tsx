import { pageMeta } from "@/lib/meta";
import { KG } from "@/lib/kindergarten";
import { KindergartenPage } from "@/components/kindergarten-page";

export const metadata = pageMeta(KG.en.metaTitle, KG.en.metaDesc, "/features/kindergarten/");

export default function Page() { return <KindergartenPage locale="en" />; }
