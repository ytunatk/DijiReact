
import React from 'react';
import OwlCarousel from 'react-owl-carousel2';
import '/node_modules/react-owl-carousel2/lib/styles.css';
import { Link } from "react-router-dom";

class PrewBox extends React.Component {

    render() {
        const options = {
            items: 1,
            nav: false,
            loop: false,
            center: false,
            dotsEach: true,
            touchDrag: true,
            autoplay: true,
            stagePadding: 5,
            autoplayTimeout: 4000,
            responsiveRefreshRate: 0,
            autoplayHoverPause: true,
            autoWidth: true,
            className: "owl-theme"
        };
        // const [data, setData] = useState([]);

        // useEffect(() => {
        //     // const url = "https://gist.githubusercontent.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4/raw/523c324c7fcc36efab8224f9ebb7556c09b69a14/Film.JSON";
        //     const url = "https://raw.githubusercontent.com/MiguelMarcola/movies-list/main/server.json";

        //     const fetchData = async () => {

        //         const response = await axios.get(url)
        //         setData(response.data)
        //         console.log(response.data.movies)
        //     }

        //     fetchData();
        // }, []);

        const d = this.props.movies.map((movie) => (
            <div className='poster_area'>
                <div className='poster_desc'>
                    <p>{movie.Title}</p>
                    <div className='poster_desc_text'>
                        <p>
                            {movie.Plot}
                        </p>
                    </div>
                    <div className='play_btn'>
                        <Link
                            to={"/MovieDetail/" + movie.Title.toLowerCase().split(" ").join("-")}
                            state={movie}>
                            <svg version="1.1" id="play" x="0px" y="0px"
                                viewBox="0 0 100 100" enable-background="new 0 0 100 100">
                                <path class="stroke-solid" fill="none" stroke="#ddbe72" d="M49.9,2.5C23.6,2.8,2.1,24.4,2.5,50.4C2.9,76.5,24.7,98,50.3,97.5c26.4-0.6,47.4-21.8,47.2-47.7
                                 C97.3,23.7,75.7,2.3,49.9,2.5"/>
                                <path class="icon" fill="#ddbe72" d="M38,69c-1,0.5-1.8,0-1.8-1.1V32.1c0-1.1,0.8-1.6,1.8-1.1l34,18c1,0.5,1,1.4,0,1.9L38,69z" />
                            </svg>
                        </Link>
                    </div>
                    <div className='poster_details'>
                        <span>{movie.Released}</span>
                        <span>IDMB: {movie.imdbRating}</span>
                    </div>
                </div>
                <div className='prew_box' key={movie.Title} >
                    <img src={movie.Poster} alt={movie.Title} />
                </div>
            </div >
        ))
        return (
            <OwlCarousel options={options} >
                {d}
            </OwlCarousel>
        )
    }
}
export default PrewBox;





