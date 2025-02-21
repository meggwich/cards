interface CardType {
    title: string,
    text: string,
    children?: React.ReactNode, 
};

const Card = ({ title, text, children }: CardType) => {
    return (
        <div className="card" style={{ width: '18rem' }}>
            { children } 
            <div className="card-body">
                <h5 className="card-title">{ title }</h5>
                <p className="card-text">{ text }</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
};

export default Card