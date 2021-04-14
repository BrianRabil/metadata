import { Component } from '@angular/core'
import { WebLayoutStore } from './web-layout.store'

@Component({
  styles: [
    `
      #mainApp::-webkit-scrollbar {
        width: 12px;
      }
      #mainApp::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      }
      #mainApp::-webkit-scrollbar-thumb {
        background: #4338ca;
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
      }
    `,
  ],
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="flex flex-col h-full bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-300">
        <div>
          <layout-header
            [logo]="vm?.layout?.logo"
            [links]="vm?.links?.main"
            [user]="vm?.user"
            [profileLinks]="vm.links?.profile"
          >
          </layout-header>
        </div>
        <main class="flex-1 h-full overflow-auto" id="mainApp">
          <router-outlet></router-outlet>
        </main>
        <footer class="mt-auto">
          <layout-footer [html]="vm?.layout?.footerHtml"></layout-footer>
        </footer>
      </div>
    </ng-container>
  `,
  providers: [WebLayoutStore],
})
export class WebLayoutComponent {
  vm$ = this.layoutStore.vm$

  constructor(private readonly layoutStore: WebLayoutStore) {}
}
