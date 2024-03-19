import { Component, OnInit } from '@angular/core';
import { AddmemberService } from '../servers/addmember.service';
import { AddMember } from '../data-type';

@Component({
  selector: 'app-server-add',
  templateUrl: './server-add.component.html',
  styleUrls: ['./server-add.component.css'],
})
export class ServerAddComponent implements OnInit {
  addMemberMessage: string | undefined;

  constructor(private addmember: AddmemberService) {}

  ngOnInit(): void {}

  addMember(data: AddMember) {
    // console.warn(data);
    this.addmember.addMember(data).subscribe((result) => {
      // console.warn(result);
      if (result) {
        this.addMemberMessage = 'Member added successfully';
      }
      setTimeout(() => (this.addMemberMessage = undefined), 3000);
    });
  }
}
