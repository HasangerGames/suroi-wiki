import { PropsWithChildren } from "hono/jsx";

export namespace SidebarUtils {
	export function Main({
		title,
		children,
	}: PropsWithChildren<{ title: string }>) {
		return (
			<div class="flex flex-col min-w-96 bg-slate-800 p-2 gap-2 rounded-md">
				<span class="bg-orange-500 p-2 rounded-md text-center font-bold">
					{title}
				</span>
				{children}
			</div>
		);
	}

	export function Section({
		title,
		children,
	}: PropsWithChildren<{ title: string }>) {
		return (
			<div class="flex flex-col gap-2">
				<span class="bg-orange-500 p-2 rounded-md text-center font-bold">
					{title}
				</span>
				{children}
			</div>
		);
	}

	export function Row({ children }: PropsWithChildren) {
		return <div class="flex flex-row gap-2">{children}</div>;
	}

	export function Column({
		title,
		children,
	}: PropsWithChildren<{ title: string }>) {
		return (
			<div class="flex flex-col gap-1 grow basis-0 p-2 justify-center bg-slate-700 rounded-md">
				<span class="font-bold text-center">{title}</span>
				<span class="mx-auto text-center">{children}</span>
			</div>
		);
	}
}

export default SidebarUtils.Main;
