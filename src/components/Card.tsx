
export default function StarshipsCard({ name, model }: { name: string; model: string }) {
    return (
      <div className="bg-card text-primary p-4 rounded shadow hover:bg-surface transition">
        <h2 className="text-lg font-bold uppercase">{name}</h2>
        <p className="text-secondary text-sm">{model}</p>
      </div>
    );
  }
  