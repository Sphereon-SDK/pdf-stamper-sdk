
# ResultSettings

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**storageMode** | [**StorageModeEnum**](#StorageModeEnum) | Storage mode. Can be a configured storage location on the storage API, a job id folder in the supplied storage location or completely replacing the input files (streamlocations). | 
**storageLocation** | [**StorageLocation**](StorageLocation.md) | Result Storage location |  [optional]
**lifecycles** | [**List&lt;Lifecycle&gt;**](Lifecycle.md) | The lifecycles of result files |  [optional]


<a name="StorageModeEnum"></a>
## Enum: StorageModeEnum
Name | Value
---- | -----
STORAGE_LOCATION | &quot;STORAGE_LOCATION&quot;
STORAGE_LOCATION_JOB_IDS | &quot;STORAGE_LOCATION_JOB_IDS&quot;
REPLACE_INPUT | &quot;REPLACE_INPUT&quot;



