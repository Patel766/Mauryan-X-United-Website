import { Component, OnInit } from '@angular/core';
import { AddmemberService } from '../servers/addmember.service';
import { AddMember } from '../data-type';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-server-home',
  templateUrl: './server-home.component.html',
  styleUrls: ['./server-home.component.css'],
})
export class ServerHomeComponent implements OnInit {
  memberList: AddMember[] | undefined;

  deleteMessage: string | undefined;

  deleteIcon = faTrash;
  editIcon = faEdit;

  constructor(private members: AddmemberService) {}

  ngOnInit(): void {
    // this.members.memberList().subscribe((result)=>{
    //   // console.warn(result);
    //   if(result) {
    //     this.memberList = result;
    //   }
    // });
    this.newMemberList();
  }

  deleteMember(id: string) {
    // console.warn(id);
    this.members.deleteMember(id).subscribe((result) => {
      if (result) {
        this.deleteMessage = 'Member Removed!';
        this.newMemberList();
      }
    });
    setTimeout(() => {
      this.deleteMessage = undefined;
    }, 3000);
  }

  newMemberList() {
    this.members.memberList().subscribe((result) => {
      // console.warn(result);
      if (result) {
        this.memberList = result;
      }
    });
  }
}
