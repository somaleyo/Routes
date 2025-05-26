import Nav from "../Components/Nav"

Nav
export default function Contact() {
    return (
        <>
       
        <Nav/>
        <div className="container mt-5">
            <div className="row">
                <div className="col-12 text-center mb-5">
                    <h1 className="display-4 mb-3">Contactez-nous</h1>
                    <p className="lead text-muted">
                        Nous sommes là pour vous aider !
                    </p>
                </div>

                <div className="col-md-4 text-center mb-4">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body">
                            
                            <h5>Email</h5>
                            <p className="text-muted">contact@JoJo.com</p>
                            <a href="mailto:contact@monshop.com" className="btn btn-primary">
                                Nous écrire
                            </a>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 text-center mb-4">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body">
                         
                            <h5>Téléphone</h5>
                            <p className="text-muted">
                                +33 1 23 45 67 89<br />
                                <small>Lun-Ven: 9h-18h</small>
                            </p>
                            <a href="tel:+33123456789" className="btn btn-primary">
                                Appeler
                            </a>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 text-center mb-4">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body">
                         
                            <h5>Adresse</h5>
                            <p className="text-muted">
                                123 Rue du Commerce<br />
                                75001 Paris, France
                            </p>
                            <a href="" target="_blank" className="btn btn-primary">
                                Voir sur la carte
                            </a>
                        </div>
                    </div>
                </div>

                <div className="col-12 text-center mt-4">
                    <div className="alert alert-info">
                        <strong>Temps de réponse :</strong> Nous répondons généralement sous 24h
                    </div>
                </div>
            </div>
        </div>
         </>
    )
}