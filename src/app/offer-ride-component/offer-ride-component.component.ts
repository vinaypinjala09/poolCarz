import { Component,EventEmitter,Output } from '@angular/core';
import { FormBuilder,FormGroup,Validators,AbstractControl,ValidationErrors } from '@angular/forms';


function seatsRangeValidator(control: AbstractControl): ValidationErrors | null {
  const seats = control.value;
  if (seats < 1 || seats > 8) {
    return { seatsRange: true };
  }
  return null;
}

@Component({
  selector: 'app-offer-ride-component',
  templateUrl: './offer-ride-component.component.html',
  styleUrls: ['./offer-ride-component.component.css']
})
export class OfferRideComponentComponent {

  @Output() formSubmitted = new EventEmitter<any>();

  offerRideForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.offerRideForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      startLocation: ['', [Validators.required]],
      destination: ['', [Validators.required]],
      car: ['', [Validators.required]],
      seatsAvailable: ['', [Validators.required, seatsRangeValidator]],
    });
  }

  onSubmit() {
    if (this.offerRideForm.valid) {
      this.formSubmitted.emit(this.offerRideForm.value);
    }
  }
 
  }
