import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TreeNode } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class NodeService {

  constructor(private http: HttpClient) { }
  getFiles() {
    return this.http.get<any>('assets/files.json')
      .toPromise()
      .then((res:any)=> <TreeNode[]>res.data);
    }
}
