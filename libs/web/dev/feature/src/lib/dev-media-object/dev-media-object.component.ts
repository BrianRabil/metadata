import { Component } from '@angular/core'
import { DevMediaObjectStore } from './dev-media-object.store'

@Component({
  template: `
    <ng-container *ngIf="vm$ | async as vm">
      <div class="p-4 shadow rounded-lg bg-gray-100 dark:bg-gray-800">
        <pre class="text-xs dark:text-gray-500">{{ vm.items | json }}</pre>
      </div>
      <code class="text-xs px-2 py-1 dark:bg-gray-800 rounded-md opacity-70">
        Component: libs/web/dev/feature/src/lib/dev-media-object/dev-media-object.component.ts
      </code>
      <ui-preview>
        <!-- you add vertical direction 'start' or 'center' or 'end' -->
        <!-- you add horizontal direction,  'left' or 'right' -->
        <ui-media-object icon="imageAvatar" [circle]="circle" verticalDirection="center" horizontalDirection="left">
          <ng-container class="objectData">
            <h4 class="text-lg font-bold">Lorem ipsum</h4>
            <p class="mt-1">
              Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus
              quidem ipsam quia iusto.
            </p>
          </ng-container>
        </ui-media-object>
      </ui-preview>
      <ui-preview>
        <!-- you add only height '1,2,3,4,5,6,7,8,9,10,11,12,14,16' if use full height image then you not use vertical direction or 'full', by default set value is '16' -->
        <!-- you add only width '1,2,3,4,5,6,7,8,9,10,11,12,14,16' and not use 'full'value, by default set value is '16' -->
        <ui-media-object icon="imageAvatar" [circle]="circle" height="full" width="" horizontalDirection="right">
          <ng-container class="objectDataFullImage">
            <h4 class="text-lg font-bold">Lorem ipsum</h4>
            <p class="mt-1">
              Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus
              quidem ipsam quia iusto.
            </p>
          </ng-container>
        </ui-media-object>
      </ui-preview>

      <ui-preview>
        <ui-media-object [data]="data" [circle]="circle" height="" width="" horizontalDirection="rights">
          <ui-media-object
            class="objectData2"
            *ngFor="let childData of data1"
            [data]="childData"
            [circle]="circle"
            height=""
            width=""
            horizontalDirection="left"
          >
          </ui-media-object>
        </ui-media-object>
      </ui-preview>
    </ng-container>
  `,
  providers: [DevMediaObjectStore],
})
export class DevMediaObjectComponent {
  readonly vm$ = this.store.vm$

  public circle: boolean = false

  constructor(private readonly store: DevMediaObjectStore) {}

  public data = {
    img: 'imageAvatar',
    name: 'Lorem ipsum 0',
    des: `Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus
      quidem ipsam quia iusto.`,
  }

  public data1 = [
    {
      img: 'imageAvatar',
      name: 'Lorem ipsum 2',
      des: `Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus
      quidem ipsam quia iusto. 2`,
    },
    {
      img: 'imageAvatar',
      name: 'Lorem ipsum 3',
      des: `Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus
      quidem ipsam quia iusto. 2`,
    },
  ]
}
