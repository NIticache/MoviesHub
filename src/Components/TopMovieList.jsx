import MovieCard from "./MovieCard"
import Header from "./Header"

const TopMovieList =(props)=>{

    const TopMovie =
        [
            
            {
                "title": "Dangal",
                "year": "2016",
                "genres": [
                    "Action",
                    "Biography",
                    "Drama"
                ],
                
                "poster": "MV5BMTQ4MzQzMzM2Nl5BMl5BanBnXkFtZTgwMTQ1NzU3MDI@._V1_SY500_CR0,0,356,500_AL_.jpg",
                "contentRating": "",
                "duration": "PT161M",
                "releaseDate": "2016-12-23",
                "averageRating": 0,
                "originalTitle": "",
                "storyline": "Biopic of Mahavir Singh Phogat, who taught wrestling to his daughters Babita Kumari and Geeta Phogat. Geeta Phogat was India's first female wrestler to win at the 2010 Commonwealth Games, where she won the gold medal (55 kg) while her sister Babita Kumari won the silver (52 kg).                Written by\nDibyayan_Chakravorty",
                "actors": [
                    "Aamir Khan",
                    "Sakshi Tanwar",
                    "Fatima Sana Shaikh"
                ],
                "imdbRating": 8.9,
                "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ4MzQzMzM2Nl5BMl5BanBnXkFtZTgwMTQ1NzU3MDI@._V1_SY500_CR0,0,356,500_AL_.jpg"
            },
            {
                "title": "Drishyam",
                "year": "2013",
                "genres": [
                    "Crime",
                    "Drama",
                    "Thriller"
                ],
                
                "poster": "MV5BYmY3MzYwMGUtOWMxYS00OGVhLWFjNmUtYzlkNGVmY2ZkMjA3XkEyXkFqcGdeQXVyMTExNDQ2MTI@._V1_SX330_CR0,0,330,432_AL_.jpg",
                "contentRating": "",
                "duration": "PT160M",
                "releaseDate": "2013-12-19",
                "averageRating": 0,
                "originalTitle": "",
                "storyline": "Georgekutty (Mohanlal) is a cable TV network owner in a remote and hilly village in Kerala. He lives a happy life with his wife and 2 girls. The first half revolves around the depiction of their happy family. Anju (Ansiba), Georgekutty's daughter goes to a school trip in between the proceedings. After a few days a guy who had been at the school trip with her meets Anju. He blackmails her with a video of her that he had captured during the school trip. In the course of events he is accidentally killed by Rani (Meena) and Anju. Georgekutty on returning home is appraised of the events and thus begins a cat and mouse game as the murdered person is the son of IG Geeta Prabhakar (Asha Sharath) and Prabhakar (Siddique). How the family weathers the storm that ensues during the murder investigation forms the rest of the story leading to a deeply satisfying and unexpected climax.                Written by\nAthul",
                "actors": [
                    "Mohanlal",
                    "Meena",
                    "Ansiba"
                ],
                "imdbRating": 8.9,
                "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BYmY3MzYwMGUtOWMxYS00OGVhLWFjNmUtYzlkNGVmY2ZkMjA3XkEyXkFqcGdeQXVyMTExNDQ2MTI@._V1_SX330_CR0,0,330,432_AL_.jpg"
            },
           
           
            {
                "title": "Gol Maal",
                "year": "1979",
                "genres": [
                    "Comedy",
                    "Romance"
                ],
             
                "poster": "MV5BMjA4OTczODgxNF5BMl5BanBnXkFtZTgwMDAzMTU2NDE@._V1_SY250_CR0,0,187,250_AL_.jpg",
                "contentRating": "",
                "duration": "PT144M",
                "releaseDate": "1979-04-20",
                "averageRating": 0,
                "originalTitle": "",
                "storyline": "Ramprasad is a recent college graduate who finds a job with a finicky man, Bhavani Shankar, who believes that a man without a mustache is a man without a character. Bhavani Shankar is also against any of his employees indulging in recreation of any kind. When Ramprasad is caught by his boss at a soccer match, he has to invent a twin brother, the clean-shaven Laxman Prasad, to save his job. When Bhavani's daughter falls in love with the clean-shaven Laxman Prasad, and insists on marrying him, and Bhavani insists she should marry Ramprasad, things take a whacky turn. A fake mother and a hilarious chase are other enjoyable features involved in this comedy.                Written by\nVijay",
                "actors": [
                    "Amol Palekar",
                    "Bindiya Goswami",
                    "Deven Verma"
                ],
                "imdbRating": 8.7,
                "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA4OTczODgxNF5BMl5BanBnXkFtZTgwMDAzMTU2NDE@._V1_SY250_CR0,0,187,250_AL_.jpg"
            },
            {
                "title": "Black Friday",
                "year": "2004",
                "genres": [
                    "Crime",
                    "Drama",
                    "Thriller"
                ],
                
                "poster": "MV5BMmU1NDhjYTQtYjQxYy00MjlmLWIxMjItMjllMmE2NDRlY2ZhXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SY500_SX400_AL_.jpg",
                "contentRating": "",
                "duration": "PT143M",
                "releaseDate": "2007-02-09",
                "averageRating": 0,
                "originalTitle": "",
                "storyline": "A dramatic presentation of the bomb blasts that rocked Bombay on March 12, 1993, displays the police investigation, amidst allegations of human rights violations, led by DCP Rakesh Maria, in tracking down the suspects, especially Bashir Khan. Bashir managed to elude authorities by re-locating to Rajasthan, Uttar Pradesh, Delhi, and West Bengal, after finally being apprehended in Bombay. His confession and subsequent flashbacks showcases the apathy shown by authorities who refused to intervene during the destruction of the sacred Babri Masjid by Hindu Kar Sevaks, and the inability of the police to fulfill their mandate and protect the vulnerable, forcing many to flee to other locations. The subsequent aftermath that succeeded in irreversibly polarizing communities in Bombay; Pakistan's involvement in training and arms' supplies; the main alleged suspects, Dawood Ibrahim, and Mushtaq Memon, sought refuge in Dubai, United Arab Emirates, while Indian politicians made a cosmetic move to ...                Written by\nrAjOo (gunwanti@hotmail.com)",
                "actors": [
                    "Kay Kay Menon",
                    "Pavan Malhotra",
                    "Aditya Srivastava"
                ],
                "imdbRating": 8.6,
                "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMmU1NDhjYTQtYjQxYy00MjlmLWIxMjItMjllMmE2NDRlY2ZhXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SY500_SX400_AL_.jpg"
            },
            {
                "title": "Taare Zameen Par",
                "year": "2007",
                "genres": [
                    "Drama",
                    "Family",
                    "Music"
                ],
            
                "poster": "MV5BNTVmYTk2NjAtYzY3MS00YjFjLTlkYzktYzg3YzMyZDQyOWRiXkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_SY500_CR0,0,346,500_AL_.jpg",
                "contentRating": "PG",
                "duration": "PT165M",
                "releaseDate": "2008-12-26",
                "averageRating": 0,
                "originalTitle": "",
                "storyline": "Ishaan Awasthi is an eight-year-old whose world is filled with wonders that no one else seems to appreciate; colours, fish, dogs and kites are just not important in the world of adults, who are much more interested in things like homework, marks and neatness. And Ishaan just cannot seem to get anything right in class. When he gets into far more trouble than his parents can handle, he is packed off to a boarding school to 'be disciplined'. Things are no different at his new school, and Ishaan has to contend with the added trauma of separation from his family. One day a new art teacher bursts onto the scene, Ram Shankar Nikumbh, who infects the students with joy and optimism. He breaks all the rules of 'how things are done' by asking them to think, dream and imagine, and all the children respond with enthusiasm, all except Ishaan. Nikumbh soon realizes that Ishaan is very unhappy, and he sets out to discover why. With time, patience and care, he ultimately helps Ishaan find himself.                Written by\nAnonymous",
                "actors": [
                    "Darsheel Safary",
                    "Aamir Khan",
                    "Tanay Chheda"
                ],
                "imdbRating": 8.5,
                "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNTVmYTk2NjAtYzY3MS00YjFjLTlkYzktYzg3YzMyZDQyOWRiXkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_SY500_CR0,0,346,500_AL_.jpg"
            }
        ]

    
    return<>
       <div className="moviepage">
 
        <div className="homelist"><div>Top {props.topic } List</div></div>
        <div className="top-grid-container">
            {TopMovie.map((item) => {
                console.log(item)
                return (

                    <MovieCard key={item?.title} title={item?.title} img={item?.posterurl} year={item?.year} titletype={item?.year }/>
                )
            })}
        </div>
        </div>
    </>
}

export default TopMovieList;