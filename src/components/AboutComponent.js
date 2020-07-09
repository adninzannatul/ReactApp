import React from 'react';
import { Card, CardImg, CardImgOverlay,CardBody, CardTitle } from 'reactstrap';

function About({dish}){
    
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

const AboutUs= (props) => {
    const aboutDish=props.dishes.map(dish => {
        return(
        
         <div className="col-12 col-md-2 m-1">
           <About dish={dish}/>
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

export default AboutUs;