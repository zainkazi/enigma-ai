import CharacterPrompt from "../../../app/create/avatar/CharacterPrompt";
import CharacterTab from "../../../app/create/avatar/CharacterTab";

const AvatarPage = () => {
  return (
    <section className="w-[100%] px-16 py-8 flex gap-8 min-h-screen">
      <div className="w-[40%]">
        <CharacterPrompt />
      </div>
      <div>
        <CharacterTab />
      </div>
    </section>
  );
};

export default AvatarPage;
