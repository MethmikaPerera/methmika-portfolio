import React from 'react'

const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
                <i class="bx bx-award about__icon"></i>
                <h3 className="about__title">Coding Life</h3>
                <span className="about__subtitle">3 years</span>
            </div>

            <div className="about__box">
                <i class="bx bx-briefcase-alt about__icon"></i>
                <h3 className="about__title">Completed</h3>
                <span className="about__subtitle">5 Projects</span>
            </div>

            <div className="about__box">
                <i class="bx bx-time-five about__icon"></i>
                <h3 className="about__title">Worked</h3>
                <span className="about__subtitle">110 Hours</span>
            </div>
        </div>
    )
}

export default Info