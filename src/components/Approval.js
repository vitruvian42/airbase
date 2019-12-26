import React from 'react';

const  Approval = (props) => {
    return (
        <div className={props.type === "Approved" ? "approved-box" : "pending-box"}>
            <div className="heading">{props.type}</div>
            {
                props.elements.map((approver, index) => {
                    const monthNames = ["Jan", "Feb", "March", "April", "May", "June","July", "August", "Sep", "Oct", "Nov", "Dec"];
                    let dateObj = new Date(approver.last_notified_time)
                    let day = dateObj.getDay()  
                    let month = monthNames[dateObj.getMonth()]
                    let year = dateObj.getFullYear()
                    return <div className="approver-box" key={index}>
                        <div className="appr-box">
                            <div className="counter">
                                
                            </div>
                            <div className="image">
                                <img className="element-image" alt="Profile" src={approver.approver.profile_picture} width="25px" height="25px" />
                            </div>
                            <div className="desc">
                                <span className="approver-name">{approver.approver.first_name} {approver.approver.last_name} </span>
                                <span className="approver-details">
                                    ({approver.approver.email}) <br/>
                                    {props.type === "Approved" ? "Approved" : "Last Modified"} {`${month} ${day}, ${year}`}
                                </span>
                            </div>
                            <div className="approval">
                                <i className={props.type === "Approved" ? "fas fa-check-circle color-green" : "fas fa-check-circle color-gray"}></i>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    );
}

export default Approval;
