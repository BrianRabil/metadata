import { Component, Input } from '@angular/core'

@Component({
  selector: 'ui-breadcrumbs',
  template: `
    <nav class="flex" aria-label="Breadcrumb">
      <ol class="bg-white rounded-md shadow px-6 flex space-x-4">
        <li class="flex">
          <div class="flex items-center">
            <a href="#" class="text-gray-400 hover:text-gray-500">
              <!-- Heroicon name: solid/home -->
              <svg
                class="flex-shrink-0 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
                />
              </svg>
              <span class="sr-only">Home</span>
            </a>
          </div>
        </li>
        <ng-container *ngFor="let crumb of crumbs">
          <li class="flex">
            <div class="flex items-center">
              <svg
                class="flex-shrink-0 w-6 h-full text-gray-200"
                viewBox="0 0 24 44"
                preserveAspectRatio="none"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
              </svg>
              <a href="#" class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">{{ crumb.name }}</a>
            </div>
          </li>
        </ng-container>
      </ol>
    </nav>
  `,
})
export class WebUiBreadcrumbsComponent {
  @Input() crumbs?: Crumbs

  constructor() {
    console.log(this.crumbs)
  }
}

export interface Crumbs {
  class?: string
  name: string
  active: string
  isactive: boolean
  tabHandler?: (Crumbs) => void
  content?: any
}
