import React from 'react';
import data from '../assets/data/request'
import Approval from './Approval'
import Requester from './Requester'

const Content = () => {
    let approved = [], pending = []
    for (let approver in data.approvers) {
        if(data.approvers[approver].status === "accepted" || data.approvers[approver].status === "approved") {
            approved.push(data.approvers[approver])
        } else {
            pending.push(data.approvers[approver])
        }
    }
    return (
        <>
            <div className="main-content">
                <div className="service-header">
                    <div className="service-logo">
                        <img src={data.service.logo} alt="Logo" width="40px" height="40px" />
                    </div>
                    <div className="service-text">
                        Request for {data.service.name} (#{data.id})
                    </div>
                </div>

                <div className="content-box">
                    <div className="right-box">
                        <Requester requester={data} />
                        {data.message &&
                            <div className="additional-message">
                                <span className="alert">
                                    {data.message || "-"}
                                </span>
                                <br/>
                                <span className="sub-message">
                                    {data.subMessage || "-"}

                                </span>
                            </div>
                        }
                    </div>
                    <div className="left-box">
                        {
                            approved.length > 0 && 
                                <Approval elements={approved} type="Approved"/>
                                
                        }
                        <br/>
                        {
                            pending.length > 0 && 
                                <Approval elements={pending} type="Pending"/>
                        }
                    </div>

                </div>

            </div>
            <div class="buttons-container">
                <div class="button color-green-back">Approve</div>
                <div class="button color-red-back">Reject</div>
            </div>
        </>
  );
}

export default Content;
