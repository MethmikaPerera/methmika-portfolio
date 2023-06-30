/* eslint-disable react/jsx-no-target-blank */
import React from 'react'

const WorkItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <p className="work__description">{item.description}</p>
      <div className="work__button">
        <a href={item.github} target="_blank" className={item.class}><i className="bx bxl-github work__button-icon"></i></a>
        <a href={item.demo} target="_blank" className="work__button"><i className="bx bx-link-external work__button-icon"></i></a>
      </div>
    </div>
  )
}

export default WorkItems