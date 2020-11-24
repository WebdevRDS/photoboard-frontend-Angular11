import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotoBoardComponent } from './components/photo-board/photo-board.component';

import { NgxSpinnerModule } from 'ngx-spinner';
import { ApiService } from './shared/services/api.service';
import { NewBoardModalComponent } from './components/photo-board/new-board-modal/new-board-modal.component'
import { ToastrModule } from "ngx-toastr";
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ImageMoreDetailsComponent } from './components/photo-board/image-more-details/image-more-details.component';

@NgModule({
  declarations: [AppComponent, PhotoBoardComponent, NewBoardModalComponent, ImageMoreDetailsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSpinnerModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
			maxOpened:1
    }),
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger', // set defaults here
    }),
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
  entryComponents: [ NewBoardModalComponent ]
})
export class AppModule {}
