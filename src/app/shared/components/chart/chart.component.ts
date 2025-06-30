import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ChartOptions, RadialChartOptions } from '../../../core/models/chart.model';


@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [CommonModule, NgApexchartsModule],
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent {
           
     public barChartOption: Partial<ChartOptions>;
     public radialChartOptions: Partial<RadialChartOptions>;

    constructor() {
      //init bar charts
      this.barChartOption = {
        series: [
          {
            name: "My-series",
            data: [40, 25, 65, 30, 50, 70, 65, 55, 45,40,60,24]
          }
        ],
        chart: {
          height: 300,
          type: "bar"
        },
        xaxis: {
          categories: ["Jan", "Feb",  "Mar",  "Apr",  "May",  "Jun",  "Jul",  "Aug", "Sep","Octo","Nov","Dec"]
        }
      };

      // init radial charts
      this.radialChartOptions = {
            series: [80],
            chart: {
              type: "radialBar",
              offsetY: -20,
              height:400
            },
            plotOptions: {
              radialBar: {
                startAngle: -90,
                endAngle: 90,
                track: {
                  background: "#e7e7e7",
                  strokeWidth: "90%",
                  margin: 5, // margin is in pixels
                  dropShadow: {
                    enabled: true,
                    top: 2,
                    left: 0,
                    opacity: 0.31,
                    blur: 2
                  }
                },
                dataLabels: {
                  name: {
                    show: false
                  },
                  value: {
                    offsetY: -2,
                    fontSize: "22px",
                    formatter: function () {
                         return "240%";  // ✅ show 240, not 85
                     }
                  }
                }
              }
            },
            fill: {
              type: "gradient",
              gradient: {
                shade: "light",
                shadeIntensity: 0.4,
                inverseColors: false,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 50, 53, 91]
              }
            },
            labels: ["Average Results"]
      };
  }

}
