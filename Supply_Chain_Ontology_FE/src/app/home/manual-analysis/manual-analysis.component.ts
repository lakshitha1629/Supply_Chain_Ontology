import { HttpEvent, HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProjectDataService } from 'src/app/core/service/project-data.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-manual-analysis',
  templateUrl: './manual-analysis.component.html',
  styleUrls: ['./manual-analysis.component.scss']
})
export class ManualAnalysisComponent implements OnInit {
  progressInfos = [];
  active: Number = 1;
  Output: number;

  formGroup: FormGroup = new FormGroup({
    Q1: new FormControl(''),
    Q2: new FormControl(''),
    Q3: new FormControl(''),
    Q4: new FormControl(''),
    Q5: new FormControl(''),
    Q6: new FormControl(''),
    Q7: new FormControl(''),
    Q8: new FormControl(''),
    Q9: new FormControl(''),
    Q10: new FormControl(''),
    Q11: new FormControl(''),
    Q12: new FormControl(''),
    Q13: new FormControl(''),
    Q14: new FormControl(''),
    Q15: new FormControl(''),
    Q16: new FormControl(''),
    Q17: new FormControl(''),
    Q18: new FormControl(''),
    Q19: new FormControl(''),
    Q20: new FormControl(''),
    Q21: new FormControl('')
  });

  constructor(
    private projectDataService: ProjectDataService,
    private spinner: NgxSpinnerService) {
  }

  ngOnInit(): void {

  }

  onSubmit() {
    const data =
    {
      Q1: [+this.formGroup.controls.Q1.value],
      Q2: [+this.formGroup.controls.Q2.value],
      Q3: [+this.formGroup.controls.Q3.value],
      Q4: [+this.formGroup.controls.Q4.value],
      Q5: [+this.formGroup.controls.Q5.value],
      Q6: [+this.formGroup.controls.Q6.value],
      Q7: [+this.formGroup.controls.Q7.value],
      Q8: [+this.formGroup.controls.Q8.value],
      Q9: [+this.formGroup.controls.Q9.value],
      Q10: [+this.formGroup.controls.Q10.value],
      Q11: [+this.formGroup.controls.Q11.value],
      Q12: [+this.formGroup.controls.Q12.value],
      Q13: [+this.formGroup.controls.Q13.value],
      Q14: [+this.formGroup.controls.Q14.value],
      Q15: [+this.formGroup.controls.Q15.value],
      Q16: [+this.formGroup.controls.Q16.value],
      Q17: [+this.formGroup.controls.Q17.value],
      Q18: [+this.formGroup.controls.Q18.value],
      Q19: [+this.formGroup.controls.Q19.value],
      Q20: [+this.formGroup.controls.Q20.value],
      Q21: [+this.formGroup.controls.Q21.value]
    }

    if (this.formGroup.valid == true) {
      this.spinner.show();
      this.projectDataService.getPrediction(data).subscribe(res => {
        this.spinner.hide();
        console.log(res);
        this.Output = res.predict;
        console.log('Succefully Added');
        this.formGroup.reset();
      });
    }
    else {
      console.log('Something wrong');
    }

  }

  resetProject() {
    window.location.reload();
  }

}

