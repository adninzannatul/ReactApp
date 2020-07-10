import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardImgOverlay, CardTitle, CardText, CardBody, Breadcrumb, BreadcrumbItem } from 'reactstrap';

    
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
    
    function RenderComments({comments}){
        const com=comments.map((comment)=> {
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
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                  <div className="row">
                     <RenderDish dish={props.dish}/>
                     <RenderComments comments={props.comments}/>
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