import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExcelSheetComponent } from './pages/excel-sheet/excel-sheet.component';

const routes: Routes = [
  {path: '', component: ExcelSheetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
