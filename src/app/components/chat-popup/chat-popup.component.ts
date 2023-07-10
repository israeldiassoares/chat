import { Component, OnInit, ViewChild } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDialog, MatDialogModule } from "@angular/material/dialog";
import { MatMenuModule, MatMenuTrigger } from "@angular/material/menu";

import { ChatWindowComponent } from "../chat-window/chat-window.component";

@Component({
  selector: 'app-chat-popup',
  templateUrl: './chat-popup.component.html',
  standalone: true,
  styleUrls: [ './chat-popup.component.scss' ],
  imports: [ MatButtonModule, MatMenuModule, MatDialogModule ],

})
export class ChatPopupComponent implements OnInit {

  @ViewChild('menuTrigger') menuTrigger: MatMenuTrigger | undefined = undefined

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(ChatWindowComponent, {
      data: {
        animal: 'panda',
      }, , restoreFocus: false
    })

    dialogRef.afterClosed().subscribe(() => this.menuTrigger!.focus())
  }
}
