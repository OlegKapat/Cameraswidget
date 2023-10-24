import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { IMockTable } from 'src/app/models/Imosktable';
import { GetdataService } from 'src/app/shared/services/getdata.service';

@Component({
  selector: 'app-mockdatatable',
  templateUrl: './mockdatatable.component.html',
  styleUrls: ['./mockdatatable.component.scss']
})
export class MockdatatableComponent implements OnInit {
  public dataTable!: IMockTable[];
  private destroyRef = inject(DestroyRef);
  constructor(private mockservice: GetdataService) { }

  ngOnInit(): void {
    this.mockservice.getData().pipe(takeUntilDestroyed(this.destroyRef)).subscribe((data: any) => {
      this.dataTable = data.map((val: IMockTable) => {
        return {
          id: val.unitId,
          name: val.entityName,
          createdAt: val.createdDate,
          sum: val.sum
        }
      })
    })
  }
}
