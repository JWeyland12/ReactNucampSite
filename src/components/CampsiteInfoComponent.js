import React from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from "reactstrap";

    
function RenderComments({comments}) {
    if (comments) {
        return (
            <div className="col-md-5 m-1">
                <h4>Comments</h4>
                {comments.map((com) => {
                    return (
                        <div key={com.id}>
                            <div>{com.text}</div>
                            <div>
                                --{com.author}, {new Intl.DateTimeFormat("en-US", { year: "numeric", month: "short", day: "2-digit" }).format(new Date(Date.parse(com.date)))}
                            </div>
                            <br />
                        </div>
                    );
                })}
            </div>
        );
    }
    return <div />;
}

function RenderCampsite({campsite}) {
            return (
                <div className="col-md-5 m-1">
                    <Card>
                        <CardImg top src={campsite.image} alt={campsite.name} />
                        <CardBody>
                            <CardTitle>{campsite.name}</CardTitle>
                            <CardText>{campsite.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
    }

    function CampsiteInfo(props) {
        const campsite = props.campsite;
        if (campsite) {
            return (
                <div className="container">
                    <div className="row">
                        <RenderCampsite campsite={props.campsite}/>
                        <RenderComments comments={props.campsite.comments}/>
                    </div>
                </div>
            );
        }
        return <div />;
    }


export default CampsiteInfo;
