export default function InfoboxAudio({ name, src }: InfoboxAudioProps) {
  return (
    <div className="flex flex-row gap-2 items-center p-2">
      <h4 className="mr-2 font-bold">{name}</h4>
      <audio controls className="w-full">
        <source src={src} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

export interface InfoboxAudioProps {
  name: string;
  src: string;
}
