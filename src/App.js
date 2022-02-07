import React , {useState} from 'react';

const menu = [
  {
    name:'Sushi',
    description:'Fines fish and veggies',
    price:22.99
  },{
    name:'Schnitzel',
    description:'A german specialty',
    price:16.50
  },{
    name:'Barbecue Burger',
    description:'American, raw, meaty',
    price:12.99
  },{
    name:'Green',
    description:'Healthy...and green...',
    price:18.99
  },
]

const App =()=>{
const [menu, setmenu] = useState(menu)
  return(
    <React.Fragment>
     
      
    </React.Fragment>
  )
}
export default App;
