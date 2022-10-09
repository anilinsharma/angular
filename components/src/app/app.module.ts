import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './myComponent/header/header.component';
import { SidebarComponent } from './myComponent/sidebar/sidebar.component';
import { FooterComponent } from './myComponent/footer/footer.component';
import { AccordianComponent } from './myComponent/accordian/accordian.component';
import { BreadcrumComponent } from './myComponent/breadcrum/breadcrum.component';
import { CheckboxComponent } from './myComponent/checkbox/checkbox.component';
import { DatePickerComponent } from './myComponent/date-picker/date-picker.component';
import { DropdownComponent } from './myComponent/dropdown/dropdown.component';
import { FileInputComponent } from './myComponent/file-input/file-input.component';
import { ModalComponent } from './myComponent/modal/modal.component';
import { PopoverComponent } from './myComponent/popover/popover.component';
import { ProgressComponent } from './myComponent/progress/progress.component';
import { ProgressTrackerComponent } from './myComponent/progress-tracker/progress-tracker.component';
import { RadioButtonComponent } from './myComponent/radio-button/radio-button.component';
import { SelectInputComponent } from './myComponent/select-input/select-input.component';
import { SideNavigationComponent } from './myComponent/side-navigation/side-navigation.component';
import { TableComponent } from './myComponent/table/table.component';
import { TabsComponent } from './myComponent/tabs/tabs.component';
import { TextareaComponent } from './myComponent/textarea/textarea.component';
import { TooltipComponent } from './myComponent/tooltip/tooltip.component';
import { InputTextComponent } from './myComponent/input-text/input-text.component';
import { AccordianCompComponent } from './myComponent/accordian/accordian-comp/accordian-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    AccordianComponent,
    BreadcrumComponent,
    CheckboxComponent,
    DatePickerComponent,
    DropdownComponent,
    FileInputComponent,
    ModalComponent,
    PopoverComponent,
    ProgressComponent,
    ProgressTrackerComponent,
    RadioButtonComponent,
    SelectInputComponent,
    SideNavigationComponent,
    TableComponent,
    TabsComponent,
    TextareaComponent,
    TooltipComponent,
    InputTextComponent,
    AccordianCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
