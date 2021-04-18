import React, { Component } from 'react'
import './table.css'
export default class Table extends Component {
    getdate = (dt) => {
        const d = new Date(dt)
        return d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear()
    }
    render() {
        const { weather } = this.props;
        return (
            <div className="mdiv">
                <table cellPadding='10' cellSpacing='10' className='table'>
                    <tr>
                    <td colspan="2" style={{backgroundColor:'green'}}>
                        Date: {this.getdate(weather.dt)}
                    </td>
                    </tr>
                    <tr>
                    <td colspan="2" >
                        Tempeature
                    </td>
                    </tr>
                    <tr>
                        <td>
                            Min
                    </td>
                        <td>
                            Max
                    </td>
                    </tr>
                    <tr>
                        <td>
                        {weather?.main?.temp_min}
                    </td>
                        <td>
                        {weather?.main?.temp_max}
                    </td>
                    </tr>
                    <tr>
                        <td>
                            Preasure:
                    </td>
                        <td>
                            {weather?.main?.pressure}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Humidity:
                    </td>
                        <td>
                            {weather?.main?.humidity}
                        </td>
                    </tr>

                </table>
            </div>
        )
    }
}
