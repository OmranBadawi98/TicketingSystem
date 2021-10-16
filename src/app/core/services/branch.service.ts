import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { BranchModel } from 'src/app/core/model/branch.model';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class BranchService {
  private apiUrl = 'http://localhost:5000/branchData';

  constructor(private http: HttpClient) {}

  getData(): Observable<BranchModel[]> {
    // console.log('Inside Get Data');
    return this.http.get<BranchModel[]>(this.apiUrl);
  }

  deleteItem(item: BranchModel): Observable<BranchModel> {
    const url = `${this.apiUrl}/${item.id}`;
    // console.log('Inside Delete Item Service');
    return this.http.delete<BranchModel>(url);
  }

  addItem(item: BranchModel): Observable<BranchModel> {
    return this.http.post<BranchModel>(this.apiUrl, item);
  }
}
