import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';



import { AppComponent } from './app.component';
import { SukuComponent } from './suku/suku.component';


@NgModule({
  declarations: [
    AppComponent,
    SukuComponent
  ],
  imports: [
    BrowserModule,
    UpgradeModule
  ],
  providers: [],
  entryComponents: [AppComponent, SukuComponent]
})
export class AppModule { 
  constructor(private upgrade: UpgradeModule) {}
  ngDoBootstrap(app) {
    app.bootstrap(AppComponent);
    this.upgrade.bootstrap(document.getElementById('aApp'), ['heroApp'], { strictDi: true });
  }
}

import { downgradeComponent } from '@angular/upgrade/static';
import * as angular from 'angular';
angular.module('heroApp', [])
.directive(
  'heroDetail',
  downgradeComponent({ component: SukuComponent }) as angular.IDirectiveFactory
);
angular.module('heroApp').controller('aController', ['$scope', function ($scope) {
  $scope.text = 'This is angular 1';
}])
