import { Hono } from "hono";
import { AllDefinitions } from "src/lib/suroi";
import Layout from "../layouts/layout";
import { MeleePages } from "./definitions/melees";
import makePages from "src/components/generics/makePages";
import { Guns } from "@suroi/common/src/definitions/guns";
import GunSidebar from "./sidebars/GunSidebar";

export const WikiPages = new Hono();

WikiPages.get("/", (c) => {
	return c.html(
		<Layout title="Wiki Pages">
			<main class="prose prose-white max-w-full">
				<h1>Wiki Pages</h1>
				<p>
					A list of all the wiki pages (includes only game definitions, see
					special pages for more). This mostly serves as a fallback to search
					(you can use Ctrl-F to find stuff here)
				</p>
				<ul>
					{AllDefinitions.map((d) => (
						<li>
							<a href={`/wiki/${d.idString}`}>{d.name}</a>
						</li>
					))}
				</ul>
			</main>
		</Layout>,
	);
});

WikiPages.route("/", makePages(Guns, { Sidebar: GunSidebar }));
WikiPages.route("/", MeleePages);
