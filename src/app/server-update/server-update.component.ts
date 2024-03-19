import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddmemberService } from '../servers/addmember.service';
import { AddMember } from '../data-type';

@Component({
  selector: 'app-server-update',
  templateUrl: './server-update.component.html',
  styleUrls: ['./server-update.component.css'],
})
export class ServerUpdateComponent implements OnInit {
  memberData: undefined | AddMember;

  updateMessage: undefined | string;

  constructor(
    private route: ActivatedRoute,
    private member: AddmemberService
  ) {}

  ngOnInit(): void {
    let memberId = this.route.snapshot.paramMap.get('id');
    // console.warn(memberId);
    memberId &&
      this.member.getMember(memberId).subscribe((result) => {
        // console.warn(result);
        this.memberData = result;
      });
  }

  updateMember(data: AddMember) {
    // console.warn(data);
    if (this.memberData) {
      data.id = this.memberData.id;
    }
    this.member.updateMember(data).subscribe((result) => {
      // console.warn(result);
      if (result) {
        this.updateMessage = 'Member Details Updated!';
      }
    });
    setTimeout(() => {
      this.updateMessage = undefined;
    }, 3000);
  }
}
