import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ResizeEvent } from 'angular-resizable-element';
import { PrimeNGConfig, TreeNode } from 'primeng/api';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Subject } from 'rxjs';

import { NodeService } from 'src/app/shared/services/node.service';
import { ZonesService } from 'src/app/shared/services/zones.service';
import { places } from 'src/app/mockdata/placemarks';
import { IPlacemarks } from 'src/app/models/Iplacemarks';
import { IZone } from 'src/app/models/Izoneinterface';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit {

  public selectedPlace: IPlacemarks | undefined;
  public place: IPlacemarks[] = places;
  value: string | undefined;

  public style: object = {};
  nodes!: TreeNode[];
  something: number = 300;
  public zonedata!:IZone[];
  private destroyRef = inject(DestroyRef);
  public expanded:boolean = false

  public invert: boolean = true;
  public onDragDrop$ = new Subject<CdkDragDrop<Array<IZone>>>();

  constructor(private primengConfig: PrimeNGConfig, public nodeService: NodeService, public zoneservice:ZonesService) { }
  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.onDragDrop$.subscribe(this.onDragDrop);
    this.nodeService.getFiles().then(files => this.nodes = files);
  }
  getZones(){
   this.zoneservice.getZones().pipe(takeUntilDestroyed(this.destroyRef)).subscribe((x)=>{this.zonedata = x});
   this.expanded = !this.expanded;
  }
  private onDragDrop = (event: CdkDragDrop<Array<IZone>>) => {
    if (event.container === event.previousContainer) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  };
  validate(event: ResizeEvent): boolean {
    const MIN_DIMENSIONS_PX: number = 50;
    if (
      event.rectangle.width &&
      event.rectangle.height &&
      (event.rectangle.width < MIN_DIMENSIONS_PX ||
        event.rectangle.height < MIN_DIMENSIONS_PX)
    ) {
      return false;
    }
    return true;
  }

  onResizeEnd(event: ResizeEvent): void {
    console.log(event);
    
    this.style = {
      position: 'fixed',
      left: `${event.rectangle.left}px`,
      top: `${event.rectangle.top}px`,
      width: `${event.rectangle.width}px`,
      height: `${event.rectangle.height}px`,
    };
  }
}
