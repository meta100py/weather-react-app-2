import React from "react";
import "./Weather.css";
export default function Weather(){
    return (
        <div className="Weather">
            <form>
                   <div className="row"> 
                        <div className="col-9">
                            <input type="search" placeholder="Enter a city..." className="form-control"/>
                       </div>
                       <div className="col-3">
                            <input type="submit" value="Search" className="btn btn-primary"/>
                       </div>
                  </div>
            </form>
            <h1>New York</h1>
            <ul>
                <li>Wednesday 07:00</li>
                <li>Mostly Cloudy</li>
            </ul>
            <div className="row">
                <div className="col-6">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAVVJREFUaN7tmckNgzAQRV1CSqAEl+ASKIFjjpTgEiiBElICJeTKjXRAB5MZyUgOyoKNx8hkLL1LNv6D8RoFAKpklAiIgAiIgAiIwMsLGxs8rjXSI3cE3nB379cqYdstgIEsMn8I/Qn6vD1UAAMYZAoMvoa+r7ML4EWbncHXNNkEGMLvkggSYAy/ULMJ4I9XEZ0VIjp3xSVwYw6/cEsu4EYcyIhOLdBnFuhTC3DXPs3SgzeLD3TdcRw1Yj10sABz+VBgsxrpLgSG7RB4Qxcq0DKGp6AtMnsBB3e34QttiIBlEjAuPEQwhQh0HHff1fgcKQBHCtCA0GCIKja8/yToKeYsoaXuzYY6D6HL1YlpWGwSBvfR3MPo7rr/geWeyHonYJkw3EsJqxjafyzmil9On2JDU/yW8hSb+lMcq5ziYCvB0eJ0+NFiMYe78v+ACIiACIiACJTEEyDCTi8sMWUSAAAAAElFTkSuQmCC" alt="Mostly Cloudy"/>
                    6°C
                </div>
                <div className="col-6">
                    <ul>
                        <li>Precipitation: 15%</li>
                        <li>Humidity: 72%</li>
                         <li>Wind: 13km/h</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}