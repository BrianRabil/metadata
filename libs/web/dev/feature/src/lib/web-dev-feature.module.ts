import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebUiMainPageModule } from '@schema-driven/web/ui/main-page'
import { WebDevFeatureComponent } from './web-dev-feature.component'

@NgModule({
  declarations: [WebDevFeatureComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: WebDevFeatureComponent,
        children: [
          {
            path: 'dashboard',
            loadChildren: () => import('./dev-dashboard/dev-dashboard.module').then((m) => m.DevDashboardModule),
          },
          { path: 'code', loadChildren: () => import('./dev-code/dev-code.module').then((m) => m.DevCodeModule) },
          { path: 'forms', loadChildren: () => import('./dev-forms/dev-forms.module').then((m) => m.DevFormsModule) },
          { path: 'json', loadChildren: () => import('./dev-json/dev-json.module').then((m) => m.DevJsonModule) },
          {
            path: 'layout',
            loadChildren: () => import('./dev-layout/dev-layout.module').then((m) => m.DevLayoutModule),
          },
          {
            path: 'containers',
            loadChildren: () => import('./dev-container/dev-container.module').then((m) => m.DevContainerModule),
          },
          {
            path: 'dividers',
            loadChildren: () => import('./dev-divider/dev-divider.module').then((m) => m.DevDividerModule),
          },
          {
            path: 'media-objects',
            loadChildren: () =>
              import('./dev-media-object/dev-media-object.module').then((m) => m.DevMediaObjectModule),
          },
          {
            path: 'list-containers',
            loadChildren: () =>
              import('./dev-list-container/dev-list-container.module').then((m) => m.DevListContainerModule),
          },
          { path: 'table', loadChildren: () => import('./dev-table/dev-table.module').then((m) => m.DevTableModule) },
          { path: 'toasts', loadChildren: () => import('./dev-toast/dev-toast.module').then((m) => m.DevToastModule) },
          { path: 'tabs', loadChildren: () => import('./dev-tab/dev-tab.module').then((m) => m.DevTabModule) },
          {
            path: 'breadcrumbs',
            loadChildren: () => import('./dev-breadcrumbs/dev-breadcrumbs.module').then((m) => m.DevBreadcrumbsModule),
          },
          { path: 'alerts', loadChildren: () => import('./dev-alert/dev-alert.module').then((m) => m.DevAlertModule) },
          {
            path: 'dropdown',
            loadChildren: () => import('./dev-dropdown/dev-dropdown.module').then((m) => m.DevDropdownModule),
          },
          {
            path: 'badges',
            loadChildren: () => import('./dev-badge/dev-badge.module').then((m) => m.DevBadgeModule),
          },
          {
            path: 'avatars',
            loadChildren: () => import('./dev-avatar/dev-avatar.module').then((m) => m.DevAvatarModule),
          },
          { path: 'feeds', loadChildren: () => import('./dev-feed/dev-feed.module').then((m) => m.DevFeedModule) },
          { path: 'steps', loadChildren: () => import('./dev-step/dev-step.module').then((m) => m.DevStepModule) },
          {
            path: 'lists',
            loadChildren: () =>
              import('./dev-stacked-lists/dev-stacked-lists.module').then((m) => m.DevStackedListsModule),
          },
          {
            path: 'buttons',
            loadChildren: () => import('./dev-button/dev-button.module').then((m) => m.DevButtonModule),
          },
          {
            path: 'group-button',
            loadChildren: () =>
              import('./dev-group-button/dev-group-button.module').then((m) => m.DevGroupButtonModule),
          },
          {
            path: 'modals',
            loadChildren: () => import('./dev-modal/dev-modal.module').then((m) => m.DevModalModule),
          },
          {
            path: 'notifications',
            loadChildren: () =>
              import('./dev-notification/dev-notification.module').then((m) => m.DevNotificationModule),
          },
          {
            path: 'slideovers',
            loadChildren: () => import('./dev-slide-over/dev-slide-over.module').then((m) => m.DevSlideOverModule),
          },
          { path: 'stats', loadChildren: () => import('./dev-stats/dev-stats.module').then((m) => m.DevStatsModule) },
        ],
      },
    ]),
    WebUiMainPageModule,
  ],
})
export class WebDevFeatureModule {}
