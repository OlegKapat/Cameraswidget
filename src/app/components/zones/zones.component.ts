import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';

import { Subject } from 'rxjs';
import { IZone } from 'src/app/models/Izoneinterface';
import { ResizeEvent } from 'src/app/shared/library/resize-event';

@Component({
  selector: 'app-zones',
  templateUrl: './zones.component.html',
  styleUrls: ['./zones.component.scss']
})
export class ZonesComponent implements OnInit {
  @Input('onDragDrop') public onDragDrop$!: Subject<CdkDragDrop<Array<IZone>>>;
  @Input() nodes!: any[];
  @Input() invert!: boolean;

  selectedNodes: any;

  ngOnInit(): void {
    
  }
  
}
