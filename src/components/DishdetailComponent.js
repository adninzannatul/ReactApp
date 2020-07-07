import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, CardText, CardBody } from 'reactstrap';

class Dishdetail extends Component {
    constructor(props){
        super(props);
        this.state={
          
        }
    }
        
    render(){
        const detail=this.props.dishdetail;
        const com=this.props.dishdetail.comments.map((comment)=> {
            return(
                <div key={comment.id}> 
                 <p>
                   <br/><span>{comment.comment}</span>
                   <br/><span>--{comment.author}, {(new Date(comment.date)).toLocaleDateString()}</span>
                </p>
                </div>
            );
        });
    return(
     <div className="container">
       <div className="row">
          <div className="col-12 col-md-5 m-1">
                <Card key={detail.id}>
                    <CardImg  width="100%" src={detail.image} alt={detail.name} />
                    <CardBody>
                      <CardTitle>{detail.name}</CardTitle>
                      <CardText>{detail.description}</CardText>
                    </CardBody>
                </Card>
          </div>
        
          <div className="col-12 col-md-5 m-1">
              <h3>Comments</h3>
               {com}
          </div> 
        
      </div>
    </div>
                   
            );
    }
}
export default Dishdetail;