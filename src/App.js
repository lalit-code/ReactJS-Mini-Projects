import './App.css';
import Card from './Card';
import MovieDATA from './MovieData';

function App() {

  

  return (
    <>
        <h1>Top WEB Series</h1>

        <div className='cardsection'>
          
         {MovieDATA.map(function listmovies(data){
          return(
            <Card 
              name={data.name}
              srclink={data.srclink}
              mainlink={data.mainlink}
        
            />
          )
         })}

        </div>


    </>
  );
}

export default App;
