import { CardActionArea, CardContent, CardMedia, Grid, Typography } from "@material-ui/core";
import axios from "axios";
// import { Button } from "bootstrap";
import { useState,useEffect } from "react";
import { Button, Card, CardGroup } from "react-bootstrap";
import "./Topic.css";



export function Topic(){
    const [apiData, setApiData] = useState([]);
 const getData = async () => {
 let resp = await axios.get(
    "https://dev-api.insightmonk.com/v1/topics/landing?page=1&limit=10"
 );
   setApiData(resp?.data?.results);

 }
 useEffect(() => {
    getData();
 }, []);
 return(
    <div >
        <div d-flex align-item-center justify-content-center flex-column p-2 >
     <Typography className=" justify-content-between fs-2"><b>Topic</b></Typography>
     </div>
    {apiData?.map((list) =>{
        return(
            
        <Card  className="MainCard  d-flex align-item-center justify-content-between" style={{width:"600px"}}>
            <CardActionArea> 
            {/* <p className="src">
                    <img src={list?.src}/>
                    </p> */}
            <CardContent>
                <p className="src" >
                    <img src={list?.src} style={{height:"180px" , width:"500px"}}/>
                    </p>
                <p className="title">{list?.title}</p>
              <span className="body ">{list?.body}</span>
            </CardContent>
            </CardActionArea>
            
            <CardActionArea>
                
                <div className="d-flex align-item-center justify-content-between">
                <div >
                <p className="fw-bold fs-4">{list?.postCount}</p>
                <p className="fw-bold">Question</p>
                </div>
                <div>
                <p className="fw-bold fs-4"> {list?.expertCount}</p>
                <p className="fw-bold">Expert</p>
                </div>
                <div>
                <p className="fw-bold fs-4" >{list?.keyDataCount}</p>
                <p className="fw-bold">Key Player Data </p>
                </div>
                <div>
              
                </div>
                </div>
            </CardActionArea>
            
            
        </Card>
        
        );
        
    })}
</div>
 )
    
}

export default Topic;