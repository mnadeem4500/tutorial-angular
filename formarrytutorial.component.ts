import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-formarrytutorial',
  templateUrl: './formarrytutorial.component.html',
  styleUrl: './formarrytutorial.component.scss'
})
export class FormarrytutorialComponent {
  skillsForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.skillsForm = this.fb.group({
      name: [],
      skills: this.fb.array([]),
    });
  }
  get skills(): FormArray {
    return this.skillsForm.controls['skills'] as FormArray
  }

  addSkills() {
    this.skills.push(this.fb.group({
      skill: [],
      exp: [],
    }));
  }

  onSubmit() {
    console.log(this.skillsForm.value);
  }
  removeSkill(i: number) {
    this.skills.removeAt(i);
  }

}

