import { useEffect, useState } from "react"
import data from '../data.json'
import { useParams } from "react-router-dom"

export default function Details(props) {
    const { id } = useParams()
    const produit = data.find((element) => element.id === parseInt(id))
    
    // Vérifier si le produit existe
    if (!produit) {
        return (
            <div className="container mt-4">
                <div className="alert alert-danger">
                    Produit non trouvé
                </div>
            </div>
        )
    }
    
    return (
        <div className="container mt-4">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <img 
                            src={produit.image} 
                            className="card-img-top" 
                            alt={produit.nom}
                            style={{ height: "400px", objectFit: "contain" }}
                        />
                        <div className="card-body">
                            <h5 className="card-title">{produit.nom}</h5>
                            <p className="card-text">
                                {produit.description}
                            </p>
                            <p className="card-text">
                                <strong>Prix: {produit.prix}€</strong>
                            </p>
                            <button className="btn btn-success">
                                Ajouter au panier
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}