"use client";

import React, { useState } from "react";

export default function Bingo() {
  const slots: string[] = [
    "Can't Spell",
    "Pings hasanger",
    "Leaves 10 minutes after joining",
    "Didn't read #faq",
    "\"The game isn't working\"",
    "Submits stupid PR or issue to GitHub",
    "Harassing other server members for no reason",
    "Begging for roles",
    "Alt account",
    "Reporting teamers without evidence",
    "Offensive slurs in profile",
    "Deleting every other message they send",
    "Free!",
    "Has to translate messages",
    "Politics",
    "Ban speedrun",
    "\"how to play surviv\"",
    "Spam stupid suggestions",
    "\"When are teams coming\"",
    "Attempts to contribute and never sends another message after the day they join",
    "Spamming",
    "Complaining about balance, teamers, or lag in #general while the topic is unrelated",
    "Obviously underage",
    "Please add (surviv feature)",
    "Communicates exclusively with gifs, emojis, and videos"
  ];
  return (
    <div className="grid grid-cols-5 col-span-full max-w-[60vh] max-h-[60vh]">
      <span className="text-3xl mx-auto mb-4">B</span>
      <span className="text-3xl mx-auto mb-4">I</span>
      <span className="text-3xl mx-auto mb-4">N</span>
      <span className="text-3xl mx-auto mb-4">G</span>
      <span className="text-3xl mx-auto mb-4">O</span>
      {slots.map((slot, i) => (
        <BingoCard key={i} text={slot} />
      ))}
    </div>
  );
}

function BingoCard({ text }: BingoCardProps) {
  const [toggled, setToggled] = useState(false);
  return (
    <button
      className={`${toggled ? "bg-suroi" : ""}
      ${
    text.length > 20
      ? "text-xs"
      : text.length > 10
        ? "text-base"
        : "text-xl"
    }
      aspect-square border-border border p-2`}
      onClick={() => setToggled(!toggled)}
    >
      {text}
    </button>
  );
}

interface BingoCardProps extends React.PropsWithChildren {
  text: string
}
