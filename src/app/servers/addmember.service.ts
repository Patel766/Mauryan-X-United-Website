import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddMember } from '../data-type';

@Injectable({
  providedIn: 'root',
})
export class AddmemberService {
  constructor(private http: HttpClient) {}

  addMember(data: AddMember) {
    // console.warn("service called");
    return this.http.post('http://localhost:3000/member', data);
  }

  memberList() {
    return this.http.get<AddMember[]>('http://localhost:3000/member');
  }

  deleteMember(id: string) {
    return this.http.delete(`http://localhost:3000/member/${id}`);
  }

  getMember(id: string) {
    return this.http.get<AddMember>(`http://localhost:3000/member/${id}`);
  }

  updateMember(member: AddMember) {
    // console.warn(member);
    return this.http.put<AddMember>(
      `http://localhost:3000/member/${member.id}`,
      member
    );
  }
}
