// payment.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  [x: string]: any;
  //   }
  // );
  paymentForm!: FormGroup;
  showPaymentSuccessMessage: boolean = false;
  payment: any; // Define a property to hold payment data

  constructor(private formBuilder: FormBuilder) {
    this.paymentForm = this.formBuilder.group({
      fullName: '',
      email: '',
      address: '',
      city: '',
      zip: '',
      cardName: '',
      cardNumber: 0,
      expDate: '',
      cvv: 0,
      sameAddress: '',
    });
  }
  // Function to simulate payment success
  simulatePaymentSuccess(): void {
    // Logic to simulate payment success, then set showPaymentSuccessMessage to true
    this.showPaymentSuccessMessage = true;
  }
  processPayment() {
    // Logic to process payment goes here
    // After successful payment processing, set showPaymentSuccessMessage to true
    this.showPaymentSuccessMessage = true;
  }

  ngOnInit(): void {
    this.loadPaymentDetails(); // Load payment details when component initializes
  }

  loadPaymentDetails() {
    // Call your payment service to fetch payment details
    // this.paymentService.getPayment().subscribe(
    //   (data: any) => {
    //     this.payment = data; // Assign payment data to the property
    //   },
    //   (error: any) => {
    //     console.error('Error loading payment details:', error);
    //   }
    // );
  }
}
