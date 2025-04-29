// Consome a API do PetFinder
const API_KEY = 'cZ2aq0VScX0R9BkLESPjDkx5kiL8QCaJas6vdtaYejxheVQNaf';
const API_SECRET = 'TyM4rvgQD1r9bpaH8lusendg6q8fneIfVePWCYRQ';

// Gera token de autenticação
async function getAccessToken() {
  const res = await fetch('https://api.petfinder.com/v2/oauth2/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `grant_type=client_credentials&client_id=${API_KEY}&client_secret=${API_SECRET}`,
  });
  const data = await res.json();
  return data.access_token;
}

// Busca vários pets
export async function fetchPets() {
  const token = await getAccessToken();
  const res = await fetch('https://api.petfinder.com/v2/animals?limit=12', {
    headers: { Authorization: `Bearer ${token}` },
  });
  const data = await res.json();
  return data.animals.map((pet) => ({
    id: pet.id,
    name: pet.name,
    species: pet.species,
    age: pet.age,
    size: pet.size,
    photo: pet.photos[0]?.medium || '/default.jpg',
    location: `${pet.contact.address.city}, ${pet.contact.address.state}`,
  }));
}

// Busca pet por ID
export async function fetchPetById(id) {
  const token = await getAccessToken();
  const res = await fetch(`https://api.petfinder.com/v2/animals/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  const pet = await res.json();
  return {
    id: pet.animal.id,
    name: pet.animal.name,
    species: pet.animal.species,
    age: pet.animal.age,
    size: pet.animal.size,
    photo: pet.animal.photos[0]?.large || '/default.jpg',
    location: `${pet.animal.contact.address.city}, ${pet.animal.contact.address.state}`,
  };
}
