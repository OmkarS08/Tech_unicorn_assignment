import './Footer.css'

export const Footer =() =>{
    return(<div className='footer-container'>
    <div className='image-footer'>
            <div className='imgft'></div>
        </div>
        <div className='content-footer'>
            <h2>Dealrz.</h2>
            <h6>privacy Policy</h6>
            <h6>Terms & Condition</h6>
            <p>@2020 Tanhair Studio.All right reserved</p>
        </div>
        <div className='contact-footer'>
            <ul>
                <li><button>Fb</button></li>
                <li><button>Tw</button></li>
                <li><button>Ig</button></li>
                <li><button>Yt</button></li>
            </ul>
        </div>
    </div>

)
}