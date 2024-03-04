import CreateProject from "./CreateProject";

function NavBar() {
  return (
    <section className="flex  justify-center bg-zinc-900 min-h-screen w-[50%] px-4 py-10">
      <div className="w-full">
        <div className="space-y-4 w-[100%]">
          <h1 className="text-center text-4xl">ENIGMA AI</h1>
          <CreateProject />
        </div>
        <nav></nav>
      </div>
    </section>
  );
}

export default NavBar;
