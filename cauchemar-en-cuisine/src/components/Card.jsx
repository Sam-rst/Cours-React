export default function Card({ imgPath, title, description, btnPathLink }) {
    return (
        <div className="card mb-4 shadow-sm">
            <img className="card-img-top" alt="Thumbnail [100%x225]" src={imgPath} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                        <a className="btn btn-outline-dark" href={btnPathLink}>Voir</a>
                    </div>
                </div>
            </div>
        </div>
    );
};