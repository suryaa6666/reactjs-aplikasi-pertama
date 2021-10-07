import './App.css';

const Profile = (props) => {
  return (
    <div class="wrapper">
      <p>Nama : {props.nama}</p>
      <p>Umur : {props.umur} </p>
    </div>
  );
};
const App = () => {
  return (
    <div>
      <Profile nama="Cintara Surya Elidanto" umur="18" />
      <Profile nama="Ehehehe" umur="18" />
    </div>
  );
};

export default App;
