import EmoteCard from "@/components/cards/EmoteCard";
import Collapsible from "@/components/interactive/Collapsible";
import GridTable from "@/components/tables/GridTable";
import { EmoteCategory, Emotes } from "@/vendor/suroi/common/src/definitions/emotes";

export default function EmotesPage() {
  const actualEmotes = Emotes.definitions.filter(value => !value.isTeamEmote && !value.isWeaponEmote);
  return (
    <main className="w-full">
      <article className="prose prose-invert">
        <h1>Emotes</h1>
        There are {Emotes.definitions.length} emotes.{" "}
        {actualEmotes.length}{" "}
        emotes are available in the game.
      </article>
      {
        Object.keys(EmoteCategory).filter(item => isNaN(Number(item)) && item !== "TeamEmote").map(category => (
          <Collapsible
            label={(
              <div className="prose prose-invert">
                <h2>{category}</h2>
              </div>
            )}
            className="my-4"
          >
            <GridTable>
              {
                actualEmotes
                  .filter(emote => emote.category === EmoteCategory[category as keyof typeof EmoteCategory])
                  .map(emote => (<EmoteCard emote={emote} key={emote.idString} />))
              }
            </GridTable>
          </Collapsible>
        ))
      }
    </main>
  );
}
