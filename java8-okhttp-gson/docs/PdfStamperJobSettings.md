
# PdfStamperJobSettings

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**useConfiguration** | **List&lt;String&gt;** | A list of configuration ids that have to be applied during executing the job. |  [optional]
**variables** | **Map&lt;String, String&gt;** | A map with key-values used to replace template variables in components. |  [optional]
**resultSettings** | [**ResultSettings**](ResultSettings.md) | The result file and lifecycle settings |  [optional]
**_configuration** | [**PdfStamperConfig**](PdfStamperConfig.md) | A configuration that only applies for one job without the ability to be reused. |  [optional]
**inputSettings** | [**InputSettings**](InputSettings.md) | The input file and lifecycle settings |  [optional]
**jobLifecycle** | [**Lifecycle**](Lifecycle.md) | The lifecycle of the job itself |  [optional]



