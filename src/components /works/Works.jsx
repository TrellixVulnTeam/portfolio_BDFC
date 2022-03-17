
import { useState } from 'react';
import './works.scss'

export default function Works() {

    const [currentSlide, setCurrentSlide] = useState(0);


    const data = [
        {
            id: '1',
            icon: './assets/mobile.png',
            title: 'Web Design',
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dolorum cumque deserunt, eos, quaerat, quis odit ",
            img: 'https://www.dbswebsite.com/wp-content/uploads/b2b-web-design-examples-min.jpg'
        },
        {
            id: '2',
            icon: './assets/globe.png',
            title: 'Mobile Application',
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dolorum cumque deserunt, eos, quaerat, quis odit ",
            img: 'https://loopup.com/app/uploads/2014/10/The-Rise-of-the-Business-Mobile-App.png'
        },
        {
            id: '3',
            icon: './assets/writing.png',
            title: 'Branding',
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dolorum cumque deserunt, eos, quaerat, quis odit ",
            img: 'https://www.techfunnel.com/wp-content/uploads/2020/03/benefits_of_branding.jpg.jpg'
        }
    ];

    const handleClick = (way) => {
        way === 'left' ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2) : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0)
    };


    return (
        <div className='works' id="works">Works
            <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>

                {data.map(d => (
                    <div className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imgContainer">
                                        <img src={d.img} alt="" />
                                    </div>
                                    <h2>{d.title}</h2>
                                    <p>{d.desc} </p>
                                    <span>Projects</span>
                                </div>
                            </div>
                            <div className="right">
                                <img src={d.img} alt="" />
                            </div>


                        </div>


                    </div>))}

            </div>

            <img src="assets/arrow.png" className='arrow left' alt="" onClick={() => handleClick('left')} />
            <img src="assets/arrow.png" className='arrow right' alt="" onClick={() => handleClick('right')} />
        </div>
    )
}
