import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BranchesRoutingModule } from './branch-routing.module';
import { BranchComponent } from './branch.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { DetailDialogComponent } from './detail-dialog/detail-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AddbranchDialogComponent } from './addbranch-dialog/addbranch-dialog.component';
import { EditBranchDialogComponent } from './edit-branch-dialog/edit-branch-dialog.component';

@NgModule({
  declarations: [
    BranchComponent,
    DetailDialogComponent,
    AddbranchDialogComponent,
    EditBranchDialogComponent,
  ],
  imports: [CommonModule, BranchesRoutingModule, SharedModule, MatDialogModule],
})
export class BranchModule {}
