import { Component, OnInit } from '@angular/core';
import { AddMember } from '../data-type';
import { AddmemberService } from '../servers/addmember.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  memberList: AddMember[] | undefined;

  constructor(private members: AddmemberService) { }

  ngOnInit(): void {
    this.members.memberList().subscribe((result) => {
      // console.warn(result);
      if (result) {
        this.memberList = result;
      }
    });
  }

}
