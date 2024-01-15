import './Header.css'
function Main() {
  return (<div>
    <div className='Header'>
      <h4 className='h1'>Mara Hla Chabie</h4>
      <ul className='ul'>
        <li className='li' >Azyhdua</li>
        <li className='li' >Azaona</li>
        <li className='li' >Ataotuhpa</li>

      </ul>

    </div>
    <div className='search'>
      <input type='text' placeholder='Hla tlua awpata roh tyh........' className='input' />
      <button className='button'>Tluanâ</button>
    </div>
  </div>

  )
}


export default Main;