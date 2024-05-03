import { Component, OnInit } from '@angular/core';
// import { GymService } from '../../services/gym.service';
// import { Member } from '../../models/member.model';

@Component({
  selector: 'app-trainer-management',
  templateUrl: './trainer-management.component.html',
  styleUrls: ['./trainer-management.component.css'],
})
export class TrainerManagementComponent implements OnInit {
  members: any;
  selectMember(_t13: any) {
    throw new Error('Method not implemented.');
  }
  selectedMember: any;
  // members: Member[] = [];
  // selectedMember: Member | null = null;

  constructor() {}

  ngOnInit(): void {
    // Fetch members from the gym service when component initializes
    this.fetchMembers();
  }

  fetchMembers() {
    // // Call a service method to get the list of gym members
    // this.gymService.getMembers()
    //   .subscribe((members: Member[]) => {
    //     this.members = members;
    //   });
  }

  // selectMember(member: Member) {
  //   this.selectedMember = member;
  // }

  assignPackage(packageId: string) {
    // if (this.selectedMember) {
    //   // Call a service method to assign the selected package to the member
    //   this.gymService.assignPackage(this.selectedMember.id, packageId)
    //     .subscribe(() => {
    //       // If successful, update the member's package locally
    //       this.selectedMember!.packageId = packageId;
    //     });
    // }
  }

  // Other methods for managing members such as editing details, tracking progress, etc.
}
