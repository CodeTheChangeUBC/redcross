import {NgModule} from "@angular/core";
import {HttpModule} from "@angular/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule, MatCardModule, MatProgressSpinnerModule, MatSnackBarModule} from "@angular/material";
import {CommonModule} from "@angular/common";

const materialModules: any[] = [
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatSnackBarModule
];

const sharedModules: any[] = [
    CommonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    ...materialModules
];

@NgModule({
    imports: [
        ...sharedModules
    ],
    exports: [
        ...sharedModules
    ]
})
export class RedcrossCommonModule {}
