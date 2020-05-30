import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from "reactstrap";

class CampsiteInfo extends Component {
    constructor(props) {
        super(props);
    }

    renderComments(comments) {
        if (comments) {
            return (
                <div className="col-md-5 m-1">
                    <h4>Comments</h4>
                    {comments.map((com) => {
                        return (
                            <div key={comments.id}>
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

    renderCampsite(campsite) {
        if (campsite) {
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
        return <div />;
    }

    render() {
        const campsite = this.props.campsite;
        if (campsite) {
            return (
                <div className="row">
                    {this.renderCampsite(campsite)}
                    {this.renderComments(this.props.campsite.comments)}
                </div>
            );
        }
        return <div />;
    }
}

export default CampsiteInfo;
