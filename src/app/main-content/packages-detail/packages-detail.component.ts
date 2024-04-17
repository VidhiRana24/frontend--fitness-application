import { Component } from '@angular/core';

@Component({
  selector: 'app-packages-detail',
  templateUrl: './packages-detail.component.html',
  styleUrls: ['./packages-detail.component.css'],
})
export class PackagesDetailComponent {
  showClass(arg0: string) {
    throw new Error('Method not implemented.');
  }
  packages: any[] = [
    {
      name: 'Single Class Pass',
      price: '$60',
      description:
        'Purchase a single class pass for a one-time access to a Zumba class.',
      image: 'assets/images/SingleClassPass.jpg',
    },
    {
      name: 'Class Bundles',
      price: '$54',
      description:
        'Get a bundle of Zumba classes at a discounted rate. Choose from 5, 10, or 20 class bundles.',
      image: 'assets/images/ClassBundles.jpg',
    },
    {
      name: 'Drop-in Pass',
      price: '$78',
      description:
        'Drop in for a single Zumba class whenever you like with this flexible pass.',
      image: 'assets/images/Drop-inPass.jpg',
    },
    {
      name: 'Family or Group Packages',
      price: '$56',
      description:
        'Enjoy Zumba classes with your family or friends with our customized packages. Contact us for pricing and details.',
      image: 'assets/images/FamilyorGroupPackages.jpg',
      special: true, // Assuming this is a special package
    },
  ];
  selectedClass: any;

  selectPackage(selectedPackage: any): void {
    console.log('Selected Package:', selectedPackage);
    // Perform any actions here, such as adding it to a cart or navigating to another page
  }
  packages1 = [
    {
      name: 'Muscle Building',
      image: 'muscle-building.jpg',
      price: '$99',
      description: 'This package helps you build muscle mass effectively.',
      special: true,
    },
    // Add more packages here
  ];

  constructor() {}
}
