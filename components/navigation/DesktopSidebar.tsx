import { wikiPages } from "@/lib/util/search";
import Image from "next/image";
import Link from "next/link";

export default function DesktopSidebar() {
	return (
		<div className="min-h-full overflox-y-scroll min-w-[15rem] text-lg p-8 flex flex-col border-r border-border">
			<Image src="/img/logo.svg" width={60} height={30} className="w-32 my-2" alt="Suroi Wiki Logo" />
			{wikiPages.map((link) => (
				<Link href={link.url} key={link.url} className="transition-colors hover:text-primary py-2">{link.name}</Link>
			))}
		</div>
	)
}
