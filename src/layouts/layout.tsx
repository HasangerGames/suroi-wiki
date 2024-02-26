import { PropsWithChildren } from "hono/jsx";
import HTML from "./html";

export default function Layout({
  title,
  children,
}: PropsWithChildren<{ title: string }>) {
  return (
    <HTML title={title}>
      <div class="max-w-screen max-h-screen h-screen font-sans">
        <nav class="bg-slate-800 p-4">
          <ul class="flex flex-row gap-4">
            <li class="mr-auto">Suroi Wiki</li>
            <li>Wiki Pages</li>
            <li>Special Pages</li>
            <li>
              <form action="/search">
                <input type="search" placeholder="Search"></input>
              </form>
            </li>
          </ul>
        </nav>
        <div class="overflow-y-auto max-w-screen">
          <main class="mx-auto max-w-screen-xl p-4">{children}</main>
        </div>
      </div>
    </HTML>
  );
}
