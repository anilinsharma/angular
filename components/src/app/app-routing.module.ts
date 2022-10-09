import { TooltipComponent } from './myComponent/tooltip/tooltip.component';
import { TextareaComponent } from './myComponent/textarea/textarea.component';
import { TabsComponent } from './myComponent/tabs/tabs.component';
import { TableComponent } from './myComponent/table/table.component';
import { SideNavigationComponent } from './myComponent/side-navigation/side-navigation.component';
import { SelectInputComponent } from './myComponent/select-input/select-input.component';
import { RadioButtonComponent } from './myComponent/radio-button/radio-button.component';
import { ProgressTrackerComponent } from './myComponent/progress-tracker/progress-tracker.component';
import { ProgressComponent } from './myComponent/progress/progress.component';
import { PopoverComponent } from './myComponent/popover/popover.component';
import { ModalComponent } from './myComponent/modal/modal.component';
import { InputTextComponent } from './myComponent/input-text/input-text.component';
import { FileInputComponent } from './myComponent/file-input/file-input.component';
import { DropdownComponent } from './myComponent/dropdown/dropdown.component';
import { DatePickerComponent } from './myComponent/date-picker/date-picker.component';
import { CheckboxComponent } from './myComponent/checkbox/checkbox.component';
import { BreadcrumComponent } from './myComponent/breadcrum/breadcrum.component';
import { AccordianComponent } from './myComponent/accordian/accordian.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    component:AccordianComponent,
    path:'Accordian'
  },
  {
    component:BreadcrumComponent,
    path:'Breadcrum'
  },
  {
    component:CheckboxComponent,
    path:'chcekbox'
  }, {
    component:DatePickerComponent,
    path:'datepicker'
  },{
    component:DropdownComponent,
    path:'dropdown'
  },
  {
    component:FileInputComponent,
    path:'FileInput'
  },{
    component:InputTextComponent,
    path:'InputText'
  },{
    component:ModalComponent,
    path:'modal'
  },
  {
    component:PopoverComponent,
    path:'Popover'
  },
  {
    component:ProgressComponent,
    path:'Progress'
  },
  {
    component:ProgressTrackerComponent,
    path:'ProgressTracker'
  },
  {
    component:RadioButtonComponent,
    path:'RadioButton'
  },
  {
    component:SelectInputComponent,
    path:'SelectInput'
  },
  {
    component:SideNavigationComponent,
    path:'SideNavigation'
  },
  {
    component:TableComponent,
    path:'table'
  },
  {
    component:TabsComponent,
    path:'Tabs'
  },
  {
    component:TextareaComponent,
    path:'textarea'
  },
  
  
  {
    component:TooltipComponent,
    path:'Tooltip'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
