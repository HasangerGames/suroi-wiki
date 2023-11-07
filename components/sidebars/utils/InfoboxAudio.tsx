export default function InfoboxAudio({ name, src }: InfoboxAudioProps) {
  return (
    <div className="p-2 flex flex-row gap-2 items-center">
      <h4 className="font-bold mr-2">{name}</h4>
      <audio controls className="w-full h-full">
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
