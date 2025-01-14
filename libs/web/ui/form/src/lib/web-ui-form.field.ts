import { FormlyFieldConfig, FormlyTemplateOptions } from '@ngx-formly/core'

export class WebUiFormField implements FormlyFieldConfig {
  static checkbox(key: string, templateOptions?: FormlyTemplateOptions, options?: any): FormlyFieldConfig {
    return this.field(key, 'checkbox', templateOptions, options)
  }

  static date(key: string, templateOptions?: FormlyTemplateOptions, options?: any): FormlyFieldConfig {
    return this.input(key, { ...templateOptions, type: 'date' }, { ...options })
  }

  static datetime(key: string, templateOptions?: FormlyTemplateOptions, options?: any): FormlyFieldConfig {
    return this.input(key, { ...templateOptions, type: 'datetime-local' }, { ...options })
  }

  static email(key: string, templateOptions?: FormlyTemplateOptions, options?: any): FormlyFieldConfig {
    const defaults = {
      type: 'email',
      label: 'Email',
    }
    const defaultOptions = { validators: { validation: ['email'] } }

    return this.input(key, { ...defaults, ...templateOptions }, { ...defaultOptions, ...options })
  }

  static fieldRow(
    fieldGroup: FormlyFieldConfig[] = [],
    fieldGroupClassName: string = 'flex',
    options?: any,
  ): FormlyFieldConfig {
    return {
      fieldGroup,
      fieldGroupClassName,
      ...options,
    }
  }

  static repeat(
    key: string,
    fieldGroup: FormlyFieldConfig,
    templateOptions?: FormlyTemplateOptions,
  ): FormlyFieldConfig {
    return {
      key,
      type: 'repeat',
      fieldArray: fieldGroup,
      templateOptions: {
        addText: 'Add',
        ...templateOptions,
      },
    }
  }

  static field(
    key: string,
    type?: string,
    templateOptions: FormlyTemplateOptions = {},
    config: FormlyFieldConfig = {},
  ): FormlyFieldConfig {
    return {
      key,
      type,
      templateOptions: {
        ...templateOptions,
      },
      ...config,
    }
  }

  static input(
    key: string,
    templateOptions: FormlyTemplateOptions = {},
    config: FormlyFieldConfig = {},
  ): FormlyFieldConfig {
    return this.field(key, 'input', templateOptions, config)
  }

  static multicheckbox(key: string, templateOptions?: FormlyTemplateOptions, options?: any): FormlyFieldConfig {
    return this.field(key, 'multicheckbox', templateOptions, options)
  }

  static number(key: string, templateOptions?: FormlyTemplateOptions, options?: any): FormlyFieldConfig {
    return this.input(key, { ...templateOptions, type: 'number' }, { ...options })
  }

  static password(key: string, templateOptions?: FormlyTemplateOptions, options?: any): FormlyFieldConfig {
    const defaults = {
      label: 'Password',
      type: 'password',
      minLength: 8,
      required: true,
    }

    return this.input(key, { ...defaults, ...templateOptions }, options)
  }

  static radio(key: string, templateOptions?: FormlyTemplateOptions, options?: any): FormlyFieldConfig {
    return this.field(key, 'radio', templateOptions, options)
  }

  static select(key: string, templateOptions?: FormlyTemplateOptions, options?: any): FormlyFieldConfig {
    return this.field(key, 'select', templateOptions, options)
  }
  static textarea(key: string, templateOptions?: FormlyTemplateOptions, options?: any): FormlyFieldConfig {
    const defaultTemplateOptions = { rows: 5 }

    return this.field(key, 'textarea', { ...defaultTemplateOptions, ...templateOptions }, options)
  }

  static template(template: string): FormlyFieldConfig {
    return { type: 'formly-template', template }
  }

  static time(key: string, templateOptions?: FormlyTemplateOptions, options?: any): FormlyFieldConfig {
    return this.input(key, { ...templateOptions, type: 'time' }, { ...options })
  }
}
