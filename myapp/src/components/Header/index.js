import { Link } from 'react-router-dom'

import './index.css'

const Header=()=>{
    return(
        <div className="box1">
            <div className='box2'>
            <img alt='img' className='img1' src='https://i.pinimg.com/236x/d6/fa/a1/d6faa113a89216c2808eda075d6425be.jpg'/>
            <h1>Vijay Devarakonda Blog</h1>
            </div>
            <div className='box2'>
                <h3><Link to='/' >Home</Link></h3>
                <h3><Link to='/about'>About</Link></h3>
                <h3><Link to='/contact'>Contact</Link></h3>
            </div>
        </div>
    )
}
export default Header