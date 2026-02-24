import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/components/header/header';
import { Footer } from './shared/components/footer/footer';
import { FloatingControls } from './shared/components/floating-controls/floating-controls';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, FloatingControls],
  templateUrl: './app.html',
})
export class App { }
