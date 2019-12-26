import React from 'react';

const Requester = (props) => {
  return (
    <div className="requester">
        <div className="element-box">
            <div className="element-name">
                Requested By
            </div>
            <div className="element-value">
                <img className="element-image" alt="Profile" src={props.requester.requested_by.profile_picture} width="20px" height="20px" /> {props.requester.requested_by.first_name} {props.requester.requested_by.last_name}
            </div>
        </div>
        <div className="element-box">
            <div className="element-name">
                Cost
            </div>
            <div className="element-value">
                $ {props.requester.cost || "0"}
            </div>
        </div>
        <div className="element-box">
            <div className="element-name">
                Renewal Frequency
            </div>
            <div className="element-value">
                {props.requester.renewal_frequency_in_months || "-"}
            </div>
        </div>
        <div className="element-box">
            <div className="element-name">
                Annual Cost
            </div>
            <div className="element-value">
                $ {props.requester.cost * 12 || "0"}
            </div>
        </div>
        <div className="element-box">
            <div className="element-name">
                Expense Account
            </div>
            <div className="element-value">
                {props.requester.expense_account || "-"}
            </div>
        </div>
        {
            props.requester.files.map((file, index) => {
                return <div className="element-box" key={index}>
                    <div className="element-name">
                        {
                            index === 0 && "File"
                        }
                    </div>
                    <div className="element-value">
                        <i className="far fa-file-excel color-green"></i>
                        &nbsp; {file || "-"}
                    </div>
                </div>
            })
        }
        <div className="element-box">
            <div className="element-name">
                Description
            </div>
            <div className="element-value">
                {props.requester.description || "-"}
            </div>
        </div>
    </div>
    
  );
}

export default Requester;
