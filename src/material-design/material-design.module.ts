import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatBadgeModule } from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from "@angular/material/icon";
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
const modules:any[] = [CommonModule,MatToolbarModule,MatListModule,MatCardModule,FlexLayoutModule,
  MatIconModule,MatBadgeModule,MatFormFieldModule,MatInputModule,MatButtonModule];


@NgModule({
  declarations: [],
  imports: [...modules],
  exports: [...modules]
})
export class MaterialDesignModule { }
