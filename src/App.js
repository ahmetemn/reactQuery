import logo from './logo.svg';
import './App.css';
import { useQuery } from 'react-query';
import { useEffect } from 'react';

function App() {

  ///NORMALDE BÖYLE UZUN UZUNDIYA YAPACAKTIM

  // const [detail, setDetail] = useState([]);
  // useEffect(()=>{
  //   fetch("http://localhost:3002/doktorlar")
  //   .then(response => response.json())
  //   .then(data => setDetail(data.data));
  // },[detail])


  // useEffect(() => {
  //   const data = async () => {
  //     const data = await axios.get("......")
  //     setDetail(data)
  //   }

  // }, [])


  //posts => sorgu anahtarı 
  //2.parametre sorgu fonksiyonu 
  //SADECE GET İŞLEMLEERİ UNUTMA
  const fetchData = useQuery(['posts'], () => {
    return fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json());
  }, {
    //3.parametre sayfa yüklendiğinde veri çekimi false yaptığım yapı
     enabled:false
  })

  //refetch  parametresini  biz burada  data çekmek için kullandık 

  const {data, isLoading , refetch} = fetchData

  console.log(data , isLoading);

  
  if(isLoading){
    return <div> Loading ...</div>
  }
  return (
    <div className="App">
      <button onClick={() =>  refetch()}>Veri Çek </button>
       {
         data&&data.map((dt,i) => (

        <div key={i}> {dt.title}</div>
          ))
       }
    </div>
  );
}

export default App;
