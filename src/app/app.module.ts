import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { HomeComponent } from './component/home/home.component';
import { ContactFilterPipe, ContactStatusPipe, StatusPipe } from './pipe/contactFilter.pipe';
import { ChatComponent } from './component/chat/chat.component';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		ContactFilterPipe,
		ContactStatusPipe,
		StatusPipe,
		ChatComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		HttpClientModule,
		ReactiveFormsModule,
		MaterialModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
