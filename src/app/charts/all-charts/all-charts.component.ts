import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart,registerables } from 'chart.js';
import { Charts } from './charts.model';
import { data } from 'cypress/types/jquery';
Chart.register(...registerables);

@Component({
  selector: 'app-all-charts',
  standalone: true,
  imports: [],
  templateUrl: './all-charts.component.html',
  styleUrl: './all-charts.component.scss'
})
export class AllChartsComponent implements OnInit {
  @ViewChild('myChart') myChart!: ElementRef<HTMLCanvasElement>;
chart:any;
  constructor() { }

  salesData:Charts[] = [
    { year: '2016', sales: 100, colorcode: '#FF6384'    },
    { year: '2017', sales: 150, colorcode: '#36A2EB'    },
    { year: '2018', sales: 200, colorcode: '#FFCE56'    },
    { year: '2019', sales: 250, colorcode: '#4BC0C0'    },
    { year: '2020', sales: 300, colorcode: '#9966FF'    }
  ];

  labeldata:string[] = [];
  realdata:number[] = [];
  colorcode:string[] = [];

  ngOnInit(): void {
    this.salesData.forEach(item => {
      this.labeldata.push(item.year);
      this.realdata.push(item.sales);
      this.colorcode.push(item.colorcode);
    });
  } 

  createChart(chartType:string) {
    let canvasId = this.myChart.nativeElement;
    this.chartPreparation(chartType, canvasId);
  }

  chartPreparation(chartType:any, canvasId:HTMLCanvasElement) {
    if(this.chart){
      this.chart.destroy();
    }
    this.chart = new Chart(canvasId, {
      type: chartType,
      data: { 
        labels: this.labeldata,
        datasets: [{
          label: 'Sales Data',
          data: this.realdata,
          backgroundColor: this.colorcode
        }]
  }
    });
}

}
