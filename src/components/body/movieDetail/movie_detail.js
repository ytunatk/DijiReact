import React from 'react';
import { useLocation } from 'react-router-dom';

function MovieDetails() {


    const location = useLocation();
    const state = location;

    console.log(state.state)
    console.log(location)



    console.log('state', state)
    return (
        <div className='movie_detail'>
            <div className='movie_prew'>
                <div className='movie_desc'>
                    <div className='movie_desc_main'>
                        <div className='movie_desc_text'>
                            <h1>
                                {state.state.Title.toUpperCase()}
                            </h1>
                            <span>Konu</span>
                            <p>{state.state.Plot}</p>
                            <span>Oyuncular</span>
                            <p>{state.state.Actors}</p>
                        </div>
                        <div className='play_btn'>
                            <svg version="1.1" id="play" x="0px" y="0px"
                                viewBox="0 0 100 100" enable-background="new 0 0 100 100">
                                <path class="stroke-solid" fill="none" stroke="#ddbe72" d="M49.9,2.5C23.6,2.8,2.1,24.4,2.5,50.4C2.9,76.5,24.7,98,50.3,97.5c26.4-0.6,47.4-21.8,47.2-47.7
                                 C97.3,23.7,75.7,2.3,49.9,2.5"/>
                                <path class="icon" fill="#ddbe72" d="M38,69c-1,0.5-1.8,0-1.8-1.1V32.1c0-1.1,0.8-1.6,1.8-1.1l34,18c1,0.5,1,1.4,0,1.9L38,69z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className='movie_bg'>
                <img src={state.state.images[0]} alt='' draggable="false" />
            </div>
        </div>
    )
}


export default MovieDetails