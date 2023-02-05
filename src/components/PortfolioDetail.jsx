import React from 'react';

const PortfolioDetail = ({title , description, tecnologies, proyectUrl, code}) => {
    return (
        <div className='portfolio-detail'>
            <h2 className='detail-title'>{title}</h2>
            <p className='detail-description'>{description}</p>
            <div className="detail-tecnologies">
                {tecnologies.map(tecnology => (
                    <span className='detail-tecnology'>{tecnology}</span>
                ))}
            </div>
            <div className="detail-btns">
                <a href={proyectUrl} target="_blank" className="detail-buttom">Ver proyecto</a>
                <a href={code} target="_blank" className="detail-buttom">Ver codigo</a>
            </div>

        </div>
    );
};

export default PortfolioDetail;