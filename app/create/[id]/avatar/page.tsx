import AvatarBreadcrumb from "./AvatarBreadcrumb";
import CharacterPrompt from "./CharacterPrompt";
import CharacterTab from "./CharacterTab";

const AvatarPage = () => {
  return (
    <>
      <div className="p-8">
        <AvatarBreadcrumb />
      </div>
      <section className="grid grid-cols-4 p-8 gap-8">
        <div className="col-span-1">
          <CharacterPrompt />
        </div>
        <div className="col-span-3">
          <CharacterTab />
        </div>
      </section>
    </>
  );
};

export default AvatarPage;
