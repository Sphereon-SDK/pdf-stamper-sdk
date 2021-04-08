
# DefaultJobSettings

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**variables** | **Map&lt;String, String&gt;** | A map with key-values used to replace template variables in components. These are optional defaults. Values in job specific variables will overwrite default values. |  [optional]
**resultSettings** | [**ResultSettings**](ResultSettings.md) | The default result file and lifecycle settings |  [optional]
**formFields** | **Map&lt;String, String&gt;** | Form fields are filled out in PDF forms. These are default values used in the job. Please note that these are different from variables, as the latter can only be used for text, barcode and hyperlink components, whilst the form-fields as the name implies are for filling out PDF forms |  [optional]
**inputSettings** | [**InputSettings**](InputSettings.md) | The default input file and lifecycle settings |  [optional]



