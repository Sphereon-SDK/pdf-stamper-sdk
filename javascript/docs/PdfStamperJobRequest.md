# PdfStamper.PdfStamperJobRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**jobLifecycles** | [**[Lifecycle]**](Lifecycle.md) | The lifecycles of the job itself | [optional] 
**inlineConfig** | [**StamperConfig**](StamperConfig.md) | Optional job specific config that can be supplied inline. Will be merged with the specified configuration.  | [optional] 
**variables** | **{String: String}** | A map with key-values used to replace template variables in components. | [optional] 
**resultSettings** | [**ResultSettings**](ResultSettings.md) | The result file and lifecycle settings | [optional] 
**configIds** | **[String]** | A list of configuration ids that have to be applied during executing the job. | 
**inputResults** | [**[InputResultLocation]**](InputResultLocation.md) | The input(s) and optional result(s) | 
**inputSettings** | [**InputSettings**](InputSettings.md) | The input file and lifecycle settings | [optional] 


