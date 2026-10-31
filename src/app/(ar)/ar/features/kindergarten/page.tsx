import { pageMetaAr } from "@/lib/meta";
import { KG } from "@/lib/kindergarten";
import { KindergartenPage } from "@/components/kindergarten-page";

export const metadata = pageMetaAr(KG.ar.metaTitle, KG.ar.metaDesc, "/features/kindergarten/");

export default function Page() { return <KindergartenPage locale="ar" />; }
