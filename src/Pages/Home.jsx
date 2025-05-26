import { Link } from 'react-router-dom'
import Nav from '../Components/Nav'
import './home.css'


export default function  Home(props) {
    

    return(
        <>
            <Nav/>
            <div className="home">
               <div className="card2" style={{ width: "18rem" }}>
 <img className='sbr' src="https://imgs.search.brave.com/FqAiwNO6XkETfc1cBy3lpixK-BsYpJ7NjpuFdAdGIIM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vejFOZnIt/Z1hnZ1RwQ19MaUF0/LWs3d2U2S0VJdHRt/UG03bC1la2NPMFND/MC9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTl6/ZEdGMC9hV011YW05/cWIzZHBhMmt1L1ky/OXRMMmx0WVdkbGN5/OTAvYUhWdFlpODFM/elZpTDJ4aC9kR1Z6/ZEM4eU1ESTFNRFF4/L01qRXlNVEl4TWk5/VGRHVmwvYkY5Q1lX/eHNYMUoxYmw5Qi9i/bWx0WlY5TFpYbGZW/bWx6L2RXRnNMbXB3/Wnk4ME1EQncvZUMx/VGRHVmxiRjlDWVd4/cy9YMUoxYmw5QmJt/bHRaVjlML1pYbGZW/bWx6ZFdGc0xtcHcv/Wnc" alt="" />
  <div className="card-body2">
    <h5 className="card-title">JoJo SBR</h5>
    <p className="card-text">
      Decouvrez le monde de jojo Steel Ball Run
    </p>
    <Link className='link2' to="/shop">Decouvrez</Link>
  </div>
</div>
            </div>
         

           
        </>
    )
}