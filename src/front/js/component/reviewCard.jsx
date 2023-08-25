import React from "react";

const ReviewCard = (props) => {
	return (
        
        <div className="col">
			<div className="card shadow bg-body rounded">
                <div className="card-header bg-transparent border-success">{props.header}</div>
                    <div className="card-body text-success">
                        <h5 className="card-title">{props.titleThree}</h5>
                        <p className="card-text">{props.descriptionThree}</p>
                            <span>⭐⭐⭐⭐⭐</span>
                    </div>
                <div className="card-footer bg-transparent border-success">{props.footer}</div>

            </div>
        </div>

    );
    };

    export default ReviewCard