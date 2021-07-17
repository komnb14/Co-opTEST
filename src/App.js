import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';

const customers = [{
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '홍길동',
  'birthday': '961222',
  'gender': '남자아아아',
  'job': '대학생'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': '길동시',
  'birthday': '151515',
  'gender': '남자아아아',
  'job': '백수'
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/any',
  'name': '동길홍',
  'birthday': '961222',
  'gender': '뭘까아',
  'job': '프로그래머'
}
]

function App() {
  return (
    <div>
      {
        customers.map(c => {
          return (<Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />
        ); 
      })
      }
    </div>
  );
}

export default App;
