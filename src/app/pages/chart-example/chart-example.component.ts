import { Component } from '@angular/core';
import { ChartComponent } from '../../components/chart/chart.component';

@Component({
  selector: 'app-chart-example',
  imports: [ChartComponent],
  templateUrl: './chart-example.component.html',
  styleUrl: './chart-example.component.css'
})
export class ChartExampleComponent {
  chartDataParams =
    {
      label: "Speakers",
      values: [1500000000, 1100000000, 600000000, 560000000, 420000000, 260000000, 258000000, 250000000, 130000000, 130000000],
      items: ["English", "Mandarin", "Hindi", "Spanish", "Arabic", "Portuguese", "Russian", "Bengali", "Punjabi", "Japanese"]
    };
}
