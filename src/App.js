import './App.scss';

function App() {
  return (
    <div className="App">

      <div className="hiking">
        <div className='landing' id='landing'>
          <nav>
            <div className='heading'>Michael Green</div>
            <div className='nav-links'>
              <a href="#projects" id='nav-projects'>Projects</a>
              <a href="#about">About Me</a>
              <a href="#contact">Contact</a>
            </div>
            <div className='heading'>Software Engineer</div>
          </nav>
          <div className='welcome'>
            <div className='tagline'>
              <div className='tagline-line'></div>
              <h5 className='heading-tagline'>Welcome</h5>
            </div>
            <h1>View My Work</h1>
            <a href='#projects' className='link-to-projects'>
              <div>scroll down</div>
              <div className='icon-scroll'>
                <svg width='16' height='24' viewbox='0 0 16 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M16 16L14.59 14.59L9 20.17V0H7V20.17L1.42 14.58L0 16L8 24L16 16Z' fill='currentColor'></path>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div id="projects">

        <div className='project' id='rentproof'>
          <div className='container'>
            <div className='column'>
              <h2 className='title'>RentProof</h2>
              <p className='description'>
                RentProof tracks price data uploaded by users to provide a detailed history of rental prices
                for individual properties and regional markets. Renters can then identify high-performing from
                low-performing properties over time.
              </p>
              <div className='stack'>React Router, Node/Express, PostgreSQL</div>
              <a href='https://github.com/JackDuluoz/RentProof' className='project-button'>
                <div>View Project</div>
              </a>
            </div>
            <div className='image-column'>
              <div className='project-image'>
                <img src="markers.gif" alt=""></img>
              </div>
            </div>
          </div>  
        </div>

        <div className='project' id='scheduler'>
          <div className='container'>
            <div className='image-column'>
              <div className='project-image'>
                <img src="add.gif" alt=""></img>
              </div>
            </div>
            <div className='column'>
              <h2 className='title'>Scheduler</h2>
              <p className='description'>
                Scheduler is a single-page appointment app connecting students with mentors. Components are built and tested with Storybook.
              </p>
              <div className='stack'>React, Node/Express, PostgreSQL</div>
              <a href='https://github.com/JackDuluoz/scheduler' className='project-button'>
                <div>View Project</div>
              </a>
              <a href='#about' className='link-to-about' id='link-to-about'>
                <div>about me</div>
                  <div className='icon-scroll'>
                  <svg width='16' height='24' viewbox='0 0 16 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M16 16L14.59 14.59L9 20.17V0H7V20.17L1.42 14.58L0 16L8 24L16 16Z' fill='currentColor'></path>
                  </svg>
                </div>
              </a>
             
            </div>
          </div>  
        </div>

      </div>

      <div id="about">
        
        <div className='personal' id='explorer'>
          <div className='container'>
            <div className='text'>
              <div className='tagline'>
                <div className='tagline-line'></div>
                <h5 className='heading-tagline'>Explorer</h5>
              </div>
              <h2 className='head'>New Adventures</h2>
              <p>
                How do you teach an Australian kid ice hockey? With great difficulty as it turns out!
                And by a rather circuitous route. I've been living abroad since the age of nine -- first in
                Singapore, then in South Korea, then the UK, Germany, Romania, and Canada. After a quarter
                century of change I'm used to being on the move and learning new things.</p>
              <a href='#inquisitive' className='link-to-next-about'>
                <div>read more</div>
                <div className='icon-scroll'>
                <svg width='16' height='24' viewbox='0 0 16 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M16 16L14.59 14.59L9 20.17V0H7V20.17L1.42 14.58L0 16L8 24L16 16Z' fill='currentColor'></path>
                </svg>
              </div>
            </a>
            </div>
            <img src="hockey.jpg" alt="" className="image"></img>
          </div>
        </div>

        <div className='personal' id='inquisitive'>
          <div className='container'>
            <img src="office.jpg" alt="" className="image"></img>
            <div className='text'>
              <div className='tagline'>
                <div className='tagline-line'></div>
                <h5 className='heading-tagline'>Inquisitive</h5>
              </div>
              <h2 className='head'>New Ideas</h2>
              <p>
                Exploration encourages the spirit of enquiry, and today I enjoy new ideas as much as new places.
                Inevitably, my early interests were cultural, and I studied history as I explored.
                In time, my interests became more technical, drawing me first to business and finance,
                and finally to concrete ideas involving data structures and algorithms.
              </p>
              <a href='#nourishment' className='link-to-next-about'>
                <div>read more</div>
                <div className='icon-scroll'>
                <svg width='16' height='24' viewbox='0 0 16 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M16 16L14.59 14.59L9 20.17V0H7V20.17L1.42 14.58L0 16L8 24L16 16Z' fill='currentColor'></path>
                </svg>
              </div>
            </a>
            </div>            
          </div>
        </div>

        <div className='personal' id='nourishment'>
          <div className='container'>
            <div className='text'>
              <div className='tagline'>
                <div className='tagline-line'></div>
                <h5 className='heading-tagline'>Nourishment</h5>
              </div>
              <h2 className='head'>New Problems</h2>
              <p>
                My work is how I nourish my brain and give it what it craves -- problems! I like to solve problems.
                I'll solve my problems, your problems, customers' problems, problems we didn't even know were problems!
                With programming, I've found a field where the problems expand quicker than I can solve them, which makes
                me feel right at home.
              </p>
              <a href='#contact' className='link-to-next-about'>
                <div>contact me</div>
                <div className='icon-scroll'>
                <svg width='16' height='24' viewbox='0 0 16 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M16 16L14.59 14.59L9 20.17V0H7V20.17L1.42 14.58L0 16L8 24L16 16Z' fill='currentColor'></path>
                </svg>
              </div>
            </a>
            </div>
            <img src="mgr.jpg" alt="" className="image"></img>
          </div>
        </div>

        <div className='personal' id='contact'>
          <div className='container'>
            <div className='email-form'>
              <img src="explorer2.jpg" alt="" className="image" id='form-image'></img>
              <form action="https://formsubmit.co/greenmr1995@gmail.com" method="POST">
                <div className='name-row'>
                  <div className='email-column'>
                    <div className='email-description'>Enter Your Name</div>
                    <input id='name' type="text" name="name" placeholder='Name' required></input>
                  </div>
                  <div className='email-column'>
                    <div className='email-description'>Enter Your Email</div>
                    <input id='email' type="email" name="email" placeholder='Email' required></input>
                  </div>
                </div>
                <div className='email-row'>
                  <div className='email-description'>Enter Your Subject</div>
                  <input id='subject' type="text" name="_subject" placeholder='Subject' required></input>
                </div>
                <div className='email-row'>
                  <div className='email-description'>Enter Your Message</div>
                  <textarea id='message' type="text" name="message" placeholder='Message' required></textarea>
                </div>
                <input type="hidden" name="_template" value="box"></input>
                <input type="hidden" name="_autoresponse" value="Thanks for getting in touch! I'll be in contact shortly. Take care,  Michael :)"></input>
                <div className='email-row'>
                  <button type="submit">Send a Message</button>
                </div>
              </form>
            </div>
            <div className='text'>
              <div className='tagline'>
                <div className='tagline-line'></div>
                <h5 className='heading-tagline'>Solutions</h5>
              </div>
              <h2 className='head'>Contact Me</h2>
              <p>
                It all starts with a simple chat. If you're looking to bring your ideas to life,
                I'd love to hear from you! Please get in touch here.
              </p>
              <div className='links'>
                <a href='https://www.linkedin.com/in/mrgreen95/' target='_blank' rel="noreferrer" className='fa fa-linkedin' title='linkedin'></a>
                <a href='https://github.com/JackDuluoz' target='_blank' rel="noreferrer" className='fa fa-github' title='github'></a>
                <a href='https://jackduluoz.github.io/cv/michael-resume.pdf' target='_blank' rel="noreferrer" className='fa fa-file-pdf-o' title='resume'></a>
                <a href='https://calendly.com/michaelrobertgreen' target='_blank' rel="noreferrer" className='fa fa-calendar' title='calendly'></a>
              </div>
              <p className='phone'>1-250-540-9809</p>
              <p className='address'>Vernon, BC, Canada</p>
              <a href='#landing' className='link-to-next-about'>
                <div>back to top</div>
                  <div className='icon-scroll' id='top'>
                  <svg width='16' height='24' viewbox='0 0 16 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M16 16L14.59 14.59L9 20.17V0H7V20.17L1.42 14.58L0 16L8 24L16 16Z' fill='currentColor'></path>
                  </svg>
                </div>
              </a>
            </div>            
          </div>
        </div>        

      </div>
      
    </div>
  );
}

export default App;
