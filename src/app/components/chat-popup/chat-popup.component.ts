import { Component, OnInit, ViewChild } from "@angular/core";
import { MatLegacyButtonModule as MatButtonModule } from "@angular/material/legacy-button";
import { MatLegacyDialog as MatDialog, MatLegacyDialogModule as MatDialogModule } from "@angular/material/legacy-dialog";
import { MatLegacyMenuModule as MatMenuModule, MatLegacyMenuTrigger as MatMenuTrigger } from "@angular/material/legacy-menu";

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
