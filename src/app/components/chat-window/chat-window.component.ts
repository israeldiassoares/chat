import { Component, Inject, OnInit } from '@angular/core';
import { MatLegacyButtonModule as MatButtonModule } from "@angular/material/legacy-button";
import { MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA, MatLegacyDialogModule as MatDialogModule } from "@angular/material/legacy-dialog";

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: [ './chat-window.component.css' ],
  standalone: true,
  imports: [ MatDialogModule, MatButtonModule ]
})
export class ChatWindowComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
  }

}
