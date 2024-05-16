import logo from './logo.svg';
import './App.css';
import { MdShoppingCart } from "react-icons/md";
import { PiNumberCircleZeroFill } from "react-icons/pi";
import { RiStarSFill } from "react-icons/ri";

function App() {
  return (
    <div >
      <header>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Start Bootstrap</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item dropdown ">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Shop
          </a>
          <ul class="dropdown-menu ">
            <li><a class="dropdown-item border-bottom" href="#">All praduct</a></li>
            <li><a class="dropdown-item" href="#">Popular Items</a></li>
            <li><a class="dropdown-item " href="#">New Arrivals</a></li>
          </ul>
        </li>
      </ul >
      <button type="button" class="btn btn-outline-dark" > <i className='bi-cart-fill me-1'>< MdShoppingCart size={20}/>Card </i> <span className='badge bg-dark text-white ms-1 rounded-pill'>O</span></button>
    </div>
  </div>
</nav>
      </header>
      <section className='title'>
 
         <h1>Shop in style</h1>
         <p>With this shop hompeage template</p>
      </section>

      <section className="cards container px-4 px-lg-5 mt-5">

        <div className="row xs-12 gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                     
        

        <div className="col mb-5">
              
              <div class="card h-100" >
                 
                 {/* preduct img */}
                 <img className='card-img-top' src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" />
                 {/* preduct img */}

                 {/* Praduct detalist */}
                 <div class="card-body p-4">
                  
                  <div className='text-center'>
                    
                  <h5 class="fw-bolder">Fancy Product</h5>


                 
                  <span className='text-muted text-decoration-line-through'>$40.00 </span>
                  " $18.00  " 
                  
                   </div>
                </div>
               
                 {/* Praduct detalist */}
                <div className="card-footer p-3  pt-0 border-top-0 bg-transparent text-center">
                  <a href="#" class=" btn btn-outline-dark mt-auto">View options</a>
                  </div>
              </div>

        </div>
         <div className="col mb-5">
              
              <div class="card h-100" >
                 <div className='badge bg-dark text-white position-absolute'>Sale</div>
                 {/* preduct img */}
                 <img className='card-img-top' src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" />
                 {/* preduct img */}

                 {/* Praduct detalist */}
                 <div class="card-body p-4">
                  
                  <div className='text-center'>
                    
                  <h5 class="fw-bolder">Fancy Product</h5>


                  <div className='d-flex justify-content-center small text-warning mb-2'> 
                  
                  <div className='bi-star-fill'><RiStarSFill /></div>
                  <div className='bi-star-fill'><RiStarSFill /></div>
                  <div className='bi-star-fill'><RiStarSFill /></div>
                  <div className='bi-star-fill'><RiStarSFill /></div>
                  <div className='bi-star-fill'><RiStarSFill /></div>
                  
                  </div>

                  <span className='text-muted text-decoration-line-through'>$40.00 </span>
                  " $18.00  " 
                  
                   </div>
                </div>
               
                 {/* Praduct detalist */}
                <div className="card-footer p-3  pt-0 border-top-0 bg-transparent text-center">
                  <a href="#" class=" btn btn-outline-dark mt-auto">View options</a>
                  </div>
              </div>

        </div>
        <div className="col mb-5">
              
              <div class="card h-100" >
                 <div className='badge bg-dark text-white position-absolute'>Sale</div>
                 {/* preduct img */}
                 <img className='card-img-top' src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" />
                 {/* preduct img */}

                 {/* Praduct detalist */}
                 <div class="card-body p-4">
                  
                  <div className='text-center'>
                    
                  <h5 class="fw-bolder">Fancy Product</h5>


                 
                  <span className='text-muted text-decoration-line-through'>$40.00 </span>
                  " $18.00  " 
                  
                   </div>
                </div>
               
                 {/* Praduct detalist */}
                <div className="card-footer p-3  pt-0 border-top-0 bg-transparent text-center">
                  <a href="#" class=" btn btn-outline-dark mt-auto">View options</a>
                  </div>
              </div>

        </div>
        <div className="col mb-5">
              
              <div class="card h-100" >
              
                 {/* preduct img */}
                 <img className='card-img-top' src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" />
                 {/* preduct img */}

                 {/* Praduct detalist */}
                 <div class="card-body p-4">
                  
                  <div className='text-center'>
                    
                  <h5 class="fw-bolder">Fancy Product</h5>


                  <div className='d-flex justify-content-center small text-warning mb-2'> 
                  
                  <div className='bi-star-fill'><RiStarSFill /></div>
                  <div className='bi-star-fill'><RiStarSFill /></div>
                  <div className='bi-star-fill'><RiStarSFill /></div>
                  <div className='bi-star-fill'><RiStarSFill /></div>
                  <div className='bi-star-fill'><RiStarSFill /></div>
                  
                  </div>

                  <span className='text-muted text-decoration-line-through'>$40.00 </span>
                  " $18.00  " 
                  
                   </div>
                </div>
               
                 {/* Praduct detalist */}
                <div className="card-footer p-3  pt-0 border-top-0 bg-transparent text-center">
                  <a href="#" class=" btn btn-outline-dark mt-auto">View options</a>
                  </div>
              </div>

        </div>
        <div className="col mb-5">
              
              <div class="card h-100" >
                 <div className='badge bg-dark text-white position-absolute'>Sale</div>
                 {/* preduct img */}
                 <img className='card-img-top' src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" />
                 {/* preduct img */}

                 {/* Praduct detalist */}
                 <div class="card-body p-4">
                  
                  <div className='text-center'>
                    
                  <h5 class="fw-bolder">Fancy Product</h5>


                 
                  <span className='text-muted text-decoration-line-through'>$40.00 </span>
                  " $18.00  " 
                  
                   </div>
                </div>
               
                 {/* Praduct detalist */}
                <div className="card-footer p-3  pt-0 border-top-0 bg-transparent text-center">
                  <a href="#" class=" btn btn-outline-dark mt-auto">View options</a>
                  </div>
              </div>

        </div>
        
       
        <div className="col mb-5">
              
              <div class="card h-100" >
                 
                 {/* preduct img */}
                 <img className='card-img-top' src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" />
                 {/* preduct img */}

                 {/* Praduct detalist */}
                 <div class="card-body p-4">
                  
                  <div className='text-center'>
                    
                  <h5 class="fw-bolder">Fancy Product</h5>


                 
                  <span className='text-muted text-decoration-line-through'>$40.00 </span>
                  " $18.00  " 
                  
                   </div>
                </div>
               
                 {/* Praduct detalist */}
                <div className="card-footer p-3  pt-0 border-top-0 bg-transparent text-center">
                  <a href="#" class=" btn btn-outline-dark mt-auto">View options</a>
                  </div>
              </div>

        </div>
        <div className="col mb-5">
              
              <div class="card h-100" >
                 <div className='badge bg-dark text-white position-absolute'>Sale</div>
                 {/* preduct img */}
                 <img className='card-img-top' src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" />
                 {/* preduct img */}

                 {/* Praduct detalist */}
                 <div class="card-body p-4">
                  
                  <div className='text-center'>
                    
                  <h5 class="fw-bolder">Fancy Product</h5>


                  <div className='d-flex justify-content-center small text-warning mb-2'> 
                  
                  <div className='bi-star-fill'><RiStarSFill /></div>
                  <div className='bi-star-fill'><RiStarSFill /></div>
                  <div className='bi-star-fill'><RiStarSFill /></div>
                  <div className='bi-star-fill'><RiStarSFill /></div>
                  <div className='bi-star-fill'><RiStarSFill /></div>
                  
                  </div>

                  <span className='text-muted text-decoration-line-through'>$40.00 </span>
                  " $18.00  " 
                  
                   </div>
                </div>
               
                 {/* Praduct detalist */}
                <div className="card-footer p-3  pt-0 border-top-0 bg-transparent text-center">
                  <a href="#" class=" btn btn-outline-dark mt-auto">View options</a>
                  </div>
              </div>

        </div>
        <div className="col mb-5">
              
              <div class="card h-100" >
                 
                 {/* preduct img */}
                 <img className='card-img-top' src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" />
                 {/* preduct img */}

                 {/* Praduct detalist */}
                 <div class="card-body p-4">
                  
                  <div className='text-center'>
                    
                  <h5 class="fw-bolder">Fancy Product</h5>


                  <div className='d-flex justify-content-center small text-warning mb-2'> 
                  
                  <div className='bi-star-fill'><RiStarSFill /></div>
                  <div className='bi-star-fill'><RiStarSFill /></div>
                  <div className='bi-star-fill'><RiStarSFill /></div>
                  <div className='bi-star-fill'><RiStarSFill /></div>
                  <div className='bi-star-fill'><RiStarSFill /></div>
                  
                  </div>

                  <span className='text-muted text-decoration-line-through'>$40.00 </span>
                  " $18.00  " 
                  
                   </div>
                </div>
               
                 {/* Praduct detalist */}
                <div className="card-footer p-3  pt-0 border-top-0 bg-transparent text-center">
                  <a href="#" class=" btn btn-outline-dark mt-auto">View options</a>
                  </div>
              </div>

        </div>


        

        </div>
      </section>
     <footer className='py-5 bg-dark'>
       <div className='container'>
        <p className='m-0 text-center text-white'>Copyright ©  Ali Sayfiddinov 2024</p>
       </div>
     </footer>
    </div>
  );
}

export default App;
