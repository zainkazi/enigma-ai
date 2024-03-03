import { UserButton } from "@clerk/nextjs";

export default async function Home() {
  return (
    <div>
      Landing Page
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
