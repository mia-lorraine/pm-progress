import React from 'react'



 const Details = ( {id, name, manager, date}) => {
return(
  <div>
  <p> Project Name: {name} <br />
      Project Manager: {manager} <br />
      Project Date: {date} </p> <br />
  </div>
)
}

export default Details;
