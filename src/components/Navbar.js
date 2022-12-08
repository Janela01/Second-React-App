import reactLogo from '../images/react.png';
export default function Navbar(){
      return(
            <nav className="nav">
                  <div className="div1">
                        <img className='reactLogo' src={reactLogo}/>
                        <h2>ReactFacts</h2>
                  </div>
                  <div className="div2">
                        <h3>React Course - </h3>
                        <h4> Project 2</h4>
                  </div>
            </nav>
      )
}