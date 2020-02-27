# PdfStamper.StamperConfig

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blockchainConfig** | [**BlockchainConfig**](BlockchainConfig.md) | Optional blockchain proof configuration. This is applicable to all stamps created using this configuration.  | [optional] 
**defaultJobSettings** | [**DefaultJobSettings**](DefaultJobSettings.md) | Default job settings. Values omitted from the job will get default settings specified in here | [optional] 
**configResourcesLocation** | [**StorageLocation**](StorageLocation.md) | The storage location where the configuration resources will be stored | [optional] 
**fields** | **{String: String}** | The form fields that should be filled | [optional] 
**canvasComponents** | [**[CanvasComponent]**](CanvasComponent.md) | The canvas components containing the information of the stamp | [optional] 


