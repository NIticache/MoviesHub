import "../styles/demo.css"

const SignUpPage=()=>{
    return<>
    <div>
        <header className="mainheader">
            <nav>
            <div className="nav-logo">
            {/* <a href="#">
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" />
        </a> */}
            </div>
            
      <div className="nav-right">
        <div className="langue">
        <a className="navLangue" href="#">English</a>
        <div className="dropup-content">
          <ul>
            <li> <a href="#">French</a></li>
            <li> <a href="#">English</a></li>
    
          </ul>
           
        </div>
          </div>
        <div className="singnBtn">
          <a className="navLogin" href="#">Sign Up</a>
        </div>
      </div>
    </nav>
    <div className="header-content">
      <h1>Unlimited movies, TV <br/> shows, and more.</h1>
      <h2>Watch anywhere. Cancel anytime.</h2>
      <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
      <div >
        <input  placeholder="email address"/>
          <button className="button1" >
          Get Started
        </button>
         
       
      </div>
    </div>
        </header>
    </div>
     
    </>
}

export default SignUpPage;