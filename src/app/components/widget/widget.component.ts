import { AfterViewInit, Component, DestroyRef, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { PrimeNGConfig } from 'primeng/api';
import { Observable, map, startWith } from 'rxjs';
import { FormControl } from '@angular/forms';

import { ZonesService } from 'src/app/shared/services/zones.service';
import { places } from 'src/app/mockdata/placemarks';
import { IPlacemarks } from 'src/app/models/Iplacemarks';
import { Cams, IZone } from 'src/app/models/Izoneinterface';
import { TypeSites } from 'src/app/shared/enums/typesite';


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
  public zonedata!: IZone[];
  public zoneCams!: Cams[];
  private destroyRef = inject(DestroyRef);
  public expandedzone: boolean = false;
  public expandedsite: boolean = false;
  public expandedlayer: boolean = false;
  public expandedplacemarker: boolean = false



  constructor(private primengConfig: PrimeNGConfig, public zoneservice: ZonesService) { }
  ngOnInit(): void {
    this.primengConfig.ripple = true;

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
  public getZones() {
    try {
      this.zoneservice.getZones<IZone>().pipe(map(data => data.filter(data => data.indificatortype == TypeSites.Zone)))
        .pipe(takeUntilDestroyed(this.destroyRef)).subscribe((x) => {
          if (x.length) {
            this.zonedata = x
            this.zoneCams = x.map((cam, i) => cam.cams[i])
          }

        });
    }
    catch (e) {
      console.log(e);

    }
    this.expandedzone = !this.expandedzone;
  }

  private filter(value: string): Cams[] {
    const filterValue = value.toLowerCase();
    return this.zoneCams.filter(option => option.subzone == filterValue);
  }
}
