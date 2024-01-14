"use client";

import JSConfetti from "js-confetti";

export default function Confetti() {
  const confetti = new JSConfetti();
  return (
    <button
      className="transition-colors p-2 aspect-square rounded-md bg-primary hover:bg-suroi text-white inline-block text-lg"
      onClick={() => confetti.addConfetti()}
    >
      🎉
    </button>
  );
}
