import CharacterPrompt from "../../../app/create/avatar/CharacterPrompt";
import CharacterTab from "../../../app/create/avatar/CharacterTab";

const AvatarPage = () => {
  return (
    <section className="grid grid-cols-4 p-8 gap-8">
      <div className="col-span-1">
        <CharacterPrompt />
      </div>
      <div className="rounded-lg col-span-3 p-4 grid grid-cols-3 gap-4">
        <CharacterTab />
      </div>
    </section>
  );
};

export default AvatarPage;
