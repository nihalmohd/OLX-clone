import React,{useEffect,useContext,useState, ReactNode} from 'react';
import Heart from '../../assets/Heart';
import './Post.css';
import { firebaseContext } from '../../store/firebaseContext';
import { collection, getDocs } from "firebase/firestore";
import { postContext } from '../../store/Postcontext';
import { useNavigate } from 'react-router-dom';



const Posts: React.FC = () => {
  const {db }=useContext(firebaseContext)
  const {post,setPost}=useContext(postContext)
  const navigate=useNavigate()
  const [products,setProducts]=useState<any>()
  useEffect(()=>{
       getDocs(collection(db,"products")).then((data)=>{
        const allPosts=data.docs.map((product)=>{
           return{
            ...product.data(),id:product.id
           }
        })
       setProducts(allPosts)
       })
  },[])
  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>

        <div className="cards">
          {

            products?.map((item: {
              createdAt: ReactNode;
              date: ReactNode;
              name: ReactNode;
              category: ReactNode;
              price: ReactNode; url: string | undefined; 
})=>{
              return(
          <div className="card"
          onClick={()=>{
            setPost(item)
                navigate("/view")
          }}
          >
            <div className="favorite">
              <Heart />
            </div>
            <div className="image">
              <img src={item.url} alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; {item.price}</p>
              <span className="kilometer"> {item.category}</span>
              <p className="name"> {item.name}</p>
            </div>
            <div className="date">
              <span>{item.createdAt}</span>
            </div>
          </div>
              )
            })
          }
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart />
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
