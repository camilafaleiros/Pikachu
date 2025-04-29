import Link from 'next/link';

export default function PetCard({ pet }) {
  return (
    <div className="pet-card">
      <img src={pet.photo} alt={pet.name} />
      <h3>{pet.name}</h3>
      <p>{pet.species}</p>
      <Link href={`/pet/${pet.id}`}>
        <button className="details-button">Ver Detalhes</button>
      </Link>
    </div>
  );
}
