import { useEffect, useState } from "react";

const sampleCards = [
  {
    id: 1,
    title: "Ocean Retreat",
    description:
      "Calming blue tones and gentle waves. Perfect for focus or relaxation.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    tag: "Nature",
    price: 75,
  },
  {
    id: 2,
    title: "City Nights",
    description:
      "Skylines, neon, and late-night vibes for your urban inspiration.",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop",
    tag: "Urban",
    price: 70,
  },
  {
    id: 3,
    title: "Forest Walk",
    description: "A path through pines and light — take a breath and reset.",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop",
    tag: "Outdoors",
    price: 65,
  },
  {
    id: 4,
    title: "Minimal Desk",
    description: "Clutter-free workspace for deep work and clean aesthetics.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
    tag: "Workspace",
    price: 60,
  },
  {
    id: 5,
    title: "Golden Desert",
    description: "Warm sands and endless dunes to spark wanderlust.",
    image:
      "https://images.unsplash.com/photo-1551516594-56cb78394645?q=80&w=1200&auto=format&fit=crop",
    tag: "Travel",
    price: 55,
  },
  {
    id: 6,
    title: "Cozy Reading",
    description: "Soft light, hot tea, and your favorite book.",
    image:
      "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1200&auto=format&fit=crop",
    tag: "Lifestyle",
    price: 50,
  },
];

function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <h1 className="logo">Grid Cards</h1>
      </div>
    </header>
  );
}

function Card({ card, likedCards, toggleLike }) {
  const isLiked = likedCards.includes(card.id);
  return (
    <div className="card">
      <div className="card-media">
        <img src={card.image} alt={card.title} loading="lazy" />
        <span className="badge">{card.tag}</span>
      </div>
      <div className="card-body">
        <h3 className="card-title">{`${card.title} - ${card.price}$`}</h3>
        <p className="card-desc">{card.description}</p>
        <div className="card-actions">
          <button className="btn ghost" onClick={() => toggleLike(card.id)}>
            {isLiked ? "★ Liked" : "☆ Like"}
          </button>
          <button className="btn primary">Open</button>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [likedCards, setLikedCards] = useState([]);
  const [sortOption, setSortOption] = useState("none");
  const [sortedCards, setSortedCards] = useState(sampleCards);

  useEffect(() => {
    let sorted = [...sampleCards];

    if (sortOption === "low-high") {
      sorted.sort((a, b) => a.price - b.price);
    }
    if (sortOption === "high-low") {
      sorted.sort((a, b) => b.price - a.price);
    }
    if (sortOption === "title") {
      sorted.sort((a, b) => a.title.localeCompare(b.title));
    }

    setSortedCards(sorted);
  }, [sortOption]);

  const toggleLike = (id) => {
    if (likedCards.includes(id)) {
      setLikedCards(likedCards.filter((c) => c !== id));
    } else {
      setLikedCards([...likedCards, id]);
    }
  };

  const totalPrice = sampleCards
    .filter((c) => likedCards.includes(c.id))
    .reduce((sum, c) => sum + c.price, 0);

  return (
    <>
      <Header />
      <div className="site-main">
        <div className="container">
          <div className="toolbar">
            <h2 id="explore" className="section-title">
              Explore
            </h2>

            <select
              className="input"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="none">Sort by...</option>
              <option value="low-high">Price: Low → High</option>
              <option value="high-low">Price: High → Low</option>
              <option value="title">Title A → Z</option>
            </select>
          </div>

          <div className="grid">
            {sortedCards.map((c) => (
              <Card
                key={c.id}
                card={c}
                likedCards={likedCards}
                toggleLike={toggleLike}
              />
            ))}
          </div>

          <h1>Liked cards total price is - {totalPrice}$</h1>
        </div>
      </div>
    </>
  );
}
