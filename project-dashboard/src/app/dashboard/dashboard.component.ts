import { Component } from '@angular/core';
import { PendingOrdersComponent } from "./table/pending-orders/pending-orders.component";
import { LatestReviewsComponent } from "./table/latest-reviews/latest-reviews.component";

@Component({
  selector: 'app-dashboard',
  imports: [PendingOrdersComponent, LatestReviewsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
