import React from 'react';
import icon from './twitter_icon.png';
import './Card.css';
const Card = (props) => {
    let link = 'https://twitter.com/intent/tweet?text='
    link += props.text + ' By ' + props.name
    console.log(link)
    return(
        <div className='container-fluid' style={{position:'relative', left:"400px", top:'100px'}}>
            <div className="card text-white bg-primary mb-3" style={{maxWidth: '30rem', maxHeight:'50rem'}}>
            <div className="card-body">
                <h5 className="card-title">{props.text}</h5>
                <p className="card-text">-{props.name}</p>
            </div>
            </div>
            <button onClick={props.onQuoteSubmit}className='btn btn-danger' style={{position: 'relative', right:'190px', bottom:'57px'}}>new quote</button>
            <a className='twitter-share-button tt'
            href={link}
            data-size='large'
            >Tweet
            <img src={icon} alt='tt' width='40px'/>
            </a>        

        </div>
    )

}

export default Card;

 