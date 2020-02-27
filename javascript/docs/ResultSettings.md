# PdfStamper.ResultSettings

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**storageMode** | **String** | Storage mode. Can be a configured storage location on the storage API, a job id folder in the supplied storage location or completely replacing the input files (streamlocations). | 
**storageLocation** | [**StorageLocation**](StorageLocation.md) | Result Storage location | [optional] 
**lifecycles** | [**[Lifecycle]**](Lifecycle.md) | The lifecycle of result files | [optional] 


<a name="StorageModeEnum"></a>
## Enum: StorageModeEnum


* `STORAGE_LOCATION` (value: `"STORAGE_LOCATION"`)

* `STORAGE_LOCATION_JOB_IDS` (value: `"STORAGE_LOCATION_JOB_IDS"`)

* `REPLACE_INPUT` (value: `"REPLACE_INPUT"`)




