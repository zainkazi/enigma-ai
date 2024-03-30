import CharacterPrompt from "./CharacterPrompt";
import CharacterTab from "./CharacterTab";
import { unstable_noStore as noStore } from "next/cache";

export const dynamic = "force-dynamic";

const AvatarPage = () => {
  noStore();
  return (
    <section className="grid grid-cols-4 p-8 gap-8">
      <div className="col-span-1">
        <CharacterPrompt />
      </div>
      <div className="col-span-3">
        <CharacterTab />
      </div>
    </section>
  );
};

export default AvatarPage;
