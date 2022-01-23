import React from "react"

export default function Info() {
    return (
        <div className="info">
            <div className="info-img">
                <img src="../images/laura.png" />
            </div>
            <div className="info-title">
                <div>Laura Smith</div>
                <div>Frontend Developer</div>
                <div>laurasmith.website</div>
            </div>
            <div className="info-btns">
                <div className="info-email-btn">
                    <img src="../images/email.png" />
                    Email
                </div>
                <div className="info-li-btn">
                    <img src="../images/linkedin.png" />
                    LinkedIn
                </div>
            </div>
        </div>
    )
}