import './card.css'
import data from '../data.json'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Cards(props) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return(
        <>
            <div className="container mt-4">
            <h1 className="text-center mb-4">Nos Produits</h1>
            <div className="row">
                {isLoading ? (

                    Array.from({ length: 3 }).map((index) => (
                        <div key={index} className="col-md-4 mb-4">
                            <div className="card" aria-hidden="true">
                                <img src="..." className="card-img-top" alt="..." style={{ height: "200px", objectFit: "cover" }} />
                                <div className="card-body">
                                    <h5 className="card-title placeholder-glow">
                                        <span className="placeholder col-6" />
                                    </h5>
                                    <p className="card-text placeholder-glow">
                                        <span className="placeholder col-7" />
                                        <span className="placeholder col-4" />
                                        <span className="placeholder col-4" />
                                        <span className="placeholder col-6" />
                                        <span className="placeholder col-8" />
                                    </p>
                                    <a
                                        href="#"
                                        tabIndex={-1}
                                        className="btn btn-primary disabled placeholder col-6"
                                    />
                                </div>
                            </div>
                        </div>
                    ))
                )
: (
                    data.map(produit => (
                        <div key={produit.id} className="col-md-4 mb-4">
                            <div className="card">
                                <img 
                                    src={produit.image} 
                                    className="card-img-top" 
                                    alt={produit.nom}
                                    style={{ height: "200px", objectFit: "cover" }}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{produit.nom}</h5>
                                    <p className="card-text">
                                        {produit.description}
                                    </p>
                                    <p className="card-text">
                                        <strong>Prix: {produit.prix}€</strong>
                                    </p>
                                    <Link 
                                        to={`/details/${produit.id}`} 
                                        className="btn btn-primary"
                                    >
                                        Voir détails
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
        </>
    );
}
            
