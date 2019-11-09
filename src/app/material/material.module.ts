import { NgModule } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
    imports: [MatMenuModule, MatFormFieldModule, MatInputModule, MatButtonModule],
    exports: [MatMenuModule, MatFormFieldModule, MatInputModule, MatButtonModule],
})
export class MaterialModule {/** NOP */}
