import { useState } from 'react';
import './index.css';
import { FiSearch} from 'react-icons/fi';
import api from './services/api';

function App() {
  const [input, setInput] = useState('')

  async function handleSearch(){
    if(input === ''){
      alert("Preencha com algum cep")
      return;
    }

    try{

      const response = await api.get('${input}/JSON');

      console.log(response)
    }catch{

      alert("erro")
    }
  }
    
  return (
    
    <>
    {/* HEADER */}
    <header class="header">
     <a href='c'> Busca Cep </a>
    </header>
    
    {/* BODY */}
    <div className="Container">


    {/* CLASSE COM TEXT BOX*/}
    <div className='containerInput'>
    
       <input type="text" placeholder='Digite seu cep'
        value={input} onChange={(e) => setInput(e.target.value)}/>

       <button className='buttonSearch' onClick={handleSearch}>
         <FiSearch size={25}/>
       </button>
     
    </div>
    
    {/* CLASSE PRINCIPAL*/}
    <main className='main'>
    <h2> cep: </h2>
      <span>Rua teste algust</span>
      <span>complemento: algum complemento</span>
      <span> Vila Rosa</span>
      <span> São Paulo</span>
    </main>
    </div>
  
    </>
  );
}

export default App;
