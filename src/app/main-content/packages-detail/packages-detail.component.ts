import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-packages-detail',
  templateUrl: './packages-detail.component.html',
  styleUrls: ['./packages-detail.component.css'],
})
export class PackagesDetailComponent {
  selectedClass: string = ''; // Variable to store the selected class type

  // Arrays to store different types of packages
  packages: any[] = [
    {
      name: 'Single Class Pass',
      price: '$60',
      description:
        'Purchase a single class pass for a one-time access to a Zumba class.',
      image: 'assets/images/SingleClassPass.jpg',
      category: 'Zumba', // Add category property
    },
    {
      name: 'Class Bundles',
      price: '$54',
      description:
        'Get a bundle of Zumba classes at a discounted rate. Choose from 5, 10, or 20 class bundles.',
      image: 'assets/images/ClassBundles.jpg',
      category: 'Zumba', // Add category property
    },
    {
      name: 'Family or Group Packages',
      price: '$56',
      description:
        'Enjoy Zumba classes with your family or friends with our customized packages. Contact us for pricing and details.',
      image: 'assets/images/FamilyorGroupPackages.jpg',
      special: true,
      category: 'Zumba', // Add category property
    },
  ];

  packages1: any[] = [
    {
      name: 'Chest Blast',
      price: '$60',
      description:
        'Purchase a single class pass for a one-time access to a Zumba class.',
      image: 'assets/images/sports-man-morning-gym.jpg',
      category: 'Muscle Building',
    },
    {
      name: 'Shoulder Strength',
      price: '$54',
      description:
        'Get a bundle of Zumba classes at a discounted rate. Choose from 5, 10, or 20 class bundles.',
      image: 'assets/images/full-shot-people-training-together.jpg',
      category: 'Muscle Building',
    },
    {
      name: 'Back Definition',
      price: '$78',
      description:
        'Drop in for a single Zumba class whenever you like with this flexible pass.',
      image: 'assets/images/female-trainer-looking-woman-working-out-gym.jpg',
      category: 'Muscle Building',
    },
  ];

  packages2: any[] = [
    {
      name: 'Power Yoga',
      price: '$60',
      description:
        'Purchase a single class pass for a one-time access to a yoga class.',
      image: 'assets/images/poweryoga.jpg',
      category: 'Yoga',
    },
    {
      name: 'Vinyasa Flow Yoga',
      price: '$54',
      description:
        'Get a bundle of yoga classes at a discounted rate. Choose from 5, 10, or 20 class bundles.',
      image: 'assets/images/VinyasaFlowYoga.jpg',
      category: 'Yoga',
    },
    {
      name: 'single Yoga',
      price: '$78',
      description:
        'Drop in for a single yoga class whenever you like with this flexible pass.',
      image: 'assets/images/singleypga.jpg',
      category: 'Yoga',
    },
  ];

  cardioPackages: any[] = [
    {
      name: 'Cardio Dance',
      price: '$60',
      description:
        'Enjoy a fun and energetic dance workout that gets your heart rate up and burns calories.',
      image: 'assets/images/cardioDance.jpg',
      category: 'Cardio',
    },
    {
      name: 'Indoor Cycling',
      price: '$54',
      description:
        'Experience an intense cycling workout on stationary bikes, perfect for improving cardiovascular fitness.',
      image: 'assets/images/IndoorCycling.jpg',
      category: 'Cardio',
    },
    {
      name: 'Jump Rope',
      price: '$78',
      description:
        'Burn calories and improve coordination with a high-intensity jump rope workout.',
      image: 'assets/images/JumpRope.jpg',
      category: 'Cardio',
    },
  ];

  joinZumba(): void {
    this.selectedClass = 'Zumba';
  }

  joinMuscleBuilding(): void {
    this.selectedClass = 'Muscle Building';
  }

  joinYoga(): void {
    this.selectedClass = 'Yoga';
  }

  joinCardio(): void {
    this.selectedClass = 'Cardio';
  }

  // Helper method to determine the class based on the selected package
  getClassByPackage(pkg: any): string {
    return pkg.category;
  }

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Get the category from the route params
    this.route.params.subscribe((params) => {
      // Extract the category from the route params
      const category = params['category'];
      if (category) {
        this.selectedClass = category;
      }
    });
  }
  joinClass(category: string): void {
    this.selectedClass = category;
  }
  selectPackage(_package: any): void {
    console.log('Selected Package:', _package);
    if (_package.category) {
      this.selectedClass = _package.category;
    }
  }
}
