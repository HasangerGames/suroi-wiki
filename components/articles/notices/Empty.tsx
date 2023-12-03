import URLLink from "@/components/links/Link";
import GenericNotice from "./GenericNotice";

export default function Empty() {
  return (
    <GenericNotice emote="question_mark">
      This article is empty. Visit the{" "}
      <URLLink
        href={"https://github.com/HasangerGames/suroi-wiki"}
        target="_blank"
      >
        GitHub
      </URLLink>{" "}
      to contribute!
    </GenericNotice>
  );
}
