import { Directive, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CdkDropList } from '@angular/cdk/drag-drop';
import { DragAndDropManagerService } from '../services/drag-and-drop-manager.service';

@Directive({
  selector: '[DragAndDropManager]'
})
export class DragAndDropManagerDirective implements OnInit, OnDestroy {
  private manager!: Subscription;
  constructor(private dropList: CdkDropList,
    private managerService: DragAndDropManagerService) { }


  ngOnInit(): void {
    this.managerService.register(this.dropList.id)
    this.manager = this.managerService.onListChange().subscribe(x => {
      this.dropList.connectedTo = x;
    })
  }

  ngOnDestroy(): void {
    this.manager.unsubscribe();
  }

}
@Directive({
  selector: '[dragAndDropManagerRoot]',
  providers: [
    {
      provide: DragAndDropManagerService
    }
  ]
})
export class DragAndDropManagerRootDirective extends DragAndDropManagerDirective { }