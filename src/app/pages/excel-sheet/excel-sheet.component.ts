import { Component, OnInit } from '@angular/core';
import { ExcelService } from 'src/app/services/excel.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-excel-sheet',
  templateUrl: './excel-sheet.component.html'
})
export class ExcelSheetComponent implements OnInit {

  title: string = 'Excel-sheet';
  pokemons!: any[];
  excelData: any;

  constructor(private excelService: ExcelService){}

  ngOnInit(): void {
    // this.listar();
  }

  listar(){
    this.excelService.getAllPokemons()
    .subscribe({
      next: (resp: any)=> {
        this.pokemons = resp.results;
      },
      error: err => console.log(err),
      complete: ()=> console.log(this.pokemons)
    });
  }

  readExcel(event: any){
    let file = event.target.files[0];
    let fileReader = new FileReader();
    fileReader.readAsBinaryString(file);
    fileReader.onload = (e)=> {

      let workbook = XLSX.read(fileReader.result, {type:'binary'});
      let sheetNames = workbook.SheetNames;
      this.pokemons = XLSX.utils.sheet_to_json(workbook.Sheets[sheetNames[0]]);

      console.log(this.excelData)

    }

  }

}
