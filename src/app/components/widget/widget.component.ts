import { AfterViewInit, Component, DestroyRef, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ResizeEvent } from 'angular-resizable-element';
import { PrimeNGConfig, TreeNode } from 'primeng/api';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Observable, Subject, map, startWith } from 'rxjs';


import { ZonesService } from 'src/app/shared/services/zones.service';
import { places } from 'src/app/mockdata/placemarks';
import { IPlacemarks } from 'src/app/models/Iplacemarks';
import { Cams, IZone } from 'src/app/models/Izoneinterface';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit, AfterViewInit {
  public selectedPlace: IPlacemarks | undefined;
  public place: IPlacemarks[] = places;
  public value: string | undefined;
  public searchControl = new FormControl();
  public filteredOptions!: Observable<Cams[]>;
  public searchedValue!: string;


  //public style: object = {};
  //nodes!: TreeNode[];
  //something: number = 300;
  public zonedata!: IZone[];
  public zoneCams!: Cams[];
  private destroyRef = inject(DestroyRef);
  public expanded: boolean = false

  // public invert: boolean = true;
  // public onDragDrop$ = new Subject<CdkDragDrop<Array<IZone>>>();

  constructor(private primengConfig: PrimeNGConfig, public zoneservice: ZonesService) { }
  ngOnInit(): void {
    this.primengConfig.ripple = true;
    //this.onDragDrop$.subscribe(this.onDragDrop);
    //this.nodeService.getFiles().then(files => this.nodes = files);

  }
  ngAfterViewInit(): void {
    this.filteredOptions = this.searchControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this.filter(value))
      )
    this.filteredOptions.subscribe((val: any) => {
      this.searchedValue = val;
    })
  }
  getZones() {
    this.zoneservice.getZones().pipe(takeUntilDestroyed(this.destroyRef)).subscribe((x) => {
      if (x.length) {
        this.zonedata = x
        this.zoneCams = x.map((cam, i) => cam.cams[i])
      }

    });
    this.expanded = !this.expanded;
  }
  // private onDragDrop = (event: CdkDragDrop<Array<IZone>>) => {
  //   if (event.container === event.previousContainer) {
  //     moveItemInArray(
  //       event.container.data,
  //       event.previousIndex,
  //       event.currentIndex
  //     );
  //   } else {
  //     transferArrayItem(
  //       event.previousContainer.data,
  //       event.container.data,
  //       event.previousIndex,
  //       event.currentIndex
  //     );
  //   }
  // };
  // validate(event: ResizeEvent): boolean {
  //   const MIN_DIMENSIONS_PX: number = 50;
  //   if (
  //     event.rectangle.width &&
  //     event.rectangle.height &&
  //     (event.rectangle.width < MIN_DIMENSIONS_PX ||
  //       event.rectangle.height < MIN_DIMENSIONS_PX)
  //   ) {
  //     return false;
  //   }
  //   return true;
  // }

  // onResizeEnd(event: ResizeEvent): void {
  //   console.log(event);

  //   this.style = {
  //     position: 'fixed',
  //     left: `${event.rectangle.left}px`,
  //     top: `${event.rectangle.top}px`,
  //     width: `${event.rectangle.width}px`,
  //     height: `${event.rectangle.height}px`,
  //   };
  // }
  private filter(value: string): Cams[] {
    const filterValue = value.toLowerCase();
    return this.zoneCams.filter(option => option.subzone == filterValue);
  }
}
