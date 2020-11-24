import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-new-board-modal',
  templateUrl: './new-board-modal.component.html',
  styleUrls: ['./new-board-modal.component.scss'],
})
export class NewBoardModalComponent implements OnInit {
  title: string = ''
  
  constructor(public activeModal: NgbActiveModal, private toastrService: ToastrService) {}

  ngOnInit(): void {}

  onSave() {
    if (!this.title) {
      this.toastrService.error(
        'Please input board title!',
        undefined,
        { closeButton: true, positionClass: 'toast-top-center' }
      );
    } else {
      this.activeModal.close(this.title);
    }
  }

  onCancel() {
    this.activeModal.close();
  }
}
