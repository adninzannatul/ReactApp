import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, CardText, CardBody } from 'reactstrap';

    
    function RenderDish({dish}){
       
        return(
            <div className="col-12 col-md-5 m-1">
                <Card key={dish.id}>
                  <CardImg  width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
          </div>
        );
    }
    
    function RenderComments({dish}){
        const com=dish.comments.map((comment)=> {
            return(
                <div key={comment.id}> 
                 <p>
                   <br/><span>{comment.comment}</span>
                   <br/><span>--{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</span>
                </p>
                </div>
            );
        });
           return(
            <div className="col-12 col-md-5 m-1">
              <h3>Comments</h3>
               {com}
            </div> 
           );
    }
   
    const Dishdetail= (props) => {
        if(props.dish!=null){
            return(
                <div className="container">
                  <div className="row">
                     <RenderDish dish={props.dish}/>
                     <RenderComments dish={props.dish}/>
                  </div>
               </div> 
            );
        }
        else
            return(
                <div></div>
        );
    
    }
export default Dishdetail;