const Shimmer = () => {
    return (
        <div className="shimmer-container">
            {Array(12).fill("").map((_, index) => (
                <div className="shimmer-card" key={index}>
                    <div className="shimmer-img"></div>
                    <div className="shimmer-line short"></div>
                    <div className="shimmer-line long"></div>
                    <div className="shimmer-line medium"></div>
                </div>
            ))}
        </div>
    );
};

export default Shimmer;
