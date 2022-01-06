import { Component, VERSION } from '@angular/core';
import { FormBuilder , FormsModule,ReactiveFormsModule} from '@angular/forms';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  constructor(
    private formBuilder: FormBuilder,
  ) {}

  checkoutForm = this.formBuilder.group({
    first_name: '',
    last_name: '',
    email: '',
    gender: '',
   
  });
  // event to filter male employees in user table grid
  checkedMale(value){
    console.log(value);
    
  }

// event to filter Female employees in user table grid
  checkeFemMale(value){
    console.log(value);
    if(value){

    }
  }
  id:number=5;
  // add a new user in user table grid
  onSubmit(): void {
    // Process checkout data here
   // this.items = this.cartService.clearCart();
   this.checkoutForm.value.id=this.id;
    if(this.checkoutForm.value.gender==true){
      this.checkoutForm.value.gender="Male"
    }else{
      this.checkoutForm.value.gender="Female"
    }
    this.id++;
    console.warn('User is being added', this.checkoutForm.value);
    this.rows.push(this.checkoutForm.value)
    console.warn('User has been added successfully', this.checkoutForm.value);
  
  }

  // search users in user table grid
  searchUsers(){


  }
  candidates = 'Candidates';
  newCandidates ='Add New Candidate';
  headers =["id","first_name","last_name","email","gender"];
  rows =[{
    
      "id": 1,
      "first_name": "Jeanette",
      "last_name": "Penddreth",
      "email": "jpenddreth0@census.gov",
      "gender": "Female"
    },
    {
      "id": 2,
      "first_name": "Giavani",
      "last_name": "Frediani",
      "email": "gfrediani1@senate.gov",
      "gender": "Male"
    }, {
      "id": 3,
      "first_name": "Noell",
      "last_name": "Bea",
      "email": "nbea2@imageshack.us",
      "gender": "Female"
    }, {
      "id": 4,
      "first_name": "Willard",
      "last_name": "Valek",
      "email": "wvalek3@vk.com",
      "gender": "Male"
    }
  
  

  ]
}
