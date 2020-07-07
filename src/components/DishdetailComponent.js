import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, CardText, CardBody } from 'reactstrap';

class Dishdetail extends Component {
    constructor(props){
        super(props);
        this.state={
          
        }
    }
    
    renderDish(dish){
       const detail=dish;
        return(
            <div className="col-12 col-md-5 m-1">
                <Card key={detail.id}>
                  <CardImg  width="100%" src={detail.image} alt={detail.name} />
                    <CardBody>
                      <CardTitle>{detail.name}</CardTitle>
                      <CardText>{detail.description}</CardText>
                    </CardBody>
                </Card>
          </div>
        );
    }
    
    renderComments(dish){
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
   
    render(){
        if(this.props.dish!=null){
            const dishrender=this.renderDish(this.props.dish);
            const commnetrender=this.renderComments(this.props.dish);
            return(
                <div className="container">
                  <div className="row">
                     {dishrender}
                     {commnetrender}
                  </div>
               </div> 
            );
        }
        else
            return(
                <div></div>
        );
    
    }
}
export default Dishdetail;