import GunGraphInterface from "./gungraph";

export default function GunGraphPage() {
  return (
    <div className="w-full prose prose-invert">
      <h1>Gun Graphs</h1>
      <p>
        A simulated representation of a gun{"'"}s damage at a range. May cause a
        lag spike since it is calculated on the browser!
      </p>
      <GunGraphInterface />
    </div>
  );
}
