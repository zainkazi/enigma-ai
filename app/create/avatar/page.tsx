import CharacterPrompt from "../../../app/create/avatar/CharacterPrompt";
import CharacterTab from "../../../app/create/avatar/CharacterTab";

const AvatarPage = () => {
  return (
    <section>
      <div className="w-[100%] px-16 py-8 flex gap-8 h-screen">
        <div className="w-[40%]">
          <CharacterPrompt />
        </div>
        <div>
          <CharacterTab />
        </div>
      </div>
    </section>
  );
};

export default AvatarPage;