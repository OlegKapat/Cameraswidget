import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { IZone } from 'src/app/models/Izoneinterface';


@Component({
  selector: 'app-zoneswithcams',
  templateUrl: './zoneswithcams.component.html',
  styleUrls: ['./zoneswithcams.component.scss'],
 
})
export class ZoneswithcamsComponent implements OnInit{
 @Input('zones') zones:IZone[]=[]
 @Input('expanded') expanded!:boolean;
 
constructor(private changes:ChangeDetectorRef) {}
 ngOnInit(): void {}
 
 ngDoCheck() {
  if (this.zones?.length) {
    this.changes.markForCheck();
  }
}
}
