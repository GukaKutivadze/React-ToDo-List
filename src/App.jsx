import React from "react";
import "./index.css";

const sampleCards = [
    {
        id: 1,
        title: "Ocean Retreat",
        description:
            "Calming blue tones and gentle waves. Perfect for focus or relaxation.",
        image:
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
        tag: "Nature",
    },
    {
        id: 2,
        title: "City Nights",
        description:
            "Skylines, neon, and late-night vibes for your urban inspiration.",
        image:
            "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop",
        tag: "Urban",
    },
    {
        id: 3,
        title: "Forest Walk",
        description:
            "A path through pines and light — take a breath and reset.",
        image:
            "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop",
        tag: "Outdoors",
    },
    {
        id: 4,
        title: "Minimal Desk",
        description:
            "Clutter-free workspace for deep work and clean aesthetics.",
        image:
            "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
        tag: "Workspace",
    },
    {
        id: 5,
        title: "Golden Desert",
        description:
            "Warm sands and endless dunes to spark wanderlust.",
        image:
            "https://images.unsplash.com/photo-1551516594-56cb78394645?q=80&w=1200&auto=format&fit=crop",
        tag: "Travel",
    },
    {
        id: 6,
        title: "Cozy Reading",
        description:
            "Soft light, hot tea, and your favorite book.",
        image:
            "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1200&auto=format&fit=crop",
        tag: "Lifestyle",
    },
];

export default function GridCards() {
    return (
        <>
            <div className="header">
                <h1 className="title">Grid Cards</h1>
            </div>

            <div className="grid-wrapper">
                <h2 className="subtitle">Explore</h2>

                <div className="grid-container">
                    {sampleCards.map((card) => (
                        <div className="card" key={card.id}>
                            <img className="card-img" src={card.image} alt={card.title} />

                            <div className="card-content">
                                <span className="tag">{card.tag}</span>
                                <h3 className="card-title">{card.title}</h3>
                                <p className="card-desc">{card.description}</p>

                                <div className="card-actions">
                                    <button className="btn-outline">☆ Like</button>
                                    <button className="btn-primary">Open</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
