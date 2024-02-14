import supabase from "@/utils/supabase";

export default async function Home() {
  const { data } = await supabase.storage
    .from("speeches")
    .getPublicUrl("/public/speech1.mp3");

  console.log(data.publicUrl);

  return (
    <div>
      <audio controls>
        <source src={data.publicUrl} />
      </audio>
    </div>
  );
}
