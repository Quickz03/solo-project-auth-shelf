import React from 'react';

const Items = (props) => {
  return (
    <div>
      <img src={props.item.image_url} alt={props.item.description} />
      <div>
        <p> {props.item.image_url}</p>
        <p> Name: { props.item.description }</p>
      </div>
    </div>
  )
}

export default Items;