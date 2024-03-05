import CreateProjectDialog from "./CreateProjectDialog";

function NavBar() {
  return (
    <section className="flex justify-center w-full">
      <div className="space-y-4 w-full">
        <h1 className="text-center text-4xl">ENIGMA AI</h1>
        <CreateProjectDialog />
      </div>
      <nav></nav>
    </section>
  );
}

export default NavBar;
