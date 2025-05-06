export default function Navbar() {
    return (
      <nav className="container bg-surface border-b border-border text-primary flex justify-between items-center h-header px-6">
        <div className="text-3xl font-heading">STAR WARS</div>
        <ul className="flex gap-6 text-sm uppercase">
          <li className="hover:text-accent cursor-pointer">Home</li>
          <li className="text-accent border-b-2 border-accent pb-1">Starships</li>
        </ul>
        <div className="text-sm text-secondary">Log in // Sign up</div>
      </nav>
    );
  }