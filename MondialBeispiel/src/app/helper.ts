import { CanDeactivateFn } from "@angular/router";

export interface CanDeactivateForm{
  canDeactivate(): boolean;
}

export const hasUnsavedChangesGuard: CanDeactivateFn<CanDeactivateForm> = 
(component: CanDeactivateForm) => component.canDeactivate && component.canDeactivate();