
# PdfStamperJobRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**jobLifecycles** | [**List&lt;Lifecycle&gt;**](Lifecycle.md) | The lifecycles of the job itself |  [optional]
**inlineConfig** | [**StamperConfig**](StamperConfig.md) | Optional job specific config that can be supplied inline. Will be merged with the specified configuration.  |  [optional]
**variables** | **Map&lt;String, String&gt;** | A map with key-values used to replace template variables in components. |  [optional]
**resultSettings** | [**ResultSettings**](ResultSettings.md) | The result file and lifecycle settings |  [optional]
**configIds** | **List&lt;String&gt;** | A list of configuration ids that have to be applied during executing the job. | 
**inputResults** | [**List&lt;InputResultLocation&gt;**](InputResultLocation.md) | The input(s) and optional result(s) | 
**formFields** | **Map&lt;String, String&gt;** | A map with key-values used to input values in a PDF form. |  [optional]
**inputSettings** | [**InputSettings**](InputSettings.md) | The input file and lifecycle settings |  [optional]



