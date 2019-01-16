import React, { Component } from "react";
import { Bar, Line, Doughnut } from "react-chartjs-2";
import { Link } from 'react-router-dom';


export default class Chart extends Component {
  render() {
    return (
      <div>
        <h2>Bar Example (custom size)</h2>
        {/* Navigate to upload Media */}
        <Link className='link-page' to={`/uploadImages`}>
          <span className="value">+ Upload Media</span>
        </Link>
        {/* Showing Bar graph with static data using react chart js 2 */}
        <Bar
          data={{
            labels: [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July"
            ],
            datasets: [
              {
                label: "My First dataset",
                backgroundColor: "rgba(255,99,132,0.2)",
                borderColor: "rgba(255,99,132,1)",
                borderWidth: 1,
                hoverBackgroundColor: "rgba(255,99,132,0.4)",
                hoverBorderColor: "rgba(255,99,132,1)",
                data: [65, 59, 80, 81, 56, 55, 40]
              }
            ]
          }}
          width={100}
          height={50}
          options={{
            maintainAspectRatio: false
          }}
        />
       {/* Showing Radar graph with static data using react chart js 2 */}
        <Doughnut
          data={{
            labels: [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July"
            ],
            datasets: [
              {
                label: "My First dataset",
                backgroundColor: "rgba(255,99,132,0.2)",
                borderColor: "rgba(255,99,132,1)",
                borderWidth: 1,
                hoverBackgroundColor: "rgba(255,99,132,0.4)",
                hoverBorderColor: "rgba(255,99,132,1)",
                data: [65, 59, 80, 81, 56, 55, 40]
              }
            ]
          }}
          width={100}
          height={50}
          options={{
            maintainAspectRatio: false
          }}
        />
        {/* Showing Line graph with static data using react chart js 2 */}
        <Line
          data={{
            labels: [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July"
            ],
            datasets: [
              {
                label: "My First dataset",
                backgroundColor: "rgba(255,99,132,0.2)",
                borderColor: "rgba(255,99,132,1)",
                borderWidth: 1,
                hoverBackgroundColor: "rgba(255,99,132,0.4)",
                hoverBorderColor: "rgba(255,99,132,1)",
                data: [65, 59, 80, 81, 56, 55, 40]
              }
            ]
          }}
          width={100}
          height={50}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
    );
  }
}

