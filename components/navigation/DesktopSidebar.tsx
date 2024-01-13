import { wikiPages } from "@/lib/util/search";
import Image from "next/image";
import Link from "next/link";

export default function DesktopSidebar() {
	return (
		<div className="hidden lg:flex min-h-full overflox-y-scroll min-w-[15rem] text-lg p-4 flex-col border-r border-border">
			<Image src="/img/logo.svg" width={60} height={30} className="w-32 m-2 mb-8" alt="Suroi Wiki Logo" />
			{wikiPages.map((link) => (
				<Link href={link.url} key={link.url} className="transition-colors p-2 hover:bg-white/10 rounded-md">{link.name}</Link>
			))}
		</div>
	)
}
