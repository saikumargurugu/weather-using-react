import axios from 'axios'
import React, { Component } from 'react'
import Table from '../../compoents/table/table';
import './weather_styles.css';
import loader from '../../assets/loader.gif'
export default class Weather extends Component {
    constructor() {
        super();
        this.state = {
            weather: {},
            search: undefined,
            loading: false,
            error: false
        };
    }
    handelchangeValue = (e) => {
        if (e.target.value === '') {
        this.setState({
            weather:{}
        })
        }
        this.setState({
            search:e.target.value
        })
        
    }

    handelSearch = async () => {
        this.setState({
            loading:true
        })
        const { search } = this.state;
        if (search!=='' || search!==undefined){
            await axios.get("http://api.openweathermap.org/data/2.5/forecast?q=" + search + "&appid=1635890035cbba097fd5c26c8ea672a1&cnt=5")
                .then(async(response) => {
            await this.setState({
                ...this.state,
                loading: false,
                weather: response.data.list,
            error: true
                
            })
          }, (error) => {
            this.setState({
                loading: false,
                weather:{},
                error: true
            })
        });
        }
    }
    render() {
        const { weather, search, loading,error } = this.state;
        return (
            <div>
                <div className="header">
                    <h1>
                        Weather in your city: 
                    </h1>
                    <input className="input" onChange={(e)=>this.handelchangeValue(e)}>
                    </input>
                    {search&&search!==''&&<button className="submit" onClick={()=>this.handelSearch()}>
                        search
                    </button>}
                    {loading&&<div>
                    <img src={loader} alt="loading..." height='20px' width='20px' />
                    </div>}
                </div>
                {(search && Object.keys(weather).length > 0) ?
                <div className='talbles'>
                {weather.map(w=> <Table weather={w}/>)}
                  </div>  :
                    (search && !Object.keys(weather).length&& error) ?
                        <><p>Data Not Found, Make sure you entered corrent <b>District </b> </p></>
                        :''
                }
            </div>
        )
    }
}
