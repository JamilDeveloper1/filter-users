
import { useState } from 'react'
import data from './data';

const App = () => {

const [search,setSearch] = useState('');
function handleChange(e){
setSearch(e.target.value);
}

  return (

    <div>
    <h1>Search Users Name</h1>  
    <input type="text" onChange={handleChange} placeholder='Search users...' />
    <table>
      <tr>


      </tr>

{data.filter((item)=>{
  return search.toLowerCase() === "" 
  ? item
  : item.first_name.toLowerCase().includes(search)
})

.map((item,index)=>
  <tr>
<td>{item.first_name}</td>
<td>{item.last_name}</td>
<td>{item.email}</td>
<td>{item.phone}</td>
  </tr>
)

}

    </table>

    </div>
  )
}

export default App
