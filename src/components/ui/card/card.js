import "./card.css";
import { NavLink } from "react-router";
const Card = (props) => {
    return (
            <div className="card">
                <div className="DivUpperBorder">
                    {props.name}
                </div>
                <div className="card-container">
                <div class="row">
                        {props.isNavLink ?
                                <h4>
                                    <NavLink className="linkCss" title={props.linkTitle} to={props.to}>{props.linkName}</NavLink> 
                                </h4>
                                :
                                <h4> 
                                    <a href={props.link} className="linkCss" title={props.linkTitle} rel="noreferrer" target="_blank"> {props.linkName}</a> 
                                </h4>
                            }
                            </div>
                    <div class="row">
                        <p className="data" dangerouslySetInnerHTML={{__html: props.data}} ></p>
                    </div>
                
                </div>
            </div>
    );
};

export default Card;
