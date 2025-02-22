
import './App.css';
import App1 from './component/App1';
import Auction from './component/ReactProject/Auction';
import App2 from './component/ReactProject/Auction';
import Click from './component/Location';
import Demo from './component/Demo';
import Greet from './component/Greet';
import Img from './component/Img';
import Modify from './component/Modify';
import Profile from './component/Object';
import { UserAge, UserName } from './component/UserCom';
import UserProfile from './component/UserProfile';
import Location from './component/Location';
import Unordered from './component/Unordered';
import WebLink from './component/WebLink';
import Blog from './component/Blog';
import Footer from './component/Footer';
import Date from './component/DateT';
import DateT from './component/DateT';
import Mathres from './component/MathRes';
import Product from './component/Product';
import Movie from './component/Movie';
import Button from './component/Button';
import Calculator from './component/Calculator';
import BidPage from './component/ReactProject/BidPage';
import AppTwo from './component/ReactProject/AppTwo';
import LoginBid from './component/ReactProject/LoginBid';
import SignUp from './component/ReactProject/SignUp';
import Upload from './component/ReactProject/Upload';
import { Routes,Route } from 'react-router-dom';
import BidPage1 from './component/ReactProject/BidPage2';
import VehPage from './component/ReactProject/VehPage';
import BidList from './component/ReactProject/BidList';
import BidPage2 from './component/ReactProject/BidPage2';
function App() {
  return (
    <div className="App">
         <Routes>
          <Route path="/" element={<LoginBid/>}/>
          <Route path="/login" element={<LoginBid/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/BidPage1" element={<BidPage1/>}/>
          <Route path="/VehPage" element={<VehPage/>}/>
          <Route path="/BidList" element={<BidList/>}/>
          <Route path="/BidPage2" element={<BidPage2/>}/>

         </Routes>
     {/* <Greet/>
     <Modify/>
     <Img/>
     <Profile/>
     <UserName/>
     <UserAge/>
     <UserProfile/>
     
     <App1/> */
     }
    
     {/* <Click/> */}
    {/* <Location/> */}
    {/* <Unordered/>
    <WebLink/>
    <Blog/>
    <Footer/>
   <DateT/>
   <Mathres/>
   <Product/>
   <Movie/>
   <Button/> */}
   {/* <Calculator/> */}
   {/* <Auction/> */}

{/* 
   <Calculator/> */}
   {/* <BidPage/> */}
   {/* <AppTwo/> */}
 {/* <LoginBid/> */}
 {/* <Upload/> */}
   {/* <SignUp/> */}
    </div>
  );
}

export default App;
