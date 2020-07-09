import React from 'react';
import { Card, CardImg, CardImgOverlay,CardBody, CardTitle } from 'reactstrap';

function AboutUs({dish}){
    
    return(    
               <div>
                  <Card key={dish.id}>
                   <CardImg width="100%" src={dish.image} alt={dish.name}/>
                   <CardBody>
                     {dish.name}
                   </CardBody>
                  </Card>            
              </div>
       );
   
}

const About= (props) => {
    const aboutDish=props.dishes.map(dish => {
        return(
        
         <div className="col-12 col-md-2 m-1">
           <AboutUs dish={dish}/>
         </div>
       
            );
    })
    
    return(
        <div className="container">
         <div className="row">
             {aboutDish}
         </div>
        </div>
    );
} 

export default About;